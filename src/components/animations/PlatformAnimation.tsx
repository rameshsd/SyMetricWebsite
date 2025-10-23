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
    delay,
    isCentral = false
}: { 
    icon: React.ElementType, 
    label: string | React.ReactNode, 
    className?: string,
    delay: number,
    isCentral?: boolean
}) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <motion.div
            ref={ref}
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

const Line = ({ d, delay }: { d: string; delay: number; }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <motion.path
            ref={ref}
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

const BackgroundShape = ({ d, delay }: { d: string; delay: number; }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <motion.path
            ref={ref}
            d={d}
            fill="hsl(var(--primary))"
            fillOpacity="0.1"
            stroke="none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay, ease: "easeOut" }}
        />
    )
}

export const PlatformAnimation = () => {
    return (
        <div className="w-full max-w-lg h-[450px] flex items-center justify-center relative scale-90 md:scale-100 mx-auto">
            
            <Node 
                icon={Repeat} 
                label="IRT/IWRS" 
                className="top-[10%] left-[5%]" 
                delay={0.8} 
            />
            <Node 
                icon={ClipboardList} 
                label="CTM" 
                className="top-[10%] right-[5%]" 
                delay={0.9} 
            />
            <Node 
                icon={Database} 
                label="EDC" 
                className="bottom-[5%] right-0 z-10" 
                delay={1.0} 
            />
            
            <Node 
                icon={Gem}
                label={<><p className="font-bold text-md text-foreground -mt-1">SyMetric</p><p className="text-sm text-muted-foreground">Platform</p></>}
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                delay={0.1}
                isCentral={true}
            />

            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" viewBox="0 0 440 450" preserveAspectRatio="xMidYMid meet">
                    
                    <BackgroundShape
                        d="M280 300 L440 280 L440 450 L320 450 Z"
                        delay={0.7}
                    />
                    
                    {/* Line to IRT/IWRS */}
                    <Line d="M152 225 H 98 V 132" delay={0.3} />
                    
                    {/* Line to CTM */}
                    <Line d="M288 225 H 342 V 132" delay={0.4} />

                    {/* Line to EDC */}
                    <Line d="M220 293 V 360 H 300" delay={0.5} />
                </svg>
            </div>
        </div>
    );
};
