"use client";

import React from "react";
import { motion } from "framer-motion";

const Node = ({ label, className }: { label: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
    className={`absolute bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center text-blue-900 font-medium px-6 py-3 text-sm ${className}`}
  >
    {label}
  </motion.div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-16 bg-slate-50">
      <style>{`
        .flow-line-path {
          stroke: url(#line-gradient);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-dasharray: 10 10;
          animation: flow 2s linear infinite;
        }

        @keyframes flow {
          to {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
      <div className="relative w-[800px] h-[500px] bg-white rounded-2xl shadow-lg flex items-center justify-center">

        {/* SVG for lines and animations */}
        <svg width="100%" height="100%" viewBox="0 0 800 500" className="absolute inset-0">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <marker
              id="arrow-head"
              markerWidth="10"
              markerHeight="7"
              refX="8"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#1d4ed8" />
            </marker>
          </defs>

          {/* Lines connecting center to nodes */}
          <g>
            {/* Center to Top */}
            <path d="M 400 250 v -110" className="flow-line-path" markerEnd="url(#arrow-head)" />
            {/* Center to Left */}
            <path d="M 400 250 h -190" className="flow-line-path" markerEnd="url(#arrow-head)" />
            {/* Center to Right */}
            <path d="M 400 250 h 190" className="flow-line-path" markerEnd="url(#arrow-head)" />
            {/* Center to Bottom */}
            <path d="M 400 250 v 110" className="flow-line-path" markerEnd="url(#arrow-head)" />
          </g>
        </svg>

        {/* Central IRT Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg flex items-center justify-center text-white font-semibold text-xl"
        >
          IRT
        </motion.div>

        {/* Surrounding Nodes */}
        <Node label="Randomization" className="top-20" style={{ left: '50%', transform: 'translateX(-50%)' }} />
        <Node label="Clinical Supplies" className="left-10" style={{ top: '50%', transform: 'translateY(-50%)' }} />
        <Node label="Subject Management" className="right-10" style={{ top: '50%', transform: 'translateY(-50%)' }} />
        <Node label="Site Management" className="bottom-20" style={{ left: '50%', transform: 'translateX(-50%)' }} />
      </div>
    </div>
  );
}
