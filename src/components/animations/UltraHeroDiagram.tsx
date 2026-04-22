'use client';

import { motion } from 'framer-motion';
import {
  Gem, Repeat, ClipboardList, Database, TrendingUp, TestTube
} from 'lucide-react';

const modules = [
  { icon: Repeat, title: 'IRT / IWRS' },
  { icon: ClipboardList, title: 'CTM' },
  { icon: Database, title: 'EDC' },
  { icon: TrendingUp, title: 'Trial Analytics' },
  { icon: TestTube, title: 'Sample Management' },
];

export default function UltraHeroDiagram() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const pathVariants = (i: number) => ({
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 0.8, delay: 0.5 + i * 0.1, ease: "circOut" } },
  });
  
  const dotVariants = (i: number) => ({
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 15, delay: 1.3 + i * 0.1 } },
  });

  return (
    <div className="relative w-full h-[400px] flex flex-col items-center justify-between">
      
      {/* Central Card */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 bg-white rounded-2xl px-10 py-8 shadow-2xl text-center w-80"
      >
        <Gem className="mx-auto mb-3 text-blue-600" size={42} />
        <h2 className="text-2xl font-bold">SyMetric Clinical Platform</h2>
        <p className="text-sm text-gray-500 mt-1">
          Unified. Intelligent. Compliant.
        </p>
      </motion.div>

      {/* SVG Container for Lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none" className="overflow-visible">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
          </defs>
          {modules.map((_, i) => {
              const startX = 400; // center of 800
              const startY = 136; // bottom of the top card
              const endX = (800 / 5) * (i + 0.5); // centered above each bottom card
              const endY = 270; // adjusted top of the bottom card area to give more space
              const controlY = startY + (endY - startY) * 0.4;
              return (
                 <motion.path
                    key={i}
                    d={`M ${startX} ${startY} Q ${startX + (endX - startX) * 0.3} ${controlY}, ${endX} ${endY}`}
                    stroke="url(#line-gradient)"
                    strokeWidth="2"
                    fill="none"
                    variants={pathVariants(i)}
                    initial="hidden"
                    animate="visible"
                  />
              )
          })}
        </svg>
      </div>

      {/* Module Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-5 gap-6 w-full max-w-4xl"
      >
        {modules.map((m, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="relative flex flex-col items-center"
          >
            <motion.div 
              className="absolute -top-5 h-3 w-3 rounded-full bg-blue-500 shadow-lg border-2 border-white"
              variants={dotVariants(i)}
            />
            <div className="bg-white p-4 rounded-xl shadow-lg text-center w-full h-full flex flex-col items-center justify-center aspect-[4/3]">
              <div className="mb-3 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                  <m.icon className="text-blue-600" size={24}/>
                </div>
              </div>
              <h3 className="text-sm font-semibold leading-tight">{m.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
