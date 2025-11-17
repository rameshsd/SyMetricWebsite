
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Repeat, Database, ClipboardList, Gem } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const pathVariants = (delay = 0.5) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut', delay },
  },
});

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center gap-3 z-10 w-32"
  >
    <div className="flex items-center justify-center rounded-2xl border bg-background shadow-md w-32 h-24">
      <Icon className="w-10 h-10 text-primary" />
    </div>
    <div className="font-semibold text-sm text-foreground text-center">{label}</div>
  </motion.div>
);

export const PlatformAnimation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const viewBoxWidth = 600;
  const viewBoxHeight = 400;

  const topNodeY = 60;
  const bottomNodeY = 320;

  const centerX = viewBoxWidth / 2;
  const leftX = viewBoxWidth * 0.15;
  const rightX = viewBoxWidth * 0.85;

  return (
    <div ref={ref} className="w-full h-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative w-full h-[450px] sm:h-[520px] flex flex-col items-center justify-start pt-4"
      >
        {/* Node Components */}
        <div className="absolute" style={{ top: `${topNodeY - 50}px`, left: '50%', transform: 'translateX(-50%)' }}>
          <Node icon={Gem} label="SyMetric Platform" />
        </div>
        <div className="absolute" style={{ top: `${bottomNodeY - 60}px`, left: `${leftX}%`, transform: 'translateX(-50%)' }}>
          <Node icon={Repeat} label="IRT / IWRS" />
        </div>
        <div className="absolute" style={{ top: `${bottomNodeY - 60}px`, left: '50%', transform: 'translateX(-50%)' }}>
          <Node icon={ClipboardList} label="CTM" />
        </div>
        <div className="absolute" style={{ top: `${bottomNodeY - 60}px`, left: `${rightX}%`, transform: 'translateX(-50%)' }}>
          <Node icon={Database} label="EDC" />
        </div>

        {/* SVG for lines and dots */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="overflow-visible">
            <defs>
              <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" opacity="0.8" />
              </marker>
            </defs>

            {/* Lines */}
            <motion.line
              x1={centerX} y1={topNodeY + 30}
              x2={centerX} y2={bottomNodeY - 150}
              stroke="hsl(var(--primary))" strokeWidth="2"
              variants={pathVariants(0.4)}
            />
            <motion.line
              x1={leftX} y1={bottomNodeY - 150}
              x2={rightX} y2={bottomNodeY - 150}
              stroke="hsl(var(--primary))" strokeWidth="2"
              variants={pathVariants(0.6)}
            />
            <motion.line
              x1={leftX} y1={bottomNodeY - 150}
              x2={leftX} y2={bottomNodeY - 80}
              stroke="hsl(var(--primary))" strokeWidth="2"
              variants={pathVariants(0.8)}
              markerEnd="url(#arrowhead)"
            />
            <motion.line
              x1={centerX} y1={bottomNodeY - 150}
              x2={centerX} y2={bottomNodeY - 80}
              stroke="hsl(var(--primary))" strokeWidth="2"
              variants={pathVariants(0.9)}
              markerEnd="url(#arrowhead)"
            />
            <motion.line
              x1={rightX} y1={bottomNodeY - 150}
              x2={rightX} y2={bottomNodeY - 80}
              stroke="hsl(var(--primary))" strokeWidth="2"
              variants={pathVariants(1.0)}
              markerEnd="url(#arrowhead)"
            />
            
            {/* Dots */}
            <motion.circle cx={centerX} cy={topNodeY + 40} r="4" fill="hsl(var(--primary))" variants={itemVariants} />
            <motion.circle cx={centerX} cy={bottomNodeY - 150} r="4" fill="hsl(var(--primary))" variants={itemVariants} />
            <motion.circle cx={leftX} cy={bottomNodeY - 150} r="4" fill="hsl(var(--primary))" variants={itemVariants} />
            <motion.circle cx={rightX} cy={bottomNodeY - 150} r="4" fill="hsl(var(--primary))" variants={itemVariants} />

          </svg>
        </div>
      </motion.div>
    </div>
  );
};
