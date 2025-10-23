"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Repeat, Database, ClipboardList, Gem } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const pathVariants = (delay: number) => ({
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1,
    transition: { duration: 0.8, ease: 'easeInOut', delay }
  },
});

const sparkleVariants = (delay: number) => ({
    hidden: { opacity: 0, scale: 0 },
    visible: { 
        opacity: 1,
        scale: [1, 1.2, 1],
        transition: { delay: delay + 0.6, duration: 0.4 }
    }
});


const Node = ({
  icon: Icon,
  label,
  className,
  isCentral = false,
}: {
  icon: React.ElementType;
  label: React.ReactNode;
  className?: string;
  isCentral?: boolean;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className={cn('flex flex-col items-center gap-2', className)}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-lg border bg-background shadow-lg',
          isCentral ? 'w-36 h-36 flex-col p-4' : 'w-24 h-24'
        )}
      >
        <Icon
          className={cn(
            'text-primary',
            isCentral ? 'w-8 h-8 mb-2' : 'w-10 h-10'
          )}
        />
      </div>
      <div
        className={cn(
          'font-semibold text-sm text-foreground text-center',
          isCentral ? 'text-center' : ''
        )}
      >
        {label}
      </div>
    </motion.div>
  );
};


const Sparkle = ({ className, delay }: { className?: string, delay: number }) => (
    <motion.svg
      variants={sparkleVariants(delay)}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={cn("text-primary absolute", className)}
    >
        <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
    </motion.svg>
);


export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-full max-w-lg h-[450px] flex items-center justify-center relative scale-90 md:scale-100 mx-auto"
        >
            {/* SVG container for lines and shapes */}
            <svg width="100%" height="100%" viewBox="0 0 440 450" className="absolute inset-0 z-0">
                {/* Background Shape behind EDC */}
                 <motion.path
                    variants={pathVariants(0.6)}
                    d="M280 300 L440 280 L440 450 L320 450 Z"
                    fill="hsl(var(--primary))"
                    fillOpacity="0.1"
                    stroke="none"
                />

                {/* Line to IRT/IWRS */}
                <motion.path
                    d="M 152 243 V 132 H 98"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    variants={pathVariants(0.2)}
                />
                
                {/* Line to CTM */}
                <motion.path
                    d="M 288 243 V 132 H 342"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    variants={pathVariants(0.4)}
                />

                {/* Line to EDC */}
                 <motion.path
                    d="M 288 293 H 340 V 360"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    variants={pathVariants(0.6)}
                />
            </svg>

             {/* Nodes */}
            <div className="absolute top-[20px] left-[40px]">
                <Node icon={Repeat} label="IRT/IWRS" />
            </div>
            <div className="absolute top-[20px] right-[40px]">
                <Node icon={ClipboardList} label="CTM" />
            </div>
             <div className="absolute bottom-[20px] right-[40px]">
                <Node icon={Database} label="EDC" />
            </div>
            
            {/* Central Hub */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Node 
                    icon={Gem}
                    label={<><p className="font-bold text-md text-foreground -mt-1">SyMetric</p><p className="text-sm text-muted-foreground">Platform</p></>}
                    isCentral={true}
                />
            </div>
            
             {/* Sparkles */}
            <Sparkle delay={0.2} className="top-[122px] left-[142px]" />
            <Sparkle delay={0.4} className="top-[122px] right-[142px]" />
            <Sparkle delay={0.6} className="bottom-[122px] right-[142px]" />

        </motion.div>
    );
};
