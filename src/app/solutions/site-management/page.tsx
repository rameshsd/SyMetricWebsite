
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Lock, FileCheck } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Site Management - SyMetric',
  description: 'Centralized control of sites across global clinical trials.',
};

const capabilities: { title: string; description: string; icon: React.ReactNode }[] = [
    {
        title: "Multi-Regional Site Governance",
        description: "The module ensures each site is aligned with study-specific operational parameters, local regulatory needs, and recruitment expectations, ensuring accurate configuration across multiple protocols.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: "Study-Specific Site Configuration",
        description: "Define operational metadata for each site, including subject recruitment targets, logistics rules, and stock management to enable precise planning and prevent stock-outs.",
        icon: (
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="M9 15h6" />
            </svg>
        )
    },
    {
        title: "Access Control & Role-Based Site Visibility",
        description: "Supports fine-grained, role-based restrictions, ensuring users from CROs or site teams access only the sites relevant to their responsibilities, enhancing data privacy and operational control.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
        )
    },
    {
        title: "GDPR-Sensitive Site Handling",
        description: "For EU-region sites, the system supports GDPR-compliant configurations by restricting sensitive subject fields and ensuring study teams collect only permissible metadata.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    },
    {
        title: "Dynamic Site Status & Workflow Control",
        description: "Every site operates under clearly defined statuses (Active, Inactive). Status changes trigger automated notifications to all authorized users, ensuring operational transparency.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6" />
                <path d="M2.5 22v-6h6" />
                <path d="M2 11.5a10 10 0 0 1 18.8-4.3" />
                <path d="M22 12.5a10 10 0 0 1-18.8 4.3" />
            </svg>
        )
    },
    {
        title: "Lab Integration & Local Lab Associations",
        description: "Supports associating local labs with a site, ensuring accurate sample routing, clear responsibility allocation, and smooth logistics integration for seamless operations.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <path d="m14 10-2 2-2-2" />
            </svg>
        )
    }
];

const benefits = [
    {
        icon: CheckCircle,
        title: "Global Consistency with Study-Level Flexibility",
        description: "Define site rules per study without impacting configurations in other trials."
    },
    {
        icon: ShieldCheck,
        title: "Strong Governance & Operational Control",
        description: "Ensure every site operates within predefined limits and compliance frameworks."
    },
    {
        icon: Lock,
        title: "Secure & Role-Based Access",
        description: "Protect sensitive site and subject data across CROs, sponsors, and site teams."
    },
    {
        icon: FileCheck,
        title: "GDPR-Ready for EU Operations",
        description: "Compliance is built-in for EU-specific data restrictions."
    }
];

const PurposeSection = () => {
    const purposeImage = PlaceHolderImages.find(p => p.id === 'site-management-hero');
    const purposePoints = [
        "Ensures correct rules, permissions, and controls for every site.",
        "Provides robust, centralized site-level governance.",
        "Increases operational efficiency and reduces execution risks.",
        "Guarantees compliance with regional and study-specific requirements."
    ];
    return (
        <section id="purpose">
            <div className="container">
                <Card className="p-8 rounded-2xl overflow-hidden grid md:grid-cols-2 gap-8 items-center bg-card">
                    <div className="space-y-6">
                        <p className="font-semibold text-primary">Purpose of the Module</p>
                        <h2 className="text-3xl font-bold">The Backbone of Site-Level Governance</h2>
                        <p className="text-muted-foreground">The Site Management module is the backbone for site-level governance in clinical trials. It ensures every participating site—regardless of region—operates with the correct rules, permissions, logistics controls, and regulatory requirements. This leads to higher operational efficiency, reduced risks, and smoother study execution.</p>
                        <ul className="space-y-3">
                           {purposePoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                    <span className="text-muted-foreground">{point}</span>
                                </li>
                           ))}
                        </ul>
                        <Button asChild>
                            <Link href="/contact">Request a Demo</Link>
                        </Button>
                    </div>
                    <div className="relative w-full aspect-video">
                        {purposeImage && (
                            <Image
                                src={purposeImage.imageUrl}
                                alt={purposeImage.description}
                                data-ai-hint={purposeImage.imageHint}
                                fill
                                className="object-cover rounded-lg"
                            />
                        )}
                    </div>
                </Card>
            </div>
        </section>
    );
};


export default function SiteManagementPage() {

    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'Purpose', href: '#purpose' },
    ];

    return (
        <div>
            <div id="overview">
                <SyMetricBusinessAI 
                  title="Centralized Control of Sites Across Global Clinical Trials"
                  subtitle="The Site Management module provides a unified framework to configure, govern, and monitor every site participating in a clinical study."
                  heroImageId="site-management-hero"
                />
            </div>
            <PageHeader title="Site Management" secondaryNav={secondaryNav} />
            <AskAISection />

            <section id="capabilities">
                <div className="container">
                    <SectionTitle title="Key Capabilities" className="mb-12 text-center" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map(cap => (
                            <Card key={cap.title} className="group flex flex-col items-start text-left p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/20 mb-4">
                                    <div className="h-16 w-16 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                      {cap.icon}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                  <h3 className="font-semibold text-lg">{cap.title}</h3>
                                  <p className="text-muted-foreground text-sm mt-1">{cap.description}</p>
                                </div>
                           </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="benefits" className="bg-secondary/50">
                <div className="container">
                    <SectionTitle title="Benefits of the Site Management Module" className="mb-12 text-center" />
                     <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {benefits.map(benefit => (
                            <div key={benefit.title} className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 p-4 rounded-xl bg-blue-100 dark:bg-blue-900/20">
                                    <benefit.icon className="w-16 h-16 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold group-hover:text-primary">{benefit.title}</h3>
                                    <p className="text-muted-foreground mt-1">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <PurposeSection />
        </div>
    );
}
