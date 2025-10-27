
"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { researchIntegrateAnalyzeContent } from '@/lib/data';

export function ResearchIntegrateAnalyze() {
    const [ref, isInView] = useInView({ triggerOnce: true });
    
    return (
        <section ref={ref} className="py-24 md:py-32 bg-secondary/50">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className={cn("text-4xl md:text-5xl font-bold tracking-tighter text-foreground opacity-0", isInView && "animate-fade-in-up")}>
                        Research. Integrate. Analyze.
                    </h2>
                    <p className={cn("text-lg text-muted-foreground mt-4 opacity-0", isInView && "animate-fade-in-up")} style={{ animationDelay: '200ms' }}>
                        Our platform is designed to streamline every phase of the clinical trial lifecycle.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {researchIntegrateAnalyzeContent.mainConcepts.map((item, index) => (
                        <div 
                            key={item.title}
                            className={cn("opacity-0", isInView && "animate-fade-in-up")}
                            style={{ animationDelay: `${200 + index * 150}ms` }}
                        >
                            <div className="flex justify-center items-center mb-4">
                                <div className="p-4 bg-primary/10 rounded-full">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {researchIntegrateAnalyzeContent.platformFeatures.map((item, index) => (
                         <div 
                            key={item.title} 
                            className={cn("flex items-start gap-4 opacity-0", isInView && "animate-fade-in-up")}
                            style={{animationDelay: `${500 + index * 150}ms`}}
                        >
                            <div className="flex-shrink-0 mt-1">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                            </div>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

