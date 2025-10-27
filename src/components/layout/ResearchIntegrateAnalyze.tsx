
"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

const items = [
    { title: "Clinical Trial Platform", href: "/solutions/clinical-trial-platform" },
    { title: "Trial Analytics", href: "/solutions/trial-analytics" },
    { title: "Aiding You in Your Journey", href: "/about" },
]

export function ResearchIntegrateAnalyze() {
    const [ref, isInView] = useInView({ triggerOnce: true });
    
    return (
        <section ref={ref} className="py-24 md:py-32 bg-secondary/50">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={cn("opacity-0", isInView && "animate-fade-in-right")}>
                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary leading-tight">
                            Research.
                            <br />
                            Integrate.
                            <br />
                            Analyze.
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {items.map((item, index) => (
                             <div 
                                key={item.title} 
                                className={cn("opacity-0", isInView && "animate-fade-in-left")}
                                style={{animationDelay: `${100 + index * 150}ms`}}
                            >
                                <a href={item.href} className="flex justify-between items-center text-foreground hover:text-primary transition-colors">
                                    <span className="text-xl md:text-2xl font-semibold">{item.title}</span>
                                    <Plus className="h-6 w-6" />
                                </a>
                                {index < items.length - 1 && <hr className="mt-6 border-border" />}
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
