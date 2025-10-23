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
      className="flex flex-col items-center gap-2 z-10 w-36"
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-lg border bg-background shadow-lg',
          'w-full h-24' 
        )}
      >
        <Icon className={cn('text-primary', 'w-10 h-10')} />
      </div>
      <div className="font-semibold text-sm text-foreground text-center">
        {label}
      </div>
    </motion.div>
  );
};

const TravelingStar = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => {
    return (
        <g>
            <motion.path
                d="M-5.5 0L-1.65 1.65L0 5.5L1.65 1.65L5.5 0L1.65 -1.65L0 -5.5L-1.65 -1.65Z"
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
                    calcMode="linear"
                >
                    <mpath href={`#${pathId}`} />
                </animateMotion>
            </motion.path>
        </g>
    );
};

export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    
    const viewBoxWidth = 700;
    const viewBoxHeight = 450;

    const topNodeY = 60;
    const busLineY = 200;
    const bottomNodeY = 320;
    
    constcenterX = viewBoxWidth / 2;
    const leftNodeX = viewBoxWidth * 0.25;
    const rightNodeX = viewBoxWidth * 0.75;


    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-full h-full relative flex flex-col items-center"
        >
            {/* Top Node */}
            <div className="absolute" style={{ top: `10px`, left: `50%`, transform: 'translateX(-50%)' }}>
                <Node icon={Gem} label="SyMetric Platform" />
            </div>

            {/* Bottom Nodes Container */}
            <div className="absolute w-full" style={{ top: `${bottomNodeY - 60}px` }}>
                <div className="flex justify-between max-w-xl mx-auto">
                    <Node icon={Repeat} label="IRT/IWRS" />
                    <Node icon={ClipboardList} label="CTM" />
                    <Node icon={Database} label="EDC" />
                </div>
            </div>

            <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="absolute inset-0 z-0">
                <defs>
                    <path id="path-to-left" d={`M ${centerX} ${topNodeY} V ${busLineY} H ${leftNodeX} V ${bottomNodeY}`} fill="none" />
                    <path id="path-to-center" d={`M ${centerX} ${topNodeY} V ${busLineY} H ${centerX} V ${bottomNodeY}`} fill="none" />
                    <path id="path-to-right" d={`M ${centerX} ${topNodeY} V ${busLineY} H ${rightNodeX} V ${bottomNodeY}`} fill="none" />
                </defs>

                {/* Visible Lines */}
                <motion.path
                    d={`M ${centerX} ${topNodeY} V ${busLineY}`} // Vertical from top
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={pathVariants(0.4)}
                />
                 <motion.path
                    d={`M ${leftNodeX} ${busLineY} H ${rightNodeX}`} // Horizontal Bus
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={pathVariants(0.6)}
                />
                <motion.path
                    d={`M ${leftNodeX} ${busLineY} V ${bottomNodeY}`} // Vertical to left
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={pathVariants(0.8)}
                />
                 <motion.path
                    d={`M ${centerX} ${busLineY} V ${bottomNodeY}`} // Vertical to center
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={pathVariants(1.0)}
                />
                <motion.path
                    d={`M ${rightNodeX} ${busLineY} V ${bottomNodeY}`} // Vertical to right
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={pathVariants(1.2)}
                />

                <TravelingStar pathId="path-to-left" delay={0.8} />
                <TravelingStar pathId="path-to-center" delay={1.0} />
                <TravelingStar pathId="path-to-right" delay={1.2} />
            </svg>
        </motion.div>
    );
};
