
"use client";

import { timeline } from '@/lib/data';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

export function GrowthStoryTimeline() {
    const [ref, isInView] = useInView({ triggerOnce: true });

    return (
        <section id="growth-story" className="py-16 md:py-24">
            <div className="container">
                <SectionTitle title="Our Growth Story" description="Key milestones in our mission to transform clinical research." />
                <div ref={ref} className="mt-12 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
                    {timeline.map((item, index) => (
                        <div key={item.year} className="relative mb-8">
                            <div className={cn("flex items-center", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2 p-4", index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left")}>
                                    <div className={cn('opacity-0', isInView && (index % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left'))} style={{ animationDelay: `${index * 200}ms`}}>
                                        <Card className="transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                                            <CardContent className="p-6">
                                                <p className="text-primary font-bold text-xl">{item.year}</p>
                                                <p className="mt-2 text-muted-foreground">{item.event}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            <div className={cn("absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full -translate-y-1/2 -translate-x-1/2 border-4 border-card transition-transform duration-500", isInView ? 'scale-100' : 'scale-0')} style={{ transitionDelay: `${index * 200 + 100}ms` }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
