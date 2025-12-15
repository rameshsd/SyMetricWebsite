
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Package,
    Settings,
    Bell,
    Truck,
    Warehouse,
    ClipboardList,
    Thermometer,
    PackageSearch,
    FileCog,
    FileClock,
    FileCheck2,
    Users,
    FlaskConical,
    ShieldCheck,
    Repeat,
    ArrowRight
} from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Clinical Supplies Management - SyMetric',
  description: 'End-to-end control of Investigational Products (IP), packaging, inventory, shipments, retention, and temperature management across global clinical trials.',
};

const capabilities = [
    {
        icon: Settings,
        title: "Study-Level IP Configuration",
        description: "Define rules for packaging, distribution, dispensing, retention, and monitoring for each study."
    },
    {
        icon: Bell,
        title: "IP Release & Retained Stocks Notifications",
        description: "Automated email and system notifications for released packaging lists with retained stock details."
    },
    {
        icon: Truck,
        title: "Automated Resupply Triggers",
        description: "Generate resupply requests automatically when inventory falls below minimum thresholds."
    },
    {
        icon: Warehouse,
        title: "Inventory Management",
        description: "Real-time stock visibility across Sponsors, Warehouses, Sites, Labs, and Retention Facilities."
    },
    {
        icon: PackageSearch,
        title: "Stock Allocation & Status Lifecycle",
        description: "Pre-allocate stocks and track each unit's status from Active to Dispensed or Destroyed."
    },
    {
        icon: FileCog,
        title: "Lot & Batch Management",
        description: "Track stock lots across inventory while maintaining blinded integrity and enforcing FEFO."
    },
    {
        icon: FileClock,
        title: "Expiry Management & Blinded Expiry",
        description: "Maintain actual and blinded expiry dates, preventing the use of expired stocks."
    },
    {
        icon: ClipboardList,
        title: "Shipment Requests & Workflows",
        description: "Manual and automated shipment request generation with configurable approval workflows."
    },
    {
        icon: Thermometer,
        title: "Temperature Monitoring",
        description: "Supports manual and automated temperature logging for cold-chain shipments with excursion alerts."
    },
    {
        icon: FileCheck2,
        title: "Dispensing & Shipping Restrictions",
        description: "Restrict shipping and dispensing of kits nearing their expiry dates based on study rules."
    },
    {
        icon: Users,
        title: "Subject-Specific Controls",
        description: "Manage dose titration, run-in medication, and subject-specific kit reservations."
    },
    {
        icon: Repeat,
        title: "API Integration & XML Generation",
        description: "Supports API-based shipment requests and generates structured XML records for downstream systems."
    },
];

const missionCriticalFeatures = [
    {
        value: "item-1",
        title: "Prevent Stockouts",
        description: "Ensure zero stockouts with automated resupply triggers, real-time inventory visibility, and predictive stock management, guaranteeing that sites always have the necessary supplies."
    },
    {
        value: "item-2",
        title: "Ensure Protocol-Aligned Dispensing",
        description: "Maintain strict adherence to study protocols with configurable rules for dose titration, subject-specific kit reservations, and dispensing restrictions based on expiry dates."
    },
    {
        value: "item-3",
        title: "Achieve Full Regulatory Compliance",
        description: "Support 21 CFR Part 11 and ICH-GCP guidelines with complete audit trails, secure e-signatures, and rigorous temperature monitoring for cold-chain shipments."
    },
    {
        value: "item-4",
        title: "Streamline Warehouse-to-Site Operations",
        description: "Optimize logistics with automated shipment workflows, real-time tracking from dispatch to receipt, and efficient management of both central and local site inventories."
    }
];

export default function ClinicalSuppliesManagementPage() {
    const summaryImage = PlaceHolderImages.find(p => p.id === 'clinical-supplies-summary');

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
                  title="Clinical Supplies Management Module"
                  subtitle="End-to-end control of Investigational Products (IP), packaging, inventory, shipments, retention, and temperature management across global clinical trials."
                  heroImageId="clinical-supplies-hero"
                />
            </div>
            <PageHeader title="Clinical Supplies Management" secondaryNav={secondaryNav} />
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
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider">A Mission-Critical Module</p>
                        <h2 className="text-4xl font-bold tracking-tight mt-2">Ensure Safe, Compliant, and Uninterrupted Trial Execution</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="relative">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                                {missionCriticalFeatures.map((feature) => (
                                     <AccordionItem value={feature.value} key={feature.value} className="border-b-0">
                                        <div className="flex gap-4">
                                            <div className="pt-4">
                                                <div className="w-1 h-full bg-border transition-colors data-[state=open]:bg-primary"></div>
                                            </div>
                                            <div className="flex-1">
                                                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left py-4">
                                                    {feature.title}
                                                </AccordionTrigger>
                                                <AccordionContent className="pb-8 pr-4">
                                                    <p className="text-muted-foreground">{feature.description}</p>
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
