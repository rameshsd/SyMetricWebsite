
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { LayoutGrid, ClipboardList, QrCode, GitPullRequest, Settings, ScanEye, type LucideIcon } from 'lucide-react';

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

    return (
        <div>
            <SyMetricBusinessAI 
              title="Label Management"
              subtitle="A complete end-to-end module designed to define, configure, generate, request, approve, and visually verify labels for subjects and samples in clinical trials."
            />
            
            <section>
                <div className="container">
                    <SectionTitle
                        title="Key Features"
                        description="Our Label Management system ensures accuracy, consistency, and compliance across all labeling workflows."
                        className="mb-16"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map(cap => (
                           <Card key={cap.title} className="bg-card p-6 rounded-lg border flex flex-col">
                               <CardHeader className="p-0">
                                   <div className="flex items-center gap-4">
                                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                         <cap.icon className="w-6 h-6 text-primary" />
                                      </div>
                                      <CardTitle className="text-lg">{cap.title}</CardTitle>
                                   </div>
                               </CardHeader>
                               <CardContent className="p-0 mt-4 flex-grow">
                                  <p className="text-muted-foreground text-sm">{cap.description}</p>
                               </CardContent>
                           </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="bg-secondary/50">
                <div className="container max-w-3xl mx-auto text-center">
                     <SectionTitle
                        title="Conclusion"
                        description="The Label Management module ensures complete accuracy and traceability across label creation, configuration, approval, and verification. With customizable templates, workflow-based label requests, barcode verification, and detailed configuration controls, the system supports high-compliance clinical trial operations with precision and flexibility."
                    />
                </div>
            </section>
        </div>
    );
}
