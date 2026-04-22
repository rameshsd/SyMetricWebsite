
'use client';

import { motion } from 'framer-motion';
import {
  Gem, Repeat, ClipboardList, Database, TrendingUp, TestTube
} from 'lucide-react';

const modules = [
  { icon: Repeat, title: 'IRT / IWRS', x: 10 },
  { icon: ClipboardList, title: 'CTM', x: 30 },
  { icon: Database, title: 'EDC', x: 50 },
  { icon: TrendingUp, title: 'Trial Analytics', x: 70 },
  { icon: TestTube, title: 'Sample Management', x: 90 },
];

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

        {modules.map((m, i) => (
          <g key={i}>
            {/* CURVED LINE */}
            <motion.path
              d={`M 50% 0 Q ${m.x}% 120 ${m.x}% 180`}
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />

            {/* FLOW DOT (ANIMATION) */}
            <motion.circle
              r="4"
              fill="#3b82f6"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4
              }}
              style={{
                offsetPath: `path('M 50% 0 Q ${m.x}% 120 ${m.x}% 180')`
              }}
            />
          </g>
        ))}

        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* MODULES */}
      <div className="mt-40 grid grid-cols-2 md:grid-cols-5 gap-8 w-full max-w-6xl px-4">

        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
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
            <div className="bg-white/80 backdrop-blur-md border border-white/30 p-5 rounded-xl shadow-lg text-center hover:scale-105 transition">

              <div className="mb-3 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <m.icon className="text-white" size={20} />
                </div>
              </div>

              <h3 className="text-sm font-semibold">{m.title}</h3>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
