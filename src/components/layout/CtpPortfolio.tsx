
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

export function CtpPortfolio() {
    return (
        <section className="bg-secondary/50">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold tracking-tighter">
                        Every day, organizations around the world trust SyMetric CTP
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground max-w-prose mx-auto">
                        Our clinical trial platform is built on a strong, reliable, and secure foundation. Global cloud delivery services protect you from external threats, help you collect and process personal data lawfully, and enable you to meet regulatory and compliance requirements.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground max-w-prose mx-auto">
                        Additionally, we offer specific security and sovereignty in the way we deliver our services — always tailored to your industry and business needs.
                    </p>
                </div>

                <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Security</h3>
                            <ul className="space-y-3">
                                <BulletPoint>Highest product and operations security</BulletPoint>
                                <BulletPoint>Resilience and business continuity</BulletPoint>
                                <BulletPoint>Cyber-defense measures</BulletPoint>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Compliance</h3>
                             <ul className="space-y-3">
                                <BulletPoint>Wide range of certifications (21 CFR Part 11, GxP)</BulletPoint>
                                <BulletPoint>Product localizations for global trials</BulletPoint>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Data protection and privacy</h3>
                             <ul className="space-y-3">
                                <BulletPoint>Strong company measures (GDPR, HIPAA)</BulletPoint>
                                <BulletPoint>Global data center locations</BulletPoint>
                            </ul>
                        </div>
                    </div>
                     <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Cloud and Hosting Options</h3>
                            <div className="space-y-4">
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
