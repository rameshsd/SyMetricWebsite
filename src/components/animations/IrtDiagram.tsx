"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.65, ease: "easeInOut" },
  },
};

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 shadow-md">
      <Icon className="h-6 w-6" />
    </div>
    <span className="text-xs font-medium text-slate-700">{label}</span>
  </motion.div>
);

const IRTHub = () => (
  <motion.div variants={itemVariants}>
    <div className="relative flex h-20 w-20 items-center justify-center rounded-full 
                    border-2 border-blue-500 bg-white text-lg font-bold text-blue-600">
      IRT
    </div>
  </motion.div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-10 bg-slate-50">

      {/* DIAMOND ANIMATION */}
      <style>{`
        .flow-diamond {
          fill: #2563eb;
          animation: diamond-flow 3.5s linear infinite;
        }
        @keyframes diamond-flow {
          from { motion-offset: 0%; }
          to { motion-offset: 100%; }
        }
      `}</style>

      {/* CLEAN WHITE CARD - NO OVERFLOW */}
      <div className="relative w-[480px] h-[420px] bg-white rounded-2xl shadow-xl p-4 overflow-hidden">

        {/* SVG ARROWS + DIAMONDS */}
        <motion.svg
          initial="hidden"
          animate="visible"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
        >
          <defs>
            <marker id="arrow-end" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10" fill="#2563eb" />
            </marker>

            <linearGradient id="blue-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* TOP ARROW */}
          <motion.path
            id="line-top"
            d="M200 200 L200 110"
            stroke="url(#blue-line)"
            strokeWidth="2.5"
            markerEnd="url(#arrow-end)"
            variants={lineVariants}
          />

          {/* BOTTOM ARROW */}
          <motion.path
            id="line-bottom"
            d="M200 200 L200 290"
            stroke="url(#blue-line)"
            strokeWidth="2.5"
            markerEnd="url(#arrow-end)"
            variants={lineVariants}
          />

          {/* LEFT ARROW */}
          <motion.path
            id="line-left"
            d="M200 200 L115 200"
            stroke="url(#blue-line)"
            strokeWidth="2.5"
            markerEnd="url(#arrow-end)"
            variants={lineVariants}
          />

          {/* RIGHT ARROW */}
          <motion.path
            id="line-right"
            d="M200 200 L285 200"
            stroke="url(#blue-line)"
            strokeWidth="2.5"
            markerEnd="url(#arrow-end)"
            variants={lineVariants}
          />

          {/* ANIMATED DIAMONDS */}
          {["line-top", "line-bottom", "line-left", "line-right"].map((id, i) => (
            <rect
              key={i}
              className="flow-diamond"
              width="5"
              height="5"
              transform="rotate(45)"
            >
              <animateMotion dur="3.4s" repeatCount="indefinite">
                <mpath href={`#${id}`} />
              </animateMotion>
            </rect>
          ))}
        </motion.svg>

        {/* GRID NODES */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr] 
                     h-full w-full place-items-center gap-x-10 gap-y-6"
        >
          <div className="col-start-2 row-start-1 -mt-3">
            <Node icon={Shuffle} label="Randomization" />
          </div>

          <div className="col-start-1 row-start-2">
            <Node icon={Beaker} label="Clinical Supplies" />
          </div>

          <div className="col-start-2 row-start-2">
            <IRTHub />
          </div>

          <div className="col-start-3 row-start-2">
            <Node icon={Users} label="Subject Management" />
          </div>

          <div className="col-start-2 row-start-3 mb-2">
            <Node icon={Hospital} label="Site Management" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
