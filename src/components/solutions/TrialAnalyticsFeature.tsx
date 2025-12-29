'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SapBtp } from '@/components/icons/brand-icons';

export function TrialAnalyticsFeature() {
    const mainImage = PlaceHolderImages.find(p => p.id === 'trial-analytics-feature-hero');
    const sapLogo = PlaceHolderImages.find(p => p.id === 'sap-logo-png');

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">FEATURED SOLUTION</p>
                    <h2 className="text-3xl font-bold mt-2">SyMetric Trial Analytics</h2>
                </div>
                <Card className="p-0 overflow-hidden grid md:grid-cols-2 items-center bg-card shadow-lg rounded-2xl">
                    <div className="p-8 md:p-12 order-2 md:order-1">
                        {sapLogo && (
                            <Image 
                                src={sapLogo.imageUrl}
                                alt="SAP Logo"
                                width={80}
                                height={40}
                                className="mb-6"
                            />
                        )}
                        <h3 className="text-2xl font-bold">Analytics-Driven Clinical Trial Planning System</h3>
                        <p className="text-muted-foreground mt-4">
                            The solution helps Clinical Operation Teams take informed decisions while planning a new Clinical Trial using Historic Performance Analytics of stakeholders such as CROs, Investigation Sites, Investigators, and Patient Demography. This reduces Trial planning timelines significantly and enhances efficiency with reliability.
                        </p>
                         <p className="text-muted-foreground mt-4">
                           Built on SAP Business Technology Platform, the system opens up various opportunities to explore the services that SAP has to offer on the Cloud.
                        </p>
                        <div className='mt-6'>
                            <p className="font-semibold text-sm">Platform</p>
                            <div className="flex items-center gap-2 mt-2">
                                <SapBtp className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">SAP Business Technology Platform</span>
                            </div>
                        </div>

                        <Button asChild className="mt-8">
                            <Link href="/solutions/trial-analytics">
                                Explore more <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="relative h-64 md:h-full min-h-[400px] order-1 md:order-2">
                        {mainImage && (
                            <Image 
                                src={mainImage.imageUrl}
                                alt="SyMetric Trial Analytics Feature"
                                fill
                                className="object-cover"
                                data-ai-hint={mainImage.imageHint}
                            />
                        )}
                    </div>
                </Card>
            </div>
        </section>
    );
}
