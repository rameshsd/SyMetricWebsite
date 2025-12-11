
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, HardDrive, FileUp, CheckCircle, Database, Users, Shield, GitBranch } from 'lucide-react';

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

    return (
        <div>
            <SyMetricBusinessAI
              title="Lab Data Management Module"
              subtitle="End-to-end management of central & local lab configurations, reference ranges, and automated lab data imports for clinical trials."
            />
            
            <section>
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">Key Capabilities</h2>
                        <p className="mt-2 text-muted-foreground">The module ensures all lab results are standardized, validated, and fully traceable.</p>
                    </div>
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
                     <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                     <p className="text-lg text-muted-foreground">The Lab Data Management module unifies lab setup, reference ranges, and data uploads—ensuring all lab results entering your clinical database are standardized, validated, and fully traceable. It delivers accurate lab-to-CRF data flow, faster decision-making, reduced data entry errors, and regulatory-grade auditability for both central and site-level lab operations.</p>
                </div>
            </section>
        </div>
    );
}
