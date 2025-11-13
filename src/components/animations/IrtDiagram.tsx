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
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren",
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
    <div className="relative flex h-16 w-16 items-center justify-center 
                    rounded-xl bg-blue-100/70 text-blue-600 shadow-sm">
      <Icon className="h-7 w-7" />
    </div>
    <span className="text-sm font-medium text-slate-700">{label}</span>
  </motion.div>
);

const IRTHub = () => (
  <motion.div variants={itemVariants}>
    <div className="flex h-20 w-20 items-center justify-center rounded-full 
                    border-2 border-blue-600 bg-white text-lg font-bold 
                    text-blue-600 shadow-md">
      IRT
    </div>
  </motion.div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-10 bg-transparent">
      <style>
        {`
          .flow-diamond {
            fill: #8b66ff;
            animation: diamond-flow 3.2s linear infinite;
          }
          @keyframes diamond-flow {
            from { motion-offset: 0%; }
            to { motion-offset: 100%; }
          }
        `}
      </style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          w-[520px] 
          h-[460px] 
          bg-white 
          rounded-2xl 
          shadow-xl 
          p-4 
          place-items-center
          overflow-visible
        "
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[80]"
          viewBox="0 0 520 460"
        >
          <defs>
            {/* Soft purple gradient like Business-AI */}
            <linearGradient id="bizLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C3B5FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* ============================
                TOP SOFT CURVED LINE
              ============================ */}
          <path
            id="line-top"
            d="
              M 260 230
              L 260 185
              C 260 165, 260 150, 260 130
            "
            stroke="url(#bizLine)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* ============================
                BOTTOM SOFT CURVED LINE
              ============================ */}
          <path
            id="line-bottom"
            d="
              M 260 230
              L 260 275
              C 260 295, 260 315, 260 340
            "
            stroke="url(#bizLine)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* ============================
                LEFT SOFT CURVED LINE
              ============================ */}
          <path
            id="line-left"
            d="
              M 260 230
              L 210 230
              C 185 230, 160 230, 140 230
            "
            stroke="url(#bizLine)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* ============================
                RIGHT SOFT CURVED LINE
              ============================ */}
          <path
            id="line-right"
            d="
              M 260 230
              L 310 230
              C 335 230, 360 230, 380 230
            "
            stroke="url(#bizLine)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* =========================================
                FLOATING PURPLE DIAMONDS (ANIMATED FLOW)
              ========================================= */}
          {["line-top", "line-bottom", "line-left", "line-right"].map((id, i) => (
            <rect
              key={i}
              width="10"
              height="10"
              transform="rotate(45)"
              fill="#8B5CF6"
              className="opacity-80"
            >
              <animateMotion dur="3.4s" repeatCount="indefinite">
                <mpath href={`#${id}`} />
              </animateMotion>
            </rect>
          ))}
        </svg>

        <div className="grid grid-cols-3 grid-rows-3 w-full h-full place-items-center">
          
          <div />
          <div className="col-start-2 row-start-1 justify-self-center self-end mb-12">
            <Node icon={Shuffle} label="Randomization" />
          </div>
          <div />

          <div className="col-start-1 row-start-2 justify-self-start self-center ml-12">
            <Node icon={Beaker} label="Clinical Supplies" />
          </div>

          <div className="col-start-2 row-start-2 justify-self-center self-center">
            <IRTHub />
          </div>

          <div className="col-start-3 row-start-2 justify-self-end self-center mr-12">
            <Node icon={Users} label="Subject Management" />
          </div>

          <div />
          <div className="col-start-2 row-start-3 justify-self-center self-start mt-12">
            <Node icon={Hospital} label="Site Management" />
          </div>
          <div />

        </div>
      </motion.div>
    </div>
  );
}
