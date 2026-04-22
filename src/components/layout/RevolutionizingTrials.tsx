'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedTimeline } from '@/components/animations/AnimatedTimeline';

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


export function RevolutionizingTrials() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
        <section className="w-full bg-secondary/30 py-20 md:py-28">
            <div className="container">
                <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedTimeline />
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight">Turn connection into momentum</h3>
                        <p className="mt-2 text-muted-foreground">Bring data and apps together with SyMetric to create a system where every decision informs the next—turning insight into action and action into continuous innovation.</p>

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
