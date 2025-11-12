
"use client"

import { motion } from "framer-motion"
import { Repeat, Users, Hospital, Beaker } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
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

const Node = ({ icon: Icon, label, x, y }: { icon: React.ElementType, label: string, x: number, y: number }) => (
  <motion.g
    variants={itemVariants}
    transform={`translate(${x}, ${y})`}
  >
    <foreignObject x="-32" y="-32" width="64" height="64">
        <div className="w-16 h-16 bg-background border rounded-full flex items-center justify-center shadow-md">
          <Icon className="w-8 h-8 text-primary" />
        </div>
    </foreignObject>
    <text
        y="45"
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        fontWeight="medium"
        className="text-foreground"
    >
      {label.split(' ').map((word, index, words) => {
        if (words.length > 2 && index === 1) { // Break after second word for long labels
          return <tspan key={index} x="0" dy="1.2em">{word}</tspan>;
        }
        return <tspan key={index} x={words.length > 2 ? 0 : undefined} dy={index > 0 ? "1.2em" : "0"}>{word}</tspan>;
      })}
    </text>
  </motion.g>
)

export function IrtDiagram() {
  const center = { x: 200, y: 150 };
  const nodePositions = [
    { x: 80, y: 60 },   // Top-left
    { x: 320, y: 60 },  // Top-right
    { x: 80, y: 240 },  // Bottom-left
    { x: 320, y: 240 }  // Bottom-right
  ];
  
  return (
    <motion.div
      className="relative w-full h-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full overflow-visible"
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

        {/* Paths from center to nodes */}
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
            variants={pathVariants(0.3 + i * 0.2)}
          />
        ))}

        {/* Central Hub */}
        <motion.g variants={itemVariants} transform={`translate(${center.x}, ${center.y})`}>
          <circle cx="0" cy="0" r="45" fill="hsla(var(--primary) / 0.1)" />
          <circle cx="0" cy="0" r="38" fill="hsla(var(--primary) / 0.2)" />
          <circle cx="0" cy="0" r="30" fill="hsl(var(--primary))" />
          <text x="0" y="5" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="14" fontWeight="bold">
            IRT
          </text>
        </motion.g>

        {/* Feature Nodes */}
        <Node icon={Repeat} label="Randomization" x={nodePositions[0].x} y={nodePositions[0].y} />
        <Node icon={Users} label="Subject Management" x={nodePositions[1].x} y={nodePositions[1].y} />
        <Node icon={Hospital} label="Site Management" x={nodePositions[2].x} y={nodePositions[2].y} />
        <Node icon={Beaker} label="Clinical Supplies Management" x={nodePositions[3].x} y={nodePositions[3].y} />
      </svg>
    </motion.div>
  )
}
