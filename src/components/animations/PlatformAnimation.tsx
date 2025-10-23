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
      <div className="font-semibold text-sm text-foreground text-center max-w-36">
        {label}
      </div>
    </motion.div>
  );
};

const TravelingStar = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => {
    return (
        <motion.path
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
                dur="5s"
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
    const viewBoxHeight = 450;

    const topNodeY = 40;
    const horizontalLineY = 200;
    const bottomNodeY = 320;
    
    const centerNodeX = viewBoxWidth / 2;
    const sideNodeOffset = 230;

    const leftNodeX = centerNodeX - sideNodeOffset;
    const rightNodeX = centerNodeX + sideNodeOffset;

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-full max-w-4xl h-[450px] relative scale-90 md:scale-100 mx-auto"
        >
            {/* Top Central Node */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <Node icon={Gem} label="SyMetric Platform" isCentral />
            </div>

            {/* Bottom Nodes Container */}
            <div className="absolute bottom-0 w-full flex justify-between px-8">
                <Node icon={Repeat} label="IRT/IWRS" />
                <Node icon={ClipboardList} label="CTM" />
                <Node icon={Database} label="EDC" />
            </div>

            {/* SVG container for lines and stars */}
            <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="absolute inset-0 z-0">
                <defs>
                    {/* Motion Paths for Stars */}
                    <path id="path-irt" d={`M ${centerNodeX},${topNodeY + 80} V ${horizontalLineY} H ${leftNodeX} V ${bottomNodeY}`} fill="none" />
                    <path id="path-ctm" d={`M ${centerNodeX},${topNodeY + 80} V ${bottomNodeY}`} fill="none" />
                    <path id="path-edc" d={`M ${centerNodeX},${topNodeY + 80} V ${horizontalLineY} H ${rightNodeX} V ${bottomNodeY}`} fill="none" />
                </defs>

                {/* Visible Lines */}
                <motion.path
                    d={`M ${centerNodeX},${topNodeY + 80} V ${horizontalLineY} H ${leftNodeX} V ${bottomNodeY}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.4)}
                />
                 <motion.path
                    d={`M ${leftNodeX},${horizontalLineY} H ${rightNodeX}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.4)}
                />
                 <motion.path
                    d={`M ${centerNodeX},${horizontalLineY} V ${bottomNodeY}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.6)}
                />
                <motion.path
                    d={`M ${rightNodeX},${horizontalLineY} V ${bottomNodeY}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.8)}
                />

                {/* Traveling Stars - must be rendered after paths */}
                <TravelingStar pathId="path-irt" delay={0.4} />
                <TravelingStar pathId="path-ctm" delay={0.6} />
                <TravelingStar pathId="path-edc" delay={0.8} />
            </svg>
        </motion.div>
    );
};
