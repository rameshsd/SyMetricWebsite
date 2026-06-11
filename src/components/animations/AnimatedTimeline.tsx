'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { Rocket, Users, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';

const timelineItems = [
  {
    icon: Rocket,
    title: 'Accelerate Timelines',
    description: 'From study setup to submission.',
    colors: {
      gradientStart: '#3b82f6', // blue-500
      gradientEnd: '#60a5fa',   // blue-400
      border: 'border-blue-500',
      text: 'text-blue-500'
    },
  },
  {
    icon: Users,
    title: 'Unify Data & Teams',
    description: 'Connect sponsors, CROs, and sites.',
    colors: {
      gradientStart: '#14b8a6', // teal-500
      gradientEnd: '#5eead4',   // teal-300
      border: 'border-teal-500',
      text: 'text-teal-500'
    },
  },
  {
    icon: ShieldCheck,
    title: 'Ensure Compliance',
    description: 'Built-in 21 CFR Part 11 & ICH-GCP.',
    colors: {
      gradientStart: '#8b5cf6', // violet-500
      gradientEnd: '#a78bfa',   // violet-400
      border: 'border-violet-500',
      text: 'text-violet-500'
    },
  },
  {
    icon: TrendingUp,
    title: 'Scale with Confidence',
    description: 'From single-site to global trials.',
    colors: {
      gradientStart: '#f97316', // orange-500
      gradientEnd: '#fb923c',   // orange-400
      border: 'border-orange-500',
      text: 'text-orange-500'
    },
  },
];

const features = [
  {
    title: "Accelerate Trial Timelines",
    description: "Go from study setup to submission faster than ever. Our unified platform automates manual tasks and streamlines workflows to eliminate bottlenecks.",
    link: '/solutions/clinical-trial-platform'
  },
  {
    title: "Unify Data and Teams",
    description: "Break down data silos and connect sponsors, CROs, sites, and patients on a single platform for a unified source of truth and real-time collaboration.",
    link: '/solutions/clinical-trial-platform'
  },
  {
    title: "Ensure Compliance and Security",
    description: "Navigate complex regulations with confidence. Our unified platform is built with 21 CFR Part 11 and ICH-GCP guidelines at its core to ensure compliance.",
    link: '/solutions/clinical-trial-platform'
  },
  {
    title: "Scale With Confidence",
    description: "Whether running a single-site study or a highly complex global trial, our modular platform adapts to your specific clinical needs without constraints.",
    link: '/solutions/clinical-trial-platform'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const AnimatedArrow = ({ index, inView }: { index: number; inView: boolean }) => {
  const arrowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.4 + index * 0.6,
      },
    },
  };

  const pathVariants = (delay: number) => ({
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 0.5, delay: delay } },
  });

  return (
    <motion.svg width="24" height="24" viewBox="0 0 24 24" variants={arrowVariants} className="text-red-500">
      <motion.path variants={pathVariants(0.6 + index * 0.6)} d="M7 13l5 5 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <motion.path variants={pathVariants(0.7 + index * 0.6)} d="M7 6l5 5 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </motion.svg>
  );
};

export function AnimatedTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="w-full py-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-12 gap-y-2 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {timelineItems.map((item, index) => {
          const feature = features[index];
          return (
            <React.Fragment key={item.title}>
              {/* Left Column (Timeline Item) */}
              <div className="col-start-1">
                <motion.div className="flex items-start sm:items-center gap-4 sm:gap-6" variants={itemVariants}>
                  <div className="relative flex-shrink-0">
                    <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 -rotate-90">
                        <defs>
                            <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{stopColor: item.colors.gradientStart, stopOpacity:1}} />
                                <stop offset="100%" style={{stopColor: item.colors.gradientEnd, stopOpacity:1}} />
                            </linearGradient>
                        </defs>
                        <circle cx="40" cy="40" r="38" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
                        <motion.circle
                            cx="40"
                            cy="40"
                            r="32"
                            fill="none"
                            stroke={`url(#grad${index})`}
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={inView ? { pathLength: 1 } : {}}
                            transition={{ duration: 1, delay: index * 0.6 }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background flex items-center justify-center">
                            <item.icon className={cn("w-5 h-5 sm:w-6 sm:h-6", item.colors.text)} />
                        </div>
                    </div>
                  </div>

                  <div className={cn("relative w-full sm:w-[300px] py-2.5 px-4 border rounded-lg shadow-sm bg-background flex items-center justify-between overflow-hidden", item.colors.border)}>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column (Detailed Description) */}
              <div className="col-start-1 md:col-start-2 flex flex-col justify-center py-0">
                <motion.div className="text-left" variants={itemVariants}>
                  <Link href={feature.link} className="font-semibold text-primary inline-flex items-center group text-lg">
                    {feature.title} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{feature.description}</p>
                </motion.div>
              </div>

              {/* Arrow Row */}
              {index < timelineItems.length - 1 && (
                <>
                  <div className="col-start-1 flex justify-start items-center">
                    <motion.div
                        className="flex justify-center items-center h-8 w-16 sm:w-20"
                        variants={itemVariants}
                    >
                        <AnimatedArrow index={index} inView={inView} />
                    </motion.div>
                  </div>
                  <div className="col-start-1 md:col-start-2 hidden md:block" />
                </>
              )}
            </React.Fragment>
          );
        })}
      </motion.div>
    </div>
  );
}
