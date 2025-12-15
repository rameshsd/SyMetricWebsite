
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import {
    Lock,
    Server,
    Replace,
    Gauge,
    RefreshCw,
    History,
    BookOpen,
    Zap,
    CheckCircle,
    Send,
    Bell,
    Check,
    Truck,
    Archive,
    Pill,
    Settings,
    FileText,
    type LucideIcon,
} from 'lucide-react';
import { ReactNode } from 'react';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Data Services & Integration - SyMetric',
  description: 'Seamlessly connect your clinical ecosystem with a configurable, secure, and scalable integration layer.',
};

const coreCapabilities = [
    {
        icon: Lock,
        title: "Authentication & Security",
        description: "Supports OAuth 2.0, API Keys, JWT, and Basic Auth with encrypted storage and full compliance."
    },
    {
        icon: Server,
        title: "API Endpoint Management",
        description: "Configure and version base URLs and endpoints to future-proof integrations as vendor APIs evolve."
    },
    {
        icon: Replace,
        title: "Data Mapping & Transformation",
        description: "A powerful engine for field-level mapping, data type conversions, and payload reshaping."
    },
    {
        icon: Gauge,
        title: "Rate Limiting & Throttling",
        description: "Configurable rate limits and intelligent throttling to ensure stable, compliant API communication."
    },
    {
        icon: RefreshCw,
        title: "Error Handling & Auto-Retry",
        description: "Robust error management layer that automatically retries transient errors and notifies on persistent failures."
    },
    {
        icon: History,
        title: "Logging & Monitoring",
        description: "Full traceability with API request/response logs, payload history, and performance analytics."
    },
    {
        icon: BookOpen,
        title: "Documentation & Usability",
        description: "Includes an API catalog, integration templates, and setup wizards to reduce onboarding time."
    },
    {
        icon: Zap,
        title: "Scalability & Performance",
        description: "High-throughput architecture built to support enterprise-level clinical trials with multi-threaded processing."
    }
];

const sapFlows = [
    { icon: Send, title: "ShipmentRequest", description: "IRT sends request to ICSM." },
    { icon: Bell, title: "ShipmentNotification", description: "ICSM acknowledges receipt." },
    { icon: Check, title: "ShipmentConfirmation", description: "ICSM confirms approval." },
    { icon: Truck, title: "ClinicalTrialsDespatchAdvice", description: "ICSM sends dispatch info." },
    { icon: Archive, title: "ClinicalTrialsReceivingAdvice", description: "IRT sends receipt advice." },
    { icon: Pill, title: "DispensingAdvice", description: "IRT sends dispensing details." },
    { icon: Settings, title: "ClinicalTrialsKitStatusChange", description: "Cross-platform status sync." },
    { icon: FileText, title: "Inventory Reports", description: "On-demand inventory alignment." },
]

interface DetailCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const DetailCard = ({ icon: Icon, title, description }: DetailCardProps) => (
    <div className="flex items-start gap-4 group">
        <div className="flex-shrink-0 p-4 rounded-xl bg-blue-100 dark:bg-blue-900/20">
            <Icon className="h-16 w-16 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
        </div>
        <div>
            <h3 className="text-lg font-bold group-hover:text-primary">{title}</h3>
            <p className="text-muted-foreground mt-1">{description}</p>
        </div>
    </div>
);

export default function DataServicesPage() {
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
                  title="Data Services (API & Integration Management)"
                  subtitle="Seamlessly connect your clinical ecosystem with a configurable, secure, and scalable integration layer."
                  heroImageId="data-services-hero"
                />
            </div>
            <PageHeader title="Data Services" secondaryNav={secondaryNav} />
            <AskAISection />

            <section id="capabilities">
                <div className="container">
                    <SectionTitle
                        title="Core Integration Capabilities"
                        description="A unified framework for all clinical system integrations, designed for security, scalability, and ease of use."
                        className="mb-16"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreCapabilities.map(cap => (
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

             <section id="integrations" className="bg-secondary/50">
                <div className="container">
                    <SectionTitle
                        title="Supported External System Integrations"
                        description="Ready-to-use integration templates for industry-leading clinical platforms."
                        className="mb-12"
                    />
                     <div className="flex flex-wrap justify-center gap-4">
                        {['Veeva CDMS', 'Veeva CTMS', 'Medrio EDC', 'SAP ICSM'].map(system => (
                            <div key={system} className="flex items-center gap-2 bg-background border rounded-lg px-4 py-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="font-semibold">{system}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="sap-icsm-flows">
                <div className="container">
                    <SectionTitle
                        title="SAP ICSM – Detailed Integration Flows"
                        description="Our integration with SAP ICSM supports complete supply chain automation through a series of bi-directional API calls."
                        className="mb-16"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {sapFlows.map(flow => (
                             <DetailCard key={flow.title} icon={flow.icon} title={flow.title} description={flow.description} />
                        ))}
                    </div>
                </div>
            </section>

             <section className="bg-secondary/50">
                <div className="container max-w-3xl mx-auto text-center">
                     <SectionTitle
                        title="Conclusion"
                        description="The Data Services module provides a comprehensive, enterprise-ready integration framework designed specifically for clinical trials. It eliminates manual data transfers, streamlines multi-system collaboration, reduces operational errors, and ensures regulatory compliance across all transactional workflows."
                    />
                </div>
            </section>
        </div>
    );
}
