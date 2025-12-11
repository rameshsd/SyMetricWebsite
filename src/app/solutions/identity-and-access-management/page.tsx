
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Lock, User, UserCheck, Key, Bell, Trash2, Edit, Send } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';

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
    return (
        <div>
            <SyMetricBusinessAI
              title="Identity & Access Management (IAM) Module"
              subtitle="Centralized Access Control, Security Governance, and User Lifecycle Management for clinical trials."
            />
            
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

            <section className="bg-secondary/50">
                <div className="container">
                    <SectionTitle title="Detailed Features" className="mb-12 text-center" />
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
                     <SectionTitle
                        title="Enterprise-Grade Security and Governance"
                        description="The Identity & Access Management module ensures enterprise-grade security, strict compliance, and precise governance across multi-tenant, multi-study clinical environments. With robust user lifecycle management, configurable roles, advanced auditing, and strong credential workflows, IAM forms the backbone of secure operations in regulated clinical systems."
                     />
                </div>
            </section>
        </div>
    );
}
