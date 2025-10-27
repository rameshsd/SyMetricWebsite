
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Repeat,
  Database,
  ClipboardList,
  FlaskConical,
  ShieldCheck,
  PieChart,
  FileText,
} from "lucide-react";

const cn = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

function useInView(options?: {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}) {
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
      {
        root: options?.root ?? null,
        rootMargin: options?.rootMargin ?? "0px",
        threshold: options?.threshold ?? 0.5,
      }
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const pathVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.3, ease: "easeInOut", delay },
  },
});

const FlowParticle = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => (
  <g filter="url(#glow)">
    <circle r={3} fill="white" opacity="0.9">
      <animateMotion dur="4s" begin={`${delay}s`} repeatCount="indefinite" rotate="auto">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
    {/* trailing glow effect */}
    <circle r={6} fill="white" opacity="0.2">
      <animateMotion dur="4s" begin={`${delay + 0.2}s`} repeatCount="indefinite" rotate="auto">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  </g>
);

const Node = ({
  icon: Icon,
  label,
  size = "md",
  x,
  y
}: {
  icon: React.ElementType;
  label?: string;
  size?: "sm" | "md";
  x: number;
  y: number;
}) => (
    <motion.g variants={itemVariants} transform={`translate(${x}, ${y})`}>
        <foreignObject x={-48} y={-48} width={96} height={96} className="z-10">
             <div
                className={cn(
                    "flex flex-col items-center justify-center gap-2",
                    
                )}
            >
                <div
                className={cn(
                    "flex items-center justify-center rounded-2xl bg-white shadow-md",
                    "transition-all duration-300 hover:shadow-lg hover:scale-105",
                    size === "md" ? "w-24 h-24" : "w-20 h-20"
                )}
                >
                <Icon className={cn("text-primary", size === "md" ? "w-10 h-10" : "w-8 h-8")} />
                </div>
                {label && <div className="font-semibold text-xs text-foreground text-center">{label}</div>}
            </div>
        </foreignObject>
    </motion.g>
);

export function SolutionsAnimation() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const centerX = 250;
  const centerY = 200;

  const paths = [
      { id: "path-1", d: "M250 200 C 180 160, 120 140, 90 120" },
      { id: "path-2", d: "M250 200 C 320 160, 380 140, 410 120" },
      { id: "path-3", d: "M250 200 C 180 240, 120 260, 90 280" },
      { id: "path-4", d: "M250 200 C 320 240, 380 260, 410 280" },
      { id: "path-5", d: "M250 150 V 50" },
      { id: "path-6", d: "M250 250 V 350" }
  ];

  return (
    <div ref={ref} className="relative w-full h-[450px] flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-full h-full scale-90 sm:scale-100"
      >
        <svg width="100%" height="100%" viewBox="0 0 500 400" className="absolute inset-0 overflow-visible">
          <defs>
            <linearGradient id="clinicalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.2" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8">
                <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="white" stopOpacity="0.2" />
            </linearGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <marker
              id="arrowhead"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M 0 0 L 10 5 L 0 10 z"
                fill="white"
                opacity="0.9"
              >
                <animate
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </marker>
            {paths.map(p => <path key={p.id} id={p.id} d={p.d} fill="none" />)}
          </defs>

          {paths.map((p, i) => (
            <motion.path
              key={p.id}
              d={p.d}
              variants={pathVariants(0.2 + i * 0.1)}
              stroke="url(#clinicalGradient)"
              strokeWidth="1.8"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
          ))}

          {inView && (
            <>
              {paths.map((p, i) => <FlowParticle key={p.id} pathId={p.id} delay={0.6 + i * 0.2} />)}
            </>
          )}

           <Node icon={FlaskConical} label="CTP" size="md" x={centerX} y={centerY} />
           <Node icon={Repeat} label="IRT/IWRS" size="sm" x={90} y={100} />
           <Node icon={Database} label="EDC" size="sm" x={410} y={100} />
           <Node icon={ClipboardList} label="CTM" size="sm" x={90} y={300} />
           <Node icon={PieChart} label="Analytics" size="sm" x={410} y={300} />
           <Node icon={ShieldCheck} label="Compliance" size="sm" x={250} y={50} />
           <Node icon={FileText} label="eTMF" size="sm" x={250} y={350} />
        </svg>
      </motion.div>
    </div>
  );
};
