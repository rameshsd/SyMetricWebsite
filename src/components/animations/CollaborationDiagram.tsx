"use client"

import { motion } from "framer-motion"

export function CollaborationDiagram() {
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
      transition: { duration: 1.5, ease: "easeInOut", delay },
    },
  })

  return (
    <motion.div
      className="relative w-full h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <svg
        viewBox="0 0 200 150"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Blue L-shape */}
        <motion.path
          d="M 180 20 L 140 20 L 140 60"
          stroke="#3b82f6"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          variants={pathVariants(0.2)}
        />

        {/* Red swoosh */}
        <motion.path
          d="M 60 100 Q 90 80, 120 100"
          stroke="#ef4444"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          variants={pathVariants(0.5)}
        />
        
        {/* Small blue triangles */}
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={i}
            d="M 190 70 L 195 75 L 190 80 Z"
            fill="#60a5fa"
            variants={itemVariants}
            initial={{ opacity: 0, x: 10 }}
             animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.8 + i * 0.15, ease: "easeOut" }
            }}
            transform={`translate(0, ${i * 15})`}
          />
        ))}
      </svg>
    </motion.div>
  )
}
