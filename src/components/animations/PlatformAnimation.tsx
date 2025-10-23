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

const Line = ({ d, delay, inView, markerPosition }: { d: string; delay: number; inView: boolean; markerPosition: {x: number; y: number} }) => {
    const pathRef = React.useRef<SVGPathElement>(null);
    return (
        <>
            <motion.path
                ref={pathRef}
                d={d}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeOpacity="0.5"
                strokeDasharray="4 4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay, ease: "easeInOut" }}
            />
            <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: delay + 0.6 }}
            >
                <motion.g 
                    transform={`translate(${markerPosition.x}, ${markerPosition.y})`}
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay }}
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
        <div ref={ref} className="w-full max-w-lg h-[400px] flex items-center justify-center relative scale-90 md:scale-100 mx-auto">
            
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

            <Node icon={Repeat} label="IRT/IWRS" position="top-0 left-0" delay={1.4} inView={inView} />
            <Node icon={Database} label="EDC" position="bottom-0 left-1/2 -translate-x-1/2" delay={1.5} inView={inView} />
            <Node icon={ClipboardList} label="CTM" position="top-0 right-0" delay={1.6} inView={inView} />

            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
                    {/* Line to top left node */}
                    <Line d="M 235 150 Q 150 150 150 80 L 150 80 Q 150 60 120 60 L 80 60" delay={0.5} inView={inView} markerPosition={{x: 135, y: 115}} />
                    
                    {/* Line to bottom node */}
                    <Line d="M 250 250 L 250 300" delay={0.7} inView={inView} markerPosition={{x: 250, y: 275}} />
                    
                    {/* Line to top right node */}
                    <Line d="M 265 150 Q 350 150 350 80 L 350 80 Q 350 60 380 60 L 420 60" delay={0.9} inView={inView} markerPosition={{x: 365, y: 115}}/>
                </svg>
            </div>
        </div>
    );
};
