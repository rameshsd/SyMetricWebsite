"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

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
        transition: { duration: 0.8, ease: "easeInOut" }
    }
};

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center gap-2 text-center"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
      <Icon className="h-6 w-6" />
    </div>
    <span className="text-xs font-medium text-slate-600 max-w-[80px]">{label}</span>
  </motion.div>
);

const IRTHub = () => (
    <motion.div variants={itemVariants}>
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
       <style>{`
        .flow-diamond {
          fill: #3b82f6;
          animation: diamond-flow 4s linear infinite;
        }

        @keyframes diamond-flow {
          from {
            motion-offset: 0%;
          }
          to {
            motion-offset: 100%;
          }
        }
      `}</style>
      <div className="relative w-full max-w-lg h-[400px] bg-white rounded-2xl shadow-xl p-4">
        <motion.svg
          initial="hidden"
          animate="visible"
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 400 400"
          aria-hidden
        >
            <defs>
                <marker id="arrow-end" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6" fill="#d1d5db" />
                </marker>
            </defs>

            {/* Paths for diamond animation */}
            <motion.path id="line-top" d="M 200 200 L 200 95" fill="none" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end)"/>
            <motion.path id="line-bottom" d="M 200 200 L 200 305" fill="none" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} />
            <motion.path id="line-left" d="M 200 200 L 95 200" fill="none" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end)"/>
            <motion.path id="line-right" d="M 200 200 L 305 200" fill="none" stroke="#d1d5db" strokeWidth="1.5" variants={lineVariants} markerEnd="url(#arrow-end)"/>

            {/* Flowing Diamonds */}
            <rect className="flow-diamond" width="4" height="4" transform="rotate(45)">
              <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#line-top" />
              </animateMotion>
            </rect>
            <rect className="flow-diamond" width="4" height="4" transform="rotate(45)">
              <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#line-bottom" />
              </animateMotion>
            </rect>
             <rect className="flow-diamond" width="4" height="4" transform="rotate(45)">
              <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#line-left" />
              </animateMotion>
            </rect>
            <rect className="flow-diamond" width="4" height="4" transform="rotate(45)">
              <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#line-right" />
              </animateMotion>
            </rect>
        </motion.svg>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr] h-full w-full place-items-center gap-x-12 gap-y-6"
        >
          <div className="col-start-2 row-start-1 -mt-8">
            <Node icon={Shuffle} label="Randomization" />
          </div>
          <div className="col-start-1 row-start-2">
            <Node icon={Beaker} label="Clinical Supplies" />
          </div>
          
          <div className="col-start-2 row-start-2">
            <IRTHub />
          </div>

          <div className="col-start-3 row-start-2">
            <Node icon={Users} label="Subject Management" />
          </div>
          <div className="col-start-2 row-start-3 -mb-8">
            <Node icon={Hospital} label="Site Management" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
