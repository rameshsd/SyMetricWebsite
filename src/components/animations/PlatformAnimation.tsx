
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Repeat, Database, ClipboardList, Gem } from "lucide-react";

const cn = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(" ");

function useInView(options?: { root?: Element | Document | null; rootMargin?: string; threshold?: number | number[]; triggerOnce?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (options?.triggerOnce) observer.disconnect();
          } else if (!options?.triggerOnce) {
            setInView(false);
          }
        });
      },
      { root: options?.root ?? null, rootMargin: options?.rootMargin ?? "0px", threshold: options?.threshold ?? 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options?.root, options?.rootMargin, JSON.stringify(options?.threshold), options?.triggerOnce]);

  return [ref, inView] as const;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pathVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay },
  },
});

const Node = ({ icon: Icon, label, className }: { icon: React.ElementType; label: string, className?: string }) => (
  <motion.div variants={itemVariants} className={cn("flex flex-col items-center gap-2 z-10", className)}>
    <div className={cn("flex items-center justify-center rounded-2xl border bg-background shadow-md transition-all", "w-full h-20 sm:h-24")}>
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
    </div>
    <div className="font-semibold text-sm sm:text-base text-foreground text-center">{label}</div>
  </motion.div>
);

const FlowArrow = ({ d, delay = 0 }: { d: string; delay?: number }) => (
  <motion.path
    d={d}
    fill="none"
    stroke="hsl(var(--primary))"
    strokeWidth={2}
    strokeLinecap="round"
    markerEnd="url(#arrowhead)"
    variants={pathVariants(delay)}
  />
);

const TravelingStar = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => (
  <g>
    <polygon points="-4 -4, 0 4, 4 -4, -4 -4" fill="hsl(var(--primary))" filter="url(#glow)">
       <animateMotion dur="5s" begin={`${delay}s`} repeatCount="indefinite" rotate="auto">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </polygon>
  </g>
);


export const PlatformAnimation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const viewBoxWidth = 500;
  const viewBoxHeight = 500;

  const topNodeY = 60;
  const busLineY = 220;
  const bottomNodeY = 380;
  
  const centerX = viewBoxWidth / 2;
  const leftNodeX = viewBoxWidth * 0.2; 
  const rightNodeX = viewBoxWidth * 0.8;

  return (
    <div ref={ref} className="w-full h-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-full h-full flex-col items-center justify-start hidden md:flex pt-4"
      >
        <Node icon={Gem} label="SyMetric Platform" className="w-40" />

        <div className="absolute w-full h-full top-0 left-0">
           <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="absolute inset-0 z-0 pointer-events-none overflow-visible">
            <defs>
              <marker id="arrowhead" viewBox="-5 -5 10 10" refX="0" refY="0" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                <path d="M 0 0 L -5 -5 L -5 5 Z" fill="hsl(var(--primary))" />
              </marker>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <path id="path-left" d={`M ${centerX} ${topNodeY + 50} V ${busLineY} H ${leftNodeX} V ${bottomNodeY}`} fill="none"/>
              <path id="path-right" d={`M ${centerX} ${topNodeY + 50} V ${busLineY} H ${rightNodeX} V ${bottomNodeY}`} fill="none"/>
            </defs>

            {/* Visible Lines */}
            <FlowArrow d={`M ${centerX} ${topNodeY + 50} V ${busLineY}`} delay={0.2} />
            <FlowArrow d={`M ${leftNodeX-20} ${busLineY} H ${rightNodeX+20}`} delay={0.4} />
            <FlowArrow d={`M ${leftNodeX} ${busLineY} V ${bottomNodeY}`} delay={0.6} />
            <FlowArrow d={`M ${rightNodeX} ${busLineY} V ${bottomNodeY}`} delay={0.6} />
            
            {/* Animated Particles */}
            <TravelingStar pathId="#path-left" delay={0.8} />
            <TravelingStar pathId="#path-right" delay={1.2} />
          </svg>
        </div>

        <div className="absolute flex justify-between w-full" style={{ top: bottomNodeY - 40, paddingLeft: '10%', paddingRight: '10%' }}>
            <Node icon={Repeat} label="IRT / IWRS" className="w-32"/>
            <Node icon={ClipboardList} label="CTM" className="w-32"/>
        </div>
      </motion.div>

      {/* Mobile stacked layout */}
      <div className="flex flex-col items-center gap-8 md:hidden mt-6 px-6">
          <Node icon={Gem} label="SyMetric Platform" className="w-40" />
          <div className="h-12 w-1 bg-gradient-to-b from-primary/90 to-primary/30 rounded-full" />
          <Node icon={Repeat} label="IRT / IWRS" className="w-32" />
          <div className="h-12 w-1 bg-gradient-to-b from-primary/90 to-primary/30 rounded-full" />
          <Node icon={ClipboardList} label="CTM" className="w-32" />
          <div className="h-12 w-1 bg-gradient-to-b from-primary/90 to-primary/30 rounded-full" />
          <Node icon={Database} label="EDC" className="w-32"/>
      </div>

    </div>
  );
};
