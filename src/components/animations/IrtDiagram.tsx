
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function IrtDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  const nodes = [
    { id: "randomization", label: "Randomization", x: 0, y: -160 },
    { id: "clinical", label: "Clinical Supplies", x: -200, y: 0 },
    { id: "subject", label: "Subject Management", x: 200, y: 0 },
    { id: "site", label: "Site Management", x: 0, y: 160 },
    { id: "irt", label: "IRT", x: 0, y: 0, center: true },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl">
      <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-100">
        {/* Connecting Lines (with glowing animation) */}
        <svg className="absolute w-full h-full" viewBox="0 0 600 600">
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#2563eb" />
            </marker>

            {/* Glowing animated gradient */}
            <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb">
                <animate
                  attributeName="offset"
                  values="0;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* IRT to Randomization */}
          <line
            x1="300"
            y1="250" 
            x2="300"
            y2="140"
            stroke="url(#glowLine)"
            strokeWidth="3"
            markerEnd="url(#arrow)"
          />
          {/* IRT to Clinical Supplies */}
          <line
            x1="250"
            y1="300"
            x2="100"
            y2="300"
            stroke="url(#glowLine)"
            strokeWidth="3"
            markerEnd="url(#arrow)"
          />
          {/* IRT to Subject Management */}
          <line
            x1="350"
            y1="300"
            x2="500"
            y2="300"
            stroke="url(#glowLine)"
            strokeWidth="3"
            markerEnd="url(#arrow)"
          />
          {/* IRT to Site Management */}
          <line
            x1="300"
            y1="350"
            x2="300"
            y2="460"
            stroke="url(#glowLine)"
            strokeWidth="3"
            markerEnd="url(#arrow)"
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            onHoverStart={() => setHovered(node.label)}
            onHoverEnd={() => setHovered(null)}
            className={`absolute flex items-center justify-center rounded-full shadow-lg cursor-pointer text-center 
              ${
                node.center
                  ? "bg-blue-600 text-white w-20 h-20 text-lg font-semibold"
                  : "bg-white text-gray-800 w-44 h-16 font-medium border border-gray-300"
              }`}
            style={{
              transform: `translate(${node.x}px, ${node.y}px)`,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {node.label}
          </motion.div>
        ))}

        {/* Hover Tooltip */}
        {hovered && (
          <motion.div
            className="absolute bottom-10 text-gray-700 bg-white px-4 py-2 rounded-xl shadow-md border text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {hovered}
          </motion.div>
        )}
      </div>
    </div>
  );
}
