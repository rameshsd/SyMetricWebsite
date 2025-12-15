
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, HardDrive, FileUp, CheckCircle, Database, Users, Shield, GitBranch } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Lab Data Management - SyMetric',
  description: 'End-to-end management of central & local lab configurations, reference ranges, and automated lab data imports for clinical trials.',
};

const capabilities = [
    {
        icon: Layers,
        title: "Lab Setup & Classification",
        description: "Define labs as Central or Local, associate local labs with sites, and ensure full traceability across all study environments."
    },
    {
        icon: HardDrive,
        title: "Lab Reference Range Management",
        description: "Maintain lab-specific normal ranges by age and gender, upload via templates, and automatically validate results to flag out-of-range values."
    },
    {
        icon: FileUp,
        title: "Lab Data Loads (External File Uploads)",
        description: "Seamlessly upload and map external lab data files (e.g., Excel) directly to subject CRFs, with automated data mapping and validation."
    },
    {
        icon: GitBranch,
        title: "Smart Batch Uploading",
        description: "Upload lab datasets frequently with options to overwrite or skip existing values, while automatically updating CRF status and generating audit trails."
    },
    {
        icon: Shield,
        title: "Compliance & Accuracy",
        description: "Ensure lab-defined reference range integrity, automated discrepancy flagging, and accurate lab-to-CRF data flow for cleaner data."
    },
    {
        icon: CheckCircle,
        title: "Full Traceability",
        description: "Maintain complete, regulatory-grade audit trails on every lab data update, ensuring full compliance and data integrity."
    }
];

export default function LabDataManagementPage() {

    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'Key Capabilities', href: '#capabilities' },
        { label: 'Conclusion', href: '#conclusion' },
    ];

    return (
        <div>
            <div id="overview">
                <SyMetricBusinessAI
                  title="Lab Data Management Module"
                  subtitle="End-to-end management of central & local lab configurations, reference ranges, and automated lab data imports for clinical trials."
                  heroImageId="lab-management-hero"
                />
            </div>
            <PageHeader title="Lab Management" secondaryNav={secondaryNav} />
            <AskAISection />

            <section id="capabilities">
                <div className="container">
                    <SectionTitle
                        title="Key Capabilities"
                        description="The module ensures all lab results are standardized, validated, and fully traceable."
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

             <section id="conclusion" className="bg-secondary/50">
                <div className="container max-w-3xl mx-auto text-center">
                     <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                     <p className="text-lg text-muted-foreground">The Lab Data Management module unifies lab setup, reference ranges, and data uploads—ensuring all lab results entering your clinical database are standardized, validated, and fully traceable. It delivers accurate lab-to-CRF data flow, faster decision-making, reduced data entry errors, and regulatory-grade auditability for both central and site-level lab operations.</p>
                </div>
            </section>
        </div>
    );
}
