"use client";

import React from "react";
import { motion } from "framer-motion";

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-20 bg-[#eef5ff]">
      <style>{`
        .flow {
          stroke: url(#grad);
          stroke-width: 3;
          stroke-linecap: round;
          fill: none;
        }

        @keyframes flowColor {
          0% { stop-color: #60a5fa; }
          50% { stop-color: #2563eb; }
          100% { stop-color: #60a5fa; }
        }

        .flowStop1 { animation: flowColor 2s linear infinite; }
        .flowStop2 { animation: flowColor 2s linear infinite; animation-delay: 1s; }
      `}</style>

      <div className="relative w-[900px] h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* SVG Connectors */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 600">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="flowStop1" />
              <stop offset="100%" className="flowStop2" stopOpacity="0.7" />
            </linearGradient>

            <marker id="arrowBlue" markerWidth="13" markerHeight="13" refX="6" refY="6" orient="auto">
              <path d="M0,0 L12,6 L0,12 z" fill="#2563eb" />
            </marker>
          </defs>

          {/* TOP */}
          <path d="M450 300 L450 140" className="flow" markerEnd="url(#arrowBlue)" />

          {/* LEFT */}
          <path d="M450 300 L220 300" className="flow" markerEnd="url(#arrowBlue)" />

          {/* RIGHT */}
          <path d="M450 300 L680 300" className="flow" markerEnd="url(#arrowBlue)" />

          {/* BOTTOM */}
          <path d="M450 300 L450 460" className="flow" markerEnd="url(#arrowBlue)" />
        </svg>

        {/* CENTER HUB (like Business AI) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 15 }}
          className="absolute left-[400px] top-[250px] w-[120px] h-[120px]
                     bg-white rounded-2xl shadow-xl border border-blue-100
                     flex items-center justify-center text-blue-700 font-semibold text-xl"
        >
          IRT
        </motion.div>

        {/* TOP: Randomization */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute left-[370px] top-[60px] w-[180px] h-[55px]
                     bg-white rounded-2xl shadow-md border border-slate-100
                     flex items-center justify-center text-blue-900 font-medium"
        >
          Randomization
        </motion.div>

        {/* LEFT: Clinical Supplies */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="absolute left-[60px] top-[272px] w-[230px] h-[55px]
                     bg-white rounded-2xl shadow-md border border-slate-100
                     flex items-center justify-center text-blue-900 font-medium"
        >
          Clinical Supplies
        </motion.div>

        {/* RIGHT: Subject Management */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute right-[60px] top-[272px] w-[230px] h-[55px]
                     bg-white rounded-2xl shadow-md border border-slate-100
                     flex items-center justify-center text-blue-900 font-medium"
        >
          Subject Management
        </motion.div>

        {/* BOTTOM: Site Management */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="absolute left-[370px] top-[500px] w-[180px] h-[55px]
                     bg-white rounded-2xl shadow-md border border-slate-100
                     flex items-center justify-center text-blue-900 font-medium"
        >
          Site Management
        </motion.div>
      </div>
    </div>
  );
}