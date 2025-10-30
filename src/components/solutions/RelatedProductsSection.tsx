
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
        title: "IRT/IWRS",
        description: "Developed with years of strong industry expertise and tested to deliver against the most complex Clinical Trial designs, our IRT/IWRS solution is the most comprehensive one in the market today.",
        link: "/solutions/irt-iwrs",
        linkText: "Find out more"
    },
    {
        title: "EDC",
        description: "The Electronic Data Capture solution includes well-designed tools that transform the Data Management processes and simplify and automate the Data flow and validation of Data in Clinical Trials.",
        link: "/solutions/edc",
        linkText: "Find out more"
    },
    {
        title: "CTM",
        description: "The Clinical Trial Master provides various repositories to maintain Global objects, including a repository of Trial Sites, Labs, Organizations, Global Data Libraries, and more.",
        link: "/solutions/ctm",
        linkText: "Find out more"
    }
]

export function RelatedProductsSection() {
    const videoThumbnail = PlaceHolderImages.find(p => p.id === 'finance-driver-video');

    return (
        <section className="bg-secondary/50">
            <div className="container">
                <SectionTitle 
                    title="Explore Our Solutions"
                    description="Our comprehensive technology platform brings together AI, data, and applications to transform your clinical operations."
                />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden group">
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

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {relatedProducts.map(product => (
                        <Card key={product.title} className="bg-background border transition-shadow hover:shadow-lg rounded-2xl">
                            <CardContent className="p-8">
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
