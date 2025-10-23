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
}: {
  icon: React.ElementType;
  label: string;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center gap-2 z-10"
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-lg border bg-background shadow-lg',
          'w-36 h-24' 
        )}
      >
        <Icon className={cn('text-primary', 'w-10 h-10')} />
      </div>
      <div className="font-semibold text-sm text-foreground text-center max-w-32">
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
    
    // ViewBox dimensions
    const viewBoxWidth = 800;
    const viewBoxHeight = 450;

    // Node positions
    const topNodeX = viewBoxWidth / 2 - 100;
    const topNodeY = 40;
    
    const busLineY = 180;
    const bottomNodeY = 320;

    const irtNodeX = viewBoxWidth * 0.25;
    const ctmNodeX = viewBoxWidth * 0.5 - 50;
    const edcNodeX = viewBoxWidth * 0.85;


    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-full max-w-5xl h-[450px] relative scale-90 md:scale-100 mx-auto"
        >
            {/* Top Node */}
            <div className="absolute" style={{ top: `${topNodeY}px`, left: `${topNodeX}px`, transform: 'translate(-50%, -50%)' }}>
                <Node icon={Gem} label="SyMetric Platform" />
            </div>

            {/* Left Bottom Nodes */}
            <div className="absolute" style={{ top: `${bottomNodeY}px`, left: `${irtNodeX}px`, transform: 'translate(-50%, -50%)' }}>
                <Node icon={Repeat} label="IRT/IWRS" />
            </div>
            <div className="absolute" style={{ top: `${bottomNodeY}px`, left: `${ctmNodeX}px`, transform: 'translate(-50%, -50%)' }}>
                <Node icon={ClipboardList} label="CTM" />
            </div>

            {/* Right Bottom Node (disconnected) */}
            <div className="absolute" style={{ top: `${bottomNodeY}px`, left: `${edcNodeX}px`, transform: 'translate(-50%, -50%)' }}>
                <Node icon={Database} label="EDC" />
            </div>

            {/* SVG container for lines and stars */}
            <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="absolute inset-0 z-0">
                <defs>
                    <path id="path-to-irt" d={`M ${topNodeX} ${topNodeY + 48} V ${busLineY} H ${irtNodeX} V ${bottomNodeY - 48}`} fill="none" />
                    <path id="path-to-ctm" d={`M ${topNodeX} ${topNodeY + 48} V ${busLineY} H ${ctmNodeX} V ${bottomNodeY - 48}`} fill="none" />
                </defs>

                {/* Visible Lines */}
                <motion.path
                    d={`M ${topNodeX} ${topNodeY + 48} V ${busLineY}`} // Main drop
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.4)}
                />
                 <motion.path
                    d={`M ${irtNodeX} ${busLineY} H ${ctmNodeX}`} // Horizontal bus
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.4)}
                />
                <motion.path
                    d={`M ${irtNodeX} ${busLineY} V ${bottomNodeY - 48}`} // Drop to IRT
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.6)}
                />
                 <motion.path
                    d={`M ${ctmNodeX} ${busLineY} V ${bottomNodeY - 48}`} // Drop to CTM
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants(0.8)}
                />

                {/* Traveling Stars */}
                <TravelingStar pathId="path-to-irt" delay={0.6} />
                <TravelingStar pathId="path-to-ctm" delay={0.8} />
            </svg>
        </motion.div>
    );
};
