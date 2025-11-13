"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Requirements:
 * - TailwindCSS in your project
 * - framer-motion installed
 *
 * Usage: import and render <IrtDiagram /> wherever you want the diagram.
 */

export function IrtDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  const nodes = [
    { id: "randomization", label: "Randomization", x: 0, y: -150 },
    { id: "clinical", label: "Clinical Supplies", x: -220, y: 0 },
    { id: "subject", label: "Subject Management", x: 220, y: 0 },
    { id: "site", label: "Site Management", x: 0, y: 150 },
    { id: "irt", label: "IRT", x: 0, y: 0, center: true },
  ] as const;

  const nodeMotion = {
    hidden: { opacity: 0, y: 8, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
  };

  return (
    <div className="flex items-center justify-center w-full min-h-[520px] p-6 bg-slate-50">
      {/* Inline small CSS for the flowing stroke animation */}
      <style>{`
        .flow-line {
          stroke: #1e3a8a; /* darker blue */
          stroke-width: 3;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 200;
          stroke-dashoffset: 0;
          animation: flow 2.4s linear infinite;
        }
        @keyframes flow {
          to { stroke-dashoffset: -400; }
        }
        /* a lighter faint trail */
        .flow-trail {
          stroke: #bfdbfe; /* light blue */
          stroke-width: 6;
          fill: none;
          stroke-linecap: round;
          opacity: 0.28;
        }
        .arrow-marker path { fill: #1e3a8a; }
      `}</style>

      <div className="relative w-[760px] h-[520px] rounded-2xl bg-white shadow-md flex items-center justify-center">
        {/* SVG canvas for lines and arrow markers */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 520" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker
              id="arrowBlue"
              markerWidth="10"
              markerHeight="10"
              refX="6"
              refY="5"
              orient="auto"
              className="arrow-marker"
            >
              <path d="M0,0 L10,5 L0,10 z" />
            </marker>
          </defs>

          {/* Coordinates - center is (380,260) */}
          {/* Trail (faint) lines — static background */}
          <path className="flow-trail" d="M380 260 L380 110" />
          <path className="flow-trail" d="M380 260 L160 260" />
          <path className="flow-trail" d="M380 260 L600 260" />
          <path className="flow-trail" d="M380 260 L380 410" />

          {/* Flowing main lines — animated with stroke-dashoffset */}
          {/* Top (Randomization) */}
          <path
            className="flow-line"
            d="M380 260 L380 120"
            markerEnd="url(#arrowBlue)"
            vectorEffect="non-scaling-stroke"
          />
          {/* Left (Clinical Supplies) */}
          <path
            className="flow-line"
            d="M380 260 L160 260"
            markerEnd="url(#arrowBlue)"
            vectorEffect="non-scaling-stroke"
          />
          {/* Right (Subject Management) */}
          <path
            className="flow-line"
            d="M380 260 L600 260"
            markerEnd="url(#arrowBlue)"
            vectorEffect="non-scaling-stroke"
          />
          {/* Bottom (Site Management) */}
          <path
            className="flow-line"
            d="M380 260 L380 400"
            markerEnd="url(#arrowBlue)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Nodes (positioned relative to center) */}
        {nodes.map((n) => {
          const left = 380 + n.x - (n.center ? 40 : 220 / 2); // center offset adjustments
          const top = 260 + n.y - (n.center ? 40 : 24); // center offset adjustments
          return (
            <motion.div
              key={n.id}
              initial="hidden"
              animate="visible"
              variants={nodeMotion}
              onHoverStart={() => setHovered(n.id)}
              onHoverEnd={() => setHovered(null)}
              className={
                n.center
                  ? "absolute flex items-center justify-center rounded-full shadow-2xl cursor-default select-none"
                  : "absolute flex items-center justify-center rounded-full shadow-md cursor-default select-none"
              }
              style={{
                left,
                top,
                width: n.center ? 80 : 220,
                height: n.center ? 80 : 48,
                transform: `translate(0,0)`,
              }}
            >
              {n.center ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-full text-lg font-semibold">
                  IRT
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white border border-slate-100 rounded-full text-blue-800 text-sm font-medium shadow-sm px-4">
                  {n.label}
                </div>
              )}
            </motion.div>
          );
        })}

        {/* small subtle hover tooltip (optional) - shows id only while hovering */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-sm text-xs text-slate-700 border"
          >
            {hovered}
          </motion.div>
        )}
      </div>
    </div>
  );
}
