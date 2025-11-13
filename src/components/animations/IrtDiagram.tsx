"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay, ease: "easeInOut" } },
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

const Node: React.FC<{ iconKey: keyof typeof iconPaths; label: string; }> = ({ iconKey, label }) => {
  const words = label.split(" ");
  return (
    <motion.g variants={itemVariants}>
      <circle cx="0" cy="0" r="30" fill="white" stroke="hsl(var(--primary))" strokeWidth="1" />
      <g stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-12, -12)">
        {iconPaths[iconKey]}
      </g>
      <text y="40" textAnchor="middle" fontSize="10" fontWeight="500" fill="currentColor">
        {words.map((word, i) => (
          <tspan key={i} x="0" dy={i > 0 ? "1.2em" : 0}>{word}</tspan>
        ))}
      </text>
    </motion.g>
  );
};

export function IrtDiagram() {
  const SVG_WIDTH = 500;
  const SVG_HEIGHT = 400;
  const center = { x: SVG_WIDTH / 2, y: SVG_HEIGHT / 2 };
  const hRadius = 150;
  const vRadius = 110;

  const nodePositions = [
    { key: "Repeat", label: "Randomization", x: center.x, y: center.y - vRadius },
    { key: "Users", label: "Subject Management", x: center.x + hRadius, y: center.y },
    { key: "Hospital", label: "Site Management", x: center.x, y: center.y + vRadius },
    { key: "Beaker", label: "Clinical Supplies", x: center.x - hRadius, y: center.y },
  ] as const;

  return (
    <div className="relative w-full h-full">
      {/* Decorative IRT Tab */}
      <motion.div 
        className="absolute top-4 left-4 z-10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-inner">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                IRT
            </div>
        </div>
      </motion.div>

      <motion.svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L6,3 L0,6 z" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        {nodePositions.map((pos, i) => {
          const end = { x: pos.x, y: pos.y };
          const dx = end.x - center.x;
          const dy = end.y - center.y;
          const length = Math.sqrt(dx*dx + dy*dy);
          const unitDx = dx/length;
          const unitDy = dy/length;

          // Start line from center, end it just before the circle
          const adjustedEnd = { x: end.x - unitDx * 35, y: end.y - unitDy * 35 };

          return (
            <motion.line
              key={pos.key}
              x1={center.x}
              y1={center.y}
              x2={adjustedEnd.x}
              y2={adjustedEnd.y}
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
              variants={lineVariants(i * 0.15)}
            />
          );
        })}

        {nodePositions.map(pos => (
          <g key={pos.key} transform={`translate(${pos.x}, ${pos.y})`}>
            <Node iconKey={pos.key} label={pos.label} />
          </g>
        ))}
      </motion.svg>
    </div>
  );
}
