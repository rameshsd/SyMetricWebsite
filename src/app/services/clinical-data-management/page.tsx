
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/PageHeader';
import { TechEdBanner } from '@/components/layout/TechEdBanner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DatabaseZap,
  FileText,
  AlertTriangle,
  FlaskConical,
  Code,
  Laptop,
  Database,
  ShieldCheck,
  FileEdit,
  Lock,
  type LucideIcon,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Clinical Data Management - SyMetric',
  description: 'High-quality and cost-effective Data Management services to support accurate collection, standardization, cleaning, and analysis of Study Data.',
};

const cdmServices: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: DatabaseZap,
    title: 'Study Build Activities',
    description: 'Build studies faster with ease using dynamic visit structures, workflows, version management, and calculated subject scheduling features of our powerful and flexible Study setup module.',
  },
  {
    icon: FileText,
    title: 'Data Management Plan',
    description: 'Devise and develop a comprehensive plan to manage your data efficiently, adhering to defined quality standards outlined in ICH-GCP Guidelines.',
  },
  {
    icon: AlertTriangle,
    title: 'SAE Reconciliation',
    description: 'Retrieve Adverse Events (AEs) and Serious Adverse Events (SAEs) reported in the study faster than ever by using our robust data extraction methods.',
  },
  {
    icon: FlaskConical,
    title: 'Lab Data Management',
    description: 'Upload list of reference ranges specific to each laboratory test parameter with ease and ensure the capture of accurate lab result values within range in the system through Data Cleaning.',
  },
  {
    icon: Code,
    title: 'Programming and Validation',
    description: 'Be assured of the validity and accuracy of Study data, whether simple or complex, using real-time edit checks programmed by our expert team.',
  },
    {
    icon: Laptop,
    title: 'Online Training',
    description: 'Learn about SyMetric products anywhere, anytime with our interactive Online Training Solution that comes with how-to videos, step-by-step instructions, and questionnaires.',
  },
  {
    icon: Database,
    title: 'Customized Database Design, Screen Testing, and Development',
    description: 'Validate data integrity using configured databases developed by us based on study-specific requirements and our methodical regression testing.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance and Quality Control',
    description: 'Enjoy high-quality processes at all stages of the Study, from initiation to the late phase, as our gold standard procedures are governed by well-defined policies.',
  },
  {
    icon: FileEdit,
    title: 'CRF Designing and Data Entry Guidelines',
    description: 'Get your eCRFs designed by our team of experts, complemented with a Customer-Specific CRF Library and document on study-specific eCRF data entry guidelines.',
  },
  {
    icon: Lock,
    title: 'Database Lock, Data Exports, and Data Archival',
    description: 'Identify data issues and ensure a clean and complete database for final analysis using our solutions such as data exports (.csv and .xls formats) and database lock.',
  },
];

export default function ClinicalDataManagementPage() {
  const secondaryNav = [
    { label: 'Overview', href: '#overview' },
    { label: 'Offerings', href: '#offerings' },
    { label: 'Get Started', href: '#get-started' },
  ];

  const heroImage = PlaceHolderImages.find(p => p.id === 'cdm-hero');

  return (
    <>
      <PageHeader
        title="Clinical Data Management"
        breadcrumb={{ href: '/services', label: 'Services' }}
        secondaryNav={secondaryNav}
      />
      
      <div>
        <section id="overview" className="w-full relative min-h-[450px] flex items-center justify-center text-center text-white py-20">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                SyMetric — Smarter Data Management for Better Outcomes
              </h1>
              <p className="mt-6 max-w-[800px] text-lg text-white/90 md:text-xl/relaxed mx-auto">
                Data forms the crux of the clinical research process. It takes efficient solutions to manage and retain the quality and statistical soundness of data generated from Clinical Trials. Our cost-effective and first-rate Data Management services enable accurate collection, standardization, cleaning, and analysis of Study Data.
              </p>
            </div>
          </div>
        </section>
        
        <TechEdBanner />

        <section id="offerings">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Our Data Management Offerings</h2>
              <p className="mt-2 text-muted-foreground">Comprehensive services to ensure data quality and integrity at every step.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cdmServices.map((service) => (
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
