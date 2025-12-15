
'use client';

import { useState } from 'react';
import { Send, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { askSyMetric } from '@/ai/flows/ask-symetric';
import { useToast } from '@/hooks/use-toast';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent } from '../ui/card';

export function AskAISection() {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [answer, setAnswer] = useState('');
    const { toast } = useToast();

    const handleAsk = async (question: string) => {
        if (!question.trim()) return;

        setIsLoading(true);
        setAnswer('');
        try {
            const result = await askSyMetric({ query: question });
            setAnswer(result.answer);
        } catch (error) {
            console.error('Error asking SyMetric AI:', error);
            toast({
                variant: 'destructive',
                title: 'An error occurred',
                description: 'Failed to get an answer. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleAsk(query);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        handleAsk(suggestion);
    };

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
                        <form onSubmit={handleSubmit}>
                            <div className="relative">
                                <Input 
                                    placeholder="Ask about SyMetric solutions." 
                                    className="h-14 bg-white/10 border-white/30 text-white placeholder:text-white/70 pl-4 pr-14 focus-visible:ring-white"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    disabled={isLoading}
                                />
                                <Button type="submit" variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-11 w-11 text-white/80 hover:bg-white/20 hover:text-white" disabled={isLoading}>
                                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                                    <span className="sr-only">Ask</span>
                                </Button>
                            </div>
                        </form>
                        <div className="flex gap-3">
                            <Button variant="outline" className="bg-transparent border-white/50 text-white/90 hover:bg-white/10 hover:text-white" onClick={() => handleSuggestionClick('How will it help my trial?')} disabled={isLoading}>How will it help my trial?</Button>
                            <Button variant="outline" className="bg-transparent border-white/50 text-white/90 hover:bg-white/10 hover:text-white" onClick={() => handleSuggestionClick('Can I trust SyMetric?')} disabled={isLoading}>Can I trust SyMetric?</Button>
                        </div>
                    </div>
                </div>

                {(isLoading || answer) && (
                    <div className="mt-8">
                        <Card className="bg-white/10 border-white/20 text-white">
                            <CardContent className="p-6">
                                {isLoading && (
                                     <div className="flex items-center gap-3">
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        <p>Thinking...</p>
                                    </div>
                                )}
                                {answer && (
                                    <div className="prose prose-invert max-w-none">
                                         <ReactMarkdown>{answer}</ReactMarkdown>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </section>
    )
}
