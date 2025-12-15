
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { LayoutGrid, ClipboardList, QrCode, GitPullRequest, Settings, ScanEye, type LucideIcon } from 'lucide-react';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { aiFaqItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Label Management - SyMetric',
  description: 'A complete end-to-end module designed to define, configure, generate, request, approve, and visually verify labels for subjects and samples in clinical trials.',
};

const capabilities: { icon: LucideIcon; title: string; description: string }[] = [
    {
        icon: LayoutGrid,
        title: "Label Management Overview",
        description: "Provides users with quick access to all labeling capabilities and a concise description of the module’s purpose."
    },
    {
        icon: ClipboardList,
        title: "Label Templates",
        description: "Create and manage templates that serve as the foundation for generating high-quality subject and sample labels."
    },
    {
        icon: QrCode,
        title: "Generate Labels",
        description: "Generate unique, study-compliant labels for subjects and samples, including vacutainers and aliquots."
    },
    {
        icon: GitPullRequest,
        title: "Label Request Workflow",
        description: "A structured workflow to request, review, and approve labels before use, with full status tracking."
    },
    {
        icon: Settings,
        title: "Label Configuration",
        description: "Configure how labels should be generated based on study requirements, including barcode types and verification workflows."
    },
    {
        icon: ScanEye,
        title: "Visual Verification",
        description: "Ensure the accuracy of printed labels through a secure, PIN-validated verification step."
    }
];

export default function LabelManagementPage() {

    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'Features', href: '#features' },
        { label: 'Conclusion', href: '#conclusion' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            <div id="overview">
                <SyMetricBusinessAI 
                  title="Label Management"
                  subtitle="A complete end-to-end module designed to define, configure, generate, request, approve, and visually verify labels for subjects and samples in clinical trials."
                  heroImageId="label-management-hero"
                />
            </div>
            <PageHeader title="Label Management" secondaryNav={secondaryNav} />
            <div>
                <AskAISection />

                <section id="features">
                    <div className="container">
                        <SectionTitle
                            title="Key Features"
                            description="Our Label Management system ensures accuracy, consistency, and compliance across all labeling workflows."
                            className="mb-16"
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
                         <SectionTitle
                            title="Conclusion"
                            description="The Label Management module ensures complete accuracy and traceability across label creation, configuration, approval, and verification. With customizable templates, workflow-based label requests, barcode verification, and detailed configuration controls, the system supports high-compliance clinical trial operations with precision and flexibility."
                        />
                    </div>
                </section>
                <FaqAccordion faqs={aiFaqItems} />
            </div>
        </>
    );
}
