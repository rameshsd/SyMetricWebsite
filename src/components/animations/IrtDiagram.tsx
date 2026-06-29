"use client";

import { motion } from 'framer-motion';
import { Shuffle, Beaker, Users, Hospital, Repeat } from 'lucide-react';
import React from 'react';

const moduleData = [
  { icon: Shuffle, title: 'Randomization', color: "#2563eb" },
  { icon: Beaker, title: 'Clinical Supplies', color: "#14b8a6" },
  { icon: Users, title: 'Subject Management', color: "#8b5cf6" },
  { icon: Hospital, title: 'Site Management', color: "#f97316" },
];

const moduleConfig = [
  { x: 140, color: "#2563eb", arrowId: "irt-arrow-blue" },
  { x: 380, color: "#14b8a6", arrowId: "irt-arrow-teal" },
  { x: 620, color: "#8b5cf6", arrowId: "irt-arrow-purple" },
  { x: 860, color: "#f97316", arrowId: "irt-arrow-orange" },
];

const mobileModuleConfig = [
  { y: 60, color: "#2563eb", arrowId: "irt-m-arrow-blue" },
  { y: 150, color: "#14b8a6", arrowId: "irt-m-arrow-teal" },
  { y: 240, color: "#8b5cf6", arrowId: "irt-m-arrow-purple" },
  { y: 330, color: "#f97316", arrowId: "irt-m-arrow-orange" },
];

export function IrtDiagram() {
  return (
    <div className="relative py-8 md:py-16 flex flex-col items-center overflow-hidden w-full min-h-[500px] md:min-h-0">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full top-0"></div>

      {/* CENTER NODE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white rounded-2xl px-6 py-5 md:px-8 md:py-6 shadow-xl md:shadow-2xl text-center mx-4 border border-slate-100"
      >
        <Repeat className="mx-auto mb-2 text-blue-600 animate-pulse" size={28} />
        <h2 className="text-lg md:text-xl font-bold text-slate-800">IRT / IWRS</h2>
        <p className="text-[10px] md:text-xs text-gray-500 mt-1">
          Interactive Web Response Technology
        </p>
      </motion.div>

      {/* DESKTOP SVG CONNECTIONS */}
      <div className="relative w-full max-w-4xl h-44 mt-[-1rem] hidden md:block">
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 180"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="irt-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="33%" stopColor="#14b8a6" />
              <stop offset="66%" stopColor="#8b5cf6" />
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
            stroke="url(#irt-line-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* MAIN ACTIVE LINE */}
          <motion.path
            d="M 140 60 H 860"
            stroke="url(#irt-line-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
            style={{
              filter: "drop-shadow(0 0 16px rgba(99,102,241,0.8))"
            }}
          />
          
          {/* CENTER HUB */}
          <motion.circle
            cx="500"
            cy="60"
            r="5"
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
              r="5"
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
                r="4.5"
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
                d={`M ${m.x} 60 V 150`}
                stroke={m.color}
                strokeWidth="2.5"
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
      <div className="relative w-full h-[430px] mt-4 md:hidden flex justify-center">
        <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 430"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <linearGradient id="irt-mobile-line-gradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="33%" stopColor="#14b8a6" />
                    <stop offset="66%" stopColor="#8b5cf6" />
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
                d="M 200 0 V 390"
                stroke="url(#irt-mobile-line-gradient)"
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
      <div className="mt-4 hidden md:grid grid-cols-4 gap-x-4 md:gap-x-6 w-full max-w-4xl px-4">
        {moduleData.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 + i * 0.1 }}
              className="relative group h-full"
            >
              <div className="bg-white/85 backdrop-blur-md border border-slate-100 p-4 rounded-xl shadow-lg text-center hover:scale-105 transition flex flex-col items-center justify-start h-full">
                <div className="mb-2 flex justify-center">
                  <div className="p-2 rounded-full" style={{ backgroundColor: m.color }}>
                    <Icon className="text-white" size={18} />
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-semibold leading-tight text-slate-700 mb-2">{m.title}</h3>
                <div className="w-4/5 h-1 rounded-full mt-auto" style={{ background: m.color }} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
