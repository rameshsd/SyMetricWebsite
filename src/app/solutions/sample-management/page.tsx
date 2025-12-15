
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    FlaskConical,
    Settings,
    Clock,
    Tags,
    Truck,
    List,
    CheckSquare,
    PackageSearch,
    Bell,
    FilePlus,
    Archive,
    type LucideIcon,
    ArrowRight
} from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Sample Management System - SyMetric',
  description: 'A powerful, end-to-end module designed to manage the lifecycle of clinical samples—from definition to collection, labeling, shipment, storage, and final analysis.',
};

const capabilities: { icon: LucideIcon; title: string; description: string, link: string }[] = [
    {
        icon: Settings,
        title: "Sample Management Configuration",
        description: "Configure how samples behave across the study, aligned with protocol requirements, with full audit trails and role-based access.",
        link: "#"
    },
    {
        icon: FilePlus,
        title: "Sample Definitions",
        description: "Maintain a complete catalog of sample definitions with attributes like type, processing rules, and metadata.",
        link: "#"
    },
    {
        icon: Clock,
        title: "Sample Timepoints",
        description: "Configure when samples must be collected during a subject’s visit schedule, with full validation and audit trails.",
        link: "#"
    },
    {
        icon: Archive,
        title: "Sample Generation",
        description: "Generate unique sample numbers, either pre-linked to subjects or at the point of collection, with full metadata and validation.",
        link: "#"
    },
    {
        icon: Tags,
        title: "Sample Label Generation",
        description: "Generate high-quality QR Code or Barcode labels for every sample, with dynamic and customizable templates.",
        link: "#"
    },
    {
        icon: Truck,
        title: "Sample Shipments",
        description: "End-to-end sample shipment lifecycle management: Request, Approve, Dispatch, Receive, Cancel, and Reject.",
        link: "#"
    },
    {
        icon: PackageSearch,
        title: "Sample Inventory",
        description: "Track all samples across collection, storage, and processing with real-time visibility and complete audit trails.",
        link: "#"
    },
    {
        icon: CheckSquare,
        title: "Sample Status Management",
        description: "Track the lifecycle status of each sample as it progresses (Identified, Collected, Active, Analysed, etc.).",
        link: "#"
    },
    {
        icon: List,
        title: "Sample Inventory Status Management",
        description: "Track the physical and operational status of samples (Stored, In Transit, Destroyed) for a full chain-of-custody.",
        link: "#"
    },
    {
        icon: Bell,
        title: "Notifications",
        description: "Centralized notification system to keep users updated on all sample-related activities via system alerts and mail.",
        link: "#"
    },
];

const ConclusionSection = () => {
    const conclusionImage = PlaceHolderImages.find(p => p.id === 'about-hero');
    const summaryPoints = [
        {
            id: 'item-1',
            title: 'Accuracy and Compliance',
            description: 'Ensure accuracy, compliance, and traceability across all study sites for every step of the sample lifecycle.'
        },
        {
            id: 'item-2',
            title: 'End-to-End Control',
            description: 'From defining sample types to generating labels, managing shipments, and tracking status transitions.'
        },
        {
            id: 'item-3',
            title: 'Complex Workflow Support',
            description: 'The module is built to support complex clinical workflows with precision and automation.'
        }
    ];

    return (
        <section id="conclusion" className="bg-secondary/50">
            <div className="container">
                <div className="text-left mb-12">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">Conclusion</p>
                    <h2 className="text-4xl font-bold tracking-tight mt-2">Complete Control Over Your Sample Lifecycle</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl">The Sample Management System delivers complete control over every step in the sample lifecycle—ensuring accuracy, compliance, and traceability across all study sites. From defining sample types to generating labels, managing shipments, and tracking status transitions, the module is built to support complex clinical workflows with precision and automation.</p>
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
                            {conclusionImage && (
                            <Image
                                src={conclusionImage.imageUrl}
                                alt="Professional working on a tablet"
                                fill
                                className="rounded-2xl object-cover shadow-lg"
                                data-ai-hint={conclusionImage.imageHint}
                            />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function SampleManagementPage() {

    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Conclusion', href: '#conclusion' },
    ];

    return (
        <div>
            <div id="overview">
                <SyMetricBusinessAI 
                  title="Sample Management System"
                  subtitle="A powerful, end-to-end module designed to manage the lifecycle of clinical samples—from definition to collection, labeling, shipment, storage, and final analysis."
                  heroImageId="sample-management-hero-2"
                />
            </div>
            <PageHeader title="Sample Management" secondaryNav={secondaryNav} />
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
                                    <cap.icon className="h-16 w-16 text-blue-600 dark:text-blue-400" strokeWidth={2} />
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

             <ConclusionSection />
        </div>
    );
}
