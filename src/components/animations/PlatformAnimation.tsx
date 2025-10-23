"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Repeat, Database, ClipboardList } from 'lucide-react';

const Node = ({ icon: Icon, label, position, delay }: { icon: React.ElementType, label: string, position: string, delay: number }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            className={cn("absolute flex flex-col items-center", position)}
        >
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border">
                <Icon className="w-10 h-10 text-primary" />
            </div>
            <span className="font-semibold text-sm text-foreground mt-2">{label}</span>
        </motion.div>
    );
};

const Line = ({ path, delay, duration = 1.5 }: { path: string, delay: number, duration?: number }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <g ref={ref}>
            {inView && (
                <motion.path
                    d={path}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration, delay, ease: "easeInOut" }}
                />
            )}
        </g>
    );
}

export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div ref={ref} className="w-full h-[400px] flex items-center justify-center relative scale-90 md:scale-100">
            {inView && (
                <>
                    {/* Central Hub */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative flex flex-col items-center z-10"
                    >
                        <div className="relative w-40 h-40 rounded-full border-2 border-dashed border-primary/50 flex flex-col items-center justify-center p-4">
                             <motion.div
                                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                             />
                             <div className="text-center">
                                <p className="font-bold text-primary">SyMetric</p>
                                <p className="text-sm text-muted-foreground">Platform</p>
                             </div>
                        </div>
                    </motion.div>

                    {/* Nodes */}
                    <Node icon={Repeat} label="IRT/IWRS" position="top-0 left-1/2 -translate-x-1/2" delay={0.6} />
                    <Node icon={Database} label="EDC" position="bottom-0 left-[10%]" delay={0.8} />
                    <Node icon={ClipboardList} label="CTM" position="bottom-0 right-[10%]" delay={1.0} />
                    

                    {/* SVG Lines */}
                    <svg width="100%" height="100%" viewBox="0 0 500 400" className="absolute inset-0 z-0">
                        {/* Line to IRT/IWRS */}
                        <Line path="M 250,120 V 60" delay={1.2} />
                        {/* Line to EDC */}
                        <Line path="M 210,240 L 135,310" delay={1.4} />
                        {/* Line to CTM */}
                        <Line path="M 290,240 L 365,310" delay={1.6} />
                    </svg>
                </>
            )}
        </div>
    );
};
