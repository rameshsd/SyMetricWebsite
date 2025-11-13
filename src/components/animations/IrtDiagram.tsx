"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15, delay },
  },
});

const Arrow = ({ rotation }: { rotation: number }) => (
  <motion.div
    className="absolute origin-center"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    style={{ rotate: rotation }}
  >
    <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
      <defs>
        <linearGradient id="arrow-glow" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 50 12 L 80 12"
        stroke="url(#arrow-glow)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
      />
      <motion.path
        d="M 40 6 L 50 12 L 40 18"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
    </svg>
  </motion.div>
);

const RightPanelItem = ({ text, delay }: { text: string; delay: number }) => (
  <motion.div
    className="flex items-center gap-3 p-4 bg-white/90 rounded-xl shadow-md border border-blue-100"
    variants={itemVariants(delay)}
  >
    <div className="w-4 h-4 bg-blue-500 flex-shrink-0 rotate-45" />
    <span className="text-sm font-medium text-blue-900">{text}</span>
  </motion.div>
);

export function IrtDiagram() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[480px] p-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#E0F2FE] to-[#D6EAF8]">
      {/* Wavy background lines */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wavy" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="rotate(25)">
              <path d="M 0 40 Q 20 20 40 40 T 80 40" stroke="#93c5fd" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavy)"/>
        </svg>
      </div>

      <motion.div
        className="relative grid grid-cols-3 items-center gap-x-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Node */}
        <motion.div className="flex justify-end" variants={itemVariants(0.4)}>
          <div className="w-48 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-100">
            <span className="font-semibold text-blue-900">Clinical Supplies</span>
          </div>
        </motion.div>

        {/* Center Structure */}
        <div className="relative flex flex-col items-center gap-24">
           {/* Top Node */}
          <motion.div variants={itemVariants(0.2)}>
            <div className="w-48 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-100">
              <span className="font-semibold text-blue-900">Randomization</span>
            </div>
          </motion.div>

          {/* Central Sphere */}
          <div className="relative">
            <motion.div
              className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl"
              variants={itemVariants(0)}
            >
              <span className="text-4xl font-bold text-white tracking-wider">IRT</span>
            </motion.div>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400 blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Arrows */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Arrow rotation={180} />
                <Arrow rotation={0} />
                <Arrow rotation={-90} />
                <Arrow rotation={90} />
            </div>
          </div>
          
           {/* Bottom Node */}
          <motion.div variants={itemVariants(0.6)}>
            <div className="w-48 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-100">
              <span className="font-semibold text-blue-900">Site Management</span>
            </div>
          </motion.div>
        </div>

        {/* Right Panel */}
        <motion.div 
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <RightPanelItem text="Randomization flow maintained by IRT" delay={0.8} />
          <RightPanelItem text="Supply chain synced Clinical Supplies" delay={0.9} />
          <RightPanelItem text="Subjects linked to IRT logic" delay={1.0} />
          <RightPanelItem text="Site Management updates pushed" delay={1.1} />
        </motion.div>

      </motion.div>
    </div>
  );
}
