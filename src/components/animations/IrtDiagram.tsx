"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
        pathLength: 1, 
        opacity: 1,
        transition: { duration: 0.7, ease: "easeInOut", delay: 0.2 }
    }
};

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100/70 text-blue-600 shadow-sm">
      <Icon className="h-7 w-7" />
    </div>
    <span className="text-sm font-medium text-slate-700">{label}</span>
  </motion.div>
);


const IRTHub = () => (
  <motion.div variants={itemVariants}>
    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-lg font-bold text-blue-600">
      IRT
    </div>
  </motion.div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-10 bg-slate-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-[480px] h-[420px] bg-white rounded-2xl shadow-xl p-4"
      >
        <motion.svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 500 500"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
                </marker>
            </defs>
            <motion.line x1="250" y1="250" x2="250" y2="150" stroke="#3b82f6" strokeWidth="2" variants={lineVariants} markerEnd="url(#arrow)" />
            <motion.line x1="250" y1="250" x2="150" y2="250" stroke="#3b82f6" strokeWidth="2" variants={lineVariants} markerEnd="url(#arrow)" />
            <motion.line x1="250" y1="250" x2="350" y2="250" stroke="#3b82f6" strokeWidth="2" variants={lineVariants} markerEnd="url(#arrow)" />
            <motion.line x1="250" y1="250" x2="250" y2="350" stroke="#3b82f6" strokeWidth="2" variants={lineVariants} markerEnd="url(#arrow)" />
        </motion.svg>

        <div className="grid grid-cols-3 grid-rows-3 h-full place-items-center">
            {/* Row 1 */}
            <div />
            <div className="col-start-2">
              <Node icon={Shuffle} label="Randomization" />
            </div>
            <div />

            {/* Row 2 */}
            <div>
              <Node icon={Beaker} label="Clinical Supplies" />
            </div>
            <div>
              <IRTHub />
            </div>
            <div>
              <Node icon={Users} label="Subject Management" />
            </div>
            
            {/* Row 3 */}
            <div />
            <div className="col-start-2">
              <Node icon={Hospital} label="Site Management" />
            </div>
            <div />
        </div>
      </motion.div>
    </div>
  );
}
