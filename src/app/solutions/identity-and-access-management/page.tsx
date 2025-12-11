
import { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Lock, User, UserCheck, Key, Bell, Trash2, Edit, Send } from 'lucide-react';

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
    { title: "Role Definition & Configuration", description: "Create roles at System, Customer, or Study scopes with granular permissions." },
    { title: "Multiple Role Assignment", description: "Assign users multiple roles across different organizations and studies for flexible access modeling." },
    { title: "Secure User Onboarding", description: "A controlled process with email validation, automatic notifications, and auditable actions." },
    { title: "Credential & Account Management", description: "Includes password reset, PIN reset, and self-service recovery options." },
    { title: "Notification Preferences", description: "Users can manage email alerts for specific transactions, with all notifications centrally stored." },
    { title: "Full Lifecycle Control", description: "Securely edit, block, unblock, and delete users and profiles with mandatory reason capture and PIN authentication." },
];

export default function IamPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'iam-hero');

    return (
        <div>
            <PageHeader title="Identity & Access Management" breadcrumb={{ href: '/solutions', label: 'Solutions' }} />
            
            <section className="bg-secondary/50 py-20">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">Centralized Access Control, Security Governance, and User Lifecycle Management</h1>
                        <p className="text-lg text-muted-foreground">The Identity & Access Management (IAM) module provides a robust, secure, and fully governed environment for managing users, roles, permissions, and authentication across all customers, studies, and organizations.</p>
                        <p className="text-muted-foreground">Built for enterprise-scale, multi-tenant clinical trial systems, IAM ensures strong security, precise access control, complete auditability, and seamless administration.</p>
                    </div>
                    {heroImage && (
                        <div className="relative h-80 rounded-2xl overflow-hidden">
                            <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} fill className="object-cover" />
                        </div>
                    )}
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-16">Core Capabilities</h2>
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
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Detailed Features</h2>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                                    <span className="font-bold text-primary">{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{feature.title}</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section>
                <div className="container max-w-3xl mx-auto text-center">
                     <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security and Governance</h2>
                     <p className="text-lg text-muted-foreground">The Identity & Access Management module ensures enterprise-grade security, strict compliance, and precise governance across multi-tenant, multi-study clinical environments. With robust user lifecycle management, configurable roles, advanced auditing, and strong credential workflows, IAM forms the backbone of secure operations in regulated clinical systems.</p>
                </div>
            </section>
        </div>
    );
}
