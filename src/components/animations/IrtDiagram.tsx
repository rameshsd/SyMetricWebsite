"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
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

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut", delay },
  },
});

const Node = ({ label }: { label: string }) => (
  <motion.div
    variants={itemVariants}
    className="w-48 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm"
  >
    <span className="text-blue-900 font-medium text-sm">{label}</span>
  </motion.div>
);

export function IrtDiagram() {
  const center = { x: 300, y: 300 };
  const nodeRadius = 70; // Logical radius for placing nodes
  const linePadding = { hub: 50, node: 35 };

  const nodes = [
    {
      id: "rand",
      label: "Randomization",
      position: { x: center.x, y: center.y - 180 },
    },
    {
      id: "supply",
      label: "Clinical Supplies",
      position: { x: center.x - 220, y: center.y },
    },
    {
      id: "subject",
      label: "Subject Management",
      position: { x: center.x + 220, y: center.y },
    },
    {
      id: "site",
      label: "Site Management",
      position: { x: center.x, y: center.y + 180 },
    },
  ];

  return (
    <div className="flex items-center justify-center w-full min-h-[640px] bg-[#eef5ff]">
      <motion.div
        className="relative w-[600px] h-[600px] bg-white rounded-3xl shadow-xl flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* SVG layer for lines and animations */}
        <svg
          className="absolute inset-0"
          viewBox="0 0 600 600"
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
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#1d4ed8" />
            </marker>
            <path
              id="diamond-shape"
              d="M -4 0 L 0 -4 L 4 0 L 0 4 Z"
              fill="#3b82f6"
            />
          </defs>

          {nodes.map((node, i) => {
            const startX = center.x;
            const startY = center.y;
            const endX = node.position.x;
            const endY = node.position.y;

            const angle = Math.atan2(endY - startY, endX - startX);
            const lineStartX = startX + linePadding.hub * Math.cos(angle);
            const lineStartY = startY + linePadding.hub * Math.sin(angle);
            const lineEndX = endX - linePadding.node * Math.cos(angle);
            const lineEndY = endY - linePadding.node * Math.sin(angle);
            
            const pathId = `flow-path-${i}`;
            const pathD = `M ${lineStartX},${lineStartY} L ${lineEndX},${lineEndY}`;

            return (
              <g key={node.id}>
                <motion.path
                  d={pathD}
                  variants={lineVariants(i * 0.15)}
                  stroke="#a5b4fc"
                  strokeWidth="1.5"
                  markerEnd="url(#arrowhead-irt)"
                />
                <path id={pathId} d={pathD} style={{ display: 'none' }} />
                <use href="#diamond-shape" stroke="white" strokeWidth="1">
                  <animateMotion
                    dur={`${2.5 + i * 0.2}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.5}s`}
                  >
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </use>
              </g>
            );
          })}
        </svg>

        {/* Node Components */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className="absolute"
            style={{
              left: node.position.x,
              top: node.position.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Node label={node.label} />
          </div>
        ))}

        {/* Center IRT Hub */}
        <motion.div
          variants={itemVariants}
          className="absolute w-24 h-24 rounded-full bg-blue-600 shadow-lg flex items-center justify-center"
          style={{
            left: center.x,
            top: center.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-white font-bold text-xl">IRT</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
