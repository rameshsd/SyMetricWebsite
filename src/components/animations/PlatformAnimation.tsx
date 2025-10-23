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

const Line = ({ d, delay, inView, markerPosition, markerDelay }: { d: string; delay: number; inView: boolean; markerPosition: {x: number; y: number}, markerDelay: number }) => {
    return (
        <>
            <motion.path
                d={d}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                strokeOpacity="0.8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.2, delay, ease: "easeInOut" }}
            />
            <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: markerDelay }}
            >
                <motion.g 
                    transform={`translate(${markerPosition.x}, ${markerPosition.y})`}
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.8, 1], rotate: [0, 45, 90] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: markerDelay }}
                >
                    <Sparkle className="w-4 h-4 -translate-x-2 -translate-y-2" />
                </motion.g>
            </motion.g>
        </>
    );
};

export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div ref={ref} className="w-full max-w-lg h-[450px] flex items-center justify-center relative scale-90 md:scale-100 mx-auto">
            
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

            <Node icon={Repeat} label="IRT/IWRS" position="top-[10%] left-[5%]" delay={1.4} inView={inView} />
            <Node icon={ClipboardList} label="CTM" position="top-[10%] right-[5%]" delay={1.5} inView={inView} />
            <Node icon={Database} label="EDC" position="bottom-[10%] right-[5%]" delay={1.6} inView={inView} />

            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" viewBox="0 0 500 450" preserveAspectRatio="xMidYMid meet">
                    {/* Line to top-left (IRT/IWRS) */}
                    <Line 
                        d="M 220 200 H 135 V 105 H 125" 
                        delay={0.5} 
                        inView={inView} 
                        markerDelay={1.3} 
                        markerPosition={{x: 125, y: 105}} 
                    />
                    
                    {/* Line to top-right (CTM) */}
                    <Line 
                        d="M 280 200 H 365 V 105 H 375" 
                        delay={0.7} 
                        inView={inView} 
                        markerDelay={1.5} 
                        markerPosition={{x: 375, y: 105}}
                    />
                    
                    {/* Line to bottom-right (EDC) */}
                    <Line 
                        d="M 280 250 H 410 V 350 H 390" 
                        delay={0.9} 
                        inView={inView} 
                        markerDelay={1.7} 
                        markerPosition={{x: 390, y: 350}}
                    />
                </svg>
            </div>
        </div>
    );
};