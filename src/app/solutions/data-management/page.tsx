
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Library, Edit3, CheckSquare, DatabaseZap, Search, GitPullRequest, Lock, Share2, FileCheck2, UserCheck, Shield, FileOutput } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Management - SyMetric',
  description: 'End-to-end electronic data capture, validation, discrepancy handling, SDV, and export capabilities for regulatory-compliant clinical trials.',
};

const capabilities = [
    {
        icon: Library,
        title: "Global Library",
        description: "Centralized repository for reusable forms, controlled terminology, and CDISC variables to ensure consistency."
    },
    {
        icon: Edit3,
        title: "Study Data Designer",
        description: "A graphical drag-and-drop CRF builder with full version control and real-time preview."
    },
    {
        icon: CheckSquare,
        title: "Data Validation Engine",
        description: "Powerful rule builder for edit checks, field dynamics, calculations, and real-time notifications."
    },
    {
        icon: DatabaseZap,
        title: "Data Collection & eCRF Entry",
        description: "Intuitive interfaces for site users to enter CRF data with real-time validation and status tracking."
    },
    {
        icon: Search,
        title: "Discrepancy (Query) Management",
        description: "End-to-end lifecycle management for both automatic and manual data discrepancies."
    },
    {
        icon: GitPullRequest,
        title: "Source Data Verification (SDV)",
        description: "Dedicated workflow for SDV monitoring, including remote verification with source document upload."
    },
    {
        icon: UserCheck,
        title: "Data Management Review",
        description: "A secondary review layer for Data Managers with PIN validation and discrepancy-raising capabilities."
    },
    {
        icon: FileCheck2,
        title: "PI Signatures (eSignatures)",
        description: "21 CFR Part 11 compliant electronic signatures for CRFs with automatic revocation on data change."
    },
    {
        icon: Lock,
        title: "Data Freezing & Locking",
        description: "Securely freeze forms to prevent updates or apply a final lock before database export for analysis."
    },
    {
        icon: FileOutput,
        title: "Dataset & Export Engine",
        description: "Flexible engine to define and export customized, analysis-ready datasets in various formats."
    },
];

export default function DataManagementPage() {

    return (
        <div>
            <SyMetricBusinessAI 
              title="Data Management Module"
              subtitle="End-to-end electronic data capture, validation, discrepancy handling, SDV, and export capabilities for regulatory-compliant clinical trials."
            />
            
            <section>
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-16">Key Capabilities</h2>
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
                     <p className="text-lg text-muted-foreground">The Data Management module offers a complete, compliant, and configurable ecosystem for electronic clinical data handling—from CRF design to data collection, validation, SDV, discrepancy management, review, signatures, freezing, locking, and data export. It ensures high-quality, audit-ready data and efficient workflows for CRAs, Investigators, and Data Managers.</p>
                </div>
            </section>
        </div>
    );
}
