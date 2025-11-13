
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center gap-2 z-10 w-24 sm:w-28"
  >
    <div className="flex items-center justify-center rounded-2xl border bg-background shadow-md w-full h-20 sm:h-24">
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
    </div>
    <div className="font-semibold text-xs sm:text-sm text-foreground text-center">{label}</div>
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

const FlowParticle = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => (
  <g>
    <circle r={4} fill="hsl(var(--primary))" filter="url(#glow)">
      <animateMotion dur="4s" begin={`${delay}s`} repeatCount="indefinite">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  </g>
);

export function PlatformAnimation() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const viewBoxWidth = 600;
  const viewBoxHeight = 400;

  const topNodeY = 60;
  const busY = 200;
  const bottomNodeY = 340;

  const centerX = viewBoxWidth / 2;
  const leftX = viewBoxWidth * 0.15;
  const rightX = viewBoxWidth * 0.85;

  return (
    <div ref={ref} className="w-full h-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-full h-[450px] sm:h-[520px] flex flex-col items-center justify-start pt-4"
      >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pointer-events-none">
            <div className="pt-5" style={{ transform: 'scale(0.8) sm:scale(1)'}}>
                <Node icon={Gem} label="SyMetric Platform" />
            </div>
            <div className="absolute w-full max-w-xl" style={{top: '300px', transform: 'scale(0.8) sm:scale(1)'}}>
                <div className="flex justify-between w-full">
                    <Node icon={Repeat} label="IRT / IWRS" />
                    <Node icon={ClipboardList} label="CTM" />
                    <Node icon={Database} label="EDC" />
                </div>
            </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="overflow-visible">
            <defs>
              <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 9 3 L 0 6 z" fill="hsl(var(--primary))" />
              </marker>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              <path id="path-left" d={`M ${centerX} ${topNodeY + 48} V ${busY} H ${leftX} V ${bottomNodeY - 48}`} fill="none" />
              <path id="path-center" d={`M ${centerX} ${topNodeY + 48} V ${busY} H ${centerX} V ${bottomNodeY - 48}`} fill="none" />
              <path id="path-right" d={`M ${centerX} ${topNodeY + 48} V ${busY} H ${rightX} V ${bottomNodeY - 48}`} fill="none" />
            </defs>

            <FlowArrow d={`M ${centerX} ${topNodeY + 48} V ${busY}`} delay={0.2} />
            <motion.path
                d={`M ${leftX} ${busY} H ${rightX}`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                strokeLinecap="round"
                variants={pathVariants(0.4)}
            />
            <FlowArrow d={`M ${leftX} ${busY} V ${bottomNodeY - 48}`} delay={0.6} />
            <FlowArrow d={`M ${centerX} ${busY} V ${bottomNodeY - 48}`} delay={0.7} />
            <FlowArrow d={`M ${rightX} ${busY} V ${bottomNodeY - 48}`} delay={0.8} />

            <FlowParticle pathId="path-left" delay={0.8} />
            <FlowParticle pathId="path-center" delay={1.1} />
            <FlowParticle pathId="path-right" delay={1.4} />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};
