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
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
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
  isCentral = false,
}: {
  icon: React.ElementType;
  label: string;
  isCentral?: boolean;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center gap-2 z-10"
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
            d="M-5.5 -5.5 L -3.85 -1.65 L 0 0 L -3.85 1.65 L -5.5 5.5 L -7.15 1.65 L -11 0 L -7.15 -1.65 Z"
            fill="hsl(var(--primary))"
            className="opacity-0"
            style={{ transform: 'scale(0.8)' }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: delay + 1 } }
            }}
        >
            <animateMotion
                dur="4s"
                begin={`${delay + 1}s`}
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
            className="w-full max-w-3xl h-[450px] flex items-center justify-center relative scale-90 md:scale-100 mx-auto"
        >
            {/* Top Central Node */}
            <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
                <Node icon={Gem} label="SyMetric Platform" isCentral />
            </div>

            {/* SVG container for lines and stars */}
            <svg width="100%" height="100%" viewBox="0 0 700 450" className="absolute inset-0 z-0">
                <defs>
                    {/* Motion Paths for Stars */}
                    <path id="path-irt" d="M350 116 V 190 H 155" fill="none" />
                    <path id="path-ctm" d="M350 116 V 190 H 350" fill="none" />
                    <path id="path-edc" d="M350 116 V 190 H 545" fill="none" />
                </defs>

                {/* Visible Lines */}
                <motion.path
                    d="M350 116 V 190 H 155"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.4)}
                />
                <motion.path
                    d="M350 116 V 190 H 350" // to CTM
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.6)}
                />
                <motion.path
                    d="M350 116 V 190 H 545" // to EDC
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.8)}
                />

                {/* Traveling Stars - must be rendered after paths */}
                <TravelingStar pathId="#path-irt" delay={0.4} />
                <TravelingStar pathId="#path-ctm" delay={0.6} />
                <TravelingStar pathId="#path-edc" delay={0.8} />
            </svg>

            {/* Bottom Nodes */}
            <div className="absolute bottom-[80px] left-[85px]">
                <Node icon={Repeat} label="IRT/IWRS" />
            </div>
            <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2">
                <Node icon={ClipboardList} label="CTM" />
            </div>
            <div className="absolute bottom-[80px] right-[85px]">
                <Node icon={Database} label="EDC" />
            </div>
        </motion.div>
    );
};