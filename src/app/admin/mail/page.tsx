'use client';
import { Archive, File, Inbox, Send, Trash2, Mail as MailIcon, Reply, CornerUpLeft, MoreVertical } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import { useMemo, useState } from 'react';
import type { ContactFormSubmission, DemoRequest } from '@/lib/types';
import { format, formatDistanceToNow } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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

function MailPage() {
    const firestore = useFirestore();

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

        contacts?.forEach(c => {
            combined.push({
                id: c.id,
                type: 'Contact',
                from: { name: c.name, email: c.email },
                subject: `Contact Form: ${c.organization}`,
                body: c.message || '',
                timestamp: c.timestamp,
                isRead: false,
            });
        });

        demos?.forEach(d => {
            combined.push({
                id: d.id,
                type: 'Demo Request',
                from: { name: d.name, email: d.email },
                subject: `Demo Request: ${d.company}`,
                body: `A demo was requested for ${d.company}.\n\nContact Details:\nEmail: ${d.email}\nPhone: ${d.phone}`,
                timestamp: d.createdAt,
                isRead: false,
            });
        });

        return combined.sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis());
    }, [contacts, demos]);

    const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);
    const isLoading = contactsLoading || demosLoading;

    return (
        <div className="h-full flex flex-col">
            <SectionTitle title="Mail" description="Your inbox for website submissions." />
            <div className="flex-1 grid grid-cols-[250px_1fr] gap-4 mt-8 h-[calc(100vh-200px)]">
                <div className="flex flex-col gap-2">
                    <Button disabled>Compose</Button>
                    <Button variant="ghost" className="justify-start gap-2 bg-primary/10 text-primary">
                        <Inbox /> Inbox <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 rounded-full">{mails.length}</span>
                    </Button>
                    <Button variant="ghost" className="justify-start gap-2"><Send /> Sent</Button>
                    <Button variant="ghost" className="justify-start gap-2"><File /> Drafts</Button>
                    <Button variant="ghost" className="justify-start gap-2"><Archive /> Archived</Button>
                    <Button variant="ghost" className="justify-start gap-2 text-destructive hover:text-destructive"><Trash2 /> Trash</Button>
                </div>
                <div className="border rounded-lg grid grid-cols-3">
                     <div className="col-span-1 border-r flex flex-col">
                        <div className="p-2 border-b">
                            <Input placeholder="Search mail..." />
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {isLoading && Array.from({length: 5}).map((_, i) => (
                                <div key={i} className="p-4 border-b space-y-2">
                                    <div className="flex justify-between">
                                        <Skeleton className="h-4 w-2/4" />
                                        <Skeleton className="h-3 w-1/4" />
                                    </div>
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-3 w-full" />
                                </div>
                            ))}
                            {!isLoading && mails.map(mail => (
                                <div 
                                    key={mail.id} 
                                    className={`p-4 border-b hover:bg-muted/50 cursor-pointer ${selectedMail?.id === mail.id ? 'bg-primary/5' : ''} ${!mail.isRead ? 'font-semibold' : ''}`}
                                    onClick={() => setSelectedMail(mail)}
                                >
                                    <div className="flex justify-between items-start">
                                        <p className={`text-sm ${!mail.isRead ? 'text-foreground' : 'text-muted-foreground'}`}>{mail.from.name}</p>
                                        <p className="text-xs text-muted-foreground">{formatDistanceToNow(mail.timestamp.toDate(), { addSuffix: true })}</p>
                                    </div>
                                    <p className={`text-sm truncate ${!mail.isRead ? 'text-foreground' : 'text-muted-foreground'}`}>{mail.subject}</p>
                                    <p className="text-xs text-muted-foreground truncate">{mail.body}</p>
                                </div>
                            ))}
                            {!isLoading && mails.length === 0 && (
                                <div className="flex items-center justify-center h-full text-muted-foreground text-center p-4">
                                    <p>Your inbox is empty.</p>
                                </div>
                            )}
                        </div>
                    </div>
                     <div className="col-span-2 flex flex-col">
                        {selectedMail ? (
                            <>
                                <div className="p-4 border-b flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarFallback>{selectedMail.from.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold">{selectedMail.from.name}</p>
                                            <a href={`mailto:${selectedMail.from.email}`} className="text-sm text-primary hover:underline">{selectedMail.from.email}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm text-muted-foreground">{format(selectedMail.timestamp.toDate(), "PPpp")}</p>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                     <Button variant="ghost" size="icon"><Reply className="h-4 w-4"/></Button>
                                                </TooltipTrigger>
                                                <TooltipContent><p>Reply</p></TooltipContent>
                                            </Tooltip>
                                             <Tooltip>
                                                <TooltipTrigger asChild>
                                                     <Button variant="ghost" size="icon"><CornerUpLeft className="h-4 w-4"/></Button>
                                                </TooltipTrigger>
                                                <TooltipContent><p>Forward</p></TooltipContent>
                                            </Tooltip>
                                             <Tooltip>
                                                <TooltipTrigger asChild>
                                                     <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4"/></Button>
                                                </TooltipTrigger>
                                                <TooltipContent><p>More</p></TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                                    <h1 className="text-2xl font-bold">{selectedMail.subject}</h1>
                                    <p className="whitespace-pre-wrap">{selectedMail.body}</p>
                                </div>
                            </>
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
        </div>
    )
}

export default MailPage;
