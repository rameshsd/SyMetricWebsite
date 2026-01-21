
'use client';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format, formatDistanceToNow } from 'date-fns';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import type { ContactFormSubmission, DemoRequest } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

import { Archive, File, Inbox, Send, Trash2, Mail as MailIcon, Reply, CornerUpLeft, MoreVertical, Search, Loader2, Edit, X, Paperclip, ArrowLeft } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

const composeFormSchema = z.object({
  to: z.string().email({ message: 'Please enter a valid recipient email.' }),
  subject: z.string().min(1, { message: 'Subject is required.' }),
  message: z.string().min(1, { message: 'Message body cannot be empty.' }),
});

type MailItem = {
    id: string;
    type: 'Contact' | 'Demo Request';
    from: {
        name: string;
        email: string;
    };
    subject: string;
    body: string;
    timestamp: Timestamp;
    isRead: boolean;
};

function ComposeDialog() {
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof composeFormSchema>>({
        resolver: zodResolver(composeFormSchema),
        defaultValues: { to: '', subject: '', message: '' },
    });

    async function onSubmit(values: z.infer<typeof composeFormSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...values, type: 'direct' }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send email.');
            }

            toast({ title: "Email Sent!", description: `Your email to ${values.to} has been sent.` });
            setIsOpen(false);
            form.reset();

        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error Sending Email',
                description: (error as Error).message,
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="w-full justify-start text-base py-6">
                    <Edit className="mr-2 h-4 w-4" /> Compose
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>New Message</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <FormField name="to" control={form.control} render={({ field }) => (
                                <FormItem><FormControl><Input placeholder="To" {...field} className="border-0 border-b rounded-none shadow-none focus-visible:ring-0 focus-visible:border-primary" /></FormControl><FormMessage /></FormItem>
                            )}/>
                             <FormField name="subject" control={form.control} render={({ field }) => (
                                <FormItem><FormControl><Input placeholder="Subject" {...field} className="border-0 border-b rounded-none shadow-none focus-visible:ring-0 focus-visible:border-primary" /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <FormField name="message" control={form.control} render={({ field }) => (
                                <FormItem><FormControl><Textarea placeholder="Your message..." rows={12} {...field} className="border-0 shadow-none focus-visible:ring-0" /></FormControl><FormMessage /></FormItem>
                            )}/>
                        </div>
                        <DialogFooter className="justify-between">
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Send
                            </Button>
                             <div className="flex items-center gap-2">
                                <TooltipProvider>
                                    <Tooltip><TooltipTrigger asChild><Button type="button" variant="ghost" size="icon"><Paperclip className="h-5 w-5" /></Button></TooltipTrigger><TooltipContent><p>Attach file</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger asChild><Button type="button" variant="ghost" size="icon" onClick={() => form.reset()}><Trash2 className="h-5 w-5" /></Button></TooltipTrigger><TooltipContent><p>Discard draft</p></TooltipContent></Tooltip>
                                </TooltipProvider>
                            </div>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}


function MailPage() {
    const firestore = useFirestore();
    const isMobile = useIsMobile();

    const contactsQuery = useMemoFirebase(
        () => firestore ? query(collection(firestore, 'contactFormSubmissions'), orderBy('timestamp', 'desc')) : null,
        [firestore]
    );
    const { data: contacts, isLoading: contactsLoading } = useCollection<ContactFormSubmission>(contactsQuery);

    const demosQuery = useMemoFirebase(
        () => firestore ? query(collection(firestore, 'demoRequests'), orderBy('createdAt', 'desc')) : null,
        [firestore]
    );
    const { data: demos, isLoading: demosLoading } = useCollection<DemoRequest>(demosQuery);

    const mails = useMemo<MailItem[]>(() => {
        const combined: MailItem[] = [];
        contacts?.forEach(c => combined.push({ id: c.id, type: 'Contact', from: { name: c.name, email: c.email }, subject: `Contact: ${c.organization || 'General Inquiry'}`, body: c.message || '', timestamp: c.timestamp, isRead: false }));
        demos?.forEach(d => combined.push({ id: d.id, type: 'Demo Request', from: { name: d.name, email: d.email }, subject: `Demo Request: ${d.company}`, body: `A demo was requested for ${d.company}.\n\nContact Details:\nEmail: ${d.email}\nPhone: ${d.phone || 'N/A'}`, timestamp: d.createdAt, isRead: false }));
        return combined.sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis());
    }, [contacts, demos]);

    const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);
    const isLoading = contactsLoading || demosLoading;

    const MailDetailView = ({ mail, onBack }: { mail: MailItem, onBack: () => void }) => (
        <div className="border rounded-xl flex flex-col overflow-hidden h-full">
            <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {isMobile && (
                        <Button variant="ghost" size="icon" onClick={onBack}>
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    )}
                    <div className="min-w-0">
                      <h2 className="text-xl font-bold truncate">{mail.subject}</h2>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <TooltipProvider>
                        <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon"><Reply className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Reply</p></TooltipContent></Tooltip>
                         <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon"><CornerUpLeft className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Forward</p></TooltipContent></Tooltip>
                         <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>More</p></TooltipContent></Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <div className="p-4 border-b">
                 <div className="flex items-center gap-2 mt-1">
                    <Avatar className="h-8 w-8"><AvatarFallback>{mail.from.name.charAt(0)}</AvatarFallback></Avatar>
                    <div>
                        <span className="font-semibold text-sm">{mail.from.name}</span>
                        <span className="text-xs text-muted-foreground"> &lt;{mail.from.email}&gt;</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-auto">{format(mail.timestamp.toDate(), "PPpp")}</p>
                </div>
            </div>
            <div className="flex-1 p-6 space-y-4 overflow-y-auto text-sm"><p className="whitespace-pre-wrap">{mail.body}</p></div>
        </div>
    );
    
    if (isMobile && selectedMail) {
        return <MailDetailView mail={selectedMail} onBack={() => setSelectedMail(null)} />
    }

    return (
        <div className="h-full flex flex-col">
            <SectionTitle title="Mail" description="Your inbox for website submissions." />
            <div className="flex-1 grid grid-cols-1 md:grid-cols-[240px_1fr] xl:grid-cols-[240px_350px_1fr] gap-4 mt-8 h-[calc(100vh-200px)]">
                {/* Left Sidebar */}
                <div className={cn("flex-col gap-2 bg-secondary/50 p-3 rounded-xl", isMobile ? 'hidden' : 'flex')}>
                    <ComposeDialog />
                    <nav className="mt-4 space-y-1">
                        <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
                            <Inbox /> Inbox <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 rounded-full">{mails.length}</span>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start gap-2"><Send /> Sent</Button>
                        <Button variant="ghost" className="w-full justify-start gap-2"><File /> Drafts</Button>
                        <Button variant="ghost" className="w-full justify-start gap-2"><Archive /> Archived</Button>
                        <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive"><Trash2 /> Trash</Button>
                    </nav>
                </div>

                {/* Mail List */}
                <div className={cn("border rounded-xl flex flex-col overflow-hidden", isMobile && selectedMail ? 'hidden' : 'flex')}>
                     <div className="p-3 border-b">
                        <div className="relative">
                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                           <Input placeholder="Search mail..." className="pl-10" />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {isLoading && Array.from({length: 5}).map((_, i) => (
                            <div key={i} className="p-4 border-b space-y-2"><Skeleton className="h-4 w-2/4" /><Skeleton className="h-4 w-3/4" /><Skeleton className="h-3 w-full" /></div>
                        ))}
                        {!isLoading && mails.map(mail => (
                            <div key={mail.id} className={cn("p-4 border-b hover:bg-muted/50 cursor-pointer", selectedMail?.id === mail.id && !isMobile && 'bg-primary/5')} onClick={() => setSelectedMail(mail)}>
                                <div className="flex justify-between items-start">
                                    <p className={cn("text-sm", !mail.isRead ? 'font-semibold text-foreground' : 'text-muted-foreground')}>{mail.from.name}</p>
                                    <p className="text-xs text-muted-foreground whitespace-nowrap">{formatDistanceToNow(mail.timestamp.toDate(), { addSuffix: true })}</p>
                                </div>
                                <p className={cn("text-sm truncate", !mail.isRead ? 'font-medium text-foreground' : 'text-muted-foreground')}>{mail.subject}</p>
                                <p className="text-xs text-muted-foreground truncate">{mail.body}</p>
                            </div>
                        ))}
                        {!isLoading && mails.length === 0 && (
                            <div className="flex items-center justify-center h-full text-muted-foreground text-center p-4"><p>Your inbox is empty.</p></div>
                        )}
                    </div>
                </div>

                {/* Mail Display */}
                 <div className="border rounded-xl flex-col overflow-hidden hidden xl:flex">
                    {selectedMail ? (
                        <MailDetailView mail={selectedMail} onBack={() => {}} />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                            <MailIcon className="h-16 w-16 mb-4" />
                            <p>Select an item to read</p>
                            <p className="text-sm">Nothing is selected.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MailPage;
