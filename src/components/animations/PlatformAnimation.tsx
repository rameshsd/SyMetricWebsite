"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Repeat, Database, ClipboardList, Gem } from 'lucide-react';

const Sparkle = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 44 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
    >
        <path d="M22 0L26.3168 17.6832L44 22L26.3168 26.3168L22 44L17.6832 26.3168L0 22L17.6832 17.6832L22 0Z" fill="hsl(var(--primary))"/>
    </svg>
);


const Node = ({ icon: Icon, label, position, delay, inView }: { icon: React.ElementType, label: string, position: string, delay: number, inView: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
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

const Line = ({ d, delay, inView }: { d: string, delay: number, inView: boolean }) => (
    <motion.path
        d={d}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: "easeInOut" }}
    />
);

const AnimatedSparkle = ({ position, delay, inView }: { position: string, delay: number, inView: boolean }) => (
    <motion.div
        className={cn("absolute w-5 h-5", position)}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay }}
    >
        <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
        >
            <Sparkle className="w-full h-full" />
        </motion.div>
    </motion.div>
);


export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div ref={ref} className="w-full max-w-lg h-[400px] flex items-center justify-center relative scale-90 md:scale-100 mx-auto">
            
            {/* Central Hub */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
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
            <Node icon={Repeat} label="IRT/IWRS" position="top-[10%] left-[5%]" delay={1.4} inView={inView} />
            <Node icon={Database} label="EDC" position="bottom-[10%] left-1/2 -translate-x-1/2" delay={1.5} inView={inView} />
            <Node icon={ClipboardList} label="CTM" position="top-[10%] right-[5%]" delay={1.6} inView={inView} />

            {/* SVG Layer for Lines and Sparkles */}
            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" viewBox="0 0 500 400" preserveAspectRatio="none">
                    <defs>
                        <motion.path 
                            id="line-1" 
                            d="M 250 180 Q 200 180, 150 130 T 100 80" 
                        />
                         <motion.path 
                            id="line-2" 
                            d="M 250 220 V 300"
                        />
                         <motion.path 
                            id="line-3" 
                            d="M 250 180 Q 300 180, 350 130 T 400 80" 
                        />
                    </defs>

                    <Line d="M 250 180 Q 200 180, 150 130 T 100 80" delay={0.5} inView={inView} />
                    <Line d="M 250 220 V 300" delay={0.7} inView={inView} />
                    <Line d="M 250 180 Q 300 180, 350 130 T 400 80" delay={0.9} inView={inView} />
                </svg>

                {/* Animated Sparkles */}
                <AnimatedSparkle position="top-[32.5%] left-[30%] -translate-x-1/2 -translate-y-1/2" delay={1.0} inView={inView} />
                <AnimatedSparkle position="bottom-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2" delay={1.2} inView={inView} />
                <AnimatedSparkle position="top-[32.5%] right-[30%] translate-x-1/2 -translate-y-1/2" delay={1.4} inView={inView} />
            </div>
        </div>
    );
};
