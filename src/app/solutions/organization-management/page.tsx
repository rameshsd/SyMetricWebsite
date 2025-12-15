
import { Metadata } from 'next';
import Image from 'next/image';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { CheckCircle, Building, Users, Link2 } from 'lucide-react';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';


export const metadata: Metadata = {
  title: 'Organization Management - SyMetric',
  description: 'A centralized module that defines and manages every organization involved in a clinical trial.',
};

const features = [
    {
        icon: Building,
        title: "Organization Directory",
        description: "A complete interface to list, add, edit, and manage all organizations linked to a customer, creating a unified directory for all trial participants.",
        details: [
            "List all organizations",
            "Add, edit, and deactivate profiles",
            "Store essential contact and address information"
        ]
    },
    {
        icon: Users,
        title: "Organization Types",
        description: "Automatically categorize organizations by their functional role, such as Sponsor, CRO, Site, Lab, or Warehouse, for streamlined downstream operations.",
        details: [
            "Sponsor & CRO",
            "Investigation Sites",
            "Central & Local Labs",
            "Warehouses & Retention Facilities"
        ]
    },
    {
        icon: Link2,
        title: "Customer-Organization Linking",
        description: "Securely link each organization to a specific customer (Sponsor or CRO) to maintain strict data confidentiality and role-based visibility across studies.",
        details: [
            "Link/delink organizations to customers",
            "Ensure data isolation between tenants",
            "Maintain a clean operational structure"
        ]
    }
];

const summaryPoints = [
    {
        id: "item-1",
        title: "Complete master list of all trial-related organizations",
        description: "Maintain a single, authoritative directory for every entity involved in your trials, from sponsors to labs and retention facilities."
    },
    {
        id: "item-2",
        title: "Accurate categorization by type and operational role",
        description: "Automatically classify organizations by their function, ensuring that downstream modules like Site Management and IP Management can link operations correctly."
    },
    {
        id: "item-3",
        title: "Secure linking and delinking to customers",
        description: "Enforce strict data confidentiality and multi-tenancy by securely associating each organization with a specific customer contract."
    },
    {
        id: "item-4",
        title: "Centralized and controlled information for workflows",
        description: "Provide a single source of truth for all operational workflows, reducing errors and ensuring consistency across the platform."
    },
     {
        id: "item-5",
        title: "Strong foundation for site, lab, IP, and sample management",
        description: "Serve as the foundational layer upon which all other logistical and operational modules are built, ensuring a structured and governed ecosystem."
    }
];


export default function OrganizationManagementPage() {
    const summaryImage = PlaceHolderImages.find(p => p.id === 'organization-summary-image');

    const secondaryNav = [
        { label: 'AI solutions', href: '#' },
        { label: 'AI business resources', href: '#' },
        { label: 'Trustworthy AI', href: '#' },
        { label: 'News and insights', href: '#' },
        { label: 'AI in practice', href: '#' },
        { label: 'Customer stories', href: '#' },
        { label: 'FAQ', href: '#' },
    ];

    return (
        <div>
            <div id="overview">
                <SyMetricBusinessAI 
                  title="Organization Management"
                  subtitle="A centralized module that defines and manages every organization involved in a clinical trial—ensuring structured oversight, accurate association with customers, and seamless study operations."
                  heroImageId="organization-management-hero"
                />
            </div>
            <PageHeader title="Organization Management" secondaryNav={secondaryNav} />
            <AskAISection />

            <section id="features">
                <div className="container">
                    <SectionTitle
                        title="Key Features"
                        description="The Organization Master is the core catalogue that stores detailed information about all organizations participating in the clinical research lifecycle for each customer. It ensures transparency, traceability, and controlled access across studies."
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

             <section id="summary" className="bg-secondary/50">
                <div className="container">
                    <div className="text-left mb-12">
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Summary</p>
                        <h2 className="text-4xl font-bold tracking-tight mt-2">Administrative Backbone for Trial Governance</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">The Organization Management module provides the administrative backbone for governing all entities in the clinical trial ecosystem, ensuring structured, secure, and efficient operations.</p>
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
