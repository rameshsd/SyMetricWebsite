
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { Users, FileText, LayoutGrid, Lock, CheckCircle, LucideIcon } from 'lucide-react';
import React from 'react';

export const metadata: Metadata = {
  title: 'Customer Management - SyMetric',
  description: 'Centralized module to manage all sponsor and CRO customers, ensuring controlled access, contract-based configurations, and seamless multi-study operations.',
};

const features: { icon: LucideIcon; title: string; description: string; details: string[] }[] = [
    {
        icon: LayoutGrid,
        title: "Customer Master",
        description: "The foundational registry of all Sponsor and CRO customers onboarded onto the platform.",
        details: [
            "List, add, edit, and soft-delete customer profiles.",
            "All information is confidential and accessible only to authorized SyMetric staff.",
            "Represents the contractual owner for trials, studies, sites, and users."
        ]
    },
    {
        icon: Users,
        title: "User Account Limits",
        description: "Define and enforce contractual limits on user accounts for each customer.",
        details: [
            "Set maximum total user accounts allowed.",
            "Configure maximum active user accounts permitted at any time.",
            "Ensures compliance with license tiers and subscription plans."
        ]
    },
    {
        icon: FileText,
        title: "Study Limits",
        description: "Manage the number of studies each customer can create based on their contract.",
        details: [
            "Configure the maximum number of studies per customer.",
            "Limits are automatically enforced during new study creation.",
            "Simplifies license management and ensures controlled scalability."
        ]
    }
];

const summaryPoints = [
    "Secure administration of sponsor/CRO profiles",
    "Contract-compliant limits on users & studies",
    "Centralized customer metadata",
    "Restricted visibility for SyMetric internal teams",
    "Controlled scalability and governance"
];


export default function CustomerManagementPage() {

    return (
        <div>
            <SyMetricBusinessAI 
              title="Customer Management"
              subtitle="A centralized module to manage all sponsor and CRO customers, ensuring controlled access, contract-based configurations, and seamless multi-study operations."
            />
            
            <section>
                <div className="container">
                    <SectionTitle
                        title="Key Features"
                        description="The Customer Management module provides the foundational tools for secure and compliant administration of all sponsor and CRO relationships on the platform."
                        className="mb-16"
                    />
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {features.map(feature => (
                           <Card key={feature.title} className="bg-card p-6 rounded-lg border flex flex-col">
                               <CardHeader className="p-0">
                                   <div className="flex items-center gap-4">
                                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                         <feature.icon className="w-6 h-6 text-primary" />
                                      </div>
                                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                                   </div>
                               </CardHeader>
                               <CardContent className="p-0 mt-4 flex-grow">
                                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                                   <ul className="mt-4 space-y-2 text-sm">
                                        {feature.details.map((detail, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                                <span className="text-muted-foreground">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                               </CardContent>
                           </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="bg-secondary/50">
                <div className="container max-w-3xl mx-auto text-center">
                     <SectionTitle
                        title="Summary"
                        description="The Customer Management module is the administrative backbone for managing sponsor and CRO accounts. It provides essential controls for enforcing contractual limits, securing customer data, and ensuring a governed, scalable multi-tenant environment."
                        className="mb-12"
                    />
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        {summaryPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-3 bg-background p-3 rounded-lg border">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="font-medium text-foreground">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
