"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Repeat, Database, ClipboardList, Gem } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

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
    <polygon points="-6,-3 6,0 -6,3" fill="hsl(var(--primary))">
      <animateMotion dur="4s" begin={`${delay + 1.05}s`} repeatCount="indefinite">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </polygon>
  </g>
);

export const PlatformAnimation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const viewBoxWidth = 700;
  const viewBoxHeight = 450;

  const topY = 60;
  const busY = 200;
  const bottomY = 340;

  const centerX = viewBoxWidth / 2;
  const leftX = viewBoxWidth * 0.25;
  const rightX = viewBoxWidth * 0.75;

  return (
    <div ref={ref} className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-full h-auto min-h-[520px] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Top node (desktop) */}
        <div className="absolute hidden md:block" style={{ top: topY - 20, left: "50%", transform: "translateX(-50%)" }}>
          <Node icon={Gem} label="SyMetric Platform" />
        </div>

        {/* Bottom nodes (desktop) */}
        <div className="absolute hidden md:flex justify-center w-full" style={{ top: bottomY - 80 }}>
          <div className="flex justify-between w-full max-w-3xl px-8">
            <Node icon={Repeat} label="IRT / IWRS" />
            <Node icon={ClipboardList} label="CTM" />
            <Node icon={Database} label="EDC" />
          </div>
        </div>

        {/* SVG canvas */}
        <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="absolute inset-0 z-0 pointer-events-none hidden md:block">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--primary))" />
            </marker>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <path id="p-left" d={`M ${centerX} ${topY + 30} V ${busY} H ${leftX} V ${bottomY}`} fill="none" />
            <path id="p-center" d={`M ${centerX} ${topY + 30} V ${busY} H ${centerX} V ${bottomY}`} fill="none" />
            <path id="p-right" d={`M ${centerX} ${topY + 30} V ${busY} H ${rightX} V ${bottomY}`} fill="none" />

            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          <FlowArrow d={`M ${centerX} ${topY + 30} V ${busY}`} delay={0.25} />
          <FlowArrow d={`M ${leftX - 40} ${busY} H ${rightX + 40}`} delay={0.45} />
          <FlowArrow d={`M ${leftX} ${busY} V ${bottomY}`} delay={0.65} />
          <FlowArrow d={`M ${centerX} ${busY} V ${bottomY}`} delay={0.85} />
          <FlowArrow d={`M ${rightX} ${busY} V ${bottomY}`} delay={1.05} />

          <FlowParticle pathId="p-left" delay={0.6} />
          <FlowParticle pathId="p-center" delay={0.9} />
          <FlowParticle pathId="p-right" delay={1.1} />
        </svg>

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
