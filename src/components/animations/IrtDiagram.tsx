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
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 460">
            <defs>
                {/* Soft purple line gradient */}
                <linearGradient id="purple-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C7B8FF" />
                <stop offset="100%" stopColor="#7D5CFF" />
                </linearGradient>

                {/* Glow diamond */}
                <radialGradient id="diamond-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8B66FF" />
                <stop offset="100%" stopColor="#8B66FF00" />
                </radialGradient>
            </defs>

            {/* === TOP LINE (curved) === */}
            <path
                id="line-top"
                d="
                M 260 230
                C 260 170, 260 150, 260 125
                "
                stroke="url(#purple-line)"
                strokeWidth="3.5"
                fill="none"
            />

            {/* === BOTTOM LINE === */}
            <path
                id="line-bottom"
                d="
                M 260 230
                C 260 290, 260 310, 260 335
                "
                stroke="url(#purple-line)"
                strokeWidth="3.5"
                fill="none"
            />

            {/* === LEFT CURVED CONNECTOR === */}
            <path
                id="line-left"
                d="
                M 260 230
                C 210 230, 180 230, 155 230
                "
                stroke="url(#purple-line)"
                strokeWidth="3.5"
                fill="none"
            />

            {/* === RIGHT CURVED CONNECTOR === */}
            <path
                id="line-right"
                d="
                M 260 230
                C 310 230, 340 230, 365 230
                "
                stroke="url(#purple-line)"
                strokeWidth="3.5"
                fill="none"
            />

            {/* === FLOWING DIAMONDS === */}
            {["line-top", "line-bottom", "line-left", "line-right"].map((id, i) => (
                <rect
                key={i}
                className="flow-diamond"
                width="10"
                height="10"
                transform="rotate(45)"
                fill="#8B66FF"
                >
                <animateMotion dur="3.5s" repeatCount="indefinite">
                    <mpath href={`#${id}`} />
                </animateMotion>
                </rect>
            ))}

            {/* === STATIC DIAMOND NODES (like screenshot) === */}
            {/* Center diamond */}
            <rect
                x="256"
                y="226"
                width="8"
                height="8"
                transform="rotate(45 260 230)"
                fill="url(#diamond-glow)"
            />

            {/* TOP diamond node */}
            <rect
                x="256"
                y="150"
                width="8"
                height="8"
                transform="rotate(45 260 154)"
                fill="url(#diamond-glow)"
            />

            {/* RIGHT diamond node */}
            <rect
                x="350"
                y="226"
                width="8"
                height="8"
                transform="rotate(45 354 230)"
                fill="url(#diamond-glow)"
            />

            {/* LEFT diamond node */}
            <rect
                x="160"
                y="226"
                width="8"
                height="8"
                transform="rotate(45 164 230)"
                fill="url(#diamond-glow)"
            />

            {/* BOTTOM diamond node */}
            <rect
                x="256"
                y="305"
                width="8"
                height="8"
                transform="rotate(45 260 309)"
                fill="url(#diamond-glow)"
            />
            </svg>

        {/* DIAGRAM GRID */}
        <div className="grid grid-cols-3 grid-rows-3 w-full h-full place-items-center">

            {/* TOP */}
            <div />
            <div className="-mt-10">
                <Node icon={Shuffle} label="Randomization" />
            </div>
            <div />

            {/* MIDDLE */}
            <div className="-ml-6">
                <Node icon={Beaker} label="Clinical Supplies" />
            </div>

            <div>
                <IRTHub />
            </div>

            <div className="ml-6">
                <Node icon={Users} label="Subject Management" />
            </div>

            {/* BOTTOM */}
            <div />
            <div className="mt-10">
                <Node icon={Hospital} label="Site Management" />
            </div>
            <div />

        </div>
      </motion.div>
    </div>
  );
}
