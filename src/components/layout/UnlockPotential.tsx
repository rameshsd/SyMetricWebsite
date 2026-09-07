'use client';

import Link from 'next/link';
import { researchIntegrateAnalyzeContent } from '@/lib/data';
import { SectionTitle } from '@/components/shared/section-title';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function UnlockPotential() {
    const [ref, isInView] = useInView({ triggerOnce: true });

    return (
        <section ref={ref} className="py-16 md:py-24 bg-secondary/30">
            <div className="container">
                <SectionTitle
                    title="Unlock the Potential of your clinical Study Data"
                    description="Our Clinical Trial platform provides the foundation for innovation and agility."
                    className="mb-12"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {researchIntegrateAnalyzeContent.platformFeatures.map((item, index) => (
                        <div
                            key={item.title}
                            className={cn(
                                "flex flex-col text-left gap-4 opacity-0 border border-[#2463EB] rounded-2xl p-6 bg-card shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
                                isInView && "animate-fade-in-up"
                            )}
                            style={{ animationDelay: `${500 + index * 150}ms` }}
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-primary/10">
                                <item.icon className="h-10 w-10 text-primary" strokeWidth={2.5} />
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
