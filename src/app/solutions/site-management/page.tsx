
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Lock, FileCheck } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';

export const metadata: Metadata = {
  title: 'Site Management - SyMetric',
  description: 'Centralized control of sites across global clinical trials.',
};

const capabilities = [
    {
        title: "Multi-Regional Site Governance",
        description: "The module ensures each site is aligned with study-specific operational parameters, local regulatory needs, and recruitment expectations, ensuring accurate configuration across multiple protocols."
    },
    {
        title: "Study-Specific Site Configuration",
        description: "Define operational metadata for each site, including subject recruitment targets, logistics rules, and stock management to enable precise planning and prevent stock-outs."
    },
    {
        title: "Access Control & Role-Based Site Visibility",
        description: "Supports fine-grained, role-based restrictions, ensuring users from CROs or site teams access only the sites relevant to their responsibilities, enhancing data privacy and operational control."
    },
    {
        title: "GDPR-Sensitive Site Handling",
        description: "For EU-region sites, the system supports GDPR-compliant configurations by restricting sensitive subject fields and ensuring study teams collect only permissible metadata."
    },
    {
        title: "Dynamic Site Status & Workflow Control",
        description: "Every site operates under clearly defined statuses (Active, Inactive). Status changes trigger automated notifications to all authorized users, ensuring operational transparency."
    },
    {
        title: "Lab Integration & Local Lab Associations",
        description: "Supports associating local labs with a site, ensuring accurate sample routing, clear responsibility allocation, and smooth logistics integration for seamless operations."
    }
];

const benefits = [
    {
        icon: CheckCircle,
        title: "Global Consistency with Study-Level Flexibility",
        description: "Define site rules per study without impacting configurations in other trials."
    },
    {
        icon: ShieldCheck,
        title: "Strong Governance & Operational Control",
        description: "Ensure every site operates within predefined limits and compliance frameworks."
    },
    {
        icon: Lock,
        title: "Secure & Role-Based Access",
        description: "Protect sensitive site and subject data across CROs, sponsors, and site teams."
    },
    {
        icon: FileCheck,
        title: "GDPR-Ready for EU Operations",
        description: "Compliance is built-in for EU-specific data restrictions."
    }
];


export default function SiteManagementPage() {

    return (
        <div>
            <SyMetricBusinessAI 
              title="Centralized Control of Sites Across Global Clinical Trials"
              subtitle="The Site Management module provides a unified framework to configure, govern, and monitor every site participating in a clinical study."
            />
            
            <section>
                <div className="container">
                    <SectionTitle title="Key Capabilities" className="mb-12 text-center" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map(cap => (
                            <Card key={cap.title} className="group flex flex-col items-start text-left p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/20 mb-4">
                                    <div className="h-16 w-16 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hospital"><path d="M12 6v4"/><path d="M14 8h-4"/><path d="M14 18V9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v9"/><path d="M18 14h-4"/><path d="M16 12v4"/><path d="M22 18h-2a2 2 0 0 0-2 2v2H6v-2a2 2 0 0 0-2-2H2"/></svg>
                                    </div>
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

            <section className="bg-secondary/50">
                <div className="container">
                    <SectionTitle title="Benefits of the Site Management Module" className="mb-12 text-center" />
                     <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {benefits.map(benefit => (
                            <div key={benefit.title} className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 p-4 rounded-xl bg-blue-100 dark:bg-blue-900/20">
                                    <benefit.icon className="w-16 h-16 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold group-hover:text-primary">{benefit.title}</h3>
                                    <p className="text-muted-foreground mt-1">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section>
                <div className="container max-w-3xl mx-auto text-center">
                     <h2 className="text-3xl font-bold mb-4">Purpose of the Module</h2>
                     <p className="text-lg text-muted-foreground">The Site Management module is the backbone for site-level governance in clinical trials. It ensures every participating site—regardless of region—operates with the correct rules, permissions, logistics controls, and regulatory requirements. This leads to higher operational efficiency, reduced risks, and smoother study execution.</p>
                </div>
            </section>
        </div>
    );
}
