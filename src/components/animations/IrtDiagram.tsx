"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
        pathLength: 1, 
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 }
    }
};

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center gap-1.5 text-center"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
      <Icon className="h-5 w-5" />
    </div>
    <span className="text-[11px] font-medium text-slate-600 max-w-[80px]">{label}</span>
  </motion.div>
);

const IRTHub = () => (
    <motion.div variants={itemVariants} className="col-start-2 row-start-2">
        <div
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-lg font-bold text-white shadow-lg"
        >
        IRT
        </div>
    </motion.div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-10 bg-slate-50">
      <div className="relative w-full max-w-lg h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden p-4">
        
        <motion.svg
          initial="hidden"
          animate="visible"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
            <defs>
                <marker id="arrow-end" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6" fill="#d1d5db" />
                </marker>
            </defs>
            <motion.line x1="50%" y1="50%" x2="50%" y2="25%" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end)" />
            <motion.line x1="50%" y1="50%" x2="50%" y2="75%" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end)" />
            <motion.line x1="50%" y1="50%" x2="25%" y2="50%" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end)" />
            <motion.line x1="50%" y1="50%" x2="75%" y2="50%" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end)" />
        </motion.svg>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr] h-full w-full place-items-center gap-x-10 gap-y-4"
        >
          <div className="col-start-2 row-start-1">
            <Node icon={Shuffle} label="Randomization" />
          </div>
          <div className="col-start-1 row-start-2">
            <Node icon={Beaker} label="Clinical Supplies" />
          </div>
          
          <IRTHub />

          <div className="col-start-3 row-start-2">
            <Node icon={Users} label="Subject Management" />
          </div>
          <div className="col-start-2 row-start-3">
            <Node icon={Hospital} label="Site Management" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
