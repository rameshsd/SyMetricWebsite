'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Link from "next/link"
import { 
    Building, 
    ClipboardList, 
    Beaker,
    FileUp,
    GitBranch,
    Replace,
    ShieldCheck,
    History,
    CheckSquare,
    BarChart,
    FileOutput,
    PieChart
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TabFeature = {
    value: string;
    icon: LucideIcon;
    title: string;
    description: string;
    link?: string;
};

const setupItems: TabFeature[] = [
    {
        value: "lab-master",
        icon: Building,
        title: "Lab Master",
        description: "Define and manage all central and local labs participating in the study, ensuring a single source of truth for all laboratory entities.",
    },
    {
        value: "reference-ranges",
        icon: ClipboardList,
        title: "Reference Ranges",
        description: "Configure and maintain normal ranges by age, gender, and other factors to automatically flag deviations and ensure data accuracy."
    },
    {
        value: "sample-definitions",
        icon: Beaker,
        title: "Sample Definitions",
        description: "Create a central catalog of all sample types, collection criteria, and processing rules required by the study protocol."
    }
];

const integrationItems: TabFeature[] = [
    {
        value: "data-uploads",
        icon: FileUp,
        title: "Automated Data Uploads",
        description: "Seamlessly upload lab data files (e.g., Excel) directly to subject CRFs, with automated data mapping and validation.",
    },
    {
        value: "api-integration",
        icon: GitBranch,
        title: "API & System Integration",
        description: "Connect with external Laboratory Information Management Systems (LIMS) via robust APIs for real-time data exchange."
    },
    {
        value: "mapping-engine",
        icon: Replace,
        title: "Data Mapping Engine",
        description: "Configure mappings between external data formats and eCRF fields with a powerful, user-friendly interface."
    }
];

const complianceItems: TabFeature[] = [
    {
        value: "cfr-compliance",
        icon: ShieldCheck,
        title: "21 CFR Part 11 Compliance",
        description: "Ensure regulatory compliance with electronic signatures, secure audit trails, and strict access controls on all lab data.",
    },
    {
        value: "audit-trails",
        icon: History,
        title: "Complete Audit Trails",
        description: "Maintain a complete, unalterable record of every action taken on lab data, from upload to modification and review."
    },
    {
        value: "validation",
        icon: CheckSquare,
        title: "Data Validation & Cleaning",
        description: "Use automated edit checks and discrepancy management tools to ensure lab data is accurate, consistent, and clean."
    }
];

const analyticsItems: TabFeature[] = [
    {
        value: "dashboards",
        icon: BarChart,
        title: "Real-time Dashboards",
        description: "Monitor lab data trends, out-of-range values, and sample status with interactive, real-time dashboards."
    },
    {
        value: "exports",
        icon: FileOutput,
        title: "Customizable Exports",
        description: "Export analysis-ready datasets in various formats (CSV, Excel) with flexible filtering and customization options."
    },
    {
        value: "reconciliation",
        icon: PieChart,
        title: "Reconciliation Reports",
        description: "Generate reports to reconcile lab data against CRF data, ensuring completeness and identifying discrepancies."
    }
];

const TabContentLayout = ({ items, imageId }: { items: TabFeature[], imageId: string }) => {
    const mainImage = PlaceHolderImages.find(p => p.id === imageId);
    return (
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="max-w-md">
                <Accordion type="single" collapsible defaultValue={items[0].value}>
                    {items.map((item, index) => (
                        <AccordionItem key={item.value} value={item.value} className={index === items.length - 1 ? "border-b-0" : ""}>
                            <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                                <div className="flex items-center gap-3">
                                    <item.icon className="h-6 w-6 text-primary" />
                                    {item.title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pl-9">
                                <p className="text-muted-foreground">{item.description}</p>
                                {item.link && <Link href={item.link} className="text-primary font-semibold mt-4 inline-block hover:underline">Learn more</Link>}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="relative flex items-center justify-center">
               {mainImage && <Image src={mainImage.imageUrl} alt={mainImage.description} data-ai-hint={mainImage.imageHint} width={600} height={450} className="rounded-lg shadow-2xl" />}
            </div>
        </div>
    )
};


export function SecureSaveSection() {
    return (
        <section className="bg-background py-20" id="conclusion">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-tight">Unified Lab Operations, from Collection to Analysis</h2>
                </div>

                <Tabs defaultValue="setup" className="w-full">
                    <div className="flex justify-center">
                        <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4 h-auto">
                            <TabsTrigger value="setup" className="py-2.5">Configuration & Setup</TabsTrigger>
                            <TabsTrigger value="integration" className="py-2.5">Data Integration</TabsTrigger>
                            <TabsTrigger value="compliance" className="py-2.5">Quality & Compliance</TabsTrigger>
                            <TabsTrigger value="analytics" className="py-2.5">Reporting & Analytics</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="setup" className="mt-16">
                        <TabContentLayout items={setupItems} imageId="lab-management-conclusion" />
                    </TabsContent>
                    <TabsContent value="integration" className="mt-16">
                        <TabContentLayout items={integrationItems} imageId="tool-data-svc-2" />
                    </TabsContent>
                    <TabsContent value="compliance" className="mt-16">
                        <TabContentLayout items={complianceItems} imageId="why-us-compliant" />
                    </TabsContent>
                     <TabsContent value="analytics" className="mt-16">
                        <TabContentLayout items={analyticsItems} imageId="tool-data-svc-1" />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
