
import { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Site Management - SyMetric',
  description: 'Centralized control of sites across global clinical trials.',
};

const capabilities = [
    {
        title: "Multi-Regional Site Governance",
        description: "The module ensures each site is aligned with study-specific operational parameters, local regulatory needs, and recruitment expectations, ensuring accurate configuration across multiple protocols."
    },
    {
        title: "Study-Specific Site Configuration",
        description: "Define operational metadata for each site, including subject recruitment targets, logistics rules, and stock management to enable precise planning and prevent stock-outs."
    },
    {
        title: "Access Control & Role-Based Site Visibility",
        description: "Supports fine-grained, role-based restrictions, ensuring users from CROs or site teams access only the sites relevant to their responsibilities, enhancing data privacy and operational control."
    },
    {
        title: "GDPR-Sensitive Site Handling",
        description: "For EU-region sites, the system supports GDPR-compliant configurations by restricting sensitive subject fields and ensuring study teams collect only permissible metadata."
    },
    {
        title: "Dynamic Site Status & Workflow Control",
        description: "Every site operates under clearly defined statuses (Active, Inactive). Status changes trigger automated notifications to all authorized users, ensuring operational transparency."
    },
    {
        title: "Lab Integration & Local Lab Associations",
        description: "Supports associating local labs with a site, ensuring accurate sample routing, clear responsibility allocation, and smooth logistics integration for seamless operations."
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


export default function SiteManagementPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'site-management-hero');

    return (
        <div>
            <PageHeader title="Site Management" breadcrumb={{ href: '/solutions', label: 'Solutions' }} />
            
            <section className="bg-secondary/50 py-20">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">Centralized Control of Sites Across Global Clinical Trials</h1>
                        <p className="text-lg text-muted-foreground">The Site Management module provides a unified framework to configure, govern, and monitor every site participating in a clinical study. Designed for multi-country operations, it ensures each site follows study-specific rules, operational parameters, compliance requirements, and access controls—supporting seamless subject recruitment, inventory flow, and site performance oversight.</p>
                    </div>
                    {heroImage && (
                        <div className="relative h-80 rounded-2xl overflow-hidden">
                            <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} fill className="object-cover" />
                        </div>
                    )}
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map(cap => (
                            <Card key={cap.title} className="bg-card p-6 rounded-lg border-t-4 border-t-primary">
                                <CardHeader className="p-0">
                                  <CardTitle className="text-xl">{cap.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 mt-4">
                                  <p className="text-muted-foreground">{cap.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-secondary/50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Benefits of the Site Management Module</h2>
                     <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {benefits.map(benefit => (
                            <div key={benefit.title} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <benefit.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                                    <p className="text-muted-foreground mt-1">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section>
                <div className="container max-w-3xl mx-auto text-center">
                     <h2 className="text-3xl font-bold mb-4">Purpose of the Module</h2>
                     <p className="text-lg text-muted-foreground">The Site Management module is the backbone for site-level governance in clinical trials. It ensures every participating site—regardless of region—operates with the correct rules, permissions, logistics controls, and regulatory requirements. This leads to higher operational efficiency, reduced risks, and smoother study execution.</p>
                </div>
            </section>
        </div>
    );
}
