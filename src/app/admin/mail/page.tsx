'use client';
import { Archive, File, Inbox, Send, Trash2 } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const mails = [
    { name: 'Alice', subject: 'Project Update', time: '10:42 AM', unread: true },
    { name: 'Bob', subject: 'Lunch Meeting', time: 'Yesterday' },
    { name: 'Charlie', subject: 'Fwd: Design Mockups', time: 'Jul 22' },
];

export default function MailPage() {
    return (
        <div className="h-full flex flex-col">
            <SectionTitle title="Mail" description="Your inbox is up to date." />
            <div className="flex-1 grid grid-cols-[250px_1fr] gap-4 mt-8 h-[calc(100vh-200px)]">
                <div className="flex flex-col gap-2">
                    <Button>Compose</Button>
                    <Button variant="ghost" className="justify-start gap-2"><Inbox /> Inbox <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 rounded-full">3</span></Button>
                    <Button variant="ghost" className="justify-start gap-2"><Send /> Sent</Button>
                    <Button variant="ghost" className="justify-start gap-2"><File /> Drafts</Button>
                    <Button variant="ghost" className="justify-start gap-2"><Archive /> Archived</Button>
                    <Button variant="ghost" className="justify-start gap-2 text-destructive hover:text-destructive"><Trash2 /> Trash</Button>
                </div>
                <div className="border rounded-lg flex flex-col">
                     <div className="p-2 border-b">
                        <Input placeholder="Search mail..." />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {mails.map(mail => (
                            <div key={mail.subject} className={`p-4 flex justify-between items-start border-b hover:bg-muted/50 cursor-pointer ${mail.unread ? 'bg-primary/5' : ''}`}>
                                <div className="flex items-start gap-4">
                                    <Avatar>
                                        <AvatarFallback>{mail.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className={`font-semibold ${mail.unread ? 'text-foreground' : 'text-muted-foreground'}`}>{mail.name}</p>
                                        <p className={`text-sm ${mail.unread ? 'text-foreground' : 'text-muted-foreground'}`}>{mail.subject}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground">{mail.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
