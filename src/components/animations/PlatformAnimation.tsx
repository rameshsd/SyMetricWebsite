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
    delay,
    isCentral = false
}: { 
    icon: React.ElementType, 
    label: string | React.ReactNode, 
    className?: string,
    inView: boolean,
    delay: number,
    isCentral?: boolean
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "absolute flex flex-col items-center gap-2",
                className
            )}
        >
            <div className={cn(
                "flex items-center justify-center rounded-lg border",
                isCentral 
                    ? "w-36 h-36 bg-background flex-col p-4 shadow-xl" 
                    : "w-24 h-24 bg-primary/10 border-primary/20 shadow-lg"
            )}>
                <Icon className={cn("text-primary", isCentral ? "w-8 h-8 mb-2" : "w-10 h-10")} />
            </div>
            <div className={cn("font-semibold text-sm text-foreground", isCentral ? 'text-center' : '')}>
                {label}
            </div>
        </motion.div>
    );
};

const Line = ({ d, delay, inView }: { d: string; delay: number; inView: boolean; }) => {
    return (
        <motion.path
            d={d}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8, delay, ease: "easeInOut" }}
        />
    );
};


export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div ref={ref} className="w-full max-w-lg h-[450px] flex items-center justify-center relative scale-90 md:scale-100 mx-auto">
            
            {/* Component Nodes */}
            <Node 
                icon={Repeat} 
                label="IRT/IWRS" 
                className="top-[10%] left-[5%]" 
                delay={0.8} 
                inView={inView} 
            />
            <Node 
                icon={ClipboardList} 
                label="CTM" 
                className="top-[10%] right-[5%]" 
                delay={0.9} 
                inView={inView} 
            />
            <Node 
                icon={Database} 
                label="EDC" 
                className="bottom-[5%] right-0 z-10" 
                delay={1.0} 
                inView={inView} 
            />
            
            {/* Central Hub */}
            <Node 
                icon={Gem}
                label={<><p className="font-bold text-md text-foreground -mt-1">SyMetric</p><p className="text-sm text-muted-foreground">Platform</p></>}
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                delay={0.1}
                inView={inView}
                isCentral={true}
            />

            {/* SVG container for lines and shapes */}
            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" viewBox="0 0 440 450" preserveAspectRatio="xMidYMid meet">
                    
                    {/* Abstract Shape behind EDC */}
                    <motion.path
                        d="M260 400 L440 450 L400 300 L350 280 L300 420 Z"
                        fill="hsl(var(--primary))"
                        fillOpacity="0.7"
                        stroke="none"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
                    />
                    
                    {/* Connecting Lines */}
                    {/* Line to IRT/IWRS */}
                    <Line d="M152 225 H 98 V 132" delay={0.3} inView={inView} />
                    
                    {/* Line to CTM */}
                    <Line d="M288 225 H 342 V 132" delay={0.4} inView={inView} />

                    {/* Line to EDC */}
                    <Line d="M220 293 V 360 H 300" delay={0.5} inView={inView} />
                </svg>
            </div>
        </div>
    );
};
