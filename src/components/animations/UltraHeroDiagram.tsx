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
            {/* 🔥 TRUE moving gradient */}
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="25%" stopColor="#14b8a6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="75%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f97316" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="-1 0"
                to="1 0"
                dur="3s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* 🔥 Better arrow */}
            {moduleConfig.map(m => (
              <marker
                key={m.arrowId}
                id={m.arrowId}
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <path
                  d="M0,0 L8,4 L0,8 Z"
                  fill={m.color}
                />
              </marker>
            ))}
          </defs>

          {/* CENTER STEM */}
          <motion.path
            d="M 500 0 V 60"
            stroke="url(#flow-gradient)"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* 🔥 SINGLE CLEAN HORIZONTAL LINE */}
          <motion.path
            d="M 100 60 H 900"
            stroke="url(#flow-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
            style={{
              filter: "drop-shadow(0 0 12px rgba(99,102,241,0.6))"
            }}
          />

          {/* NODES */}
          {moduleConfig.map((m, i) => (
            <motion.circle
              key={i}
              cx={m.x}
              cy="60"
              r="6"
              fill={m.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            />
          ))}

          {/* 🔥 IMPROVED CONNECTING LINES */}
          {moduleConfig.map((m, i) => (
            <g key={m.x}>
              <motion.path
                d={`M ${m.x} 60 V 170`}
                stroke={m.color}
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
                markerEnd={`url(#${m.arrowId})`}
                style={{
                  filter: `drop-shadow(0 0 8px ${m.color})`
                }}
              />

              {/* 🔥 FLOWING DOT */}
              <motion.circle
                r="4"
                fill={m.color}
                initial={{ cy: 60 }}
                animate={{ cy: 170 }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2
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
