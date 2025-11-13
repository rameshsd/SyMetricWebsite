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
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 20, duration: 0.5 },
  },
};

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeInOut" },
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
  Box: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </>
  ),
};

const Node: React.FC<{ iconKey: keyof typeof iconPaths; label: string }> = ({ iconKey, label }) => {
  return (
    <g>
      <circle cx="0" cy="0" r="32" fill="white" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
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
      <text
        y="48"
        textAnchor="middle"
        fontSize="12"
        fontWeight="500"
        fill="currentColor"
        className="text-foreground"
      >
        {label}
      </text>
    </g>
  );
};

export function IrtDiagram() {
  const SVG_WIDTH = 500;
  const SVG_HEIGHT = 420;
  const center = { x: SVG_WIDTH / 2, y: SVG_HEIGHT / 2 };
  const radiusX = 150;
  const radiusY = 120;

  const nodePositions = [
    { key: "Repeat", label: "Randomization", x: center.x, y: center.y - radiusY },
    { key: "Users", label: "Subject Management", x: center.x + radiusX, y: center.y },
    { key: "Hospital", label: "Site Management", x: center.x, y: center.y + radiusY },
    { key: "Box", label: "Clinical Supplies", x: center.x - radiusX, y: center.y },
  ] as const;

  return (
    <motion.div
      className="w-full flex items-center justify-center h-[420px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="arrowhead"
            markerUnits="strokeWidth"
            markerWidth="6"
            markerHeight="6"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        {/* Lines */}
        {nodePositions.map((node, i) => {
          const start = { x: center.x, y: center.y };
          const end = { x: node.x, y: node.y };
          const dx = end.x - start.x;
          const dy = end.y - start.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const unitDx = dx / length;
          const unitDy = dy / length;

          const adjustedStart = { x: start.x + unitDx * 38, y: start.y + unitDy * 38 };
          const adjustedEnd = { x: end.x - unitDx * 40, y: end.y - unitDy * 40 };
          
          return (
            <motion.line
              key={`line-${i}`}
              variants={lineVariants(0.4 + i * 0.15)}
              x1={adjustedStart.x}
              y1={adjustedStart.y}
              x2={adjustedEnd.x}
              y2={adjustedEnd.y}
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              markerEnd="url(#arrowhead)"
            />
          );
        })}

        {/* Nodes */}
        {nodePositions.map((node, i) => (
          <motion.g key={`node-${i}`} variants={itemVariants} transform={`translate(${node.x}, ${node.y})`}>
            <Node iconKey={node.key} label={node.label} />
          </motion.g>
        ))}

        {/* Center IRT Hub */}
        <motion.g variants={itemVariants} transform={`translate(${center.x}, ${center.y})`}>
          <circle cx="0" cy="0" r="32" fill="hsl(var(--primary))" />
          <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="hsl(var(--primary-foreground))">
            IRT
          </text>
        </motion.g>

      </svg>
    </motion.div>
  );
}
