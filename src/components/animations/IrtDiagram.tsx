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

      {/* FLOW DIAMOND ANIMATION */}
      <style>
        {`
          .flow-diamond {
            fill: #2563eb;
            animation: diamond-flow 3.2s linear infinite;
          }
          @keyframes diamond-flow {
            from { motion-offset: 0%; }
            to { motion-offset: 100%; }
          }
        `}
      </style>

      {/* ONLY ONE WHITE CARD */}
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
        "
      >
        {/* FLOW ARROWS SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 460">
            <defs>
                {/* Small Arrowhead */}
                <marker id="tiny-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6" fill="#4B89DC" />
                </marker>

                {/* Soft thin line */}
                <linearGradient id="soft-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9CC3FF" />
                <stop offset="100%" stopColor="#4B89DC" />
                </linearGradient>
            </defs>

            {/* TOP CURVED LINE */}
            <path
                id="line-top"
                d="M260 210 
                C 260 170, 260 150, 260 120"
                stroke="url(#soft-line)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#tiny-arrow)"
            />

            {/* BOTTOM CURVED LINE */}
            <path
                id="line-bottom"
                d="M260 250 
                C 260 290, 260 310, 260 340"
                stroke="url(#soft-line)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#tiny-arrow)"
            />

            {/* LEFT CURVED LINE */}
            <path
                id="line-left"
                d="M240 230
                C 200 230, 180 230, 160 230"
                stroke="url(#soft-line)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#tiny-arrow)"
            />

            {/* RIGHT CURVED LINE */}
            <path
                id="line-right"
                d="M280 230
                C 320 230, 340 230, 360 230"
                stroke="url(#soft-line)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#tiny-arrow)"
            />

            {/* Flowing diamonds like sample */}
            {["line-top", "line-bottom", "line-left", "line-right"].map((id, i) => (
                <rect
                key={i}
                className="flow-diamond"
                width="5"
                height="5"
                transform="rotate(45)"
                >
                <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href={`#${id}`} />
                </animateMotion>
                </rect>
            ))}
            </svg>

        {/* DIAGRAM GRID */}
        <div className="grid grid-cols-3 grid-rows-3 w-full h-full place-items-center">
          
          {/* Row 1 */}
          <div />
          <div className="-mt-6">
            <Node icon={Shuffle} label="Randomization" />
          </div>
          <div />

          {/* Row 2 */}
          <div className="-ml-2">
            <Node icon={Beaker} label="Clinical Supplies" />
          </div>

          <div>
            <IRTHub />
          </div>

          <div className="ml-2">
            <Node icon={Users} label="Subject Management" />
          </div>

          {/* Row 3 */}
          <div />
          <div className="mt-6">
            <Node icon={Hospital} label="Site Management" />
          </div>
          <div />

        </div>
      </motion.div>
    </div>
  );
}
