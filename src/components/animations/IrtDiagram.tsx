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
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
};


const Node = ({ label, isHighlighted }: { label: string; isHighlighted?: boolean }) => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="bg-white border border-gray-200/80 rounded-full px-6 py-3 text-sm font-medium text-gray-700 shadow-md">
                {label}
            </div>
            {isHighlighted && (
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12">
                    <div className="w-full h-full rounded-full border-[6px] border-blue-600"/>
                </div>
            )}
        </div>
    )
}

export function IrtDiagram() {

  return (
    <motion.div
        className="relative w-full h-full min-h-[450px] flex flex-col items-center justify-center gap-8 bg-slate-50/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
    >
        {/* Randomization Node */}
        <motion.div variants={itemVariants}>
            <Node label="Randomization" />
        </motion.div>

        {/* Up Arrow */}
        <motion.div variants={itemVariants}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 22" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                <path d="M2 12L12 2L22 12" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </motion.div>


        {/* Middle Row */}
        <div className="flex items-center gap-8">
            <motion.div variants={itemVariants}>
                <Node label="Clinical Supplies" />
            </motion.div>
            <motion.div variants={itemVariants}>
                <Node label="Subject Management" isHighlighted />
            </motion.div>
        </div>

        {/* Down Arrow */}
        <motion.div variants={itemVariants}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22L12 2" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                <path d="M22 12L12 22L2 12" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </motion.div>

         {/* Site Management Node */}
        <motion.div variants={itemVariants}>
            <Node label="Site Management" />
        </motion.div>

    </motion.div>
  );
}
