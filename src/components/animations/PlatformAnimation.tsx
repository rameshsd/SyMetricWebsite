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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const pathVariants = (delay: number = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay,
    },
  },
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
      className={cn('flex flex-col items-center gap-2 z-10', className)}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-lg border bg-background shadow-lg',
          isCentral ? 'w-36 h-24 flex-col p-4' : 'w-24 h-24'
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

const TravelingStar = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => {
  return (
    <motion.path
      d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"
      className="text-yellow-400"
      fill="currentColor"
      style={{ scale: 0.8 }}
    >
      <animateMotion
        dur="5s"
        begin={`${delay}s`}
        repeatCount="indefinite"
        rotate="auto"
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </motion.path>
  );
};


export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-full max-w-2xl h-[450px] flex items-center justify-center relative scale-90 md:scale-100 mx-auto"
        >
            {/* SVG container for lines and shapes */}
            <svg width="100%" height="100%" viewBox="0 0 600 450" className="absolute inset-0 z-0">
                 {/* Define paths for animation */}
                <defs>
                    {/* Main bus line */}
                    <path
                        id="main-bus"
                        d="M 300 130 V 220 H 124 H 476"
                        fill="none"
                    />
                    {/* Path to IRT */}
                    <path
                        id="path-irt"
                        d="M 124 220 V 310"
                        fill="none"
                    />
                     {/* Path to CTM */}
                    <path
                        id="path-ctm"
                        d="M 300 130 V 310"
                        fill="none"
                    />
                     {/* Path to EDC */}
                    <path
                        id="path-edc"
                        d="M 476 220 V 310"
                        fill="none"
                    />
                </defs>

                {/* Draw visible paths */}
                <motion.path
                    d="M 300 130 V 220 H 124"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.2)}
                />
                 <motion.path
                    d="M 230 220 H 370"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.2)}
                />
                <motion.path
                    d="M 476 220 H 370"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.2)}
                />
                <motion.path
                    d="M 124 220 V 310"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    variants={pathVariants(0.7)}
                />
                <motion.path
                    d="M 300 220 V 310"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    variants={pathVariants(0.5)}
                />
                 <motion.path
                    d="M 476 220 V 310"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    variants={pathVariants(0.9)}
                />
                
                {/* Traveling Stars */}
                <g visibility={inView ? 'visible' : 'hidden'}>
                    <TravelingStar pathId="path-irt" delay={1} />
                    <TravelingStar pathId="path-ctm" delay={1.2} />
                    <TravelingStar pathId="path-edc" delay={1.4} />
                </g>
            </svg>

            {/* Central Hub */}
             <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
                <Node 
                    icon={Gem}
                    label={<><p className="font-bold text-md text-foreground -mt-1">SyMetric</p><p className="text-sm text-muted-foreground">Platform</p></>}
                    isCentral={true}
                />
            </div>
            
            {/* Bottom Nodes */}
            <div className="absolute bottom-[20px] left-[76px]">
                <Node icon={Repeat} label="IRT/IWRS" />
            </div>
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
                <Node icon={ClipboardList} label="CTM" />
            </div>
             <div className="absolute bottom-[20px] right-[76px]">
                <Node icon={Database} label="EDC" />
            </div>

        </motion.div>
    );
};
