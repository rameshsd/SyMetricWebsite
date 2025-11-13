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
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
};

const Node = ({ label, area }: { label: string; area: string }) => (
  <motion.div
    variants={itemVariants}
    style={{ gridArea: area }}
    className="flex items-center justify-center"
  >
    <div className="w-48 h-14 bg-white border shadow-md rounded-full flex items-center justify-center text-blue-900 font-medium text-sm">
      {label}
    </div>
  </motion.div>
);


export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-14 bg-slate-50">
        <div 
            className="relative w-[700px] h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden grid p-4"
            style={{
                gridTemplateAreas: `
                    ". top ."
                    "left center right"
                    ". bottom ."
                `,
                gridTemplateRows: '1fr auto 1fr',
                gridTemplateColumns: '1fr auto 1fr',
            }}
        >
            {/* SVG Background for Lines */}
            <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 700 500"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
                <defs>
                    <marker
                        id="arrowhead-stable"
                        markerWidth="8"
                        markerHeight="8"
                        refX="5"
                        refY="4"
                        orient="auto"
                    >
                        <path d="M0,0 L8,4 L0,8 z" fill="#1e3a8a" />
                    </marker>
                </defs>
                
                {/* Center is at (350, 250) */}
                {/* Line to Top */}
                <motion.line x1="350" y1="200" x2="350" y2="100" stroke="#1e3a8a" strokeWidth="2.5" markerEnd="url(#arrowhead-stable)" variants={lineVariants} />
                {/* Line to Right */}
                <motion.line x1="400" y1="250" x2="520" y2="250" stroke="#1e3a8a" strokeWidth="2.5" markerEnd="url(#arrowhead-stable)" variants={lineVariants} />
                {/* Line to Bottom */}
                <motion.line x1="350" y1="300" x2="350" y2="400" stroke="#1e3a8a" strokeWidth="2.5" markerEnd="url(#arrowhead-stable)" variants={lineVariants} />
                {/* Line to Left */}
                <motion.line x1="300" y1="250" x2="180" y2="250" stroke="#1e3a8a" strokeWidth="2.5" markerEnd="url(#arrowhead-stable)" variants={lineVariants} />

            </motion.svg>

            {/* Grid Items */}
            <motion.div
                className="w-full h-full grid"
                style={{
                    gridArea: '1 / 1 / -1 / -1',
                    gridTemplateAreas: `
                        ". top ."
                        "left center right"
                        ". bottom ."
                    `,
                    gridTemplateRows: '1fr auto 1fr',
                    gridTemplateColumns: '1fr auto 1fr',
                }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <Node label="Randomization" area="top" />
                <Node label="Clinical Supplies" area="left" />
                
                <motion.div
                    variants={itemVariants}
                    style={{ gridArea: 'center' }}
                    className="flex items-center justify-center"
                >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-xl flex items-center justify-center text-white font-semibold text-xl">
                        IRT
                    </div>
                </motion.div>
                
                <Node label="Subject Management" area="right" />
                <Node label="Site Management" area="bottom" />
            </motion.div>
        </div>
    </div>
  );
}