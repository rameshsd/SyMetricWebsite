

"use client";

import { platformFeatures } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function PlatformFeatures() {
    const [ref, isInView] = useInView({ triggerOnce: true });
    
    return (
        <section ref={ref} className="bg-secondary/30">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {platformFeatures.map((item, index) => (
                        <div
                            key={item.title}
                            className={cn(
                                "flex flex-col items-center text-center gap-4 opacity-0",
                                isInView && "animate-fade-in-up"
                            )}
                            style={{ animationDelay: `${200 + index * 150}ms` }}
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                <item.icon className="h-10 w-10 text-primary" strokeWidth={2.5}/>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mt-1">{item.title}</h3>
                                <p className="text-muted-foreground mt-2">{item.description}</p>
                            </div>
                            {item.link && (
                                <Link href={item.link} className="flex items-center text-sm text-primary font-semibold mt-auto">
                                    {item.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
