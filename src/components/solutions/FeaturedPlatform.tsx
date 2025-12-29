
'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function FeaturedPlatform() {
    const ctpImage = PlaceHolderImages.find(p => p.id === 'ctp-hero-image');

    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Featured Platform</h2>
            </div>
            <Card className="p-0 overflow-hidden bg-background shadow-lg rounded-2xl">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                        <p className="text-sm font-semibold text-primary">PLATFORM</p>
                        <h3 className="text-2xl font-bold mt-2">SyMetric Clinical Trial Platform</h3>
                        <p className="text-muted-foreground mt-4">
                            Built for end-to-end Clinical Trials, our Cloud-Based Platform is fully modularized, allowing you to choose the right solution that can be configured to suit your needs.
                        </p>
                        <p className="text-muted-foreground mt-4">
                            Designed, developed, and deployed by us, our all-encompassing set of solutions is built to work seamlessly with your existing ecosystem and processes. It covers various processes in Clinical Trials – including Study Master Management, Subject Management, Clinical Supplies Management, Data Management, and Medical Coding. With SyMetric Clinical Trial Platform, you can manage, monitor, analyze, and report with ease by configuring the solutions to your specific needs – whether you are a Pharmaceutical Sponsor, Clinical Research Organization (CRO), or from the Academia.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <Button asChild>
                                <Link href="/solutions/clinical-trial-platform">Explore our platform</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-full min-h-[400px]">
                        {ctpImage && (
                            <Image
                                src={ctpImage.imageUrl}
                                alt="SyMetric Clinical Trial Platform"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover"
                                data-ai-hint={ctpImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </Card>
        </>
    );
}
