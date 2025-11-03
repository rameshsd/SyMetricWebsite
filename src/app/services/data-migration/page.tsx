
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/PageHeader';
import { TechEdBanner } from '@/components/layout/TechEdBanner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ClipboardCheck,
  Wand,
  Replace,
  CheckCircle,
  Database,
  Users,
  GraduationCap,
  Code,
  FileText,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Migration Services - SyMetric',
  description: 'Migrating Clinical Studies Made Effortless with our expert data migration services.',
};

const dmServices: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: ClipboardCheck,
    title: 'Assessment',
    description: 'We perform a detailed Migration Assessment to determine the feasibility of study migration based on parameters like Study length, time, and budget.',
  },
  {
    icon: Wand,
    title: 'Data Cleaning',
    description: 'We ensure Study Data is complete and all open discrepancies are addressed by site personnel before migrating it into our SyMetric EDC system.',
  },
  {
    icon: Replace,
    title: 'Mapping Specification',
    description: 'A Data Mapping Specification maps source data with the target database, including all associated metadata like audit trails and electronic signatures.',
  },
  {
    icon: CheckCircle,
    title: 'Validation',
    description: 'Our risk-based validation procedures check for data completeness and accuracy according to industry best practices and standard QA methodologies.',
  },
  {
    icon: Database,
    title: 'Customized Database Design, Screen Testing, and Development',
    description: 'We develop and configure databases based on Study-Specific requirements and perform methodical regression testing to validate data integrity.',
  },
  {
    icon: Users,
    title: 'User Acceptance Testing',
    description: 'The migrated database undergoes UAT where all CRFs, edit checks, lab imports, coding tools, reports, and data extracts are tested.',
  },
  {
    icon: GraduationCap,
    title: 'Deployment and Training',
    description: 'We train personnel from clinical sites, CROs, and sponsors on our UAT system post-deployment and ensure role-based access for all users.',
  },
  {
    icon: Code,
    title: 'Scripts',
    description: 'We develop reusable Data Migration Scripts that transform data and can be applied to multiple studies, thoroughly reviewed for errors before migration.',
  },
  {
    icon: FileText,
    title: 'Data Migration Plan',
    description: 'Our Professional Database Architects develop a comprehensive plan to migrate Study Data using a series of standard processes for a seamless transition.',
  },
];

export default function DataMigrationPage() {
  const secondaryNav = [
    { label: 'Overview', href: '#overview' },
    { label: 'Process', href: '#process' },
    { label: 'Get Started', href: '#get-started' },
  ];

  return (
    <>
      <PageHeader
        title="Data Migration Services"
        breadcrumb={{ href: '/services', label: 'Services' }}
        secondaryNav={secondaryNav}
      />
      
      <div>
        <section id="overview" className="w-full min-h-[450px] flex items-center bg-primary/5 dark:bg-card py-20">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-primary font-semibold mb-2">Data Migration Services</p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Migrating Clinical Studies Made Effortless
              </h1>
              <p className="mt-6 max-w-[800px] text-lg text-muted-foreground md:text-xl/relaxed mx-auto">
                Our clinical management expertise, technological innovation, and Data Migration team’s proficiency has made migrating clinical studies from one database to another effortless. We offer a range of services including Study data transfers from legacy systems or other EDC tools, data export to Trial Analytics solutions, and data integration with devices and wearables.
              </p>
              <p className="mt-4 text-muted-foreground mx-auto max-w-prose">
                  Migrate your data onto our Cloud Solutions with ease while ensuring that Study Data remains integrated during the migration process. You can also leverage in-depth validations, extensive data reviews, and testing across our broad spectrum of solutions.
              </p>
            </div>
          </div>
        </section>
        
        <TechEdBanner />

        <section id="process">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Our Data Migration Process</h2>
              <p className="mt-2 text-muted-foreground">A structured approach to ensure a seamless and secure transition.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dmServices.map((service) => (
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

        <section id="get-started" className="bg-secondary/50">
          <div className="container">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Migrate Your Data?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-prose mx-auto">Contact our experts to plan your seamless transition to our platform.</p>
              <div className="flex gap-4 justify-center mt-8">
                <Button size="lg" asChild><Link href="/contact">Get a free assessment</Link></Button>
                <Button size="lg" variant="outline" asChild><Link href="/contact">Contact us</Link></Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
