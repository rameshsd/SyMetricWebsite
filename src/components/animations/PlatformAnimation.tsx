
"use client";
import React from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { motion, useAnimation } from 'framer-motion';

const Node = ({ cx, cy, label, subLabel, isHub = false, delay = 0 }: { cx: number, cy: number, label: string, subLabel?: string, isHub?: boolean, delay?: number }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
    React.useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay }
        });
      }
    }, [controls, inView, delay]);
  
    return (
      <motion.g
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
      >
        <circle cx={cx} cy={cy} r={isHub ? 40 : 25} className={isHub ? "fill-primary/20 stroke-primary stroke-2" : "fill-background stroke-primary/50"} />
        <circle cx={cx} cy={cy} r={isHub ? 45 : 30} className="fill-transparent stroke-primary/30" />
        <motion.circle 
          cx={cx} cy={cy} 
          r={isHub ? 50 : 35} 
          className="fill-transparent stroke-primary/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay + 1,
            ease: "easeInOut"
          }}
        />
        <text x={cx} y={cy - (subLabel ? 5: 0)} textAnchor="middle" dy=".3em" className={cn("font-bold", isHub ? "text-lg fill-primary-foreground" : "text-sm fill-foreground")}>{label}</text>
        {subLabel && <text x={cx} y={cy + 12} textAnchor="middle" dy=".3em" className="text-xs fill-muted-foreground">{subLabel}</text>}
      </motion.g>
    );
  };
  
  const Line = ({ x1, y1, x2, y2, delay = 0, reverse = false }: { x1: number, y1: number, x2: number, y2: number, delay?: number, reverse?: boolean }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
    React.useEffect(() => {
      if (inView) {
        controls.start({
          pathLength: 1,
          transition: { duration: 1, delay }
        });
      }
    }, [controls, inView, delay]);
  
    const id = React.useId();
  
    return (
      <g>
        <motion.path
          ref={ref}
          d={`M${x1},${y1} L${x2},${y2}`}
          className="stroke-primary/30"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
        <circle r="2" className="fill-primary/80">
            <animateMotion dur="3s" repeatCount="indefinite" path={`M${x1},${y1} L${x2},${y2}`} begin={`${delay}s`} rotate="auto" />
        </circle>
      </g>
    );
  };

export const PlatformAnimation = () => {
    const nodes = [
        { cx: 250, cy: 200, label: "IRT", isHub: true, subLabel: "Interactive Response Technology"},
        { cx: 100, cy: 100, label: "CTMS" },
        { cx: 400, cy: 100, label: "CDMS" },
        { cx: 100, cy: 300, label: "SCMS" },
        { cx: 400, cy: 300, label: "EDC" },
        { cx: 250, cy: 50, label: "eConsent" },
      ];
      
    const lines = [
      { p1: nodes[0], p2: nodes[1], delay: 0.5 },
      { p1: nodes[0], p2: nodes[2], delay: 0.6 },
      { p1: nodes[0], p2: nodes[3], delay: 0.7 },
      { p1: nodes[0], p2: nodes[4], delay: 0.8 },
      { p1: nodes[0], p2: nodes[5], delay: 0.9 },
    ];
  
    const [ref, inView] = useInView({ triggerOnce: true });
    
    return (
        <div ref={ref} className="w-full h-full flex items-center justify-center relative">
            <svg viewBox="0 0 500 400" className="w-full h-full overflow-visible">
                <defs>
                    <radialGradient id="hub-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0 }} />
                    </radialGradient>
                </defs>
                
                {inView && (
                    <motion.circle 
                        cx={250} cy={200} r={200} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut"}}
                        className="fill-[url(#hub-gradient)]"
                    />
                )}
        
                {lines.map((line, i) => (
                    <Line key={i} x1={line.p1.cx} y1={line.p1.cy} x2={line.p2.cx} y2={line.p2.cy} delay={line.delay} />
                ))}

                {nodes.map((node, i) => (
                    <Node key={node.label} cx={node.cx} cy={node.cy} label={node.label} subLabel={node.subLabel} isHub={node.isHub} delay={i * 0.15} />
                ))}
            </svg>
        </div>
    );
  };
