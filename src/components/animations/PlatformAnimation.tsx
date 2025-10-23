"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Repeat, Database, ClipboardList, Gem } from 'lucide-react';

const Node = ({ 
    icon: Icon, 
    label, 
    className,
    inView,
    delay
}: { 
    icon: React.ElementType, 
    label: string, 
    className?: string,
    inView: boolean,
    delay: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            className={cn("absolute flex flex-col items-center gap-2", className)}
        >
            <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center shadow-lg border border-primary/20">
                <Icon className="w-10 h-10 text-primary" />
            </div>
            <span className="font-semibold text-sm text-foreground">{label}</span>
        </motion.div>
    );
};

const Line = ({ 
    d, 
    delay, 
    inView
}: { 
    d: string; 
    delay: number; 
    inView: boolean;
}) => {
    return (
        <motion.path
            d={d}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeOpacity="0.8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay, ease: "easeInOut" }}
        />
    );
};

export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div ref={ref} className="w-full max-w-lg h-[450px] flex items-center justify-center relative scale-90 md:scale-100 mx-auto">
            
            {/* Central Hub */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex flex-col items-center z-20"
            >
                <div className="relative w-36 h-36 rounded-lg border bg-background flex flex-col items-center justify-center p-4 shadow-xl">
                    <Gem className="w-8 h-8 text-primary mb-2" />
                    <p className="font-bold text-md text-foreground">SyMetric</p>
                    <p className="text-sm text-muted-foreground">Platform</p>
                </div>
            </motion.div>

            {/* Component Nodes */}
            <Node icon={Repeat} label="IRT/IWRS" className="top-0 left-10" delay={1.2} inView={inView} />
            <Node icon={ClipboardList} label="CTM" className="top-0 right-10" delay={1.3} inView={inView} />
            <Node icon={Database} label="EDC" className="bottom-12 right-0 z-10" delay={1.4} inView={inView} />

            {/* SVG container for lines and shapes */}
            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" viewBox="0 0 440 450" preserveAspectRatio="xMidYMid meet">
                    
                    {/* Abstract Shape behind EDC */}
                    <motion.path
                        d="M260 400 L440 450 L400 300 L350 280 L300 420 Z"
                        fill="hsl(var(--primary))"
                        fillOpacity="0.7"
                        stroke="none"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={inView ? { opacity: 1, pathLength: 1 } : {}}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                    />
                    
                    {/* Connecting Lines */}
                    {/* Line to IRT/IWRS */}
                    <Line d="M190 225 H 100 V 135" delay={0.5} inView={inView} />
                    
                    {/* Line to CTM */}
                    <Line d="M250 225 H 340 V 135" delay={0.6} inView={inView} />

                    {/* Line to EDC */}
                    <Line d="M220 295 V 360 H 300" delay={0.7} inView={inView} />
                </svg>
            </div>
        </div>
    );
};
