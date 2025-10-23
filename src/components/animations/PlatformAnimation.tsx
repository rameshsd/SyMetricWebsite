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
  <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 z-10 w-28 sm:w-32 md:w-40">
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
    strokeWidth={3}
    strokeLinecap="round"
    markerEnd="url(#arrowhead)"
    variants={pathVariants(delay)}
  />
);

// Particle that travels along a path id using SVG animateMotion
const FlowParticle = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => (
  <g>
    <circle r={5} fill="hsl(var(--primary))" filter="url(#glow)">
      <animateMotion dur="4s" begin={`${delay + 0.8}s`} repeatCount="indefinite">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
    <polygon points="-3,-2 3,0 -3,2" fill="hsl(var(--primary))" transform="rotate(90)">
      <animateMotion dur="4s" begin={`${delay + 0.8}s`} repeatCount="indefinite" rotate="auto">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </polygon>
  </g>
);

export const PlatformAnimation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const viewBoxWidth = 800;
  const viewBoxHeight = 450;

  const topNodeY = 40;
  const busLineY = 180;
  const bottomNodeY = 320;

  const centerX = viewBoxWidth / 2;
  const nodeHorizontalOffset = 220;
  const leftNodeX = centerX - nodeHorizontalOffset;
  const rightNodeX = centerX + nodeHorizontalOffset;

  return (
    <div ref={ref} className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-full h-[450px] flex-col items-center justify-center overflow-hidden hidden md:flex"
      >
        {/* Nodes using absolute positioning for precise control */}
        <div style={{ position: 'absolute', top: topNodeY, left: '50%', transform: 'translateX(-50%)' }}>
          <Node icon={Gem} label="SyMetric Platform" />
        </div>
        <div style={{ position: 'absolute', top: bottomNodeY, left: leftNodeX, transform: 'translateX(-50%)' }}>
          <Node icon={Repeat} label="IRT / IWRS" />
        </div>
        <div style={{ position: 'absolute', top: bottomNodeY, left: '50%', transform: 'translateX(-50%)' }}>
          <Node icon={ClipboardList} label="CTM" />
        </div>
        <div style={{ position: 'absolute', top: bottomNodeY, left: rightNodeX, transform: 'translateX(-50%)' }}>
          <Node icon={Database} label="EDC" />
        </div>

        {/* SVG for lines and animations */}
        <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="absolute inset-0 z-0 pointer-events-none">
          <defs>
            <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
            </marker>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Motion paths for particles */}
            <path id="p-left" d={`M ${centerX} ${topNodeY + 60} V ${busLineY} H ${leftNodeX} V ${bottomNodeY}`} fill="none" />
            <path id="p-center" d={`M ${centerX} ${topNodeY + 60} V ${bottomNodeY}`} fill="none" />
            <path id="p-right" d={`M ${centerX} ${topNodeY + 60} V ${busLineY} H ${rightNodeX} V ${bottomNodeY}`} fill="none" />
          </defs>

          {/* Visible lines */}
          <FlowArrow d={`M ${centerX} ${topNodeY + 60} V ${busLineY}`} delay={0.2} />
          <FlowArrow d={`M ${leftNodeX} ${busLineY} H ${rightNodeX}`} delay={0.4} />
          <FlowArrow d={`M ${leftNodeX} ${busLineY} V ${bottomNodeY}`} delay={0.6} />
          <FlowArrow d={`M ${centerX} ${busLineY} V ${bottomNodeY}`} delay={0.6} />
          <FlowArrow d={`M ${rightNodeX} ${busLineY} V ${bottomNodeY}`} delay={0.6} />

          {/* Animated particles */}
          <FlowParticle pathId="p-left" delay={0.8} />
          <FlowParticle pathId="p-center" delay={1.0} />
          <FlowParticle pathId="p-right" delay={1.2} />
        </svg>
      </motion.div>

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
    </div>
  );
};
