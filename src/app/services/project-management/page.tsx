
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/PageHeader';
import { TechEdBanner } from '@/components/layout/TechEdBanner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  GanttChartSquare,
  ShieldCheck,
  ClipboardCheck,
  Database,
  GraduationCap,
  LifeBuoy,
  HelpCircle,
  Archive,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Management Services - SyMetric',
  description: 'Simplify, Streamline, and Speed-Up Your Clinical Trial with our expert project management services.',
};

const pmServices: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: GanttChartSquare,
    title: 'Project Management Plan',
    description: 'Our team of Project Experts help you devise structured project plans for decisive communication, project governance, risk assessment, and risk treatment, ensuring on-time delivery without budget overruns.',
  },
  {
    icon: ShieldCheck,
    title: 'Setup Validation',
    description: 'We deploy precise qualification procedures to validate the Study Database, with rigorous internal testing and stringent quality control practices to ensure regulatory compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'User Acceptance Testing',
    description: 'We ensure the database is configured to your requirements by devising a detailed test validation plan, test scripts, and maintaining standard documentation for UAT sign-off.',
  },
  {
    icon: Database,
    title: 'Study Database Setup and Configuration',
    description: 'Our team of designers develop and configure flexible study databases based on thorough protocol interpretation, allowing for mid-study changes without disrupting the trial.',
  },
  {
    icon: GraduationCap,
    title: 'Study-Specific Training',
    description: 'Our elaborate Training Modules include interactive instructor-led training, self-learning videos, and on-premise training to help your workforce use our solutions efficiently.',
  },
  {
    icon: LifeBuoy,
    title: 'Project Support',
    description: 'Consistent reviews and our advanced discrepancy manager help you identify data issues and ensure a clean database for final analysis, with data exports in multiple formats.',
  },
  {
    icon: HelpCircle,
    title: 'Support Center',
    description: 'We deploy a dedicated and highly accessible Support Team to each project for guiding, supporting, and empowering our customers to deliver strong Study outcomes on time.',
  },
  {
    icon: Archive,
    title: 'Project Closure',
    description: 'We follow well-defined procedures for maintaining and archiving Study documentation, verifying process completion, and generating insightful Study Reports.',
  },
];

export default function ProjectManagementPage() {
  const secondaryNav = [
    { label: 'Overview', href: '#overview' },
    { label: 'Offerings', href: '#offerings' },
    { label: 'Get Started', href: '#get-started' },
  ];

  return (
    <>
      <PageHeader
        title="Project Management Services"
        breadcrumb={{ href: '/services', label: 'Services' }}
        secondaryNav={secondaryNav}
      />
      
      <div className="pt-16">
        <section id="overview" className="w-full min-h-[450px] flex items-center bg-primary/5 dark:bg-card py-0">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-primary font-semibold mb-2">Project Management Services</p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Simplify, Streamline, and Speed-Up Your Clinical Trial
              </h1>
              <p className="mt-6 max-w-[800px] text-lg text-muted-foreground md:text-xl/relaxed mx-auto">
                We support you in all aspects of project management, right from early phase to late phase Clinical Trials. Our solutions are guided by well-defined standard operating procedures that comply with all applicable industry regulations and guidelines.
              </p>
            </div>
          </div>
        </section>
        
        <TechEdBanner />

        <section id="offerings">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Our Project Management Offerings</h2>
              <p className="mt-2 text-muted-foreground">End-to-end support to ensure your trial is a success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pmServices.map((service) => (
                <Card key={service.title} className="flex flex-col text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl pt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="get-started">
          <div className="container">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-prose mx-auto">Let our experts help you find the right services to accelerate your research.</p>
              <div className="flex gap-4 justify-center mt-8">
                <Button size="lg" asChild><a href="/contact">Get a demo</a></Button>
                <Button size="lg" variant="outline" asChild><a href="/contact">Contact us</a></Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
