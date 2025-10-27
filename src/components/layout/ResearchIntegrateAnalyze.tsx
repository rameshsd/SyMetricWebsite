
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ResearchIntegrateAnalyze() {
    const [ref, isInView] = useInView({ triggerOnce: true });
    const image = PlaceHolderImages.find(p => p.id === 'research-integrate-analyze');

    const keywords = ['Research', 'Integrate', 'Analyze'];

    return (
        <section ref={ref} className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover z-0"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

            <div className="container relative z-20 text-center">
                <div 
                    className={cn("opacity-0", isInView && "animate-fade-in-up")}
                    style={{animationDelay: '100ms'}}
                >
                    <div className="flex justify-center items-center gap-4 md:gap-8">
                        {keywords.map((word, index) => (
                            <div key={word} className="flex items-center">
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                                    {word}
                                </h2>
                                {index < keywords.length - 1 && (
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full mx-4 md:mx-6" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div 
                    className={cn("mt-8 opacity-0", isInView && "animate-fade-in-up")}
                    style={{animationDelay: '300ms'}}
                >
                    <p className="text-xl md:text-2xl font-medium text-muted-foreground">Aiding You in Your Journey</p>
                </div>
                
                <div 
                    className={cn("mt-12 flex justify-center gap-4 opacity-0", isInView && "animate-fade-in-up")}
                    style={{animationDelay: '500ms'}}
                >
                    <Button size="lg" asChild>
                        <Link href="/solutions/clinical-trial-platform">Clinical Trial Platform</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/solutions/trial-analytics">Trial Analytics</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
