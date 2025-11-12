"use client"

import { motion } from "framer-motion"
import { Repeat, Users, Hospital, Beaker } from "lucide-react"

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
}

const pathVariants = (delay: number) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay },
  },
})

const Node = ({
  icon: Icon,
  label,
  x,
  y,
}: {
  icon: React.ElementType
  label: string
  x: number
  y: number
}) => (
  <motion.g variants={itemVariants} transform={`translate(${x}, ${y})`}>
    <foreignObject x="-32" y="-32" width="64" height="64">
      <div className="w-16 h-16 bg-background border border-primary/30 rounded-full flex items-center justify-center shadow-sm">
        <Icon className="w-8 h-8 text-primary" />
      </div>
    </foreignObject>
    <text
      y="45"
      textAnchor="middle"
      fill="currentColor"
      fontSize="11"
      fontWeight="500"
      className="text-foreground"
    >
      {label.split(" ").map((word, i) => (
        <tspan key={i} x="0" dy={i === 0 ? 0 : "1.1em"}>
          {word}
        </tspan>
      ))}
    </text>
  </motion.g>
)

export function IrtDiagram() {
  const center = { x: 250, y: 200 }

  // Perfect grid layout (top, right, bottom, left)
  const nodePositions = [
    { icon: Repeat, label: "Randomization", x: 250, y: 60 }, // Top
    { icon: Users, label: "Subject Management", x: 420, y: 200 }, // Right
    { icon: Hospital, label: "Site Management", x: 250, y: 340 }, // Bottom
    { icon: Beaker, label: "Clinical Supplies", x: 80, y: 200 }, // Left
  ]

  return (
    <motion.div
      className="relative w-full h-[420px] flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <svg
        viewBox="0 0 500 400"
        className="w-[500px] h-[400px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="arrowhead"
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

        {/* Connectors */}
        {nodePositions.map((pos, i) => (
          <motion.line
            key={i}
            x1={center.x}
            y1={center.y}
            x2={pos.x}
            y2={pos.y}
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
            variants={pathVariants(0.2 + i * 0.1)}
          />
        ))}

        {/* Center Hub */}
        <motion.g variants={itemVariants} transform={`translate(${center.x}, ${center.y})`}>
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
        </motion.g>

        {/* Outer Nodes */}
        {nodePositions.map((pos, i) => (
          <Node key={i} icon={pos.icon} label={pos.label} x={pos.x} y={pos.y} />
        ))}
      </svg>
    </motion.div>
  )
}
