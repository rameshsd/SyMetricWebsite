"use client"

import React from "react"
import { motion } from "framer-motion"
import { Repeat, Users, Hospital, Beaker } from "lucide-react"

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 220, damping: 18 } },
}

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, delay } },
})

const Node: React.FC<{
  icon: React.ElementType
  label: string
  x: number
  y: number
}> = ({ icon: Icon, label, x, y }) => {
  return (
    <motion.g variants={itemVariants}>
        <g transform={`translate(${x}, ${y})`}>
            <foreignObject x={-20} y={-20} width={40} height={40}>
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-primary/25 bg-white shadow-sm">
                <Icon className="w-5 h-5 text-primary" />
                </div>
            </foreignObject>
            <text
                x={0}
                y={36}
                textAnchor="middle"
                fontSize={11}
                fontWeight={500}
                fill="currentColor"
                className="text-foreground"
            >
                {label.split(" ").map((w, i) => (
                <tspan key={i} x={0} dy={i === 0 ? 0 : "1.15em"}>
                    {w}
                </tspan>
                ))}
            </text>
      </g>
    </motion.g>
  )
}

export function IrtDiagram() {
  const SVG_WIDTH = 500
  const SVG_HEIGHT = 400
  const center = { x: SVG_WIDTH / 2, y: SVG_HEIGHT / 2 }
  const radius = 120

  const nodePositions = [
    { icon: Repeat, label: "Randomization", x: center.x, y: center.y - radius },
    { icon: Users, label: "Subject Management", x: center.x + radius, y: center.y },
    { icon: Hospital, label: "Site Management", x: center.x, y: center.y + radius },
    { icon: Beaker, label: "Clinical Supplies", x: center.x - radius, y: center.y },
  ]

  return (
    <motion.div
      className="w-full flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        className="max-w-[700px] h-[420px]"
      >
        <defs>
          <marker
            id="arrow"
            markerUnits="strokeWidth"
            markerWidth="8"
            markerHeight="8"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        <motion.g variants={itemVariants} transform={`translate(${center.x}, ${center.y})`}>
          <circle cx="0" cy="0" r="45" fill="hsla(var(--primary) / 0.08)" />
          <circle cx="0" cy="0" r="36" fill="hsla(var(--primary) / 0.14)" />
          <circle cx="0" cy="0" r="28" fill="hsl(var(--primary))" />
          <text x="0" y="6" textAnchor="middle" fontSize={14} fontWeight={700} fill="hsl(var(--primary-foreground))">
            IRT
          </text>
        </motion.g>

        {nodePositions.map((pos, idx) => (
          <motion.line
            key={idx}
            variants={lineVariants(0.1 * idx)}
            x1={center.x}
            y1={center.y}
            x2={pos.x}
            y2={pos.y}
            stroke="hsl(var(--primary))"
            strokeWidth={1.8}
            strokeLinecap="round"
            markerEnd="url(#arrow)"
          />
        ))}

        {nodePositions.map((p, i) => (
          <Node key={i} icon={p.icon} label={p.label} x={p.x} y={p.y} />
        ))}
      </svg>
    </motion.div>
  )
}