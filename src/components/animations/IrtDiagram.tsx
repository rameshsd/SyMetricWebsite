
"use client";

import React from "react";
import { motion } from "framer-motion";

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center py-10 bg-slate-50">
      <style>{`
        .flow-line {
          stroke: url(#gradFlow);
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* gradient animation */
        @keyframes gradientFlow {
          0% { stop-color: #60a5fa; }
          50% { stop-color: #2563eb; }
          100% { stop-color: #60a5fa; }
        }

        .flowStop1 {
          animation: gradientFlow 2s linear infinite;
        }
        .flowStop2 {
          animation: gradientFlow 2s linear infinite;
          animation-delay: 1s;
        }
      `}</style>

      <div className="relative w-[750px] h-[520px] bg-white rounded-2xl shadow-xl">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 750 520">
          <defs>
            {/* Moving gradient */}
            <linearGradient id="gradFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="flowStop1" />
              <stop offset="100%" className="flowStop2" stopOpacity="0.6" />
            </linearGradient>

            {/* Arrow head */}
            <marker
              id="arrowBlue"
              markerWidth="13"
              markerHeight="13"
              refX="6"
              refY="6"
              orient="auto"
            >
              <path d="M0,0 L12,6 L0,12 z" fill="#2563eb" />
            </marker>
          </defs>

          {/* IRT center at (375,260) */}
          {/* TOP */}
          <line
            className="flow-line"
            x1="375"
            y1="260"
            x2="375"
            y2="120"
            markerEnd="url(#arrowBlue)"
          />

          {/* LEFT */}
          <line
            className="flow-line"
            x1="375"
            y1="260"
            x2="165"
            y2="260"
            markerEnd="url(#arrowBlue)"
          />

          {/* RIGHT */}
          <line
            className="flow-line"
            x1="375"
            y1="260"
            x2="585"
            y2="260"
            markerEnd="url(#arrowBlue)"
          />

          {/* BOTTOM */}
          <line
            className="flow-line"
            x1="375"
            y1="260"
            x2="375"
            y2="400"
            markerEnd="url(#arrowBlue)"
          />
        </svg>

        {/* IRT center node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute left-[335px] top-[220px] w-[80px] h-[80px] rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-2xl flex items-center justify-center text-white font-semibold text-lg"
        >
          IRT
        </motion.div>

        {/* MODULES */}

        {/* TOP */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="absolute left-[275px] top-[60px] w-[200px] h-[52px] bg-white border shadow-md rounded-full flex items-center justify-center text-blue-900 font-medium"
        >
          Randomization
        </motion.div>

        {/* LEFT */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="absolute left-[60px] top-[234px] w-[220px] h-[52px] bg-white border shadow-md rounded-full flex items-center justify-center text-blue-900 font-medium"
        >
          Clinical Supplies
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="absolute right-[60px] top-[234px] w-[220px] h-[52px] bg-white border shadow-md rounded-full flex items-center justify-center text-blue-900 font-medium"
        >
          Subject Management
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="absolute left-[275px] top-[420px] w-[200px] h-[52px] bg-white border shadow-md rounded-full flex items-center justify-center text-blue-900 font-medium"
        >
          Site Management
        </motion.div>
      </div>
    </div>
  );
}
