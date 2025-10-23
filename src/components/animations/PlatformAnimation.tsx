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
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pathVariants = (delay: number = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      delay,
    },
  },
});

const Node = ({
  icon: Icon,
  label,
  isCentral = false,
  className,
}: {
  icon: React.ElementType;
  label: string;
  isCentral?: boolean;
  className?: string;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className={cn("flex flex-col items-center gap-2 z-10", className)}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-lg border bg-background shadow-lg',
          isCentral ? 'w-48 h-20' : 'w-36 h-24'
        )}
      >
        <Icon className={cn('text-primary', isCentral ? 'w-8 h-8' : 'w-10 h-10')} />
      </div>
      <div className="font-semibold text-sm text-foreground text-center">
        {label}
      </div>
    </motion.div>
  );
};

const TravelingStar = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => {
    return (
        <motion.path
            // Centered star shape
            d="M-5.5 -5.5 L -3.85 -1.65 L 0 0 L -3.85 1.65 L -5.5 5.5 L -7.15 1.65 L -11 0 L -7.15 -1.65 Z"
            fill="hsl(var(--primary))"
            className="opacity-0"
            style={{ transform: 'scale(0.8)' }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: delay + 1.5 } }
            }}
        >
            <animateMotion
                dur="4s"
                begin={`${delay + 1.5}s`}
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
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
            className="w-full max-w-4xl h-[450px] relative scale-90 md:scale-100 mx-auto"
        >
            {/* Top Central Node */}
            <Node 
                icon={Gem} 
                label="SyMetric Platform" 
                isCentral 
                className="absolute top-[20px] left-1/2 -translate-x-1/2"
            />
            
            {/* Bottom Row Nodes */}
            <div className="absolute bottom-[40px] w-full flex justify-between px-8">
                 <Node icon={Repeat} label="IRT/IWRS" />
                 <Node icon={ClipboardList} label="CTM" />
                 <Node icon={Database} label="EDC" />
            </div>

            {/* SVG container for lines and stars */}
            <svg width="100%" height="100%" viewBox="0 0 800 450" className="absolute inset-0 z-0">
                <defs>
                    {/* Motion Paths for Stars */}
                    <path id="path-irt" d="M400 110 V 200 H 158 V 280" fill="none" />
                    <path id="path-ctm" d="M400 110 V 200 H 400 V 280" fill="none" />
                    <path id="path-edc" d="M400 110 V 200 H 642 V 280" fill="none" />
                </defs>

                {/* Visible Lines */}
                <motion.path
                    d="M400 110 V 200 M158 200 H 642 M158 200 V 280 M400 200 V 280 M642 200 V 280"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.4)}
                />

                {/* Traveling Stars - must be rendered after paths */}
                <TravelingStar pathId="#path-irt" delay={0.4} />
                <TravelingStar pathId="#path-ctm" delay={0.6} />
                <TravelingStar pathId="#path-edc" delay={0.8} />
            </svg>
        </motion.div>
    );
};