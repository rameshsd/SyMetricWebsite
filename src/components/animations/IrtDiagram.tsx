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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const diamondVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
};


export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full min-h-[480px] p-4 bg-[#f0f4f9]">
      <motion.div
        className="relative w-full max-w-2xl aspect-square bg-white rounded-3xl shadow-lg p-8 grid grid-cols-3 grid-rows-3 items-center justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* SVG layer for connectors */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <marker
              id="irt-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
            </marker>
          </defs>
          
          {/* Line from Top to Center */}
          <motion.line x1="50" y1="25" x2="50" y2="44" stroke="#2563eb" strokeWidth="1" variants={lineVariants} markerEnd="url(#irt-arrow)" />
          
          {/* Line from Left to Center */}
          <motion.line x1="25" y1="50" x2="44" y2="50" stroke="#2563eb" strokeWidth="1" variants={lineVariants} markerEnd="url(#irt-arrow)" />

          {/* Line from Right to Center */}
          <motion.line x1="75" y1="50" x2="56" y2="50" stroke="#2563eb" strokeWidth="1" variants={lineVariants} markerEnd="url(#irt-arrow)" />

          {/* Line from Bottom to Center */}
          <motion.line x1="50" y1="75" x2="50" y2="56" stroke="#2563eb" strokeWidth="1" variants={lineVariants} markerEnd="url(#irt-arrow)" />

          {/* Diamonds */}
          <motion.path d="M 50 34.5 L 51.5 36 L 50 37.5 L 48.5 36 Z" fill="#2563eb" variants={diamondVariants} />
          <motion.path d="M 34.5 50 L 36 51.5 L 37.5 50 L 36 48.5 Z" fill="#2563eb" variants={diamondVariants} />
          <motion.path d="M 65.5 50 L 64 51.5 L 62.5 50 L 64 48.5 Z" fill="#2563eb" variants={diamondVariants} />
          <motion.path d="M 50 65.5 L 51.5 64 L 50 62.5 L 48.5 64 Z" fill="#2563eb" variants={diamondVariants} />

        </svg>

        {/* Grid items for layout */}
        <div className="col-start-2 row-start-1 flex items-center justify-center">
            <motion.div variants={itemVariants} className="bg-white border border-gray-200 shadow-sm text-blue-900 font-medium py-3 px-8 rounded-full">
                Randomization
            </motion.div>
        </div>

        <div className="col-start-1 row-start-2 flex items-center justify-center">
            <motion.div variants={itemVariants} className="bg-white border border-gray-200 shadow-sm text-blue-900 font-medium py-3 px-8 rounded-full">
                Clinical Supplies
            </motion.div>
        </div>
        
        <div className="col-start-2 row-start-2 flex items-center justify-center">
            <motion.div variants={itemVariants} className="w-28 h-28 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                IRT
            </motion.div>
        </div>

        <div className="col-start-3 row-start-2 flex items-center justify-center">
            <motion.div variants={itemVariants} className="bg-white border border-gray-200 shadow-sm text-blue-900 font-medium py-3 px-8 rounded-full">
                Subject Management
            </motion.div>
        </div>
        
        <div className="col-start-2 row-start-3 flex items-center justify-center">
             <motion.div variants={itemVariants} className="bg-white border border-gray-200 shadow-sm text-blue-900 font-medium py-3 px-8 rounded-full">
                Site Management
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
