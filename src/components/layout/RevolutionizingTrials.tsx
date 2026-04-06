'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { ArrowRight, Rocket, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const features = [
    {
        title: "Accelerate Trial Timelines",
        description: "Go from study setup to submission faster than ever. Our unified platform automates manual tasks and streamlines workflows to eliminate bottlenecks.",
        link: '/solutions/clinical-trial-platform'
    },
    {
        title: "Unify Data and Teams",
        description: "Break down data silos and connect sponsors, CROs, sites, and patients on a single platform for a unified source of truth.",
        link: '/solutions/clinical-trial-platform'
    },
    {
        title: "Ensure Compliance and Security",
        description: "Navigate complex regulations with confidence. Our platform is built with 21 CFR Part 11 and ICH-GCP guidelines at its core.",
        link: '/solutions/clinical-trial-platform'
    },
    {
        title: "Scale With Confidence",
        description: "Whether running a single-site study or a complex global trial, our modular platform adapts to your needs without constraints.",
        link: '/solutions/clinical-trial-platform'
    }
];

const diagramFeatures = [
    { icon: Rocket, label: 'Accelerate Timelines', position: { top: '0', left: '50%', transform: 'translateX(-50%)' } },
    { icon: Users, label: 'Unify Data & Teams', position: { top: '50%', right: '0', transform: 'translateY(-50%)' } },
    { icon: ShieldCheck, label: 'Ensure Compliance', position: { bottom: '0', left: '50%', transform: 'translateX(-50%)' } },
    { icon: TrendingUp, label: 'Scale with Confidence', position: { top: '50%', left: '0', transform: 'translateY(-50%)' } },
];

const InnovationDiagram = () => (
    <div className="relative w-full max-w-sm mx-auto aspect-square flex items-center justify-center">
        {/* Lines */}
        <div className="absolute w-full h-full text-gray-200 dark:text-gray-700">
            <span className="absolute top-1/2 left-0 w-full h-px bg-current"></span>
            <span className="absolute left-1/2 top-0 h-full w-px bg-current"></span>
        </div>
        
        {/* Center */}
        <div className="relative w-32 h-32 bg-background rounded-full flex items-center justify-center text-center p-4 shadow-lg border">
             <p className="text-sm text-muted-foreground font-semibold">Unified Automation & Scalability</p>
        </div>

        {/* Nodes */}
        {diagramFeatures.map((feature, i) => (
            <motion.div
                key={feature.label}
                className="absolute flex flex-col items-center gap-2"
                style={feature.position as any}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * i, type: 'spring' }}
            >
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-md border">
                    <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs font-semibold text-center w-20">{feature.label}</p>
            </motion.div>
        ))}
    </div>
);


export function RevolutionizingTrials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="w-full bg-secondary/30 py-20 md:py-28">
      <div className="container">
        <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Efficiency In The Clinical Trials</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">Our unified platform uses automation and a scalable infrastructure to streamline workflows, unify data, and accelerate every phase of your trial.</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
            <InnovationDiagram />
            <div>
                 <h3 className="text-2xl font-bold tracking-tight">Turn connection into momentum</h3>
                 <p className="mt-2 text-muted-foreground">Bring AI, data, and apps together with SyMetric to create a system where every decision informs the next—turning insight into action and action into continuous innovation.</p>

                <div className="mt-8 space-y-6">
                    {features.map((feature) => (
                        <div key={feature.title}>
                            <Link href={feature.link} className="font-semibold text-primary inline-flex items-center group text-lg">
                                {feature.title} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
                        </div>
                    ))}
                </div>
                 <Button asChild className="mt-10">
                    <Link href="/solutions">Explore Our Solutions</Link>
                 </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
