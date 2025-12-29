
'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const pillars = [
    {
        title: 'Accelerate',
        subtitle: 'ACCELERATE',
        description: 'clinical trials with streamlined and transparent time-to-market solutions',
        imageId: "pillar-accelerate"
    },
    {
        title: 'Integrate',
        subtitle: 'INTEGRATE',
        description: 'our solutions into your existing environment, as per Life Sciences best practices',
        imageId: "pillar-integrate"
    },
    {
        title: 'Trust',
        subtitle: 'TRUST',
        description: 'our solutions, for they are ISO 9001, ISO 27001, ICH-GCP, 21 CFR Part 11 (USFDA), HIPAA, GDPR (EU) compliant',
        imageId: "pillar-trust"
    },
    {
        title: 'Future Proof',
        subtitle: 'FUTURE-PROOF',
        description: 'your research through continuous innovation and collaboration supported by our cutting-edge solutions',
        imageId: "pillar-future-proof"
    }
];

export function PillarsSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-violet-100 dark:from-blue-900/20 dark:to-violet-900/20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar) => {
                        const image = PlaceHolderImages.find(p => p.id === pillar.imageId);
                        return (
                            <Card key={pillar.title} className="bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col group">
                                {image && (
                                    <div className="relative h-40">
                                        <Image
                                            src={image.imageUrl}
                                            alt={pillar.title}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm font-semibold text-primary">{pillar.subtitle}</p>
                                    <h3 className="text-lg font-bold mt-1">{pillar.title}</h3>
                                    <p className="text-muted-foreground mt-2 text-sm flex-grow">{pillar.description}</p>
                                    <Button variant="ghost" className="p-0 h-auto mt-4 self-start text-primary group-hover:underline">
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
