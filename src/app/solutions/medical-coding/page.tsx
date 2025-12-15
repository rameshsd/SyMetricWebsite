
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Check, FileCheck, Search, Shield, ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { aiFaqItems } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Medical Coding - SyMetric',
    description: 'Automated and manual coding of clinical terms using MedDRA & WHO-DD with full review, approval, and discrepancy management.',
};

const capabilities = [
    {
        icon: BookOpen,
        title: "Medical Dictionary Management",
        description: "Maintain multiple dictionary versions (MedDRA, WHO-DD) with centralized access control and history tracking."
    },
    {
        icon: Check,
        title: "Auto & Manual Coding",
        description: "Configure synonym lists and leverage auto-coding for efficiency, while supporting manual coding for complex terms."
    },
    {
        icon: FileCheck,
        title: "Coding Review & Approval",
        description: "A two-level review workflow ensures all coded terms are verified for accuracy and consistency before approval."
    },
    {
        icon: Search,
        title: "Discrepancy Management",
        description: "Raise, track, and resolve coding-related queries with a fully integrated discrepancy management workflow."
    },
    {
        icon: Shield,
        title: "Full Compliance & Auditability",
        description: "Complete, unalterable audit trails for every coding decision, review, and approval, ensuring regulatory compliance."
    }
];

const summaryPoints = [
    {
        id: "item-1",
        title: "Accuracy and Consistency",
        description: "Ensure verbatim terms are coded uniformly across all subjects and sites, improving data quality."
    },
    {
        id: "item-2",
        title: "Operational Efficiency",
        description: "Reduce manual effort and accelerate the coding process with powerful auto-coding and synonym management."
    },
    {
        id: "item-3",
        title: "Regulatory Compliance",
        description: "Maintain a complete, immutable audit trail for all coding activities, ensuring you are always inspection-ready."
    },
    {
        id: "item-4",
        title: "Streamlined Workflows",
        description: "Integrated review, approval, and discrepancy management workflows reduce communication overhead and speed up resolution times."
    }
];

export default function MedicalCodingPage() {
    const summaryImage = PlaceHolderImages.find(p => p.id === 'edc-coding');

    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Summary', href: '#summary' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <div>
            <div id="overview">
                <SyMetricBusinessAI
                  title="Medical Coding"
                  subtitle="Automated and manual coding of clinical terms using MedDRA & WHO-DD with full review, approval, and discrepancy management."
                  heroImageId="medical-coding-hero"
                />
            </div>
            <PageHeader title="Medical Coding" secondaryNav={secondaryNav} />
            <AskAISection />

            <section id="capabilities">
                <div className="container">
                    <SectionTitle
                        title="Key Capabilities"
                        className="mb-16 text-center"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map(cap => (
                           <Card key={cap.title} className="group flex flex-col items-start text-left p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                               <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/20 mb-4">
                                    <cap.icon className="h-16 w-16 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
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
                        <h2 className="text-4xl font-bold tracking-tight mt-2">Accurate, Compliant, and Efficient Medical Coding</h2>
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
            <FaqAccordion faqs={aiFaqItems} />
        </div>
    );
}
