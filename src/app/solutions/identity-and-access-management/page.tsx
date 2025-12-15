
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Lock, User, UserCheck, Key } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DetailedIamFeatures } from '@/components/solutions/DetailedIamFeatures';
import { AskAISection } from '@/components/shared/AskAISection';
import { AISubmenu } from '@/components/solutions/AI-submenu';

export const metadata: Metadata = {
  title: 'Identity & Access Management - SyMetric',
  description: 'Centralized Access Control, Security Governance, and User Lifecycle Management for clinical trials.',
};

const capabilities = [
    {
        title: "IAM Overview",
        description: "Unified dashboard with visibility into users, roles, sign-in activity, and security trends to detect anomalies early.",
        icon: Shield
    },
    {
        title: "Role Management",
        description: "Define, configure, and govern roles at System, Customer, or Study levels with granular permissions and access restrictions.",
        icon: Users
    },
    {
        title: "User Lifecycle Management",
        description: "A secure, multi-tenant framework for managing users from onboarding and profile assignment to blocking and credential resets.",
        icon: User
    },
    {
        title: "Secure Authentication",
        description: "Enforce unique user identity, manage credentials with self-service recovery, and support multiple identity providers.",
        icon: Lock
    },
    {
        title: "Multi-Profile Architecture",
        description: "Assign users multiple profiles, each with specific roles and permissions for different organizations or studies.",
        icon: UserCheck
    },
    {
        title: "Complete Auditability",
        description: "Maintain a full audit trail for every action, including role changes, user updates, and access assignments.",
        icon: Key
    }
];

const features = [
    { 
        value: "item-1",
        title: "Robust User Lifecycle Management", 
        description: "Manage users from onboarding and profile assignment to blocking and credential resets with a secure, multi-tenant framework." 
    },
    { 
        value: "item-2",
        title: "Configurable Roles & Granular Permissions", 
        description: "Define, configure, and govern roles at System, Customer, or Study levels with fine-grained permissions and access restrictions." 
    },
    { 
        value: "item-3",
        title: "Advanced Auditing", 
        description: "Maintain a full, unalterable audit trail for every critical action, including role changes, user updates, and access assignments, ensuring full traceability." 
    },
    { 
        value: "item-4",
        title: "Strong Credential Workflows", 
        description: "Enforce unique user identity and manage credentials securely with features like self-service password/PIN recovery and multi-factor authentication support." 
    },
];

export default function IamPage() {
    const summaryImage = PlaceHolderImages.find(p => p.id === 'iam-summary');

    return (
        <div>
            <SyMetricBusinessAI
              title="Identity & Access Management (IAM) Module"
              subtitle="Centralized Access Control, Security Governance, and User Lifecycle Management for clinical trials."
              heroImageId="iam-hero"
            />
            <AISubmenu />
            <AskAISection />

            <section>
                <div className="container">
                    <SectionTitle
                        title="Core Capabilities"
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

            <DetailedIamFeatures />
            
            <section className="bg-secondary/50">
                <div className="container">
                    <div className="text-left mb-12">
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Enterprise-Grade Security and Governance</p>
                        <h2 className="text-4xl font-bold tracking-tight mt-2">The Backbone of Secure Clinical Operations</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="relative">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                                {features.map((feature) => (
                                     <AccordionItem value={feature.value} key={feature.value} className="border-b-0">
                                        <div className="flex gap-4">
                                            <div className="pt-4">
                                                <div className="w-1 h-full bg-border transition-colors data-[state=open]:bg-primary"></div>
                                            </div>
                                            <div className="flex-1">
                                                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left py-4">
                                                    {feature.title}
                                                </AccordionTrigger>
                                                <AccordionContent className="pb-8 pr-4">
                                                    <p className="text-muted-foreground">{feature.description}</p>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                     </AccordionItem>
                                ))}
                            </Accordion>
                            <div className="mt-8">
                                <Button asChild>
                                    <Link href="/contact">
                                        Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center">
                            <div className="relative w-full aspect-video">
                                {summaryImage && (
                                <Image
                                    src={summaryImage.imageUrl}
                                    alt={summaryImage.description}
                                    data-ai-hint={summaryImage.imageHint}
                                    fill
                                    className="rounded-2xl object-cover shadow-lg"
                                />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
