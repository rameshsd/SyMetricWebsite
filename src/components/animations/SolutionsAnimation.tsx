"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Repeat, Database, ClipboardList, FlaskConical, ShieldCheck, PieChart } from "lucide-react";

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const pathVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay },
  },
});

const Node = ({ icon: Icon, label, size = 'md' }: { icon: React.ElementType; label?: string, size?: 'sm' | 'md' }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center gap-2 z-10"
  >
    <div className={cn("flex items-center justify-center rounded-2xl border bg-background shadow-md",
        size === 'md' ? "w-24 h-24" : "w-16 h-16"
    )}>
      <Icon className={cn("text-primary", size === 'md' ? "w-10 h-10" : "w-8 h-8")} />
    </div>
    {label && <div className="font-semibold text-xs text-foreground text-center">{label}</div>}
  </motion.div>
);


export const SolutionsAnimation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="relative w-full h-[450px] flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-full h-full scale-90 sm:scale-100"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 400"
          className="absolute inset-0"
        >
          <motion.line x1="250" y1="200" x2="100" y2="100" stroke="hsl(var(--border))" variants={pathVariants(0.2)} />
          <motion.line x1="250" y1="200" x2="400" y2="100" stroke="hsl(var(--border))" variants={pathVariants(0.3)} />
          <motion.line x1="250" y1="200" x2="100" y2="300" stroke="hsl(var(--border))" variants={pathVariants(0.4)} />
          <motion.line x1="250" y1="200" x2="400" y2="300" stroke="hsl(var(--border))" variants={pathVariants(0.5)} />
          <motion.line x1="250" y1="200" x2="250" y2="50" stroke="hsl(var(--border))" variants={pathVariants(0.6)} />
          <motion.line x1="250" y1="200" x2="250" y2="350" stroke="hsl(var(--border))" variants={pathVariants(0.7)} />
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Node icon={FlaskConical} label="CTP" size="md" />
        </div>
        
        <div className="absolute" style={{ top: 'calc(25% - 32px)', left: 'calc(20% - 32px)'}}><Node icon={Repeat} label="IRT/IWRS" size="sm" /></div>
        <div className="absolute" style={{ top: 'calc(25% - 32px)', left: 'calc(80% - 32px)'}}><Node icon={Database} label="EDC" size="sm" /></div>
        <div className="absolute" style={{ top: 'calc(75% - 32px)', left: 'calc(20% - 32px)'}}><Node icon={ClipboardList} label="CTM" size="sm" /></div>
        <div className="absolute" style={{ top: 'calc(75% - 32px)', left: 'calc(80% - 32px)'}}><Node icon={PieChart} label="Analytics" size="sm" /></div>
        <div className="absolute" style={{ top: 'calc(12.5% - 32px)', left: 'calc(50% - 32px)'}}><Node icon={ShieldCheck} label="Compliance" size="sm" /></div>
        <div className="absolute" style={{ top: 'calc(87.5% - 32px)', left: 'calc(50% - 32px)'}}><Node icon={FileText} label="eTMF" size="sm" /></div>

      </motion.div>
    </div>
  );
};
