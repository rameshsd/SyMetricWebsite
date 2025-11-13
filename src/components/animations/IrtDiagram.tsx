"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const pathVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay },
  },
});

const FlowArrow = ({ d, delay = 0 }: { d: string; delay?: number }) => (
  <motion.path
    d={d}
    fill="none"
    stroke="hsl(var(--primary))"
    strokeWidth={2.4}
    strokeLinecap="round"
    markerEnd="url(#arrowhead)"
    variants={pathVariants(delay)}
  />
);

const FlowParticle = ({ pathId, delay = 0 }: { pathId: string; delay?: number }) => (
  <g>
    <circle r={4} fill="hsl(var(--primary))" filter="url(#glow)">
      <animateMotion dur="3s" begin={`${delay}s`} repeatCount="indefinite">
        <mpath href={pathId} />
      </animateMotion>
    </circle>
  </g>
);

const Node = ({ Icon, label }: { Icon: React.ElementType; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow">
      <Icon className="h-7 w-7" />
    </div>
    <div className="text-sm font-medium text-slate-700">{label}</div>
  </div>
);

const IRT = () => (
  <div className="h-20 w-20 rounded-full bg-white border-2 border-blue-600 text-blue-600 
                  flex items-center justify-center text-lg font-semibold shadow-md">
    IRT
  </div>
);

export function IrtDiagram() {
  const cx = 260;
  const cy = 230;

  const top = { x: cx, y: 110 };
  const left = { x: 120, y: cy };
  const right = { x: 400, y: cy };
  const bottom = { x: cx, y: 350 };

  const gap = 40;
  const topEndY = top.y + gap;
  const bottomEndY = bottom.y - gap;
  const leftEndX = left.x + gap;
  const rightEndX = right.x - gap;

  return (
    <div className="flex items-center justify-center w-full py-10 bg-transparent">
      <div className="relative w-[520px] h-[460px] bg-white rounded-2xl shadow-xl overflow-visible">
        
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 520 460"
        >
          <defs>
            <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
            </marker>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <path id="path-top" d={`M ${cx} ${cy} L ${cx} ${topEndY}`} />
            <path id="path-bottom" d={`M ${cx} ${cy} L ${cx} ${bottomEndY}`} />
            <path id="path-left" d={`M ${cx} ${cy} L ${leftEndX} ${cy}`} />
            <path id="path-right" d={`M ${cx} ${cy} L ${rightEndX} ${cy}`} />
          </defs>

          {/* lines */}
          <FlowArrow d={`M ${cx} ${cy} L ${cx} ${topEndY}`} delay={0.1} />
          <FlowArrow d={`M ${cx} ${cy} L ${cx} ${bottomEndY}`} delay={0.15} />
          <FlowArrow d={`M ${cx} ${cy} L ${leftEndX} ${cy}`} delay={0.2} />
          <FlowArrow d={`M ${cx} ${cy} L ${rightEndX} ${cy}`} delay={0.25} />

          {/* floating particles */}
          <FlowParticle pathId="#path-top" delay={0.6} />
          <FlowParticle pathId="#path-bottom" delay={0.8} />
          <FlowParticle pathId="#path-left" delay={1.0} />
          <FlowParticle pathId="#path-right" delay={1.2} />
        </svg>

        {/* nodes */}
        <div className="absolute left-[220px] top-[60px] z-40">
          <Node Icon={Shuffle} label="Randomization" />
        </div>

        <div className="absolute left-[60px] top-[200px] z-40">
          <Node Icon={Beaker} label="Clinical Supplies" />
        </div>

        <div className="absolute left-[240px] top-[210px] z-40">
          <IRT />
        </div>

        <div className="absolute left-[380px] top-[200px] z-40">
          <Node Icon={Users} label="Subject Management" />
        </div>

        <div className="absolute left-[220px] top-[340px] z-40">
          <Node Icon={Hospital} label="Site Management" />
        </div>
      </div>
    </div>
  );
}