"use client";

import React from "react";
import { motion } from "framer-motion";

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-14 bg-slate-50">
      <style>{`
        .flow-line {
          stroke: url(#blueFlow);
          stroke-width: 4;
          stroke-linecap: round;
        }
        @keyframes flowColor {
          0% { stop-color: #3b82f6; }
          50% { stop-color: #1d4ed8; }
          100% { stop-color: #3b82f6; }
        }
        .flowStop1 { animation: flowColor 2s linear infinite; }
        .flowStop2 { animation: flowColor 2s linear infinite; animation-delay: 1s; }
      `}</style>

      <div className="relative w-[780px] h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* SVG LINES */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 780 600">
          <defs>
            <linearGradient id="blueFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="flowStop1" />
              <stop offset="100%" className="flowStop2" stopOpacity="0.8" />
            </linearGradient>

            <marker
              id="arrowBlue"
              markerWidth="13"
              markerHeight="13"
              refX="6"
              refY="6"
              orient="auto"
            >
              <path d="M0,0 L12,6 L0,12 z" fill="#1d4ed8" />
            </marker>
          </defs>

          {/* TOP */}
          <line x1="390" y1="300" x2="390" y2="160" className="flow-line" markerEnd="url(#arrowBlue)" />

          {/* LEFT */}
          <line x1="390" y1="300" x2="190" y2="300" className="flow-line" markerEnd="url(#arrowBlue)" />

          {/* RIGHT */}
          <line x1="390" y1="300" x2="590" y2="300" className="flow-line" markerEnd="url(#arrowBlue)" />

          {/* BOTTOM */}
          <line x1="390" y1="300" x2="390" y2="440" className="flow-line" markerEnd="url(#arrowBlue)" />
        </svg>

        {/* CENTER – IRT */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="absolute left-[350px] top-[260px] w-[80px] h-[80px] rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-xl flex items-center justify-center text-white font-semibold text-lg"
        >
          IRT
        </motion.div>

        {/* TOP — Randomization */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="absolute left-[290px] top-[90px] w-[200px] h-[52px] rounded-full bg-white shadow-md border flex items-center justify-center text-blue-900 font-medium"
        >
          Randomization
        </motion.div>

        {/* LEFT — Clinical Supplies */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="absolute left-[70px] top-[274px] w-[230px] h-[52px] rounded-full bg-white shadow-md border flex items-center justify-center text-blue-900 font-medium"
        >
          Clinical Supplies
        </motion.div>

        {/* RIGHT — Subject Management */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, type: "spring" }}
          className="absolute right-[70px] top-[274px] w-[230px] h-[52px] rounded-full bg-white shadow-md border flex items-center justify-center text-blue-900 font-medium"
        >
          Subject Management
        </motion.div>

        {/* BOTTOM — Site Management */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="absolute left-[290px] top-[480px] w-[200px] h-[52px] rounded-full bg-white shadow-md border flex items-center justify-center text-blue-900 font-medium"
        >
          Site Management
        </motion.div>
      </div>
    </div>
  );
}