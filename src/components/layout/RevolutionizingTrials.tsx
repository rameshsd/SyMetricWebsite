'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { ArrowRight } from 'lucide-react';
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

const InnovationDiagram = () => (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-square flex items-center justify-center">
        {/* Background concentric circles */}
        {[...Array(4)].map((_, i) => (
            <div
                key={i}
                className="absolute rounded-full border border-gray-200/80 dark:border-gray-700/50"
                style={{
                    width: `${60 + i * 15}%`,
                    height: `${60 + i * 15}%`,
                    opacity: 0.8 - i * 0.2,
                }}
            />
        ))}
        
        {/* Main rotating element */}
        <div className="absolute w-[70%] h-[70%]">
            <motion.div
                className="relative w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
                <div className="w-full h-full bg-gradient-to-tr from-blue-500 via-purple-500 to-sky-400 rounded-full" />
                <span className="absolute text-white font-bold text-xs" style={{ top: '5%', left: '45%' }}>AI</span>
                <span className="absolute text-white font-bold text-xs transform -rotate-90" style={{ top: '48%', right: '5%' }}>DATA</span>
                <span className="absolute text-white font-bold text-xs" style={{ bottom: '5%', left: '45%' }}>APPS</span>
            </motion.div>
        </div>

        {/* Moving dot */}
        <div className="absolute w-[70%] h-[70%]">
             <motion.div 
                className="absolute w-full h-full"
                animate={{ rotate: -360 }} 
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             >
                <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-blue-200" />
            </motion.div>
        </div>
        
        {/* Center circle */}
        <div className="absolute w-36 h-36 sm:w-40 sm:h-40 bg-background rounded-full flex items-center justify-center text-center p-4 shadow-lg">
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Apps turn intelligence into action with AI</p>
        </div>
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
