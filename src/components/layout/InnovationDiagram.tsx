'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { Rocket, Users, ShieldCheck, TrendingUp } from 'lucide-react';

const diagramFeatures = [
    { icon: Rocket, title: 'Accelerate Timelines' },
    { icon: Users, title: 'Unify Data & Teams' },
    { icon: ShieldCheck, title: 'Ensure Compliance' },
    { icon: TrendingUp, title: 'Scale with Confidence' },
];

export const InnovationDiagram = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const centerVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: 'spring', stiffness: 260, damping: 20, delay: 0.2 },
        },
    };

    const itemVariants = (index: number) => ({
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: 'spring', stiffness: 260, damping: 20, delay: 0.4 + 0.15 * index },
        },
    });

    const lineVariants = (index: number) => ({
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeInOut', delay: 0.6 + index * 0.1 },
        },
    });
    
    const floatingAnimation = (delay: number) => ({
        translateY: ['-4px', '4px'],
        transition: {
            delay,
            duration: 2.5 + delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    });

    const positions = [
        { top: '0%', left: '50%' }, // Top
        { top: '50%', left: '100%' }, // Right
        { top: '100%', left: '50%' }, // Bottom
        { top: '50%', left: '0%' }, // Left
    ];

    const lineEndpoints = [
        { x2: 200, y2: 65 }, // Top
        { x2: 335, y2: 150 }, // Right
        { x2: 200, y2: 235 }, // Bottom
        { x2: 65, y2: 150 }, // Left
    ];


    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative w-full max-w-sm h-96 mx-auto"
        >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" aria-hidden="true">
                {lineEndpoints.map((line, index) => (
                    <motion.line
                        key={index}
                        x1="200"
                        y1="150"
                        x2={line.x2}
                        y2={line.y2}
                        stroke="hsl(var(--border))"
                        strokeWidth="1.5"
                        variants={lineVariants(index)}
                    />
                ))}
            </svg>

            <motion.div
                variants={centerVariants}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                 <motion.div animate={floatingAnimation(0)}>
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center shadow-lg border border-primary/20">
                        <div className="text-center">
                            <p className="text-sm font-bold text-primary">SyMetric</p>
                            <p className="text-xs text-primary/80">Platform</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {diagramFeatures.map((feature, index) => (
                <motion.div
                    key={feature.title}
                    variants={itemVariants(index)}
                    className="absolute"
                    style={{ ...positions[index], transform: 'translate(-50%, -50%)' }}
                >
                    <motion.div animate={floatingAnimation(0.2 * index)}>
                        <div className="w-28 h-28 bg-background rounded-full flex flex-col items-center justify-center p-2 text-center shadow-lg border">
                            <feature.icon className="w-7 h-7 text-primary mb-1" />
                            <p className="text-[11px] font-semibold text-foreground leading-tight">{feature.title}</p>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
};
