"use client";

import React from "react";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 16 },
  },
};

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, delay } },
});

const Node = ({ label }: { label: string }) => (
  <motion.div
    variants={itemVariants}
    className="h-[52px] w-[220px] bg-white border shadow-md rounded-full flex items-center justify-center text-blue-900 font-medium"
  >
    {label}
  </motion.div>
);

const Line = ({ delay, ...props }: { delay: number } & React.SVGProps<SVGLineElement>) => (
    <motion.line
        variants={lineVariants(delay)}
        stroke="#1d4ed8"
        strokeWidth="3"
        markerEnd="url(#arrowBlue)"
    />
);


export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-14 bg-slate-50">
      <motion.div 
        className="relative w-[780px] h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden grid place-items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        >
        
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 780 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="arrowBlue"
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="5"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#1d4ed8" />
            </marker>
          </defs>

          {/* Lines from center (390, 300) */}
          <Line delay={0.2} x1="390" y1="300" x2="390" y2="152" /> {/* Top */}
          <Line delay={0.3} x1="390" y1="300" x2="295" y2="300" /> {/* Left */}
          <Line delay={0.4} x1="390" y1="300" x2="485" y2="300" /> {/* Right */}
          <Line delay={0.5} x1="390" y1="300" x2="390" y2="448" /> {/* Bottom */}
        </svg>

        <div className="relative w-full h-full grid" style={{gridTemplateColumns: '1fr auto 1fr', gridTemplateRows: '1fr auto 1fr'}}>

          {/* TOP */}
          <div className="flex justify-center items-end" style={{gridColumn: 2, gridRow: 1}}>
            <Node label="Randomization" />
          </div>

          {/* LEFT */}
           <div className="flex justify-end items-center" style={{gridColumn: 1, gridRow: 2}}>
            <Node label="Clinical Supplies" />
          </div>

          {/* CENTER – IRT */}
           <div className="flex justify-center items-center" style={{gridColumn: 2, gridRow: 2}}>
                <motion.div
                    variants={itemVariants}
                    className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-xl flex items-center justify-center text-white font-semibold text-lg"
                    >
                    IRT
                </motion.div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-start items-center" style={{gridColumn: 3, gridRow: 2}}>
            <Node label="Subject Management" />
          </div>

          {/* BOTTOM */}
          <div className="flex justify-center items-start" style={{gridColumn: 2, gridRow: 3}}>
            <Node label="Site Management" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
