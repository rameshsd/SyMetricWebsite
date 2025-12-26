
'use client';

import { solutions } from '@/lib/data';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Rocket, Shuffle, Database, ClipboardList, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const pillars = [
    {
        icon: Rocket,
        title: 'Accelerate',
        description: 'ACCELERATE clinical trials with streamlined and transparent time-to-market solutions'
    },
    {
        icon: Shuffle,
        title: 'Integrate',
        description: 'INTEGRATE our solutions into your existing environment, as per Life Sciences best practices'
    },
    {
        icon: CheckCircle,
        title: 'Trust',
        description: 'TRUST our solutions, for they are ISO 9001, ISO 27001, ICH-GCP, 21 CFR Part 11 (USFDA), HIPAA, GDPR (EU) compliant'
    },
    {
        icon: TrendingUp,
        title: 'Future Proof',
        description: 'FUTURE-PROOF your research through continuous innovation and collaboration supported by our cutting-edge solutions'
    }
];

const featuredSolutions = [
    {
        id: 'ctp',
        icon: Rocket,
        title: 'SyMetric Clinical Trial Platform',
        description: 'Built for end-to-end Clinical Trials, our Cloud-Based Platform is fully modularized, allowing you to choose the right solution that can be configured to suit your needs. Designed, developed, and deployed by us, our all-encompassing set of solutions is built to work seamlessly with your existing ecosystem and processes. It covers various processes in Clinical Trials – including Study Master Management, Subject Management, Clinical Supplies Management, Data Management, and Medical Coding. With SyMetric Clinical Trial Platform, you can manage, monitor, analyze, and report with ease by configuring the solutions to your specific needs – whether you are a Pharmaceutical Sponsor, Clinical Research Organization (CRO), or from the Academia.',
        link: '/solutions/clinical-trial-platform',
        linkText: 'Explore our platform'
    },
    {
        id: 'irt-iwrs',
        icon: Shuffle,
        title: 'IRT/IWRS',
        description: 'Developed with years of strong industry expertise and tested to deliver against the most complex Clinical Trial designs, our IRT/IWRS solution is the most comprehensive one in the market today.',
        link: '/solutions/irt-iwrs',
        linkText: 'Know more'
    },
    {
        id: 'edc',
        icon: Database,
        title: 'EDC',
        description: 'The Electronic Data Capture solution includes well-designed tools that transform the Data Management processes and simplify and automate the Data flow and validation of Data in Clinical Trials.',
        link: '/solutions/edc',
        linkText: 'Know more'
    },
    {
        id: 'ctm',
        icon: ClipboardList,
        title: 'CTM',
        description: 'The Clinical Trial Master provides various repositories to maintain Global objects, including a repository of Trial Sites, Labs, Organizations, Global Data Libraries, and more.',
        link: '/solutions/ctm',
        linkText: 'Know more'
    },
];

export default function SolutionsPage() {
  const headerSolutions = solutions.map(({ id, name, slug }) => ({ id, name, slug }));
  const analyticsImage = PlaceHolderImages.find(p => p.id === 'trial-analytics-image');

  return (
    <>
      <ProductPageHeader productName="SyMetric business applications" solutions={headerSolutions} />

      <section className="bg-secondary/50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight">We Provide the Solutions You Need to Run Your Clinical Trials Efficiently</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Our integrated, cloud-based solutions transform Clinical Trials from early phase to late phase and support organizations of all types and sizes — Pharmaceutical Sponsors, Clinical Research Organizations, and Academia.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map(pillar => (
                <div key={pillar.title} className="text-center p-6">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <pillar.icon className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="font-bold text-lg">{pillar.title.toUpperCase()}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{pillar.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container space-y-16">
            {featuredSolutions.map(solution => (
                <div key={solution.id}>
                    <SectionTitle title={solution.title} className="mb-4" />
                    <p className="text-muted-foreground max-w-4xl">{solution.description}</p>
                    <Button variant="link" asChild className="p-0 mt-4">
                        <Link href={solution.link}>
                            {solution.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">SyMetric Trial Analytics</h2>
                    <p className="font-semibold text-primary">Analytics-Driven Clinical Trial Planning System</p>
                    <p className="text-muted-foreground">The solution helps Clinical Operation Teams take informed decisions while planning a new Clinical Trial using Historic Performance Analytics of stakeholders such as CROs, Investigation Sites, Investigators, and Patient Demography. This reduces Trial planning timelines significantly and enhances efficiency with reliability.</p>
                    <p className="text-muted-foreground">Built on SAP Business Technology Platform, the system opens up various opportunities to explore the services that SAP has to offer on the Cloud. These can be integrated to deliver cutting-edge analytical abilities, while leveraging the Life Sciences Industry cloud initiatives from SAP.</p>
                    <Button variant="link" asChild className="p-0">
                        <Link href="/solutions/trial-analytics">
                            Explore more <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                <div className="relative aspect-video">
                    {analyticsImage && (
                        <Image 
                            src={analyticsImage.imageUrl}
                            alt="Trial Analytics Dashboard"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    )}
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
