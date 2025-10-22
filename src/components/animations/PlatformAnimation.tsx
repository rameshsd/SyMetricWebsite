"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Database, FileText, Repeat } from 'lucide-react';

const Node = ({ icon: Icon, label, position, delay }: { icon: React.ElementType, label: string, position: string, delay: number }) => {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            className={cn("absolute text-center flex flex-col items-center", position)}
        >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 border border-primary/20 shadow-lg">
                <Icon className="w-8 h-8 text-primary" />
            </div>
            <span className="font-bold text-sm text-foreground">{label}</span>
        </motion.div>
    );
};

const Line = ({ path, delay }: { path: string, delay: number }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const pathId = React.useId();

    return (
        <motion.g
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <path
                id={pathId}
                d={path}
                stroke="hsl(var(--border))"
                strokeWidth="2"
                fill="none"
            />
            <g>
                <circle cx="0" cy="0" r="3" fill="hsl(var(--primary))" opacity="0.8">
                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite"
                        path={path}
                        rotate="auto"
                    />
                </circle>
            </g>
        </motion.g>
    );
};


export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className="w-full h-[400px] flex items-center justify-center relative">
            {inView && (
                <>
                    {/* Central Hub */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex flex-col items-center"
                    >
                        <div className="relative w-40 h-40">
                             <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-2 border border-dashed border-primary/10 rounded-full"
                            />
                            <div className="absolute inset-4 bg-background rounded-full flex items-center justify-center">
                                <div className="text-center">
                                    <p className="font-bold text-primary">SyMetric</p>
                                    <p className="text-sm text-muted-foreground">Platform</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Nodes */}
                    <Node icon={Repeat} label="IRT/IWRS" position="top-0 left-1/2 -translate-x-1/2" delay={0.3} />
                    <Node icon={Database} label="EDC" position="bottom-0 left-[20%] -translate-x-1/2" delay={0.5} />
                    <Node icon={FileText} label="CTM" position="bottom-0 right-[20%] translate-x-1/2" delay={0.7} />

                    {/* SVG Lines */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                        <defs>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <g>
                            <Line path="M 50% 90 C 50% 150, 50% 150, 50% 200" delay={0.8} />
                            <Line path="M 50% 200 C 35% 250, 35% 250, 29% 320" delay={1.0} />
                            <Line path="M 50% 200 C 65% 250, 65% 250, 71% 320" delay={1.2} />
                        </g>
                    </svg>
                </>
            )}
        </div>
    );
};
