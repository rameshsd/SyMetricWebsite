'use client';

import { motion } from 'framer-motion';
import {
  Gem, Repeat, ClipboardList, Database, TrendingUp, TestTube, LucideProps
} from 'lucide-react';
import React from 'react';

const modules: { icon: React.FC<LucideProps>; title: string; }[] = [
  { icon: Repeat, title: 'IRT / IWRS' },
  { icon: ClipboardList, title: 'CTM' },
  { icon: Database, title: 'EDC' },
  { icon: TrendingUp, title: 'Trial Analytics' },
  { icon: TestTube, title: 'Sample Management' },
];

export default function UltraHeroDiagram() {
  return (
    <div className="relative py-16 md:py-24 flex flex-col items-center overflow-hidden w-full">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full top-0"></div>

      {/* CENTER NODE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white rounded-2xl px-10 py-8 shadow-2xl text-center"
      >
        <Gem className="mx-auto mb-3 text-blue-600 animate-pulse" size={42} />
        <h2 className="text-2xl font-bold">SyMetric Clinical Platform</h2>
        <p className="text-sm text-gray-500 mt-1">
          Unified. Intelligent. Compliant.
        </p>
      </motion.div>

      {/* SVG CONNECTIONS */}
      <div className="relative w-full max-w-3xl h-32 mt-4">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <marker
                id="arrowhead-blue"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 2 2 L 5 5 L 2 8" stroke="#2563eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M 5 2 L 8 5 L 5 8" stroke="#2563eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
          </defs>

          {/* Main vertical stem */}
          <motion.path
            d="M 500 0 V 100"
            stroke="#2563eb"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Horizontal bar */}
          <motion.path
            d="M 100 100 H 900"
            stroke="#2563eb"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            vectorEffect="non-scaling-stroke"
          />

          {/* Vertical drops with arrows */}
          {[100, 300, 500, 700, 900].map((xPos, i) => (
            <motion.path
              key={i}
              d={`M ${xPos} 100 V 180`}
              stroke="#2563eb"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.9 + i * 0.1 }}
              markerEnd="url(#arrowhead-blue)"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
      
      {/* MODULES */}
      <div className="mt-4 grid grid-cols-5 gap-x-4 md:gap-x-8 w-full max-w-3xl px-4">
        {modules.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5 + i * 0.1 }}
              className="relative group"
            >
              {/* PULSE DOT */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
              </div>

              {/* CARD */}
              <div className="bg-white/80 backdrop-blur-md border border-white/30 p-4 rounded-xl shadow-lg text-center hover:scale-105 transition flex flex-col items-center justify-start min-h-[120px]">
                <div className="mb-2 flex justify-center">
                  <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <Icon className="text-white" size={18} />
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-semibold leading-tight">{m.title}</h3>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
