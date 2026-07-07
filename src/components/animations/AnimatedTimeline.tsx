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
    colors: {
      gradientStart: '#3b82f6', // blue-500
      gradientEnd: '#60a5fa',   // blue-400
      border: 'border-blue-500/45 hover:border-blue-500/75',
      text: 'text-blue-500'
    },
  },
  {
    icon: Users,
    colors: {
      gradientStart: '#14b8a6', // teal-500
      gradientEnd: '#5eead4',   // teal-300
      border: 'border-teal-500/45 hover:border-teal-500/75',
      text: 'text-teal-500'
    },
  },
  {
    icon: ShieldCheck,
    colors: {
      gradientStart: '#8b5cf6', // violet-500
      gradientEnd: '#a78bfa',   // violet-400
      border: 'border-violet-500/45 hover:border-violet-500/75',
      text: 'text-violet-500'
    },
  },
  {
    icon: TrendingUp,
    colors: {
      gradientStart: '#f97316', // orange-500
      gradientEnd: '#fb923c',   // orange-400
      border: 'border-orange-500/45 hover:border-orange-500/75',
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
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function AnimatedTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="w-full py-6 max-w-5xl relative z-10">
      {/* Background Animated Gradient Vertical Line centered under the big circles */}
      <div className="absolute left-8 sm:left-10 top-[40px] sm:top-[50px] bottom-[40px] sm:bottom-[50px] w-[2px] -translate-x-1/2 bg-muted/30 -z-10">
        <motion.div 
          className="w-full h-full origin-top rounded-full"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            background: 'linear-gradient(to bottom, #3b82f6, #14b8a6, #8b5cf6, #f97316)'
          }}
        />
      </div>

      <motion.div
        className="flex flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {features.map((feature, index) => {
          const item = timelineItems[index];
          return (
            <div key={feature.title} className="flex items-center gap-6 sm:gap-8">
              {/* Left side big timeline icon */}
              <div className="flex-shrink-0 relative">
                <motion.div className="relative" variants={itemVariants}>
                  <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 -rotate-90">
                    <defs>
                      <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: item.colors.gradientStart, stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: item.colors.gradientEnd, stopOpacity: 1 }} />
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
                      transition={{ duration: 0.8, delay: index * 0.3 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background flex items-center justify-center shadow-sm border border-border/55">
                      <item.icon className={cn("w-5 h-5 sm:w-6 sm:h-6", item.colors.text)} />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right side box containing the detailed content */}
              <motion.div 
                className={cn(
                  "flex-1 py-4 px-6 border-2 rounded-xl bg-card/30 backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5", 
                  item.colors.border
                )}
                variants={itemVariants}
              >
                <div className="flex flex-col gap-1.5 text-left">
                  <Link href={feature.link} className="font-bold text-foreground hover:text-primary inline-flex items-center gap-1.5 text-base sm:text-lg tracking-tight transition-colors duration-200 group">
                    {feature.title}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
                  </Link>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
