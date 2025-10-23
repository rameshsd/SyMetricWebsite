
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Repeat, Database, ClipboardList, Gem } from "lucide-react";

// Tiny className helper (avoids external imports in sandbox)
const cn = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(" ");

// Self-contained useInView hook that returns a RefObject<HTMLDivElement>
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

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
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

// Node component
const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 z-10 w-28 sm:w-32">
    <div className={cn("flex items-center justify-center rounded-2xl border bg-background shadow-md transition-all", "w-full h-20 sm:h-24")}>
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
    </div>
    <div className="font-semibold text-sm sm:text-base text-foreground text-center">{label}</div>
  </motion.div>
);

// Animated stroke path using framer-motion's pathLength
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

// Particle that travels along a path id using SVG animateMotion
const FlowParticle = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => (
  <g>
    <circle r={4} fill="hsl(var(--primary))" filter="url(#glow)">
      <animateMotion dur="4s" begin={`${delay + 0.8}s`} repeatCount="indefinite">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  </g>
);

export const PlatformAnimation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const viewBoxWidth = 600;
  const viewBoxHeight = 400;

  const topY = 60;
  const busY = 200;
  const bottomY = 320;
  
  const centerX = viewBoxWidth / 2;
  const leftX = viewBoxWidth * 0.20; // Adjusted for symmetrical spacing
  const rightX = viewBoxWidth * 0.80; // Adjusted for symmetrical spacing

  return (
    <div ref={ref} className="w-full h-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-full h-[520px] flex flex-col items-center justify-start pt-4 overflow-visible"
      >
        {/* Top node (desktop) */}
        <div className="absolute" style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}>
          <Node icon={Gem} label="SyMetric Platform" />
        </div>

        {/* Bottom nodes (desktop) */}
        <div className="absolute hidden md:flex justify-center w-full" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
          <div className="flex justify-between w-[550px]">
            <Node icon={Repeat} label="IRT / IWRS" />
            <Node icon={ClipboardList} label="CTM" />
            <Node icon={Database} label="EDC" />
          </div>
        </div>
        
        {/* SVG canvas */}
        <div className="absolute top-0 left-0 w-full h-full hidden md:block">
          <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="absolute inset-0 z-0 pointer-events-none overflow-visible">
            <defs>
              <marker id="arrowhead" viewBox="-2 -5 10 10" refX="5" refY="0" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                <path d="M 0 0 L 5 2.5 L 0 5 z" fill="hsl(var(--primary))" />
              </marker>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <path id="p-left" d={`M ${centerX} ${topY + 50} V ${busY} H ${leftX} V ${bottomY - 10}`} fill="none" />
              <path id="p-center" d={`M ${centerX} ${topY + 50} V ${busY} H ${centerX} V ${bottomY - 10}`} fill="none" />
              <path id="p-right" d={`M ${centerX} ${topY + 50} V ${busY} H ${rightX} V ${bottomY - 10}`} fill="none" />
            </defs>

            {/* Visible Lines */}
            <FlowArrow d={`M ${centerX} ${topY + 50} V ${busY}`} delay={0.25} />
            <FlowArrow d={`M ${leftX - 20} ${busY} H ${rightX + 20}`} delay={0.45} />
            <FlowArrow d={`M ${leftX} ${busY} V ${bottomY - 10}`} delay={0.65} />
            <FlowArrow d={`M ${centerX} ${busY} V ${bottomY - 10}`} delay={0.85} />
            <FlowArrow d={`M ${rightX} ${busY} V ${bottomY - 10}`} delay={1.05} />

            {/* Animated Particles */}
            <FlowParticle pathId="p-left" delay={0.6} />
            <FlowParticle pathId="p-center" delay={0.9} />
            <FlowParticle pathId="p-right" delay={1.1} />
          </svg>
        </div>


        {/* Mobile stacked layout */}
        <div className="flex flex-col items-center gap-8 md:hidden mt-6 px-6">
          <Node icon={Gem} label="SyMetric Platform" />
          <div className="h-12 w-1 bg-gradient-to-b from-primary/90 to-primary/30 rounded-full" />
          <Node icon={Repeat} label="IRT / IWRS" />
          <div className="h-12 w-1 bg-gradient-to-b from-primary/90 to-primary/30 rounded-full" />
          <Node icon={ClipboardList} label="CTM" />
          <div className="h-12 w-1 bg-gradient-to-b from-primary/90 to-primary/30 rounded-full" />
          <Node icon={Database} label="EDC" />
        </div>
      </motion.div>
    </div>
  );
};
