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
// x positions for the lines corresponding to the modules
const moduleXPositions = [10, 30, 50, 70, 90];


export default function UltraHeroDiagram() {
  return (
    <div className="relative py-24 flex flex-col items-center overflow-hidden">

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
      <svg className="absolute top-[180px] w-full max-w-6xl h-[200px]">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#line-gradient)" />
          </marker>
        </defs>

        {/* Main vertical stem */}
        <motion.path
          d="M 50% 0 V 40%"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        
        {/* Horizontal bar */}
        <motion.path
          d="M 10% 40% H 90%"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        {/* Vertical drops with arrows */}
        {moduleXPositions.map((xPos, i) => (
          <motion.path
            key={i}
            d={`M ${xPos}% 40% V 80%`}
            stroke="url(#line-gradient)"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
            markerEnd="url(#arrow)"
          />
        ))}
      </svg>
      
      {/* MODULES */}
      <div className="mt-40 grid grid-cols-2 md:grid-cols-5 gap-8 w-full max-w-7xl px-4">

        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.1 }}
            className="relative group"
          >
            {/* PULSE DOT */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            </div>

            {/* CARD */}
            <div className="bg-white/80 backdrop-blur-md border border-white/30 p-5 rounded-xl shadow-lg text-center hover:scale-105 transition flex flex-col items-center justify-center min-h-[140px]">

              <div className="mb-3 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <m.icon className="text-white" size={20} />
                </div>
              </div>

              <h3 className="text-sm font-semibold leading-tight">{m.title}</h3>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
