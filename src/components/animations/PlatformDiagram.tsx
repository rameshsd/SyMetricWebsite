'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Gem, Repeat, ClipboardList, Database, TrendingUp, TestTube, Sparkles } from 'lucide-react';

const modules = [
  { 
    id: 'irt', 
    icon: Repeat, 
    title: 'IRT / IWRS', 
    description: 'Randomization, blinding & supply management made seamless.', 
    color: 'text-blue-600',
    iconBg: 'bg-blue-100',
    lineColor: 'hsl(221 83% 53%)'
  },
  { 
    id: 'ctm', 
    icon: ClipboardList, 
    title: 'CTM', 
    description: 'Streamline trial operations and monitoring with complete visibility.', 
    color: 'text-green-600',
    iconBg: 'bg-green-100',
    lineColor: 'hsl(142 71% 45%)'
  },
  { 
    id: 'edc', 
    icon: Database, 
    title: 'EDC', 
    description: 'Capture accurate data with real-time validation and built-in compliance.', 
    color: 'text-purple-600',
    iconBg: 'bg-purple-100',
    lineColor: 'hsl(271 76% 53%)'
  },
  { 
    id: 'analytics', 
    icon: TrendingUp, 
    title: 'Trial Analytics', 
    description: 'Transform data into actionable insights for smarter, faster decisions.', 
    color: 'text-orange-500',
    iconBg: 'bg-orange-100',
    lineColor: 'hsl(30 90% 50%)'
  },
  { 
    id: 'sample', 
    icon: TestTube, 
    title: 'Sample Management', 
    description: 'Track, manage & monitor samples across the entire trial lifecycle.', 
    color: 'text-pink-600',
    iconBg: 'bg-pink-100',
    lineColor: 'hsl(333 76% 53%)'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const pathVariants = (delay = 0) => ({
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 0.8, ease: 'easeInOut', delay },
  },
});

export function PlatformDiagram() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="w-full max-w-5xl mx-auto py-8"
    >
      <div className="relative p-4 md:p-8">
        {/* Main Platform Box */}
        <motion.div variants={itemVariants} className="w-full max-w-md mx-auto mb-10">
          <div className="bg-background rounded-xl p-6 text-center shadow-lg relative border-2 border-primary/20">
            <div className="absolute inset-0 m-2 rounded-lg border-2 border-dashed border-primary/20"></div>
            <div className="relative">
                <div className="absolute -top-6 -left-6 text-primary/50"><Sparkles className="h-5 w-5" /></div>
                <div className="absolute -top-8 left-0 text-primary/50"><Sparkles className="h-3 w-3" /></div>
                <div className="absolute -top-6 -right-6 text-primary/50"><Sparkles className="h-5 w-5" /></div>
                <div className="absolute -top-8 right-0 text-primary/50"><Sparkles className="h-3 w-3" /></div>
                <Gem className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">SyMetric Clinical Platform</h2>
                <p className="text-sm text-muted-foreground mt-1">Unified. Intelligent. Compliant. Built for Clinical Research.</p>
            </div>
          </div>
        </motion.div>

        {/* SVG Layer for connectors */}
        <div className="hidden md:block absolute top-[160px] left-0 w-full h-48 z-0">
            <svg width="100%" height="100%" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <motion.path
                    d="M 50 60 H 1150"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    variants={pathVariants(0.3)}
                />

                {modules.map((_, i) => {
                    const xPos = 100 + i * 250;
                    return (
                        <g key={i}>
                            <motion.circle cx={xPos} cy="60" r="5" fill="hsl(var(--primary))" variants={itemVariants} />
                             <motion.path
                                d={`M ${xPos} 60 V 120`}
                                stroke="hsl(var(--primary))"
                                strokeWidth="2"
                                variants={pathVariants(0.5 + i * 0.1)}
                            />
                        </g>
                    )
                })}
                 <motion.path
                    d={`M 600 0 V 60`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    variants={pathVariants(0)}
                />
                <motion.circle cx="600" cy="60" r="5" fill="hsl(var(--primary))" variants={itemVariants} />
            </svg>
        </div>
        
        {/* Module Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 md:mt-28 relative">
          {modules.map((module) => (
            <motion.div key={module.id} variants={itemVariants}>
              <div className="bg-background border border-gray-200/80 rounded-xl p-4 text-center shadow-md h-full flex flex-col items-center">
                <div className={cn("flex items-center justify-center h-14 w-14 rounded-full mb-3", module.iconBg)}>
                    <module.icon className={cn("h-7 w-7", module.color)} />
                </div>
                <h3 className={cn("text-base font-bold", module.color)}>{module.title}</h3>
                <div className={cn("h-0.5 w-6 my-2 rounded-full", module.iconBg.replace('100', '300'))}></div>
                <p className="text-xs text-muted-foreground flex-grow">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
