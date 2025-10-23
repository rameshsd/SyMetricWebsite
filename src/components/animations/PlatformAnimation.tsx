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
  hidden: { opacity: 0, y: 10 },
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
      className={cn("flex flex-col items-center gap-2 z-10 w-36", isCentral && "w-48", className)}
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
            // Centered star path data
            d="M0 -5.5L1.65 -1.65L5.5 0L1.65 1.65L0 5.5L-1.65 1.65L-5.5 0L-1.65 -1.65Z"
            fill="hsl(var(--primary))"
            className="opacity-0"
            style={{ transform: 'scale(0.7)' }}
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
    const viewBoxWidth = 800;
    const viewBoxHeight = 400;

    const topNodeY = 60;
    const busLineY = 180;
    const bottomNodeY = 300;

    const centerNodeX = viewBoxWidth / 2;
    const sideOffset = 220;
    const leftNodeX = centerNodeX - sideOffset;
    const rightNodeX = centerNodeX + sideOffset;

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-full max-w-4xl h-[400px] relative scale-90 md:scale-100 mx-auto"
        >
            {/* Nodes Container */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <Node icon={Gem} label="SyMetric Platform" isCentral />
            </div>
            
            <div className="absolute w-full bottom-0 flex justify-between px-4 sm:px-8 md:px-12">
                <Node icon={Repeat} label="IRT/IWRS" />
                <Node icon={ClipboardList} label="CTM" />
                <Node icon={Database} label="EDC" />
            </div>

            {/* SVG container for lines and stars */}
            <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="absolute inset-0 z-0">
                <defs>
                    <path id="path-irt" d={`M ${centerNodeX} ${topNodeY + 40} V ${busLineY} H ${leftNodeX}`} fill="none" />
                    <path id="path-ctm" d={`M ${centerNodeX} ${topNodeY + 40} V ${bottomNodeY - 60}`} fill="none" />
                    <path id="path-edc" d={`M ${centerNodeX} ${topNodeY + 40} V ${busLineY} H ${rightNodeX}`} fill="none" />
                </defs>

                {/* Visible Lines */}
                 <motion.path
                    d={`M ${leftNodeX} ${bottomNodeY-48} V ${busLineY} H ${rightNodeX}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.4)}
                />
                 <motion.path
                    d={`M ${centerNodeX} ${topNodeY + 40} V ${bottomNodeY-48}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.4)}
                />
                
                {/* Traveling Stars - must be rendered after paths */}
                <TravelingStar pathId="path-irt" delay={0.4} />
                <TravelingStar pathId="path-ctm" delay={0.6} />
                <TravelingStar pathId="path-edc" delay={0.8} />
            </svg>
        </motion.div>
    );
};
