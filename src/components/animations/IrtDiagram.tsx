"use client"

import React from "react"
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1, delay } },
})

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
}

const Node: React.FC<{
  iconKey: keyof typeof iconPaths
  label: string
}> = ({ iconKey, label }) => {
  return (
    <g>
      <circle cx="0" cy="0" r="32" fill="hsl(var(--background))" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1" />
      <g
        stroke="hsl(var(--primary))"
        strokeWidth="2"
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
        fontSize="11"
        fontWeight="500"
        fill="currentColor"
        className="text-foreground"
      >
        {label.split(" ").map((w, i) => (
          <tspan key={i} x="0" dy={i === 0 ? 0 : "1.2em"}>
            {w}
          </tspan>
        ))}
      </text>
    </g>
  )
}

export function IrtDiagram() {
  const SVG_WIDTH = 500
  const SVG_HEIGHT = 400
  const center = { x: SVG_WIDTH / 2, y: SVG_HEIGHT / 2 }
  const nodeRadius = 32

  const nodePositions = {
    top: { x: center.x, y: 70 },
    right: { x: 420, y: center.y },
    bottom: { x: center.x, y: 330 },
    left: { x: 80, y: center.y },
  }

  // Calculate line endpoints to touch the edge of the circle
  const lineEndPoints = {
    top: { x: nodePositions.top.x, y: nodePositions.top.y + nodeRadius },
    right: { x: nodePositions.right.x - nodeRadius, y: nodePositions.right.y },
    bottom: { x: nodePositions.bottom.x, y: nodePositions.bottom.y - nodeRadius },
    left: { x: nodePositions.left.x + nodeRadius, y: nodePositions.left.y },
  }

  return (
    <motion.div
      className="w-full flex items-center justify-center h-[420px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.svg
        variants={itemVariants}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="arrow"
            markerUnits="strokeWidth"
            markerWidth="8"
            markerHeight="8"
            viewBox="0 0 10 10"
            refX="0"
            refY="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        {/* Center IRT Hub */}
        <g transform={`translate(${center.x}, ${center.y})`}>
          <circle cx="0" cy="0" r="45" fill="hsla(var(--primary) / 0.1)" />
          <circle cx="0" cy="0" r="38" fill="hsla(var(--primary) / 0.2)" />
          <circle cx="0" cy="0" r="30" fill="hsl(var(--primary))" />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="hsl(var(--primary-foreground))"
            fontSize="14"
            fontWeight="bold"
          >
            IRT
          </text>
        </g>

        {/* Lines from center to nodes */}
        <motion.line
          variants={lineVariants(0.1)}
          x1={center.x} y1={center.y} x2={lineEndPoints.top.x} y2={lineEndPoints.top.y}
          stroke="hsl(var(--primary))" strokeWidth={1.5} markerStart="url(#arrow)"
        />
        <motion.line
          variants={lineVariants(0.2)}
          x1={center.x} y1={center.y} x2={lineEndPoints.right.x} y2={lineEndPoints.right.y}
          stroke="hsl(var(--primary))" strokeWidth={1.5} markerEnd="url(#arrow)"
        />
        <motion.line
          variants={lineVariants(0.3)}
          x1={center.x} y1={center.y} x2={lineEndPoints.bottom.x} y2={lineEndPoints.bottom.y}
          stroke="hsl(var(--primary))" strokeWidth={1.5} markerEnd="url(#arrow)"
        />
        <motion.line
          variants={lineVariants(0.4)}
          x1={center.x} y1={center.y} x2={lineEndPoints.left.x} y2={lineEndPoints.left.y}
          stroke="hsl(var(--primary))" strokeWidth={1.5} markerStart="url(#arrow)"
        />

        {/* Nodes */}
        <g transform={`translate(${nodePositions.top.x}, ${nodePositions.top.y})`}>
          <Node iconKey="Repeat" label="Randomization" />
        </g>
        <g transform={`translate(${nodePositions.right.x}, ${nodePositions.right.y})`}>
          <Node iconKey="Users" label="Subject Management" />
        </g>
        <g transform={`translate(${nodePositions.bottom.x}, ${nodePositions.bottom.y})`}>
          <Node iconKey="Hospital" label="Site Management" />
        </g>
        <g transform={`translate(${nodePositions.left.x}, ${nodePositions.left.y})`}>
          <Node iconKey="Beaker" label="Clinical Supplies" />
        </g>
      </motion.svg>
    </motion.div>
  )
}
