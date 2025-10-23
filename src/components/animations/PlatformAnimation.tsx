"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Repeat, Database, ClipboardList, Gem } from 'lucide-react';

const Node = ({ icon: Icon, label, position, delay, inView }: { icon: React.ElementType, label: string, position: string, delay: number, inView: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, delay }}
            className={cn("absolute flex flex-col items-center", position)}
        >
            <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center shadow-lg border border-primary/20">
                <Icon className="w-8 h-8 text-primary" />
            </div>
            <span className="font-semibold text-xs text-foreground mt-2 text-center">{label}</span>
        </motion.div>
    );
};

const Line = ({ path, delay, duration = 1, inView }: { path: string, delay: number, duration?: number, inView: boolean }) => {
    return (
        <motion.path
            d={path}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration, delay, ease: "easeInOut" }}
        />
    );
};

const Diamond = ({ cx, cy, delay, inView }: { cx: number, cy: number, delay: number, inView: boolean }) => {
    return (
        <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay }}
            transform={`translate(${cx} ${cy})`}
        >
            <motion.path
                d="M -5,0 L 0,-5 L 5,0 L 0,5 Z"
                fill="hsl(var(--primary))"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay + 0.5,
                }}
            />
        </motion.g>
    );
};


export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div ref={ref} className="w-full h-[400px] flex items-center justify-center relative scale-90 md:scale-100">
            {/* Central Hub */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex flex-col items-center z-10"
            >
                <div className="relative w-32 h-32 rounded-lg border bg-background flex flex-col items-center justify-center p-4 shadow-xl">
                    <Gem className="w-6 h-6 text-primary mb-1" />
                    <p className="font-bold text-sm text-foreground">SyMetric</p>
                    <p className="text-xs text-muted-foreground">Platform</p>
                </div>
            </motion.div>

            {/* Nodes */}
            <Node icon={Repeat} label="IRT/IWRS" position="top-0 left-[15%] transform -translate-x-1/2" delay={1.4} inView={inView} />
            <Node icon={Database} label="EDC" position="bottom-0 left-1/2 -translate-x-1/2" delay={1.5} inView={inView} />
            <Node icon={ClipboardList} label="CTM" position="top-0 right-[15%] transform translate-x-1/2" delay={1.6} inView={inView} />
            

            {/* SVG Lines & Diamonds */}
            <svg width="100%" height="100%" viewBox="0 0 500 400" className="absolute inset-0 z-0">
                {/* Line to IRT/IWRS */}
                <Line path="M 215,180 L 125,80" delay={0.8} inView={inView} />
                <Diamond cx={170} cy={130} delay={1.1} inView={inView} />

                {/* Line to EDC */}
                <Line path="M 250,235 V 310" delay={0.9} inView={inView} />
                <Diamond cx={250} cy={272.5} delay={1.2} inView={inView} />

                {/* Line to CTM */}
                <Line path="M 285,180 L 375,80" delay={1.0} inView={inView} />
                <Diamond cx={330} cy={130} delay={1.3} inView={inView} />
            </svg>
        </div>
    );
};
