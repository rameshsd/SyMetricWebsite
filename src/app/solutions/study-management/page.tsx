
import { Metadata } from 'next';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCog, GitBranch, Shield, Eye, FileUp, Settings, ArrowRight, MessageSquare } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { studyManagementFaq } from '@/lib/data';


export const metadata: Metadata = {
  title: 'Study Management - SyMetric',
  description: 'Centralized setup, configuration, versioning, and governance of clinical studies from initiation to closure.',
};

const capabilities = [
    {
        icon: FileCog,
        title: "Study Definition & Configuration",
        description: "Define study protocols, treatment arms, visit schedules, and operational parameters in a centralized, version-controlled environment."
    },
    {
        icon: Settings,
        title: "Study-Level Administration",
        description: "Configure system-wide settings for notifications, medical dictionaries, and user roles on a per-study basis."
    },
    {
        icon: GitBranch,
        title: "Study Version Management",
        description: "Manage multiple versions of a study build, ensuring a smooth transition for protocol amendments with full audit trails."
    },
    {
        icon: Shield,
        title: "Governance & Access Control",
        description: "Link studies to specific customers (Sponsors/CROs), ensuring strict data segregation and controlled user access."
    },
    {
        icon: Eye,
        title: "Live & Training Modes",
        description: "Operate studies in 'Live' mode for real data or 'Training' mode for UAT and user education, with clear data separation."
    },
    {
        icon: FileUp,
        title: "Metadata & Configuration Exports",
        description: "Export comprehensive study metadata and configuration details into readable formats for documentation and archival."
    },
];


const summaryPoints = [
    {
        id: "item-1",
        title: "Single Source of Truth",
        description: "Establishes a centralized, authoritative source for all study-related configurations, ensuring consistency."
    },
    {
        id: "item-2",
        title: "Protocol Amendment Agility",
        description: "Seamlessly manage mid-study changes with robust version control, reducing downtime and ensuring a smooth transition."
    },
    {
        id: "item-3",
        title: "Enhanced Governance",
        description: "Enforce strict access controls and data segregation between studies and customers, ensuring compliance."
    },
    {
        id: "item-4",
        title: "Reduced Redundancy",
        description: "Promote reusability of configurations across studies, saving time and minimizing setup errors."
    }
];


export default function StudyManagementPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'study-management-hero');
    const summaryImage = PlaceHolderImages.find(p => p.id === 'study-management-hero');

    const secondaryNav = [
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Summary', href: '#summary' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            <section className="w-full py-12 md:py-16 lg:py-20 bg-[#f5f3ff] dark:bg-card">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[400px]">
                  <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                      Study Management
                    </h1>
                    <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
                      Centralized setup, configuration, versioning, and governance of clinical studies from initiation to closure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" asChild>
                        <Link href="/request-demo">Request a demo</Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/solutions">Explore Solutions</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-[300px] lg:h-[400px] w-full rounded-xl overflow-hidden shadow-md">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Study Management"
                            fill
                            className="object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                  </div>
                </div>
              </div>
            </section>
            
            <PageHeader title="Study Management" secondaryNav={secondaryNav} />
            <div id="overview">
                 <section className="bg-primary text-primary-foreground">
                    <div className="container">
                        <div className="flex items-start gap-6">
                            <div className="p-3 bg-white/20 rounded-lg">
                                <MessageSquare className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">SyMetric Solutions</h2>
                                <p className="text-primary-foreground/80 mt-1">Explore our documentation or contact our support team for questions about our solutions.</p>
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
                            <h2 className="text-4xl font-bold tracking-tight mt-2">The Control Center for Clinical Trials</h2>
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
                <FaqAccordion faqs={studyManagementFaq} />
            </div>
        </>
    );
}
