"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export function IrtDiagram() {
  const SVG_WIDTH = 500;
  const SVG_HEIGHT = 420;
  const center = { x: SVG_WIDTH / 2, y: SVG_HEIGHT / 2 };
  const arrowLength = 50;

  const arrows = [
    { id: "up", d: `M ${center.x} ${center.y} v -${arrowLength}` },
    { id: "right", d: `M ${center.x} ${center.y} h ${arrowLength}` },
    { id: "down", d: `M ${center.x} ${center.y} v ${arrowLength}` },
    { id: "left", d: `M ${center.x} ${center.y} h -${arrowLength}` },
  ];

  return (
    <motion.div
      className="relative w-full flex items-center justify-center h-[420px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-0">
        <div className="bg-primary text-primary-foreground font-bold text-lg p-4 rounded-tl-2xl rounded-br-2xl">
          IRT
        </div>
      </div>
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="arrowhead-simple"
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

        {arrows.map((arrow) => (
          <motion.path
            key={arrow.id}
            d={arrow.d}
            variants={pathVariants}
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            fill="none"
            markerEnd="url(#arrowhead-simple)"
          />
        ))}
      </svg>
    </motion.div>
  );
}