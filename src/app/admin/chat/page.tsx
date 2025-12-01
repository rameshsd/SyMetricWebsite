'use client';
import { Send, Smile } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const contacts = [ { name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' } ];
const messages = [
    { sender: 'Alice', text: 'Hey, how is the new dashboard design coming along?' },
    { sender: 'You', text: 'Almost done! Just finalizing the color palette.' },
    { sender: 'Alice', text: 'Great! Can\'t wait to see it.' },
];


export default function ChatPage() {
    return (
         <div className="h-full flex flex-col">
            <SectionTitle title="Chat" description="Real-time team collaboration." />
            <div className="flex-1 grid grid-cols-[300px_1fr] gap-4 mt-8 h-[calc(100vh-200px)]">
                <div className="border rounded-lg flex flex-col">
                    <div className="p-4 border-b">
                        <Input placeholder="Search contacts..." />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {contacts.map(contact => (
                            <div key={contact.name} className="p-4 flex items-center gap-4 border-b hover:bg-muted/50 cursor-pointer">
                                <Avatar>
                                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <p className="font-semibold">{contact.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border rounded-lg flex flex-col">
                    <div className="p-4 border-b flex items-center gap-4">
                        <Avatar>
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold">Alice</p>
                    </div>
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex items-end gap-2 ${msg.sender === 'You' ? 'justify-end' : ''}`}>
                                {msg.sender !== 'You' && <Avatar className="h-8 w-8"><AvatarFallback>{msg.sender.charAt(0)}</AvatarFallback></Avatar>}
                                <div className={`max-w-xs p-3 rounded-lg ${msg.sender === 'You' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t flex items-center gap-2">
                        <Input placeholder="Type a message..." className="flex-1" />
                        <Button variant="ghost" size="icon"><Smile /></Button>
                        <Button><Send /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
