
'use client';

import { SectionTitle } from "@/components/shared/section-title";
import { useCases } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {useCases.map((useCase, index) => (
                        <div
                            key={useCase.title}
                            className={cn('opacity-0', inView && 'animate-fade-in-up')}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <Card className="h-full text-center group p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <CardHeader>
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110">
                                        <useCase.icon className="h-8 w-8 text-primary" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-lg font-semibold">{useCase.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{useCase.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
