
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../shared/section-title';

const featurePoints = [
    {
        title: "Optimised trial operations",
        description: "Go live faster with preconfigured processes and guided onboarding—cutting manual work and accelerating time to value."
    },
    {
        title: "Action-ready insights",
        description: "Make better decisions faster with ready-to-use KPIs and embedded AI on shared, governed data."
    },
    {
        title: "Transformative, scalable impact",
        description: "Expand confidently by adopting new trial models that drive research forward while keeping operations secure and compliant."
    }
]

const relatedProducts = [
    {
        title: "SyMetric Business AI",
        description: "Guide, automate, and execute routine tasks in the flow of work with embedded AI, freeing teams to focus on strategy, not manual data entry.",
        link: "#",
        linkText: "Learn about Business AI"
    },
    {
        title: "SyMetric Business Data Cloud",
        description: "Get one trusted, governed view of your trial data—harmonising information from all sources, from site to submission.",
        link: "#",
        linkText: "Learn about Business Data Cloud"
    },
    {
        title: "SyMetric Technology Platform",
        description: "Integrate, automate, and extend clinical processes to move fast with low-code tools while staying secure and compliant.",
        link: "#",
        linkText: "Learn about SyMetric BTP"
    }
]

export function RelatedProductsSection() {
    const videoThumbnail = PlaceHolderImages.find(p => p.id === 'finance-driver-video');

    return (
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container">
                <SectionTitle 
                    title="Turn your clinical data into a strategic driver of performance"
                    description="You're under pressure to do more with less. Equip your research team to operate more efficiently, anticipate change, and lead with confidence—with the AI-enabled SyMetric Platform."
                    className='text-left max-w-none'
                />

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-lg overflow-hidden group">
                        {videoThumbnail && (
                            <Image 
                                src={videoThumbnail.imageUrl}
                                alt={videoThumbnail.description}
                                data-ai-hint={videoThumbnail.imageHint}
                                fill
                                className="object-cover"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <PlayCircle className="h-20 w-20 text-white/80 transform transition-transform group-hover:scale-110" />
                        </div>
                    </div>
                    <div className="space-y-8">
                        {featurePoints.map(point => (
                            <div key={point.title}>
                                <h3 className="font-bold text-lg text-foreground">{point.title}</h3>
                                <p className="text-muted-foreground mt-1">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedProducts.map(product => (
                        <Card key={product.title} className="bg-background border-none shadow-none">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg text-foreground">{product.title}</h3>
                                <p className="text-muted-foreground mt-2 min-h-[100px]">{product.description}</p>
                                <Link href={product.link} className="text-primary font-semibold text-sm flex items-center gap-1 mt-4">
                                    {product.linkText} <ArrowRight className="h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
