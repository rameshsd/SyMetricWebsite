'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { Rocket, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const timelineItems = [
  {
    icon: Rocket,
    title: 'Accelerate Timelines',
    description: 'From study setup to submission.',
    number: '01',
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
    number: '02',
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
    number: '03',
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
    number: '04',
    colors: {
      gradientStart: '#f97316', // orange-500
      gradientEnd: '#fb923c',   // orange-400
      border: 'border-orange-500',
      text: 'text-orange-500'
    },
  },
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
    <div ref={ref} className="w-full max-w-lg mx-auto py-8">
      <motion.div
        className="space-y-0"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {timelineItems.map((item, index) => (
          <React.Fragment key={item.title}>
            <motion.div className="flex items-center gap-6" variants={itemVariants}>
              <div className="relative flex-shrink-0">
                <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
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
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                        <item.icon className={cn("w-6 h-6", item.colors.text)} />
                    </div>
                </div>
              </div>

              <div className={cn("relative flex-1 p-4 border rounded-lg shadow-sm bg-background flex items-center justify-between overflow-hidden", item.colors.border)}>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className={cn("absolute -right-2 top-1/2 -translate-y-1/2 text-6xl font-bold opacity-10 select-none", item.colors.text)}>
                  {item.number}
                </div>
              </div>
            </motion.div>

            {index < timelineItems.length - 1 && (
              <motion.div
                  className="flex justify-start items-center h-16 ml-8"
                  variants={itemVariants}
              >
                  <AnimatedArrow index={index} inView={inView} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
