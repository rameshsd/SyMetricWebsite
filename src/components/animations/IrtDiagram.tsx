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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 220, damping: 20 } },
};

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay } },
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

const Node: React.FC<{ iconKey: keyof typeof iconPaths; label: string }> = ({ iconKey, label }) => (
  <motion.g variants={itemVariants}>
    <circle cx="0" cy="0" r="30" fill="white" stroke="hsl(var(--primary)/0.2)" strokeWidth="1.5" />
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
    <text y="45" textAnchor="middle" fontSize="11" fontWeight="500" fill="currentColor" className="text-foreground">
      {label}
    </text>
  </motion.g>
);

export function IrtDiagram() {
  const SVG_WIDTH = 500;
  const SVG_HEIGHT = 380;
  const center = { x: SVG_WIDTH / 2, y: SVG_HEIGHT / 2 };
  const radiusX = 150;
  const radiusY = 110;

  const nodes = [
    { iconKey: "Repeat", label: "Randomization", x: center.x, y: center.y - radiusY },
    { iconKey: "Users", label: "Subject Management", x: center.x + radiusX, y: center.y },
    { iconKey: "Hospital", label: "Site Management", x: center.x, y: center.y + radiusY },
    { iconKey: "Beaker", label: "Clinical Supplies", x: center.x - radiusX, y: center.y },
  ] as const;

  return (
    <motion.div
      className="w-full flex items-center justify-center h-[420px] relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Decorative IRT Tab in corner */}
      <motion.div variants={itemVariants} className="absolute top-4 left-4 z-10">
        <div className="flex items-center">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                IRT
            </div>
        </div>
      </motion.div>

      <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker
            id="arrow"
            markerUnits="strokeWidth"
            markerWidth="5"
            markerHeight="5"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        {/* Connecting Lines */}
        {nodes.map((pos, i) => {
          const end = { x: pos.x, y: pos.y };
          const dx = end.x - center.x;
          const dy = end.y - center.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const unitDx = dx / length;
          const unitDy = dy / length;
          
          const adjustedEnd = { x: end.x - unitDx * 35, y: end.y - unitDy * 35 };

          return (
            <motion.line
              key={i}
              variants={lineVariants(0.2 + i * 0.1)}
              x1={center.x}
              y1={center.y}
              x2={adjustedEnd.x}
              y2={adjustedEnd.y}
              stroke="hsl(var(--primary))"
              strokeWidth={1.5}
              markerEnd="url(#arrow)"
            />
          );
        })}

        {/* Outer Nodes */}
        {nodes.map((p, i) => (
          <g key={i} transform={`translate(${p.x}, ${p.y})`}>
            <Node iconKey={p.iconKey} label={p.label} />
          </g>
        ))}
      </svg>
    </motion.div>
  );
}