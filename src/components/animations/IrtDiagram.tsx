"use client";

import React from "react";
import { motion } from "framer-motion";

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-20 bg-[#eef5ff]">

      {/* ===== Animated Gradient, Flow, Diamonds, Glow ===== */}
      <style>{`
        .flow-line {
          stroke: url(#blueFlow);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @keyframes gradientFlow {
          0% { stop-color: #3b82f6; }
          50% { stop-color: #1d4ed8; }
          100% { stop-color: #3b82f6; }
        }

        .flowStop1 { animation: gradientFlow 2.2s linear infinite; }
        .flowStop2 { animation: gradientFlow 2.2s linear infinite; animation-delay: 1.1s; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .floating { animation: float 4s ease-in-out infinite; }

        @keyframes sparkle {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        .diamond {
          animation: sparkle 2.5s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Main Card */}
      <div className="relative w-[950px] h-[620px] bg-white rounded-3xl shadow-xl overflow-hidden flex">

        {/* Background subtle lines */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <svg width="100%" height="100%">
            <path d="M0 300 Q350 50 900 300" stroke="#60a5fa" strokeWidth="1.2" fill="none" />
            <path d="M0 350 Q350 100 900 350" stroke="#93c5fd" strokeWidth="1.2" fill="none" />
            <path d="M0 250 Q350 0 900 250" stroke="#bfdbfe" strokeWidth="1.2" fill="none" />
          </svg>
        </div>

        {/* LEFT — Diagram */}
        <div className="flex-1 flex items-center justify-center relative">

          <svg className="absolute w-[600px] h-[500px]" viewBox="0 0 600 500">
            <defs>
              {/* Flow animation gradient */}
              <linearGradient id="blueFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="flowStop1" />
                <stop offset="100%" className="flowStop2" stopOpacity="0.7" />
              </linearGradient>

              {/* Arrows */}
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

            {/* CENTER GLOW */}
            <circle cx="300" cy="250" r="80" fill="rgba(59,130,246,0.12)" />

            {/* DIAMONDS */}
            <rect x="295" y="170" width="10" height="10" fill="#2563eb" className="diamond" transform="rotate(45 300 175)" />
            <rect x="135" y="245" width="10" height="10" fill="#2563eb" className="diamond" transform="rotate(45 140 250)" />
            <rect x="455" y="245" width="10" height="10" fill="#2563eb" className="diamond" transform="rotate(45 460 250)" />
            <rect x="295" y="325" width="10" height="10" fill="#2563eb" className="diamond" transform="rotate(45 300 330)" />

            {/* CONNECTOR LINES */}
            <path d="M300 250 L300 140" className="flow-line" markerEnd="url(#arrowBlue)" />
            <path d="M300 250 L150 250" className="flow-line" markerEnd="url(#arrowBlue)" />
            <path d="M300 250 L450 250" className="flow-line" markerEnd="url(#arrowBlue)" />
            <path d="M300 250 L300 360" className="flow-line" markerEnd="url(#arrowBlue)" />
          </svg>

          {/* CENTER HUB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="absolute left-[260px] top-[190px] w-[120px] h-[120px]
                       bg-white border border-blue-100 rounded-2xl shadow-xl
                       flex items-center justify-center text-blue-700 text-xl font-semibold"
          >
            IRT
          </motion.div>

          {/* TOP */}
          <div className="absolute floating left-[220px] top-[45px] w-[200px] h-[55px] bg-white shadow-md rounded-2xl flex items-center justify-center border text-blue-900 font-medium">
            Randomization
          </div>

          {/* LEFT */}
          <div className="absolute floating left-[40px] top-[220px] w-[230px] h-[55px] bg-white shadow-md rounded-2xl flex items-center justify-center border text-blue-900 font-medium">
            Clinical Supplies
          </div>

          {/* RIGHT */}
          <div className="absolute floating right-[40px] top-[220px] w-[230px] h-[55px] bg-white shadow-md rounded-2xl flex items-center justify-center border text-blue-900 font-medium">
            Subject Management
          </div>

          {/* BOTTOM */}
          <div className="absolute floating left-[220px] top-[420px] w-[200px] h-[55px] bg-white shadow-md rounded-2xl flex items-center justify-center border text-blue-900 font-medium">
            Site Management
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-[260px] px-6 py-10 flex flex-col gap-4">
          
          <motion.div whileHover={{ scale: 1.04 }} className="p-4 bg-blue-50 rounded-xl text-blue-700 shadow-sm text-sm border">
            🔹 Randomization flow maintained by IRT
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="p-4 bg-blue-50 rounded-xl text-blue-700 shadow-sm text-sm border">
            🔹 Supply chain synced → Clinical Supplies
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="p-4 bg-blue-50 rounded-xl text-blue-700 shadow-sm text-sm border">
            🔹 Subjects linked to IRT logic
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="p-4 bg-blue-50 rounded-xl text-blue-700 shadow-sm text-sm border">
            🔹 Site Management updates pushed
          </motion.div>

        </div>
      </div>
    </div>
  );
}
