
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { BookOpen, Edit, LifeBuoy, GraduationCap } from 'lucide-react';
import { AskAISection } from '@/components/shared/AskAISection';
import { AISubmenu } from '@/components/solutions/AI-submenu';

export const metadata: Metadata = {
  title: 'Help & Support - SyMetric',
  description: 'Empowering users with instant assistance, guided learning, and efficient issue resolution for a seamless experience across the platform.',
};

const capabilities = [
    {
        icon: BookOpen,
        title: "Online Help Content",
        description: "Access clear, step-by-step guidance from anywhere in the system, automatically loading relevant articles based on your current task."
    },
    {
        icon: Edit,
        title: "Support Request Data Correction Tool",
        description: "A controlled utility allowing authorized teams to modify critical study data with proper approvals, ensuring compliance and data integrity."
    },
    {
        icon: LifeBuoy,
        title: "Support Requests (Ticketing System)",
        description: "A centralized system for logging, tracking, and resolving user issues with automated notifications and approval workflows."
    },
    {
        icon: GraduationCap,
        title: "Digital Learning",
        description: "A modern, self-paced training environment with interactive modules and guides to help users master the system effectively."
    }
];

export default function HelpSupportPage() {

    return (
        <div>
            <SyMetricBusinessAI 
              title="Help & Support"
              subtitle="Empowering users with instant assistance, guided learning, and efficient issue resolution for a seamless experience across the platform."
            />
            <AISubmenu />
            <AskAISection />

            <section>
                <div className="container">
                    <SectionTitle
                        title="Key Features"
                        description="Our Help & Support module ensures users have the right tools at the right time."
                        className="mb-16"
                    />
                    <div className="grid md:grid-cols-2 gap-8">
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
                <div className="container max-w-3xl mx-auto text-center">
                     <SectionTitle
                        title="Conclusion"
                        description="The Help & Support module ensures that users never feel stuck. With automated help content, structured support workflows, data correction tools, and digital learning resources, teams can operate confidently and efficiently."
                    />
                </div>
            </section>
        </div>
    );
}
