"use client";

import { CheckCircle, PlusCircle } from 'lucide-react';

const FeatureItem = ({ children, subtext }: { children: React.ReactNode, subtext?: string }) => (
    <div className="flex items-start gap-3 bg-blue-100/50 dark:bg-blue-900/30 text-primary p-3 rounded-lg">
        <PlusCircle className="h-5 w-5 mt-1 flex-shrink-0" />
        <div>
            <span className="font-semibold">{children}</span>
            {subtext && <p className="text-xs text-muted-foreground">{subtext}</p>}
        </div>
    </div>
);

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-2">
        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
        <span className="text-muted-foreground">{children}</span>
    </li>
);

export function SapCloudPortfolio() {
    return (
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Every day, organizations around the world trust SyMetric in the cloud
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Our cloud portfolio is built on a strong, reliable, and secure foundation. Global cloud delivery services through SyMetric protect you from external threats, help you collect and process personal data lawfully, and enable you to meet regulatory and compliance requirements.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Additionally, we offer specific security and sovereignty in the way we deliver our services — always tailored to your industry and business needs.
                    </p>
                </div>

                <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Security</h3>
                            <ul className="space-y-2">
                                <BulletPoint>Highest product and operations security</BulletPoint>
                                <BulletPoint>Resilience and business continuity</BulletPoint>
                                <BulletPoint>Cyber-defense measures</BulletPoint>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Compliance</h3>
                             <ul className="space-y-2">
                                <BulletPoint>Wide range of certifications</BulletPoint>
                                <BulletPoint>Product localizations</BulletPoint>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Data protection and privacy</h3>
                             <ul className="space-y-2">
                                <BulletPoint>Strong company measures</BulletPoint>
                                <BulletPoint>Global data center locations</BulletPoint>
                            </ul>
                        </div>
                    </div>
                     <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Security and sovereignty options</h3>
                            <div className="space-y-3">
                                <FeatureItem>Customer managed encryption keys</FeatureItem>
                                <FeatureItem>Local data residency and operations</FeatureItem>
                                <FeatureItem subtext="For regulated industries">Sovereign cloud capabilities</FeatureItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
