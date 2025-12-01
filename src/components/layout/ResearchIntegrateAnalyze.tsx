

"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { researchIntegrateAnalyzeContent } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ResearchIntegrateAnalyze() {
    const [ref, isInView] = useInView({ triggerOnce: true });

    return (
        <section
            ref={ref}
            className="flex flex-col items-center justify-center bg-background px-4"
        >
            <div className="container">
                {/* Title & Subtitle */}
                <div className="max-w-3xl mx-auto text-center">
                    <h2
                        className={cn(
                            "text-4xl font-bold tracking-tighter text-foreground opacity-0",
                            isInView && "animate-fade-in-up"
                        )}
                    >
                        Research. Integrate. Analyze.
                    </h2>
                    <p
                        className={cn(
                            "text-lg text-muted-foreground mt-4 max-w-prose mx-auto opacity-0",
                            isInView && "animate-fade-in-up"
                        )}
                        style={{ animationDelay: '200ms' }}
                    >
                        Our platform is designed to streamline every phase of the clinical trial lifecycle.
                    </p>
                </div>

                {/* Platform Features */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {researchIntegrateAnalyzeContent.platformFeatures.map((item, index) => (
                        <div
                            key={item.title}
                            className={cn(
                                "flex flex-col text-left gap-4 opacity-0",
                                isInView && "animate-fade-in-up"
                            )}
                            style={{ animationDelay: `${500 + index * 150}ms` }}
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-primary/10">
                                <item.icon className="h-10 w-10 text-primary" strokeWidth={2.5}/>
                            </div>
                            <div>
                                <p className="text-sm uppercase text-muted-foreground tracking-wider">SyMetric Application</p>
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
