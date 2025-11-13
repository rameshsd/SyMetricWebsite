"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100/70 text-blue-600 shadow-sm">
      <Icon className="h-7 w-7" />
    </div>
    <span className="text-xs font-medium text-slate-600">{label}</span>
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

const Arrow = ({ rotation }: { rotation: number }) => (
    <motion.div 
        variants={itemVariants} 
        style={{ transform: `rotate(${rotation}deg)` }}
        className="absolute"
    >
        <svg width="40" height="20" viewBox="0 0 40 20">
            <path d="M 25 0 L 40 10 L 25 20 Z" fill="#4B89DC" />
        </svg>
    </motion.div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-10 bg-slate-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-[480px] h-[400px] bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center"
      >
        {/* Main Grid for Layout */}
        <div className="grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-4 items-center justify-items-center w-full h-full">
            {/* Top Row */}
            <div />
            <div className="flex flex-col items-center">
                <Node icon={Shuffle} label="Randomization" />
                <Arrow rotation={-90} />
            </div>
            <div />
            
            {/* Middle Row */}
            <div className="flex items-center">
                 <Node icon={Beaker} label="Clinical Supplies" />
                 <Arrow rotation={180} />
            </div>
            <IRTHub />
            <div className="flex items-center">
                 <Arrow rotation={0} />
                 <Node icon={Users} label="Subject Management" />
            </div>

            {/* Bottom Row */}
            <div />
            <div className="flex flex-col items-center">
                <Arrow rotation={90} />
                <Node icon={Hospital} label="Site Management" />
            </div>
            <div />
        </div>
      </motion.div>
    </div>
  );
}
