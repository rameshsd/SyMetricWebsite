"use client"

import React from "react"
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 180, damping: 16 } },
}

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, delay } },
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

const Node: React.FC<{ iconKey: keyof typeof iconPaths; label: string }> = ({ iconKey, label }) => (
  <motion.g variants={itemVariants}>
    <circle cx="0" cy="0" r="35" fill="white" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.6" />
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
      y="55"
      textAnchor="middle"
      fontSize="12"
      fontWeight="500"
      fill="hsl(var(--primary))"
      className="text-foreground"
    >
      {label}
    </text>
  </motion.g>
)

export function IrtDiagram() {
  const SVG_WIDTH = 600
  const SVG_HEIGHT = 480
  const center = { x: SVG_WIDTH / 2, y: SVG_HEIGHT / 2 }
  const radius = 150

  const nodes = [
    { iconKey: "Repeat", label: "Randomization", x: center.x, y: center.y - radius },
    { iconKey: "Users", label: "Subject Management", x: center.x + radius, y: center.y },
    { iconKey: "Hospital", label: "Site Management", x: center.x, y: center.y + radius },
    { iconKey: "Beaker", label: "Clinical Supplies", x: center.x - radius, y: center.y },
  ] as const

  return (
    <motion.div
      className="flex items-center justify-center w-full h-[480px] bg-gradient-to-b from-white to-slate-50 rounded-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker
            id="arrow"
            markerUnits="strokeWidth"
            markerWidth="8"
            markerHeight="8"
            viewBox="0 0 10 10"
            refX="9.5"
            refY="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        {/* Connecting Lines */}
        {nodes.map((pos, i) => {
          const start = { x: center.x, y: center.y }
          const end = { x: pos.x, y: pos.y }
          const dx = end.x - start.x
          const dy = end.y - start.y
          const length = Math.sqrt(dx * dx + dy * dy)
          const unitDx = dx / length
          const unitDy = dy / length
          const adjustedStart = { x: start.x + unitDx * 50, y: start.y + unitDy * 50 }
          const adjustedEnd = { x: end.x - unitDx * 40, y: end.y - unitDy * 40 }

          return (
            <motion.line
              key={i}
              variants={lineVariants(0.3 * i)}
              x1={adjustedStart.x}
              y1={adjustedStart.y}
              x2={adjustedEnd.x}
              y2={adjustedEnd.y}
              stroke="hsl(var(--primary))"
              strokeWidth={1.6}
              markerEnd="url(#arrow)"
            />
          )
        })}

        {/* Center IRT Node */}
        <motion.g variants={itemVariants} transform={`translate(${center.x}, ${center.y})`}>
          <circle cx="0" cy="0" r="48" fill="hsla(var(--primary)/0.1)" />
          <circle cx="0" cy="0" r="40" fill="hsla(var(--primary)/0.25)" />
          <circle cx="0" cy="0" r="32" fill="hsl(var(--primary))" />
          <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">
            IRT
          </text>
        </motion.g>

        {/* Outer Nodes */}
        {nodes.map((p, i) => (
          <g key={i} transform={`translate(${p.x}, ${p.y})`}>
            <Node iconKey={p.iconKey} label={p.label} />
          </g>
        ))}
      </svg>
    </motion.div>
  )
}
