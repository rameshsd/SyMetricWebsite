
'use client';

import { solutions } from '@/lib/data';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Rocket, Shuffle, Database, ClipboardList, TrendingUp, Shield, Activity, Clock } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const pillars = [
    {
        icon: (props: any) => (
            <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
        ),
        title: 'Accelerate',
        subtitle: 'ACCELERATE',
        description: 'clinical trials with streamlined and transparent time-to-market solutions'
    },
    {
        icon: (props: any) => (
             <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="2" y="2" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="18" y="2" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="2" y="18" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="18" y="18" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 7V4" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 7V4" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 20V17" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 20V17" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 9H7" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 15H7" stroke="currentColor" strokeWidth="2"/>
                <path d="M17 9H20" stroke="currentColor" strokeWidth="2"/>
                <path d="M17 15H20" stroke="currentColor" strokeWidth="2"/>
            </svg>
        ),
        title: 'Integrate',
        subtitle: 'INTEGRATE',
        description: 'our solutions into your existing environment, as per Life Sciences best practices'
    },
    {
        icon: (props: any) => (
            <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'Trust',
        subtitle: 'TRUST',
        description: 'our solutions, for they are ISO 9001, ISO 27001, ICH-GCP, 21 CFR Part 11 (USFDA), HIPAA, GDPR (EU) compliant'
    },
    {
        icon: (props: any) => (
            <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'Future Proof',
        subtitle: 'FUTURE-PROOF',
        description: 'your research through continuous innovation and collaboration supported by our cutting-edge solutions'
    }
];

export default function SolutionsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'solutions-hero');
    const ctpImage = PlaceHolderImages.find(p => p.id === 'ctp-hero-image');

  return (
    <div>
        <section className="bg-primary text-white py-20 px-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">We Provide the Solutions You Need to Run Your Clinical Trials Efficiently</h1>
                    <p className="mt-6 text-lg text-white/80">Our integrated, cloud-based solutions transform Clinical Trials from early phase to late phase and support organizations of all types and sizes — Pharmaceutical Sponsors, Clinical Research Organizations, and Academia.</p>
                </div>
            </div>
        </section>

        <section className="py-20">
            <div className="container">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar) => (
                        <Card key={pillar.title} className="bg-gray-900 text-white p-6 rounded-2xl flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-4 text-purple-400">
                                <pillar.icon className="w-full h-full" />
                            </div>
                            <h3 className="text-sm font-bold tracking-widest text-purple-400">{pillar.subtitle}</h3>
                            <p className="text-white/80 mt-2 text-sm">{pillar.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-secondary/30">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        {ctpImage && <Image src={ctpImage.imageUrl} alt="SyMetric Clinical Trial Platform" width={600} height={400} className="rounded-2xl" />}
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">SyMetric Clinical Trial Platform</h2>
                        <p className="text-muted-foreground">Built for end-to-end Clinical Trials, our Cloud-Based Platform is fully modularized, allowing you to choose the right solution that can be configured to suit your needs.</p>
                        <p className="text-muted-foreground">Designed, developed, and deployed by us, our all-encompassing set of solutions is built to work seamlessly with your existing ecosystem and processes. It covers various processes in Clinical Trials – including Study Master Management, Subject Management, Clinical Supplies Management, Data Management, and Medical Coding. With SyMetric Clinical Trial Platform, you can manage, monitor, analyze, and report with ease by configuring the solutions to your specific needs – whether you are a Pharmaceutical Sponsor, Clinical Research Organization (CRO), or from the Academia.</p>
                        <Button asChild>
                            <Link href="/solutions/clinical-trial-platform">Explore our platform</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20">
            <div className="container">
                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.filter(s => ['irt-iwrs', 'edc', 'ctm'].includes(s.slug)).map(solution => (
                        <Card key={solution.id} className="p-6">
                            <h3 className="text-2xl font-bold">{solution.name}</h3>
                            <p className="text-muted-foreground mt-2">{solution.longDescription}</p>
                            <Button variant="link" asChild className="p-0 mt-4">
                                <Link href={`/solutions/${solution.slug}`}>Know more <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-secondary/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold">SyMetric Trial Analytics</h2>
                    <h3 className="text-xl font-semibold text-primary mt-2">Analytics-Driven Clinical Trial Planning System</h3>
                    <p className="text-muted-foreground mt-4">The solution helps Clinical Operation Teams take informed decisions while planning a new Clinical Trial using Historic Performance Analytics of stakeholders such as CROs, Investigation Sites, Investigators, and Patient Demography. This reduces Trial planning timelines significantly and enhances efficiency with reliability.</p>
                    <p className="text-muted-foreground mt-4">Built on SAP Business Technology Platform, the system opens up various opportunities to explore the services that SAP has to offer on the Cloud. These can be integrated to deliver cutting-edge analytical abilities, while leveraging the Life Sciences Industry cloud initiatives from SAP.</p>
                     <Button variant="link" asChild className="p-0 mt-4 text-lg">
                        <Link href={`/solutions/trial-analytics`}>Explore more <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}
