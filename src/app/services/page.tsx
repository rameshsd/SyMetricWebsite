
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { solutions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { TechEdBanner } from '@/components/layout/TechEdBanner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, GanttChart, Server, GraduationCap, LifeBuoy, ChevronDown, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Our Services - SyMetric',
  description: 'A comprehensive range of services for clinical trials, from data management to project support.',
};

const services: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    link: string;
}[] = [
    {
        icon: Database,
        title: "Data Management",
        subtitle: "Clinical Data Management",
        description: "Ensure data quality and compliance with global standards using our high-quality and cost-effective Data Management services to support accurate collection, standardization, cleaning, and analysis of Study Data.",
        link: "/services/clinical-data-management"
    },
    {
        icon: GanttChart,
        title: "Project Management",
        subtitle: "Project Management",
        description: "Manage your Clinical Trial effectively — from consulting, scoping, and monitoring to reporting and complying with regulations. We support you with all aspects of project management right from early phase to late phase Clinical Trials.",
        link: "/services/project-management"
    },
    {
        icon: Server,
        title: "Data Migration",
        subtitle: "Data Migration",
        description: "Migrate your data onto our Cloud Solutions with ease while ensuring that Study Data remains integrated during the migration process. You can also leverage in-depth validations, extensive data reviews, and testing across our broad spectrum of solutions.",
        link: "/services/data-migration"
    },
    {
        icon: GraduationCap,
        title: "Training",
        subtitle: "Training",
        description: "Adopt our Platform and tools effortlessly using our comprehensive Online Training Services. Help your entire workforce get on board using tailor-made training modules that are designed for specific roles and responsibilities of a wide range of end users.",
        link: "/services/training"
    },
    {
        icon: LifeBuoy,
        title: "Support",
        subtitle: "Support",
        description: "Enjoy round-the-clock technical assistance and get your Operational queries answered with the fastest turnaround time. Reach us any time and fall back on a support system renowned for performance, speed, and reliability.",
        link: "/services/support"
    }
];

const secondaryNav = [
    { label: 'Overview', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Use cases', href: '#' },
    { label: 'Customer stories', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Get started', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

export default function ServicesPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'why-us-intuitive');
  return (
    <div className="bg-background">
      <div className="border-b">
        <div className="container">
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center text-sm">
                <Link href="#" className="flex items-center gap-1 text-muted-foreground hover:text-primary">
                    <ChevronDown className="h-4 w-4" />
                    Industries
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
                <span className="font-semibold text-foreground">Professional services</span>
            </div>
          </div>
           <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {secondaryNav.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className={tab.label === 'Overview' ? 'border-primary text-primary whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm' : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm'}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
        
      <section className="w-full bg-[#007075] text-white py-20 px-0">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Professional services
                    </h1>
                    <p className="mt-4 text-lg text-white/80 max-w-lg">
                        With professional services automation (PSA), you can run your business more efficiently and achieve smarter growth at scale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-200">Request a demo</Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#007075]">Read the Oxford Economics report</Button>
                    </div>
                </div>
                <div className="relative h-80 md:h-96">
                    {heroImage && (
                        <div className="absolute inset-0 clip-path-polygon-services-hero">
                            <Image 
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                data-ai-hint={heroImage.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
      </section>

        <TechEdBanner />

        <section>
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight">Here’s our comprehensive range of services</h2>
                    <p className="mt-2 text-muted-foreground">built on years of industry expertise</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card key={service.title} className="flex flex-col text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <CardHeader>
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-xl pt-4">{service.subtitle}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                            <div className="mt-4">
                                <Button variant="link" asChild>
                                    <Link href={service.link}>Know more</Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-secondary/50">
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
  );
}
