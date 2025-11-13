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

const Node = ({ icon: Icon, label, className }: { icon: React.ElementType; label: string; className?: string }) => (
  <motion.div
    variants={itemVariants}
    className={`flex flex-col items-center gap-3 text-center ${className}`}
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
      <Icon className="h-8 w-8" />
    </div>
    <span className="text-sm font-medium text-slate-600 max-w-[100px]">{label}</span>
  </motion.div>
);

const IRTHub = () => (
    <motion.div variants={itemVariants}>
        <div
        className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-2xl font-bold text-white shadow-lg"
        >
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
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 aspect-[4/3]"
      >
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
            <defs>
                <marker id="arrow-end-diamond" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M 0 3 L 3 0 L 6 3 L 3 6 z" fill="#d1d5db" />
                </marker>
            </defs>

            {/* Lines */}
            <motion.line x1="200" y1="150" x2="200" y2="75" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end-diamond)"/>
            <motion.line x1="200" y1="150" x2="200" y2="225" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end-diamond)"/>
            <motion.line x1="200" y1="150" x2="90"  y2="150" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end-diamond)"/>
            <motion.line x1="200" y1="150" x2="310" y2="150" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end-diamond)"/>
        </svg>
        
        <div
          className="grid h-full w-full place-items-center"
          style={{gridTemplate: "'top top top' 1fr '. left center right .' auto 'bottom bottom bottom' 1fr / 1fr auto 1fr"}}
        >
          <div style={{gridArea: 'top'}}><Node icon={Shuffle} label="Randomization" /></div>
          <div style={{gridArea: 'left'}}><Node icon={Beaker} label="Clinical Supplies" className="-ml-4"/></div>
          <div style={{gridArea: 'center'}}><IRTHub /></div>
          <div style={{gridArea: 'right'}}><Node icon={Users} label="Subject Management" className="-mr-4"/></div>
          <div style={{gridArea: 'bottom'}}><Node icon={Hospital} label="Site Management" /></div>
        </div>

      </motion.div>
    </div>
  );
}