
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { Users, FileText, LayoutGrid, CheckCircle, LucideIcon, ArrowRight } from 'lucide-react';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AskAISection } from '@/components/shared/AskAISection';
import { AISubmenu } from '@/components/solutions/AI-submenu';

export const metadata: Metadata = {
  title: 'Customer Management - SyMetric',
  description: 'Centralized module to manage all sponsor and CRO customers, ensuring controlled access, contract-based configurations, and seamless multi-study operations.',
};

const features: { icon: LucideIcon; title: string; description: string; details: string[] }[] = [
    {
        icon: LayoutGrid,
        title: "Customer Master",
        description: "The foundational registry of all Sponsor and CRO customers onboarded onto the platform.",
        details: [
            "List, add, edit, and soft-delete customer profiles.",
            "All information is confidential and accessible only to authorized SyMetric staff.",
            "Represents the contractual owner for trials, studies, sites, and users."
        ]
    },
    {
        icon: Users,
        title: "User Account Limits",
        description: "Define and enforce contractual limits on user accounts for each customer.",
        details: [
            "Set maximum total user accounts allowed.",
            "Configure maximum active user accounts permitted at any time.",
            "Ensures compliance with license tiers and subscription plans."
        ]
    },
    {
        icon: FileText,
        title: "Study Limits",
        description: "Manage the number of studies each customer can create based on their contract.",
        details: [
            "Configure the maximum number of studies per customer.",
            "Limits are automatically enforced during new study creation.",
            "Simplifies license management and ensures controlled scalability."
        ]
    }
];

const summaryPoints = [
    {
        id: "item-1",
        title: "Secure administration of sponsor/CRO profiles",
        description: "Maintain secure and detailed profiles for every sponsor and CRO, with access restricted to authorized internal teams."
    },
    {
        id: "item-2",
        title: "Contract-compliant limits on users & studies",
        description: "Enforce contractual limits for user accounts and study creation automatically, ensuring compliance with licensing and subscription plans."
    },
    {
        id: "item-3",
        title: "Centralized customer metadata",
        description: "Create a single source of truth for all customer-related information, simplifying management and reducing data redundancy."
    },
    {
        id: "item-4",
        title: "Restricted visibility for SyMetric internal teams",
        description: "Ensure customer data confidentiality with strict, role-based access controls for your internal administrative teams."
    },
     {
        id: "item-5",
        title: "Controlled scalability and governance",
        description: "Govern the growth and scalability of customer operations on the platform by setting clear boundaries for resource utilization."
    }
];


export default function CustomerManagementPage() {
    const summaryImage = PlaceHolderImages.find(p => p.id === 'customer-management-summary-image');

    return (
        <div>
            <SyMetricBusinessAI 
              title="Customer Management"
              subtitle="A centralized module to manage all sponsor and CRO customers, ensuring controlled access, contract-based configurations, and seamless multi-study operations."
              heroImageId="customer-management-hero"
            />
            <AISubmenu />
            <AskAISection />

            <section>
                <div className="container">
                    <SectionTitle
                        title="Key Features"
                        description="The Customer Management module provides the foundational tools for secure and compliant administration of all sponsor and CRO relationships on the platform."
                        className="mb-16"
                    />
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {features.map(feature => (
                           <Card key={feature.title} className="group flex flex-col items-start text-left p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                               <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/20 mb-4">
                                    <feature.icon className="h-16 w-16 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
                               </div>
                               <CardHeader className="p-0">
                                   <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                               </CardHeader>
                               <CardContent className="p-0 mt-2 flex-grow">
                                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                                   <ul className="mt-4 space-y-2 text-sm">
                                        {feature.details.map((detail, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                                <span className="text-muted-foreground">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                               </CardContent>
                           </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="bg-secondary/50">
                <div className="container">
                    <div className="text-left mb-12">
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Summary</p>
                        <h2 className="text-4xl font-bold tracking-tight mt-2">Administrative Backbone for Multi-Tenant Governance</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="relative">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                                {summaryPoints.map((point) => (
                                     <AccordionItem value={point.id} key={point.id} className="border-b-0">
                                        <div className="flex gap-4">
                                            <div className="pt-4">
                                                <div className="w-1 h-full bg-border transition-colors data-[state=open]:bg-primary"></div>
                                            </div>
                                            <div className="flex-1">
                                                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left py-4">
                                                    {point.title}
                                                </AccordionTrigger>
                                                <AccordionContent className="pb-8 pr-4">
                                                    <p className="text-muted-foreground">{point.description}</p>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                     </AccordionItem>
                                ))}
                            </Accordion>
                            <div className="mt-8">
                                <Button asChild>
                                    <Link href="/contact">
                                        Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center">
                            <div className="relative w-full aspect-video">
                                {summaryImage && (
                                <Image
                                    src={summaryImage.imageUrl}
                                    alt={summaryImage.description}
                                    data-ai-hint={summaryImage.imageHint}
                                    fill
                                    className="rounded-2xl object-cover shadow-lg"
                                />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
