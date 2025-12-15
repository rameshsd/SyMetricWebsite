
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, User, Users, Settings, Lock, Search, FileText, Activity, Droplets, FlaskConical, CircleDot, GitBranch, Repeat, Shield, UserCheck, UserX, Bot, Wand } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Subject Management - SyMetric',
  description: 'End-to-end control of subject lifecycle from screening to study completion.',
};

const capabilities = [
    {
        icon: Settings,
        title: "Subject Management Configuration",
        description: "Define study-specific rules for eligibility, stratification, treatment balancing, visit planning, and duplicate subject controls to ensure protocol adherence from the start."
    },
    {
        icon: User,
        title: "Subject Identification & Metadata",
        description: "Uniquely identify subjects with configurable numbering rules. Metadata validation ensures compliance with age, gender, stratification, and duplicate rules.",
    },
    {
        icon: Activity,
        title: "Subject Visits",
        description: "Manage the complete visit lifecycle, from automatic display of planned visits to handling early, late, skipped, or repeated visits with full audit trails.",
    },
    {
        icon: UserCheck,
        title: "Subject Screening",
        description: "Record screening outcomes across configured visits, with support for re-screening and automated notifications to keep your trial on track.",
    },
    {
        icon: Users,
        title: "Subject Enrolment",
        description: "Manage enrolment outcomes with validation against study and stratification caps, ensuring balanced and compliant trial populations.",
    },
    {
        icon: GitBranch,
        title: "Subject Randomization",
        description: "Utilize a robust, regulatory-compliant engine with support for system-generated or pre-generated randomization, treatment balancing, and various blinding modes.",
    },
    {
        icon: FlaskConical,
        title: "Drug Dispensing",
        description: "Ensure compliant dispensing aligned with IWRS rules, inventory awareness, and controls for active, valid, non-expired stocks.",
    },
    {
        icon: Repeat,
        title: "Drug Receipts",
        description: "Record the collection of used or unused drug packs with visit-level configuration, reason capture for non-returns, and full audit trails.",
    },
    {
        icon: UserX,
        title: "Subject Withdrawal",
        description: "Securely record subject withdrawal with date and configured reasons. All further transactions are automatically disallowed post-withdrawal.",
    },
    {
        icon: Shield,
        title: "Subject Unblinding",
        description: "Perform unblinding with strict, role-based controls, mandatory reason capture, and an optional approval workflow to maintain study integrity.",
    },
    {
        icon: CircleDot,
        title: "Subject Study Completion",
        description: "Record study completion with selectable outcomes, enforcing mandatory visit completion and maintaining full compliance documentation.",
    },
    {
        icon: Bot,
        title: "Subject Replacement & Revert",
        description: "Replace subjects while maintaining treatment arm integrity, and use role-based controls to revert stratification or other flags with complete audit trails.",
    }
];

export default function SubjectManagementPage() {

    const secondaryNav = [
        { label: 'AI solutions', href: '#' },
        { label: 'AI business resources', href: '#' },
        { label: 'Trustworthy AI', href: '#' },
        { label: 'News and insights', href: '#' },
        { label: 'AI in practice', href: '#' },
        { label: 'Customer stories', href: '#' },
        { label: 'FAQ', href: '#' },
    ];

    return (
        <div>
            <div id="overview">
                <SyMetricBusinessAI 
                  title="Subject Management Module"
                  subtitle="End-to-end control of subject lifecycle from screening to study completion."
                  heroImageId="subject-management-hero"
                />
            </div>
            <PageHeader title="Subject Management" secondaryNav={secondaryNav} />
            <AskAISection />

            <section id="capabilities">
                <div className="container">
                    <SectionTitle
                        title="Key Capabilities"
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

             <section id="summary" className="bg-secondary/50">
                <div className="container max-w-3xl mx-auto text-center">
                     <h2 className="text-3xl font-bold mb-4">Summary</h2>
                     <p className="text-lg text-muted-foreground">The Subject Management module delivers a complete, compliant, and highly configurable ecosystem for managing subjects across the entire study lifecycle. It ensures accuracy, protocol adherence, regulatory completeness, and operational efficiency—whether your study has 20 subjects or 20,000 across multiple regions.</p>
                </div>
            </section>
        </div>
    );
}
