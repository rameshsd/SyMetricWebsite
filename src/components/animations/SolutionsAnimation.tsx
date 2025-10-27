
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
    <circle r={0.7} fill="white" opacity="0.9">
      <animateMotion dur="4s" begin={`${delay}s`} repeatCount="indefinite" rotate="auto">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
    <circle r={1.5} fill="white" opacity="0.2">
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
}: {
  icon: React.ElementType;
  label?: string;
  size?: "sm" | "md";
}) => (
    <motion.div
        variants={itemVariants}
        className={cn(
            "flex flex-col items-center justify-center gap-1.5",
             size === "md" ? "w-24 h-24" : "w-20 h-20"
        )}
    >
        <div
            className={cn(
                "flex items-center justify-center rounded-lg bg-white shadow-md",
                "transition-all duration-300 hover:shadow-lg hover:scale-105",
                 size === "md" ? "w-16 h-16" : "w-12 h-12"
            )}
        >
            <Icon className={cn("text-primary", size === "md" ? "w-8 h-8" : "w-6 h-6")} />
        </div>
        {label && <div className="font-semibold text-xs text-white text-center whitespace-nowrap">{label}</div>}
    </motion.div>
);

export function SolutionsAnimation() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
const paths = [
  // Top Left
  { id: "path-1", d: "M 50% 50% C 35% 35%, 20% 25%, 20% 20%" },
  // Top Right
  { id: "path-2", d: "M 50% 50% C 65% 35%, 80% 25%, 80% 20%" },
  // Bottom Left
  { id: "path-3", d: "M 50% 50% C 35% 65%, 20% 75%, 20% 80%" },
  // Bottom Right
  { id: "path-4", d: "M 50% 50% C 65% 65%, 80% 75%, 80% 80%" },
  // Top Center
  { id: "path-5", d: "M 50% 45% C 50% 30%, 50% 20%, 50% 15%" },
  // Bottom Center
  { id: "path-6", d: "M 50% 55% C 50% 70%, 50% 80%, 50% 85%" },
];


  return (
    <div
      ref={ref}
      className="relative w-full h-[320px] sm:h-[400px]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-full h-full"
      >
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="clinicalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                <stop offset="50%" stopColor="white" stopOpacity="0.9">
                    <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </linearGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
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
              markerWidth="5"
              markerHeight="5"
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

             {paths.map(p => (
              <path key={p.id} id={p.id} d={p.d} fill="none" />
            ))}
          </defs>

          {/* Lines */}
           {paths.map((p, i) => (
            <motion.path
              key={p.id}
              d={p.d}
              variants={pathVariants(0.2 + i * 0.1)}
              stroke="url(#clinicalGradient)"
              strokeWidth="1.2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
          ))}

          {/* Flowing particles */}
          {inView && (
            <>
              {paths.map((p, i) => (
              <FlowParticle key={p.id} pathId={p.id} delay={0.6 + i * 0.2} />
            ))}
            </>
          )}
        </svg>

        {/* Center Node */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <Node icon={FlaskConical} label="CTP" size="md" />
        </div>

        {/* Outer Nodes */}
        <div className="absolute top-[20%] left-[20%]">
        <Node icon={Repeat} label="IRT/IWRS" size="sm" />
        </div>
        <div className="absolute top-[20%] left-[80%] -translate-x-1/2">
        <Node icon={Database} label="EDC" size="sm" />
        </div>
        <div className="absolute top-[80%] left-[20%] -translate-y-1/2">
        <Node icon={ClipboardList} label="CTM" size="sm" />
        </div>
        <div className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2">
        <Node icon={PieChart} label="Analytics" size="sm" />
        </div>
        <div className="absolute top-[12%] left-[50%] -translate-x-1/2">
        <Node icon={ShieldCheck} label="Compliance" size="sm" />
        </div>
        <div className="absolute top-[87%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <Node icon={FileText} label="eTMF" size="sm" />
        </div>

      </motion.div>
    </div>
  );
}

    