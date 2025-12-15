
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Library, Edit3, CheckSquare, DatabaseZap, Search, GitPullRequest, Lock, Share2, FileCheck2, UserCheck, Shield, FileOutput, ArrowRight, MessageSquare } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { dataManagementFaq } from '@/lib/data';


export const metadata: Metadata = {
  title: 'Data Management - SyMetric',
  description: 'End-to-end electronic data capture, validation, discrepancy handling, SDV, and export capabilities for regulatory-compliant clinical trials.',
};

const capabilities = [
    {
        icon: Library,
        title: "Global Library",
        description: "Centralized repository for reusable forms, controlled terminology, and CDISC variables to ensure consistency."
    },
    {
        icon: Edit3,
        title: "Study Data Designer",
        description: "A graphical drag-and-drop CRF builder with full version control and real-time preview."
    },
    {
        icon: CheckSquare,
        title: "Data Validation Engine",
        description: "Powerful rule builder for edit checks, field dynamics, calculations, and real-time notifications."
    },
    {
        icon: DatabaseZap,
        title: "Data Collection & eCRF Entry",
        description: "Intuitive interfaces for site users to enter CRF data with real-time validation and status tracking."
    },
    {
        icon: Search,
        title: "Discrepancy (Query) Management",
        description: "End-to-end lifecycle management for both automatic and manual data discrepancies."
    },
    {
        icon: GitPullRequest,
        title: "Source Data Verification (SDV)",
        description: "Dedicated workflow for SDV monitoring, including remote verification with source document upload."
    },
    {
        icon: UserCheck,
        title: "Data Management Review",
        description: "A secondary review layer for Data Managers with PIN validation and discrepancy-raising capabilities."
    },
    {
        icon: FileCheck2,
        title: "PI Signatures (eSignatures)",
        description: "21 CFR Part 11 compliant electronic signatures for CRFs with automatic revocation on data change."
    },
    {
        icon: Lock,
        title: "Data Freezing & Locking",
        description: "Securely freeze forms to prevent updates or apply a final lock before database export for analysis."
    },
    {
        icon: FileOutput,
        title: "Dataset & Export Engine",
        description: "Flexible engine to define and export customized, analysis-ready datasets in various formats."
    },
];

const summaryPoints = [
    {
        id: "item-1",
        title: "High-Quality, Audit-Ready Data",
        description: "Ensure your data is compliant, validated, and ready for regulatory submission at any stage of the trial."
    },
    {
        id: "item-2",
        title: "Efficient Workflows",
        description: "Automate manual tasks and streamline processes for CRAs, Investigators, and Data Managers, saving time and reducing errors."
    },
    {
        id: "item-3",
        title: "Complete Ecosystem",
        description: "From CRF design and data collection to validation, discrepancy management, and data export, our module covers the entire data lifecycle."
    },
    {
        id: "item-4",
        title: "Configurable and Compliant",
        description: "A fully configurable environment that adheres to industry standards, providing a robust foundation for your clinical data handling."
    }
];

export default function DataManagementPage() {
    const summaryImage = PlaceHolderImages.find(p => p.id === 'revolutionizing-trials');

    const secondaryNav = [
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Summary', href: '#summary' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            <SyMetricBusinessAI 
              title="Data Management Module"
              subtitle="End-to-end electronic data capture, validation, discrepancy handling, SDV, and export capabilities for regulatory-compliant clinical trials."
              heroImageId="data-management-hero"
            />
            <PageHeader title="Data Management" secondaryNav={secondaryNav} />
            <div id="overview">
                 <section className="bg-diagram-violet text-white">
                    <div className="container">
                        <div className="flex items-start gap-6">
                            <div className="p-3 bg-white/20 rounded-lg">
                                <MessageSquare className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">SyMetric Solutions</h2>
                                <p className="text-white/80 mt-1">Explore our documentation or contact our support team for questions about our solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="capabilities">
                    <div className="container">
                        <SectionTitle
                            title="Key Capabilities"
                            className="mb-16 text-center"
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {capabilities.map(cap => (
                               <Card key={cap.title} className="group flex flex-col items-start text-left p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                   <div className="p-3 rounded-xl text-primary bg-primary/10 group-hover:bg-primary/10 transition mb-4">
                                        <cap.icon className="h-16 w-16" strokeWidth={2.5} />
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

                 <section id="summary" className="bg-secondary/50">
                    <div className="container">
                        <div className="text-left mb-12">
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Conclusion</p>
                            <h2 className="text-4xl font-bold tracking-tight mt-2">A Complete and Compliant Ecosystem</h2>
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
                <FaqAccordion faqs={dataManagementFaq} />
            </div>
        </>
    );
}
