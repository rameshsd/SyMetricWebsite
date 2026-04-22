'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { Rocket, Users, ShieldCheck, TrendingUp, ArrowDown } from 'lucide-react';
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
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
}

export function AnimatedTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="w-full max-w-lg mx-auto py-8">
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {timelineItems.map((item, index) => (
          <React.Fragment key={item.title}>
            <motion.div className="flex items-center gap-4" variants={itemVariants}>
              {/* Icon */}
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
                        transition={{ duration: 1, delay: index * 0.4 }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                        <item.icon className={cn("w-6 h-6", item.colors.text)} />
                    </div>
                </div>
              </div>

              {/* Connector */}
              <motion.div className="w-8 h-px bg-border"
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.4 }}
              />

              {/* Text Box */}
              <div className={cn("flex-1 p-4 border rounded-lg shadow-sm bg-background flex items-center justify-between", item.colors.border)}>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className={cn("text-2xl font-bold ml-4", item.colors.text, "opacity-20")}>
                  {item.number}
                </div>
              </div>
            </motion.div>

            {/* Vertical Connector */}
            {index < timelineItems.length - 1 && (
                 <motion.div className="flex justify-start ml-[39px] h-10 relative" variants={itemVariants}>
                    <svg height="100%" width="2" className="overflow-visible">
                        <motion.line
                            x1="1"
                            y1="0"
                            x2="1"
                            y2="40"
                            stroke="hsl(var(--border))"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            variants={pathVariants}
                        />
                         <motion.g
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6 + index * 0.4 }}
                         >
                            <ArrowDown className="w-4 h-4 text-muted-foreground absolute -bottom-2 -left-1.5" />
                        </motion.g>
                    </svg>
                 </motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
