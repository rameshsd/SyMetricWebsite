
"use client";

import { growthTimeline } from '@/lib/data';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Button } from '../ui/button';

export function GrowthStoryTimeline() {
    const [ref, isInView] = useInView({ triggerOnce: true });

    return (
        <section id="growth-story" className="py-16 md:py-24 bg-sap-gradient text-primary-foreground">
            <div className="container">
                <SectionTitle 
                    title="Our Growth Story"
                    description="Key milestones in our mission to transform clinical research."
                    className="text-white"
                />
                <div ref={ref} className="mt-12 relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" aria-hidden="true" />
                    {growthTimeline.map((item, index) => (
                        <div key={item.year} className="relative mb-12">
                            <div className={cn("flex items-start", index % 2 === 0 ? "justify-start flex-row-reverse" : "justify-start")}>
                                <div className={cn("w-1/2 p-4", index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right")}>
                                    <h3 className={cn("text-3xl font-bold text-primary mb-4 opacity-0", isInView && "animate-fade-in")} style={{ animationDelay: `${index * 200}ms` }}>{item.year}</h3>
                                    <div className={cn('space-y-4 opacity-0', isInView && (index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'))} style={{ animationDelay: `${index * 200 + 100}ms`}}>
                                        {item.events.map((event, eventIndex) => (
                                            <p key={eventIndex} className="text-primary-foreground/80">{event}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={cn("absolute top-2 left-1/2 w-5 h-5 bg-primary rounded-full -translate-y-1/2 -translate-x-1/2 border-4 border-background transition-transform duration-500", isInView ? 'scale-100' : 'scale-0')} style={{ transitionDelay: `${index * 200 + 50}ms` }} />
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-8">
                    <Button variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white">View More</Button>
                </div>
            </div>
        </section>
    );
}
