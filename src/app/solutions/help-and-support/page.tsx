
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { BookOpen, Edit, LifeBuoy, GraduationCap } from 'lucide-react';

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
            
            <section>
                <div className="container">
                    <SectionTitle
                        title="Key Features"
                        description="Our Help & Support module ensures users have the right tools at the right time."
                        className="mb-16"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                     <SectionTitle
                        title="Conclusion"
                        description="The Help & Support module ensures that users never feel stuck. With automated help content, structured support workflows, data correction tools, and digital learning resources, teams can operate confidently and efficiently."
                    />
                </div>
            </section>
        </div>
    );
}
