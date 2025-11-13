"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const nodes = [
    { id: "randomization", label: "Randomization", x: 0, y: -160, icon: Shuffle },
    { id: "clinical", label: "Clinical Supplies", x: -220, y: 0, icon: Beaker },
    { id: "subject", label: "Subject Management", x: 220, y: 0, icon: Users },
    { id: "site", label: "Site Management", x: 0, y: 160, icon: Hospital },
    { id: "irt", label: "IRT", x: 0, y: 0, center: true, icon: null },
];

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full min-h-[640px] bg-[#eef5ff] p-4">
      <div
        className="relative w-[800px] h-[600px] bg-white rounded-2xl shadow-lg"
      >
        {/* SVG Layer for lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="arrow-end-circle"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <circle cx="4" cy="4" r="2" fill="#2563eb" />
            </marker>
          </defs>

          {/* Lines from Center to Nodes */}
          {nodes.filter(n => !n.center).map(node => (
             <motion.line
                key={`line-${node.id}`}
                x1="400"
                y1="300"
                x2={400 + node.x}
                y2={300 + node.y}
                stroke="#2563eb"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                markerEnd={node.id === 'randomization' || node.id === 'site' ? "url(#arrow-end-circle)" : undefined}
                markerStart={node.id === 'clinical' || node.id === 'subject' ? "url(#arrow-end-circle)" : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            />
          ))}
        </svg>
        
        {/* Node Components */}
        {nodes.map((node, index) => {
            const isCenter = node.center;
            const Icon = node.icon;

            return (
                 <motion.div
                    key={node.id}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 + index * 0.1 }}
                    style={{
                        top: '50%',
                        left: '50%',
                        x: `${node.x}px`,
                        y: `${node.y}px`,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                >
                    {isCenter ? (
                        <div
                            className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                        >
                            <span className="text-white font-bold text-xl tracking-wider">IRT</span>
                        </div>
                    ) : (
                        <div
                            className="flex items-center justify-center gap-2 bg-white border border-slate-200/90 rounded-full shadow-sm px-6 py-3"
                        >
                            {Icon && <Icon className="w-5 h-5 text-blue-800/80" />}
                            <span className="text-blue-800/90 font-medium text-sm tracking-wide">{node.label}</span>
                        </div>
                    )}
                </motion.div>
            )
        })}
      </div>
    </div>
  );
}
