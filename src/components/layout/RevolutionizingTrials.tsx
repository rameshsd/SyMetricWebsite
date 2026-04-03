'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from '../shared/section-title';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Rocket, Users, ShieldCheck, TrendingUp, type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const features = [
    {
        icon: Rocket,
        tag: "Accelerate",
        title: "Accelerate Trial Timelines",
        description: "Go from study setup to submission faster than ever. Our unified platform automates manual tasks and streamlines workflows to eliminate bottlenecks.",
        imageId: "pillar-accelerate"
    },
    {
        icon: Users,
        tag: "Unify",
        title: "Unify Data and Teams",
        description: "Break down data silos and connect sponsors, CROs, sites, and patients on a single platform for a unified source of truth.",
        imageId: "about-hero"
    },
    {
        icon: ShieldCheck,
        tag: "Compliance",
        title: "Ensure Compliance and Security",
        description: "Navigate complex regulations with confidence. Our platform is built with 21 CFR Part 11 and ICH-GCP guidelines at its core.",
        imageId: "why-us-compliant"
    },
    {
        icon: TrendingUp,
        tag: "Scale",
        title: "Scale With Confidence",
        description: "Whether running a single-site study or a complex global trial, our modular platform adapts to your needs without constraints.",
        imageId: "global-standards"
    }
];


export function RevolutionizingTrials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="w-full bg-secondary/30 py-20 md:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="HOW IT WORKS"
          title="Efficiency In The Clinical Trials"
          description="Our unified platform uses automation and a scalable infrastructure to streamline workflows, unify data, and accelerate every phase of your trial."
          className="mb-16 text-left max-w-4xl"
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
                className="h-full"
              >
                <Card className="bg-background rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col overflow-hidden">
                    <div className="relative aspect-video w-full">
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={image.description || feature.title}
                                data-ai-hint={image.imageHint}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                           <Icon className="w-4 h-4" />
                           <span>{feature.tag}</span>
                        </div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 flex-grow">{feature.description}</p>
                    </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
