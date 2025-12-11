
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { CheckCircle, Building, Users, Link2 } from 'lucide-react';
import React from 'react';

export const metadata: Metadata = {
  title: 'Organization Management - SyMetric',
  description: 'A centralized module that defines and manages every organization involved in a clinical trial.',
};

const features = [
    {
        icon: Building,
        title: "Organization Directory",
        description: "A complete interface to list, add, edit, and manage all organizations linked to a customer, creating a unified directory for all trial participants.",
        details: [
            "List all organizations",
            "Add, edit, and deactivate profiles",
            "Store essential contact and address information"
        ]
    },
    {
        icon: Users,
        title: "Organization Types",
        description: "Automatically categorize organizations by their functional role, such as Sponsor, CRO, Site, Lab, or Warehouse, for streamlined downstream operations.",
        details: [
            "Sponsor & CRO",
            "Investigation Sites",
            "Central & Local Labs",
            "Warehouses & Retention Facilities"
        ]
    },
    {
        icon: Link2,
        title: "Customer-Organization Linking",
        description: "Securely link each organization to a specific customer (Sponsor or CRO) to maintain strict data confidentiality and role-based visibility across studies.",
        details: [
            "Link/delink organizations to customers",
            "Ensure data isolation between tenants",
            "Maintain a clean operational structure"
        ]
    }
];

const summaryPoints = [
    "Complete master list of all trial-related organizations",
    "Accurate categorization by type and operational role",
    "Secure linking and delinking to customers",
    "Centralized and controlled information for workflows",
    "Strong foundation for site, lab, IP, and sample management"
];


export default function OrganizationManagementPage() {

    return (
        <div>
            <SyMetricBusinessAI 
              title="Organization Management"
              subtitle="A centralized module that defines and manages every organization involved in a clinical trial—ensuring structured oversight, accurate association with customers, and seamless study operations."
            />
            
            <section>
                <div className="container">
                    <SectionTitle
                        title="Organization Master"
                        description="The Organization Master is the core catalogue that stores detailed information about all organizations participating in the clinical research lifecycle for each customer. It ensures transparency, traceability, and controlled access across studies."
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
                        description="The Organization Management module provides the administrative backbone for governing all entities in the clinical trial ecosystem, ensuring structured, secure, and efficient operations."
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
