'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from '../shared/section-title';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Rocket, Users, ShieldCheck, TrendingUp, type LucideIcon } from 'lucide-react';

const features = [
    {
        icon: Rocket,
        title: "Accelerate Trial Timelines",
        description: "Go from study setup to submission faster than ever. Our unified platform automates manual tasks and streamlines workflows to eliminate bottlenecks.",
        imageId: "pillar-accelerate"
    },
    {
        icon: Users,
        title: "Unify Data and Teams",
        description: "Break down data silos and connect sponsors, CROs, sites, and patients on a single platform for a unified source of truth.",
        imageId: "about-hero"
    },
    {
        icon: ShieldCheck,
        title: "Ensure Compliance and Security",
        description: "Navigate complex regulations with confidence. Our platform is built with 21 CFR Part 11 and ICH-GCP guidelines at its core.",
        imageId: "why-us-compliant"
    },
    {
        icon: TrendingUp,
        title: "Scale With Confidence",
        description: "Whether running a single-site study or a complex global trial, our modular platform adapts to your needs without constraints.",
        imageId: "global-standards"
    }
];


export function RevolutionizingTrials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-gray-900/50 py-20 md:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="HOW IT WORKS"
          title="Efficiency In The Clinical Trials"
          description="Our unified platform uses automation and a scalable infrastructure to streamline workflows, unify data, and accelerate every phase of your trial."
          className="mb-16 text-left"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const image = PlaceHolderImages.find((img) => img.id === feature.imageId);
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-background rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                    <div className="sm:col-span-2 space-y-3 text-left">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold">{feature.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    <div className="relative aspect-square sm:h-full w-full max-w-[150px] sm:max-w-none mx-auto">
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={image.description || feature.title}
                                data-ai-hint={image.imageHint}
                                fill
                                className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                    </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
