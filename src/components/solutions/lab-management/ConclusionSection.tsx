'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const summaryPoints = [
    {
        id: "item-1",
        title: "High-Quality, Audit-Ready Data",
        description: "Ensure all lab results are standardized, validated, and fully traceable for regulatory-grade reporting."
    },
    {
        id: "item-2",
        title: "Automated Integration",
        description: "Reduce manual effort and eliminate transcription errors with powerful automated lab data loads."
    },
    {
        id: "item-3",
        title: "Global Scalability",
        description: "Manage multiple central and local labs across global trials with centralized reference range governance."
    }
];

export function ConclusionSection() {
    const summaryImage = PlaceHolderImages.find(p => p.id === 'lab-management-conclusion');

    return (
        <section id="conclusion" className="bg-secondary/50">
            <div className="container">
                <div className="text-left mb-12">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">Conclusion</p>
                    <h2 className="text-4xl font-bold tracking-tight mt-2">The Standard for Lab Data Integrity</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl">The Lab Data Management module provides a robust framework to ensure that every laboratory data point is accurate, validated, and ready for analysis.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="relative">
                        <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                            {summaryPoints.map((point) => (
                                 <AccordionItem value={point.id} key={point.id} className="border-b-0">
                                    <div className="flex gap-4">
                                        <div className="pt-4">
                                            <div className="w-1 h-full bg-border transition-colors data-[state=open]:bg-primary"></div>
                                        </div>
                                        <div className="flex-1">
                                            <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left py-4">
                                                {point.title}
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-8 pr-4">
                                                <p className="text-muted-foreground">{point.description}</p>
                                            </AccordionContent>
                                        </div>
                                    </div>
                                 </AccordionItem>
                            ))}
                        </Accordion>
                        <div className="mt-8">
                            <Button asChild>
                                <Link href="/request-demo">
                                    Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full aspect-video">
                            {summaryImage && (
                            <Image
                                src={summaryImage.imageUrl}
                                alt={summaryImage.description}
                                data-ai-hint={summaryImage.imageHint}
                                fill
                                className="rounded-2xl object-cover shadow-lg"
                            />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
