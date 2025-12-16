

"use client";

import { useState, useMemo } from 'react';
import { growthTimeline } from '@/lib/data';
import { SectionTitle } from '@/components/shared/section-title';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';

const INITIAL_VISIBLE_ITEMS = 4;

export function GrowthStoryTimeline() {
    const [ref, isInView] = useInView({ triggerOnce: true });
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ITEMS);

    const sortedTimeline = useMemo(() => {
        return [...growthTimeline].sort((a, b) => parseInt(b.year) - parseInt(a.year));
    }, []);

    const handleViewMore = () => {
        setVisibleCount(sortedTimeline.length);
    };

    const visibleItems = sortedTimeline.slice(0, visibleCount);

    return (
        <section id="growth-story" className="py-20">
            <div className="container">
                <SectionTitle 
                    title="Our Growth Story"
                    description="Key milestones in our mission to transform clinical research."
                    className="text-white"
                />
                <div ref={ref} className="mt-16 relative max-w-4xl mx-auto">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30" aria-hidden="true" />
                    {visibleItems.map((item, index) => (
                        <motion.div 
                          key={item.year} 
                          className="relative pl-12 mb-12"
                          initial={{ opacity: 0, y: 50 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="absolute left-0 top-1.5 transform -translate-x-1/2">
                                <div className="w-5 h-5 bg-background rounded-full border-4 border-primary"></div>
                            </div>
                            <Card className="bg-primary/10 border-primary/20">
                                <CardContent className="p-6">
                                    <p className="text-2xl font-bold text-primary mb-3">{item.year}</p>
                                    <ul className="space-y-2">
                                        {item.events.map((event, eventIndex) => (
                                            <li key={eventIndex} className="text-primary-foreground/80">{event}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                {visibleCount < sortedTimeline.length && (
                     <div className="text-center mt-8">
                        <Button variant="outline" onClick={handleViewMore} className="bg-transparent border-white text-white hover:bg-white hover:text-primary">View More</Button>
                    </div>
                )}
            </div>
        </section>
    );
}
