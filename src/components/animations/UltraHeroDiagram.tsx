'use client';

import { motion } from 'framer-motion';
import {
  Gem, Repeat, ClipboardList, Database, TrendingUp, TestTube, LucideProps
} from 'lucide-react';
import React from 'react';

const moduleData = [
  { icon: Repeat, title: 'IRT / IWRS', color: "#2563eb" },
  { icon: ClipboardList, title: 'CTM', color: "#14b8a6" },
  { icon: Database, title: 'EDC', color: "#8b5cf6" },
  { icon: TrendingUp, title: 'Trial Analytics', color: "#ec4899" },
  { icon: TestTube, title: 'Sample Management', color: "#f97316" },
];

const moduleConfig = [
  { x: 100, color: "#2563eb", arrowId: "arrow-blue" },
  { x: 300, color: "#14b8a6", arrowId: "arrow-teal" },
  { x: 500, color: "#8b5cf6", arrowId: "arrow-purple" },
  { x: 700, color: "#ec4899", arrowId: "arrow-pink" },
  { x: 900, color: "#f97316", arrowId: "arrow-orange" },
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
      <div className="relative w-full max-w-5xl h-48 mt-[-1rem]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb">
                    <animate attributeName="offset" values="-1;1" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="25%" stopColor="#14b8a6">
                    <animate attributeName="offset" values="0;1.25" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#8b5cf6">
                    <animate attributeName="offset" values="0.25;1.5" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="75%" stopColor="#ec4899">
                    <animate attributeName="offset" values="0.5;1.75" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#f97316">
                    <animate attributeName="offset" values="0.75;2" dur="3s" repeatCount="indefinite" />
                </stop>
            </linearGradient>

            {moduleConfig.map(m => (
              <marker
                key={m.arrowId}
                id={m.arrowId}
                viewBox="0 0 20 20"
                refX="16"
                refY="10"
                markerWidth="10"
                markerHeight="10"
                orient="auto"
              >
                <path
                  d="M4 4 L10 10 L4 16"
                  stroke={m.color}
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4 L16 10 L10 16"
                  stroke={m.color}
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            ))}
             <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main vertical stem */}
          <motion.path
            d="M 500 0 V 60"
            stroke="#c084fc"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            vectorEffect="non-scaling-stroke"
          />

          {/* Base solid line for visibility */}
          <path
            d="M 100 60 H 900"
            stroke="#c7d2fe"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Animated Gradient horizontal line */}
          <path
            d="M 100 60 H 900"
            stroke="url(#line-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 0 10px rgba(99,102,241,0.8))"
            }}
          />
          
          {/* Glowing Nodes on horizontal line */}
          {moduleConfig.map((m, i) => (
            <motion.circle
                key={i}
                cx={m.x}
                cy="60"
                r="5"
                fill={m.color}
                style={{ filter: `drop-shadow(0 0 8px ${m.color})` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
            />
          ))}

          {/* Vertical drops with arrows */}
          {moduleConfig.map((m, i) => (
            <g key={m.x}>
              <motion.path
                d={`M ${m.x} 60 V 170`}
                stroke={m.color}
                strokeWidth="2"
                strokeDasharray="2 10"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 2.0 + i * 0.1 }}
                markerEnd={`url(#${m.arrowId})`}
                style={{
                  filter: `drop-shadow(0 0 6px ${m.color}66)`
                }}
              />
              <motion.circle
                r="3"
                fill={m.color}
                initial={{ cy: 60 }}
                animate={{ cy: 170 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 2.2 + i * 0.3
                }}
              />
            </g>
          ))}
        </svg>
      </div>
      
      {/* MODULES */}
      <div className="mt-4 grid grid-cols-5 gap-x-4 md:gap-x-8 w-full max-w-5xl px-4">
        {moduleData.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.8 + i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-md border border-white/30 p-4 rounded-xl shadow-lg text-center hover:scale-105 transition flex flex-col items-center justify-start min-h-[120px]">
                <div className="mb-2 flex justify-center">
                  <div className="p-2 rounded-full" style={{ backgroundColor: m.color }}>
                    <Icon className="text-white" size={18} />
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-semibold leading-tight">{m.title}</h3>
                <div className="w-4/5 h-1 rounded-full mt-2" style={{ background: m.color }} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
