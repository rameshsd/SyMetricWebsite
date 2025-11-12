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

const Node = ({ icon: Icon, label, position }: { icon: React.ElementType, label: string, position: { top: string, left: string } }) => (
  <motion.div
    variants={itemVariants}
    className="absolute flex flex-col items-center gap-1 text-center"
    style={{ ...position, transform: 'translate(-50%, -50%)' }}
  >
    <div className="w-14 h-14 bg-background border rounded-full flex items-center justify-center shadow-md">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <span className="text-xs font-semibold text-foreground max-w-[80px]">{label}</span>
  </motion.div>
)

export function IrtDiagram() {
  return (
    <motion.div
      className="relative w-full h-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <svg
        viewBox="0 0 300 200"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Paths from center to nodes */}
        <motion.path d="M 150 100 L 70 50" stroke="hsl(var(--border))" strokeWidth="1.5" variants={pathVariants(0.3)} />
        <motion.path d="M 150 100 L 230 50" stroke="hsl(var(--border))" strokeWidth="1.5" variants={pathVariants(0.5)} />
        <motion.path d="M 150 100 L 70 150" stroke="hsl(var(--border))" strokeWidth="1.5" variants={pathVariants(0.7)} />
        <motion.path d="M 150 100 L 230 150" stroke="hsl(var(--border))" strokeWidth="1.5" variants={pathVariants(0.9)} />
      </svg>
      
      {/* Central Hub */}
      <motion.div
        variants={itemVariants}
        className="absolute flex flex-col items-center gap-1"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                 <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">IRT</span>
                 </div>
            </div>
        </div>
        <span className="text-xs font-bold text-primary">Platform</span>
      </motion.div>

      {/* Feature Nodes */}
      <Node icon={Repeat} label="Randomization" position={{ top: '25%', left: '23%' }} />
      <Node icon={Users} label="Subject Management" position={{ top: '25%', left: '77%' }} />
      <Node icon={Hospital} label="Site Management" position={{ top: '75%', left: '23%' }} />
      <Node icon={Beaker} label="Clinical Supplies Management" position={{ top: '75%', left: '77%' }} />

    </motion.div>
  )
}