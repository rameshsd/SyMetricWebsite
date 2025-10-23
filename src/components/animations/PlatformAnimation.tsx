"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Briefcase, Users, BarChart, Truck, Gem } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Node = ({ icon: Icon, label, position, delay, size = 'md' }: { icon: React.ElementType, label?: string, position: string, delay: number, size?: 'sm' | 'md' }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const sizeClasses = size === 'md' 
        ? "w-20 h-20" // p-5
        : "w-16 h-16"; // p-4

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            className={cn("absolute flex flex-col items-center", position)}
        >
            <div className={cn("rounded-lg bg-white flex items-center justify-center shadow-lg border", sizeClasses)}>
                <Icon className="w-8 h-8 text-primary" />
            </div>
            {label && <span className="font-semibold text-sm text-foreground mt-2">{label}</span>}
        </motion.div>
    );
};

const Line = ({ path, delay, duration = 20 }: { path: string, delay: number, duration?: number }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <g ref={ref}>
            {inView && (
                <>
                    <path
                        d={path}
                        fill="none"
                        stroke="hsl(var(--border))"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                    />
                    <motion.path
                        d={path}
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1.5"
                        strokeDasharray="0.1 10"
                        initial={{ pathLength: 0, pathOffset: 1 }}
                        animate={{ pathLength: 1, pathOffset: 0 }}
                        transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
                    />
                </>
            )}
        </g>
    );
}

const Diamond = ({ position, delay }: { position: string, delay: number }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 45 } : {}}
            transition={{ duration: 0.5, delay, type: 'spring' }}
            className={cn("absolute w-3 h-3 bg-primary rounded-sm", position)}
        />
    )
}

const Chart = ({ position, delay }: { position: string, delay: number }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            className={cn("absolute w-48 h-32 bg-white rounded-lg shadow-lg border p-3 flex flex-col justify-between", position)}>
            <div className="flex justify-between items-end h-full">
                <div className="w-4 h-1/2 bg-primary/20 rounded-t-sm" />
                <div className="w-4 h-full bg-primary/20 rounded-t-sm" />
                <div className="w-4 h-1/3 bg-primary/20 rounded-t-sm" />
                <div className="w-4 h-3/4 bg-primary/20 rounded-t-sm" />
            </div>
            <div className="h-1 w-full bg-primary/20 rounded-full mt-2"/>
        </motion.div>
    )
}

export const PlatformAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const businessPersonImage = PlaceHolderImages.find(p => p.id === 'business-person-hero');

    return (
        <div ref={ref} className="w-full h-[500px] flex items-center justify-center relative scale-90 md:scale-100">
            {inView && (
                <>
                    {/* Central Hub */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex flex-col items-center z-10"
                    >
                        <div className="relative w-40 h-40 bg-white rounded-lg shadow-lg border flex flex-col items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 opacity-10 text-center text-xs leading-none font-mono text-primary">
                                {Array.from({length: 20}).map((_, i) => (
                                    <React.Fragment key={i}>
                                        {'01110100101011011001'.split('').sort(() => Math.random() - 0.5).join('')}<br/>
                                    </React.Fragment>
                                ))}
                            </div>
                            <Gem className="w-8 h-8 text-primary" />
                            <p className="font-bold text-primary mt-2">Business AI</p>
                        </div>
                    </motion.div>

                    {/* Nodes */}
                    <Node icon={Briefcase} position="top-[10%] left-[10%]" delay={0.3} />
                    <Node icon={Users} position="top-[20%] right-[5%]" delay={0.5} size="sm" />
                    <Node icon={Truck} position="bottom-[10%] right-[15%]" delay={0.7} />

                    <Chart position="top-[35%] right-[-10%]" delay={0.6}/>
                    
                    {/* Person Image */}
                    {businessPersonImage && (
                        <motion.div 
                            initial={{ opacity: 0, y: 50}}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.9 }}
                            className="absolute bottom-0 left-0 w-56 h-64 z-20">
                            <Image src={businessPersonImage.imageUrl} alt={businessPersonImage.description} data-ai-hint={businessPersonImage.imageHint} fill className="object-contain object-bottom" />
                        </motion.div>
                    )}

                    {/* Suggestion box */}
                    <motion.div
                         initial={{ opacity: 0, y: 20, scale: 0.8 }}
                         animate={{ opacity: 1, y: 0, scale: 1 }}
                         transition={{ duration: 0.5, delay: 1.5 }}
                         className="absolute bottom-[20%] left-[25%] z-30 flex items-center gap-2 p-2 pr-3 bg-white rounded-full shadow-lg border"
                    >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Gem className="w-5 h-5 text-primary"/>
                        </div>
                        <p className="text-xs font-semibold text-foreground">Optimize site selection for cost</p>
                    </motion.div>
                    
                    {/* Diamonds */}
                    <Diamond position="top-[25%] left-[25%]" delay={1} />
                    <Diamond position="top-[48%] left-[20%]" delay={1.1} />
                    <Diamond position="top-[30%] right-[25%]" delay={1.2} />
                    <Diamond position="bottom-[25%] right-[30%]" delay={1.3} />


                    {/* SVG Lines */}
                    <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute inset-0 z-0">
                        <Line path="M 110,95 H 180" delay={1} />
                        <Line path="M 250,110 V 70 C 250,50 350,50 380,50 C 410,50 410,70 410,80 V 135" delay={1.2} />
                        <Line path="M 420,230 H 320" delay={1.3} />
                        <Line path="M 400,410 H 310" delay={1.4} />
                        <Line path="M 180,380 H 220" delay={1.5}/>
                    </svg>
                </>
            )}
        </div>
    );
};
