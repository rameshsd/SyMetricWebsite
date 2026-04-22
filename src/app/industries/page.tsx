

import Image from 'next/image';
import { industries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SectionTitle } from '@/components/shared/section-title';
import { CheckCircle } from 'lucide-react';


export const metadata: Metadata = {
  title: 'Industries - SyMetric',
  description: 'We empower life sciences and healthcare organizations with technology-driven solutions that enhance efficiency, compliance, and innovation.',
};

export default function IndustriesPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'industries-hero');
    return (
        <>
            <section className="bg-primary text-primary-foreground py-0">
                <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="py-20 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Powering Research Across the Life Sciences Spectrum
                    </h1>
                    <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg">
                        We provide specialized solutions to meet the unique regulatory and operational needs of diverse organizations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/request-demo">Request a demo</Link>
                        </Button>
                    </div>
                    </div>
                    <div className="relative h-80 md:h-[500px] w-full">
                        {heroImage && (
                            <div className="absolute inset-0">
                                <Image 
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    data-ai-hint={heroImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <SectionTitle
                        title="Industries We Serve"
                        description="We empower life sciences and healthcare organizations with technology-driven solutions that enhance efficiency, compliance, and innovation."
                        className="max-w-4xl mx-auto text-center mb-16"
                    />
                    <div className="space-y-16">
                        {industries.map((industry, index) => {
                            const industryImage = PlaceHolderImages.find(p => p.id === industry.imageId);
                            return (
                                <Card key={industry.name} className="grid md:grid-cols-2 items-center overflow-hidden shadow-lg rounded-2xl border">
                                    <div className={`p-8 md:p-12 space-y-6 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                                <industry.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold">{industry.name}</h3>
                                        </div>
                                        <p className="text-muted-foreground">{industry.longDescription}</p>
                                        <div>
                                            <h4 className="font-semibold mb-3">Key Capabilities:</h4>
                                            <ul className="space-y-2">
                                                {industry.capabilities.map((cap, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm">
                                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                                        <span className="text-muted-foreground">{cap}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`relative h-64 md:h-full min-h-[300px] ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                                        {industryImage && (
                                            <Image 
                                                src={industryImage.imageUrl}
                                                alt={industry.name}
                                                data-ai-hint={industryImage.imageHint}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                    <div className="mt-20 text-center max-w-3xl mx-auto">
                        <p className="text-xl font-medium text-foreground italic">“From discovery to delivery, we enable every stakeholder in the life sciences ecosystem to innovate faster and operate smarter.”</p>
                    </div>
                </div>
            </section>
        </>
    )
}
