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

const FeatureRow = ({
  icon: Icon,
  title,
  description,
  imageId,
  reverse = false,
  isLast = false
}: {
  icon: LucideIcon,
  title: string,
  description: string,
  imageId: string,
  reverse?: boolean,
  isLast?: boolean
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const image = PlaceHolderImages.find((img) => img.id === imageId);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div ref={ref} className="relative pl-10 md:pl-12">
      {!isLast && <div className="absolute left-0 top-16 bottom-[-6rem] md:bottom-[-8rem] w-px bg-border -translate-x-1/2" />}
      <div className="absolute left-0 top-4 -translate-x-1/2">
        <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full" />
        </div>
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
      >
        <div className={cn("space-y-4", reverse && "md:order-2")}>
            <div className="p-3 bg-primary/10 rounded-lg inline-block mb-2 transform transition-transform hover:scale-110 duration-300">
                 <Icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-muted-foreground text-lg">{description}</p>
        </div>
        <div className={cn("relative aspect-[4/3] max-w-md mx-auto md:w-full", reverse && "md:order-1")}>
            {image && (
                <div className="w-full h-full p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl transform transition-transform hover:scale-105 duration-500 shadow-md">
                     <Image
                        src={image.imageUrl}
                        alt={image.description || title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover rounded-2xl shadow-inner"
                    />
                </div>
            )}
        </div>
      </motion.div>
    </div>
  );
};


export function RevolutionizingTrials() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-gray-900/50 py-20 md:py-28">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="HOW IT WORKS"
            title="Efficiency In the clinical trials"
            description="Our unified platform uses automation and a scalable infrastructure to streamline workflows, unify data, and accelerate every phase of your trial."
            className="mb-20"
          />

          <div className="relative space-y-24 md:space-y-32">
            {features.map((feature, index) => (
              <FeatureRow
                key={feature.title}
                {...feature}
                reverse={index % 2 !== 0}
                isLast={index === features.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
