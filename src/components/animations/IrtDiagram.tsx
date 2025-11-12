"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const pathVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay },
  },
});

const iconPaths = {
  Repeat: (
    <>
      <path d="M17 2.1l4 4-4 4" />
      <path d="M3 12.6A9 9 0 0 1 12 3a9 9 0 0 1 8.4 5.5" />
      <path d="M7 21.9l-4-4 4-4" />
      <path d="M21 11.4A9 9 0 0 1 12 21a9 9 0 0 1-8.4-5.5" />
    </>
  ),
  Users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  Hospital: (
    <>
      <path d="M12 22V8" />
      <path d="M5 22V8" />
      <path d="M19 22V8" />
      <path d="M2 22h20" />
      <path d="m20 8-8-6-8 6" />
      <path d="M9 16h6" />
      <path d="M12 13v6" />
    </>
  ),
  Beaker: (
    <>
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </>
  ),
};

const Node: React.FC<{
  iconKey: keyof typeof iconPaths;
  label: string;
}> = ({ iconKey, label }) => {
  return (
    <>
      <circle cx="0" cy="0" r="30" fill="white" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <g
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="translate(-12, -12)"
      >
        {iconPaths[iconKey]}
      </g>
      <text y="48" textAnchor="middle" fontSize="11" fontWeight="500" fill="currentColor">
        {label.split(" ").map((w, i) => (
          <tspan key={i} x="0" dy={i === 0 ? 0 : "1.2em"}>
            {w}
          </tspan>
        ))}
      </text>
    </>
  );
};


export function IrtDiagram() {
  const SVG_WIDTH = 500;
  const SVG_HEIGHT = 450;
  const center = { x: SVG_WIDTH / 2, y: SVG_HEIGHT / 2 + 20 };

  const nodePositions = [
    { iconKey: "Repeat", label: "Randomization", x: center.x, y: center.y - 110 },
    { iconKey: "Users", label: "Subject Management", x: center.x + 130, y: center.y },
    { iconKey: "Hospital", label: "Site Management", x: center.x, y: center.y + 110 },
    { iconKey: "Beaker", label: "Clinical Supplies", x: center.x - 130, y: center.y },
  ] as const;

  return (
    <motion.div
      className="relative w-full h-[450px] flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900/50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Decorative IRT Tab */}
      <motion.div variants={itemVariants} className="absolute top-4 left-4">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
          IRT
        </div>
      </motion.div>
      
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="arrowhead-irt"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        {/* Arrows pointing from center outwards */}
        {nodePositions.map((pos, i) => {
            const dx = pos.x - center.x;
            const dy = pos.y - center.y;
            const angle = Math.atan2(dy, dx);
            const endX = pos.x - Math.cos(angle) * 35;
            const endY = pos.y - Math.sin(angle) * 35;

            return (
                 <motion.line
                    key={`line-${i}`}
                    x1={center.x}
                    y1={center.y}
                    x2={endX}
                    y2={endY}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    markerEnd="url(#arrowhead-irt)"
                    variants={pathVariants(0.2 + i * 0.1)}
                />
            )
        })}

        {/* Render Nodes */}
        {nodePositions.map((pos, i) => (
          <motion.g key={`node-${i}`} transform={`translate(${pos.x}, ${pos.y})`} variants={itemVariants}>
            <Node iconKey={pos.iconKey} label={pos.label} />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
}