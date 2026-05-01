
'use client';

import { motion } from 'framer-motion';
import {
  Gem, Repeat, ClipboardList, Database, TrendingUp, TestTube
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

const mobileModuleConfig = [
  { y: 60, color: "#2563eb", arrowId: "m-arrow-blue" },
  { y: 150, color: "#14b8a6", arrowId: "m-arrow-teal" },
  { y: 240, color: "#8b5cf6", arrowId: "m-arrow-purple" },
  { y: 330, color: "#ec4899", arrowId: "m-arrow-pink" },
  { y: 420, color: "#f97316", arrowId: "m-arrow-orange" },
];

export default function UltraHeroDiagram() {
  return (
    <div className="relative py-8 md:py-24 flex flex-col items-center overflow-hidden w-full min-h-[550px] md:min-h-0">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full top-0"></div>

      {/* CENTER NODE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white rounded-2xl px-6 py-6 md:px-10 md:py-8 shadow-xl md:shadow-2xl text-center mx-4"
      >
        <Gem className="mx-auto mb-2 md:mb-3 text-blue-600 animate-pulse" size={32} />
        <h2 className="text-lg md:text-2xl font-bold">SyMetric Clinical Platform</h2>
        <p className="text-[10px] md:text-sm text-gray-500 mt-1">
          Unified. Intelligent. Compliant.
        </p>
      </motion.div>

      {/* DESKTOP SVG CONNECTIONS */}
      <div className="relative w-full max-w-5xl h-48 mt-[-1rem] hidden md:block">
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="25%" stopColor="#14b8a6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="75%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>

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
            stroke="url(#line-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* MAIN ACTIVE LINE */}
          <motion.path
            d="M 100 60 H 900"
            stroke="url(#line-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
            style={{
              filter: "drop-shadow(0 0 16px rgba(99,102,241,1))"
            }}
          />
          
          {/* CENTER HUB */}
          <motion.circle
            cx="500"
            cy="60"
            r="6"
            fill="#6366f1"
            style={{
              filter: "drop-shadow(0 0 20px #6366f1)"
            }}
          />

          {/* NODES on horizontal line */}
          {moduleConfig.map((m, i) => (
            <motion.circle
              key={i}
              cx={m.x}
              cy="60"
              r="6"
              fill={m.color}
              opacity={0.95}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
               style={{
                filter: `drop-shadow(0 0 12px ${m.color})`
              }}
            />
          ))}

          {/* VERTICAL CONNECTING LINES */}
          {moduleConfig.map((m, i) => (
            <g key={m.x}>
              <motion.circle
                cx={m.x}
                cy="60"
                r="5"
                fill={m.color}
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                style={{
                  filter: `drop-shadow(0 0 10px ${m.color})`
                }}
              />
              <motion.path
                d={`M ${m.x} 60 V 170`}
                stroke={m.color}
                strokeWidth="3"
                strokeDasharray="4 4"
                strokeDashoffset={0}
                animate={{ strokeDashoffset: -40 }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                markerEnd={`url(#${m.arrowId})`}
                style={{
                  filter: `drop-shadow(0 0 8px ${m.color})`
                }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* MOBILE SVG CONNECTIONS */}
      <div className="relative w-full h-[520px] mt-4 md:hidden flex justify-center">
        <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 520"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <linearGradient id="mobile-line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="25%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="75%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f97316" />
                </linearGradient>

                {mobileModuleConfig.map(m => (
                    <marker
                        key={m.arrowId}
                        id={m.arrowId}
                        markerWidth="6"
                        markerHeight="6"
                        refX="5"
                        refY="3"
                        orient="auto"
                    >
                        <path
                            d="M0,0 L6,3 L0,6 Z"
                            fill={m.color}
                        />
                    </marker>
                ))}
            </defs>

            {/* MAIN VERTICAL LINE */}
            <motion.path
                d="M 200 0 V 480"
                stroke="url(#mobile-line-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2 }}
            />

            {/* NODES and BRANCHES */}
            {mobileModuleConfig.map((m, i) => {
                const isLeft = i % 2 === 0;
                const branchX = isLeft ? 110 : 290;
                return (
                    <g key={i}>
                        {/* Dot on main line */}
                        <motion.circle
                            cx="200"
                            cy={m.y}
                            r="4"
                            fill={m.color}
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        />
                        {/* Horizontal branch */}
                        <motion.path
                            d={`M 200 ${m.y} H ${branchX}`}
                            stroke={m.color}
                            strokeWidth="2.5"
                            strokeDasharray="4 2"
                            markerEnd={`url(#${m.arrowId})`}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                        />
                    </g>
                );
            })}
        </svg>

        {/* MOBILE MODULES OVERLAY */}
        {moduleData.map((m, i) => {
            const isLeft = i % 2 === 0;
            const config = mobileModuleConfig[i];
            const Icon = m.icon;
            return (
                <motion.div
                    key={i}
                    initial={{ x: isLeft ? -20 : 20, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                    className="absolute"
                    style={{ 
                        top: `${config.y - 45}px`,
                        left: isLeft ? '10%' : 'auto',
                        right: isLeft ? 'auto' : '10%',
                        width: '35%'
                    }}
                >
                    <div className="bg-white/90 backdrop-blur-md border border-white/50 p-2 md:p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center min-h-[90px] border-t-4" style={{ borderTopColor: m.color }}>
                        <div className="p-1.5 rounded-full mb-1" style={{ backgroundColor: m.color }}>
                            <Icon className="text-white" size={16} />
                        </div>
                        <h3 className="text-[10px] font-bold leading-tight">{m.title}</h3>
                    </div>
                </motion.div>
            );
        })}
      </div>
      
      {/* DESKTOP MODULES */}
      <div className="mt-4 hidden md:grid grid-cols-5 gap-x-4 md:gap-x-8 w-full max-w-5xl px-4">
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
