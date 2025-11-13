"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay },
  },
});

const Node: React.FC<{ label: string; className?: string }> = ({ label, className }) => (
  <motion.div
    variants={itemVariants}
    className={`w-[200px] h-[60px] bg-white border border-slate-200/90 rounded-full flex items-center justify-center shadow-sm ${className}`}
  >
    <span className="text-blue-900/80 font-medium text-sm tracking-wide">{label}</span>
  </motion.div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full min-h-[640px] bg-[#eef5ff] p-4">
      <motion.div
        className="relative w-[800px] h-[600px] bg-white rounded-2xl shadow-lg grid grid-cols-3 grid-rows-3 items-center justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* SVG Layer for lines and arrows */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <path id="diamond" d="M-3 0 L0 -3 L3 0 L0 3 Z" fill="#2563eb" />
            <path id="chevron" d="M-3 0 L0 4 L3 0 L0 1 Z" fill="#2563eb" />
          </defs>

          {/* Line to Top */}
          <motion.g variants={lineVariants(0.2)}>
            <line x1="400" y1="260" x2="400" y2="160" stroke="#2563eb" strokeWidth="1.5" />
            <use href="#diamond" x="400" y="160" />
          </motion.g>

          {/* Line to Left */}
           <motion.g variants={lineVariants(0.3)}>
            <line x1="240" y1="300" x2="350" y2="300" stroke="#2563eb" strokeWidth="1.5" />
             <use href="#diamond" x="240" y="300" transform="rotate(270 240 300)" />
          </motion.g>

          {/* Line to Right */}
          <motion.g variants={lineVariants(0.4)}>
            <line x1="450" y1="300" x2="560" y2="300" stroke="#2563eb" strokeWidth="1.5" />
            <use href="#diamond" x="560" y="300" transform="rotate(90 560 300)" />
          </motion.g>

          {/* Line to Bottom */}
          <motion.g variants={lineVariants(0.5)}>
            <line x1="400" y1="345" x2="400" y2="440" stroke="#2563eb" strokeWidth="1.5" />
            <use href="#chevron" x="400" y="440" />
          </motion.g>
        </svg>

        {/* Top Node */}
        <div className="col-start-2 row-start-1">
          <Node label="Randomization" />
        </div>

        {/* Left Node */}
        <div className="col-start-1 row-start-2 justify-self-end mr-[-20px]">
          <Node label="Clinical Supplies" />
        </div>

        {/* Center IRT Hub */}
        <motion.div
          variants={itemVariants}
          className="col-start-2 row-start-2 w-24 h-24 rounded-full bg-blue-600 shadow-lg flex items-center justify-center"
        >
          <span className="text-white font-bold text-xl tracking-wider">IRT</span>
        </motion.div>

        {/* Right Node */}
        <div className="col-start-3 row-start-2 justify-self-start ml-[-20px]">
          <Node label="Subject Management" />
        </div>

        {/* Bottom Node */}
        <div className="col-start-2 row-start-3">
          <Node label="Site Management" />
        </div>
      </motion.div>
    </div>
  );
}
