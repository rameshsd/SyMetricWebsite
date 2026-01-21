
'use client';
import { Send, Smile, ArrowLeft } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const contacts = [ { name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' } ];
const messages = [
    { sender: 'Alice', text: 'Hey, how is the new dashboard design coming along?' },
    { sender: 'You', text: 'Almost done! Just finalizing the color palette.' },
    { sender: 'Alice', text: 'Great! Can\'t wait to see it.' },
];

export default function ChatPage() {
    const isMobile = useIsMobile();
    const [selectedContact, setSelectedContact] = useState<(typeof contacts)[0] | null>(isMobile ? null : contacts[0]);

    const handleContactSelect = (contact: (typeof contacts)[0]) => {
        setSelectedContact(contact);
    }
    
    const ChatWindow = ({ contact }: { contact: (typeof contacts)[0] }) => (
        <div className="border rounded-lg flex flex-col h-full">
            <div className="p-4 border-b flex items-center gap-4">
                {isMobile && (
                    <Button variant="ghost" size="icon" onClick={() => setSelectedContact(null)}>
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                )}
                <Avatar>
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="font-semibold">{contact.name}</p>
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
    );

    const ContactList = () => (
         <div className="border rounded-lg flex flex-col h-full">
            <div className="p-4 border-b">
                <Input placeholder="Search contacts..." />
            </div>
            <div className="flex-1 overflow-y-auto">
                {contacts.map(contact => (
                    <div 
                        key={contact.name} 
                        className={cn(
                            "p-4 flex items-center gap-4 border-b hover:bg-muted/50 cursor-pointer",
                            selectedContact?.name === contact.name && !isMobile && "bg-muted/50"
                        )}
                        onClick={() => handleContactSelect(contact)}
                    >
                        <Avatar>
                            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold">{contact.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
         <div className="h-full flex flex-col">
            <SectionTitle title="Chat" description="Real-time team collaboration." />
            <div className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 mt-8 h-[calc(100vh-200px)]">
                <div className={cn(isMobile && selectedContact && 'hidden')}>
                    <ContactList />
                </div>
                
                <div className={cn(isMobile && !selectedContact && 'hidden')}>
                   {selectedContact && <ChatWindow contact={selectedContact} />}
                </div>

                 {!isMobile && selectedContact && <ChatWindow contact={selectedContact} />}
            </div>
        </div>
    )
}
