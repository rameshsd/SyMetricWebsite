
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  FileText,
  Users,
  ShieldCheck,
  Package,
  Truck,
  Database,
  FlaskConical,
  User,
  TestTube,
  Book,
  FileLock,
  Beaker,
  Settings,
  Headset,
  LucideIcon,
  CheckCircle,
} from 'lucide-react';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Reports Module - SyMetric',
  description: 'A unified reporting hub that delivers real-time, study-wide insights across all clinical trial operations.',
};

const generalCapabilities = [
    "Export reports into Excel and PDF formats.",
    "All study-specific reports include Study Name, Description, Report Name, Generator, and Timestamp.",
    "High-performance report generation for large studies.",
    "Accurate, validated data aligned with clinical, IRT, EDC, and CTMS workflows."
];

const reportCategories: { icon: LucideIcon; title: string; reports: string[] }[] = [
    { icon: FileText, title: "Study & Site Reports", reports: ["Study Status Report", "Study Status Log Report", "Site Status Report", "Site Summary Report"] },
    { icon: Users, title: "User & Access Control Reports", reports: ["User Report", "User Profile Report", "User Role Report", "Deleted User Reports (User, Role, Profile)"] },
    { icon: ShieldCheck, title: "Audit Trail & Support Reports", reports: ["Audit Trail Report", "Support Request Report"] },
    { icon: Package, title: "Inventory & Stock Reports", reports: ["Inventory Status Report", "Inventory Detailed Report", "Inventory Status Log Report"] },
    { icon: Truck, title: "Shipment Reports", reports: ["Shipment Request Status & Summary", "Shipment Detailed & Log Reports", "Shipment Temperature Log Report", "Shipment Retention Reports"] },
    { icon: Database, title: "Data Management & CRF Reports", reports: ["CRF Matrix Report", "Rule List Report", "Data Management Report", "Discrepancy Reports", "CRF & Form Summary Reports"] },
    { icon: FlaskConical, title: "Medical Coding Reports", reports: ["Medical Coding Status/Summary/Detailed Reports", "Medical Coding Log Report"] },
    { icon: User, title: "Subject Reports", reports: ["Lifecycle & Status Reports", "Visit & Activity Reports", "Randomization & Stratification Reports", "Stock & IP Reports", "Label & Sample Reports"] },
    { icon: Beaker, title: "Laboratory Reports", reports: ["Lab Reference Range Report", "Lab Ranges Report"] },
    { icon: Settings, title: "Rule, Metadata & Terminology Reports", reports: ["Metadata Report", "Code List Report", "Controlled Terminology Report", "Rules List Report", "Annotated Form Report", "CRF Metadata Report"] },
    { icon: FileText, title: "PDF & CRF Reports", reports: ["Bookmarked PDF Report", "Annotated Form Report", "CRF Metadata Report"] },
    { icon: FileLock, title: "Freeze, Lock, Signature & Review Reports", reports: ["Form Freeze/Lock Reports", "Verification/Signature Reports", "Data Review Reports"] },
    { icon: TestTube, title: "Sample Management Reports", reports: ["Sample Inventory Status & Log Reports", "Sample Shipment Reports", "Sample Label Reports"] },
    { icon: Headset, title: "Support & Data Correction Reports", reports: ["Support Request Data Correction Log Report", "Subject Biometric Re-registration Report"] },
];

export default function ReportsModulePage() {

    const secondaryNav = [
        { label: 'AI solutions', href: '#ai-solutions' },
        { label: 'AI business resources', href: '#ai-resources' },
        { label: 'Trustworthy AI', href: '#trustworthy-ai' },
        { label: 'News and insights', href: '#news-insights' },
        { label: 'AI in practice', href: '#ai-practice' },
        { label: 'Customer stories', href: '#customer-stories' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <div>
            <div id="overview">
                <SyMetricBusinessAI 
                  title="Reports Module"
                  subtitle="A unified reporting hub that delivers real-time, study-wide insights across sites, subjects, inventory, shipments, data management, medical coding, CRFs, and more."
                  heroImageId="reports-hero"
                />
            </div>
            <PageHeader title="Reports" secondaryNav={secondaryNav} />
            <AskAISection />

            <section id="capabilities">
                <div className="container">
                    <SectionTitle
                        title="General Reporting Capabilities"
                        description="Our Reporting module offers a robust and comprehensive framework with the following core features:"
                        className="mb-12"
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                        {generalCapabilities.map((cap, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-muted-foreground">{cap}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section id="report-categories" className="bg-secondary/50">
                <div className="container max-w-4xl mx-auto">
                    <SectionTitle
                        title="Categories of Reports"
                        description="An extensive suite of reports grouped across operational, clinical, supply, compliance, and subject-level activities."
                        className="mb-16"
                    />
                    <Accordion type="single" collapsible className="w-full">
                        {reportCategories.map((category, index) => (
                            <AccordionItem value={`item-${index}`} key={category.title}>
                                <AccordionTrigger>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                                            <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" strokeWidth={2.5}/>
                                        </div>
                                        <span className="font-semibold text-lg">{category.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-10 space-y-2 text-muted-foreground">
                                        {category.reports.map(report => <li key={report}>{report}</li>)}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

             <section>
                <div className="container max-w-3xl mx-auto text-center">
                     <SectionTitle
                        title="Conclusion"
                        description="The Reports Module is one of the most comprehensive reporting ecosystems in the clinical trial technology landscape. It provides full transparency, multi-level auditability, real-time insights, and regulatory-grade reporting for every stakeholder."
                    />
                </div>
            </section>
        </div>
    );
}
