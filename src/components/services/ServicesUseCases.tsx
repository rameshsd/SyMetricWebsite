
'use client';

import { SectionTitle } from "@/components/shared/section-title";
import { useCases } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

export function ServicesUseCases() {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <section ref={ref} className="bg-background">
            <div className="container">
                <SectionTitle
                    title="Unlock Your Trial's Potential"
                    description="Our services are tailored to address the most critical challenges in clinical research."
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {useCases.map((useCase, index) => (
                        <div
                            key={useCase.title}
                            className={cn('opacity-0', inView && 'animate-fade-in-up')}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="bg-card p-8 rounded-2xl border transition-shadow hover:shadow-lg h-full flex flex-col">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                                    <useCase.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                                <p className="text-muted-foreground mb-4 flex-grow">
                                    {useCase.description}
                                </p>
                                <Button variant="link" asChild className="px-0 text-primary font-semibold self-start">
                                    <Link href="#">
                                    Learn more &gt;
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
