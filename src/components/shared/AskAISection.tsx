
'use client';

import { Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function AskAISection() {
    return (
        <section className="bg-diagram-violet text-white">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex items-start gap-6">
                        <div className="p-3 bg-white/20 rounded-lg">
                            <MessageSquare className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">Ask SyMetric</h2>
                            <p className="text-white/80 mt-1">Have a question about our solutions? Try Ask SyMetric.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <Input 
                                placeholder="Ask about SyMetric solutions." 
                                className="h-14 bg-white/10 border-white/30 text-white placeholder:text-white/70 pl-4 pr-14 focus-visible:ring-white"
                            />
                            <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-11 w-11 text-white/80 hover:bg-white/20 hover:text-white">
                                <Send className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="bg-transparent border-white/50 text-white/90 hover:bg-white/10 hover:text-white">How will it help my trial?</Button>
                            <Button variant="outline" className="bg-transparent border-white/50 text-white/90 hover:bg-white/10 hover:text-white">Can I trust SyMetric?</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
