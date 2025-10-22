
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlusCircle } from 'lucide-react';

const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start">
        <span className="text-primary mr-2 mt-1">•</span>
        <span>{children}</span>
    </li>
);

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-2 bg-blue-100/50 dark:bg-blue-900/30 text-primary p-2 rounded-md">
        <PlusCircle className="h-5 w-5" />
        <span className="text-sm font-medium">{children}</span>
    </div>
);


export function SapCloudPortfolio() {
    const portfolioImage = PlaceHolderImages.find(p => p.id === 'sap-cloud-portfolio');

    return (
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Every day, organizations around the world trust SyMetric in the cloud
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Our cloud portfolio is built on a strong, reliable, and secure foundation.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Global cloud delivery services through SyMetric protect you from external threats, help you collect and process personal data lawfully, and enable you to meet regulatory and compliance requirements.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Additionally, we offer specific security and sovereignty in the way we deliver our services —always tailored to your industry and business needs.
                    </p>
                </div>

                <div className="mt-16 max-w-6xl mx-auto">
                    {portfolioImage && (
                        <div className="relative">
                            <Image 
                                src={portfolioImage.imageUrl}
                                alt={portfolioImage.description}
                                data-ai-hint={portfolioImage.imageHint}
                                width={1024}
                                height={768}
                                className="w-full h-auto"
                            />

                            {/* These are absolutely positioned based on the image's structure. This is fragile. */}
                            <div className="absolute top-[10%] left-[10%] text-sm max-w-[200px]">
                                <ul className="space-y-1">
                                    <ListItem>Highest product and operations security</ListItem>
                                    <ListItem>Resilience and business continuity</ListItem>
                                    <ListItem>Cyber-defense measures</ListItem>
                                </ul>
                            </div>

                            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-sm max-w-[200px]">
                                <ul className="space-y-1">
                                    <ListItem>Wide range of certifications</ListItem>
                                    <ListItem>Product localizations</ListItem>
                                </ul>
                            </div>
                            
                            <div className="absolute bottom-[10%] left-[18%] text-sm max-w-[200px]">
                                <ul className="space-y-1">
                                    <ListItem>Strong company measures</ListItem>
                                    <ListItem>Global data center locations</ListItem>
                                </ul>
                            </div>
                            
                            <div className="absolute top-[40%] right-0 text-sm max-w-[250px] space-y-2">
                                <FeatureItem>Customer managed encryption keys</FeatureItem>
                                <FeatureItem>Local data residency and operations</FeatureItem>
                                <FeatureItem>
                                    Sovereign cloud capabilities
                                    <br />
                                    <span className="text-xs text-muted-foreground">For regulated industries</span>
                                </FeatureItem>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}