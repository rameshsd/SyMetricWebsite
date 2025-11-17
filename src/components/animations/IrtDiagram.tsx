
"use client";

import React from "react";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const Node = ({ Icon, label }: { Icon: React.ElementType; label: string; }) => (
  <div className="flex flex-col items-center gap-2 select-none">
    <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow">
      <Icon className="h-7 w-7" />
    </div>
    <p className="text-sm font-medium text-slate-700">{label}</p>
  </div>
);

const IRTHub = () => (
  <div className="
    h-20 w-20 rounded-full border-2 border-blue-600 bg-white 
    text-blue-600 flex items-center justify-center 
    text-lg font-semibold shadow-md select-none
  ">
    IRT
  </div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-10">

      {/* FULL DIAGRAM WRAPPER */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-[520px] h-auto aspect-square">

        {/* === CENTER IRT === */}
        <div
          id="irt-center"
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <IRTHub />
        </div>

        {/* === NODES (TRUE GEOMETRIC POSITIONS) === */}

        {/* TOP NODE */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "15%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Node Icon={Shuffle} label="Randomization" />
        </div>

        {/* BOTTOM NODE */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "85%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Node Icon={Hospital} label="Site Management" />
        </div>

        {/* LEFT NODE */}
        <div
          className="absolute"
          style={{
            left: "15%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Node Icon={Beaker} label="Clinical Supplies" />
        </div>

        {/* RIGHT NODE */}
        <div
          className="absolute"
          style={{
            left: "85%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Node Icon={Users} label="Subject Management" />
        </div>

        {/* === SVG LAYER FOR LINES + MOVING DOTS === */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <defs>
            <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
              <path d="M0,0 L4,2 L0,4 z" fill="#1E40AF" />
            </marker>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Animation paths */}
            <path id="p-top" d="M 50 42 V 30" />
            <path id="p-bottom" d="M 50 58 V 70" />
            <path id="p-left" d="M 42 50 H 30" />
            <path id="p-right" d="M 58 50 H 70" />
          </defs>

          {/* ARROWS */}
          <line x1="50" y1="42" x2="50" y2="30" stroke="#1E40AF" strokeWidth="0.75" markerEnd="url(#arrowhead)" />
          <line x1="50" y1="58" x2="50" y2="70" stroke="#1E40AF" strokeWidth="0.75" markerEnd="url(#arrowhead)" />
          <line x1="42" y1="50" x2="30" y2="50" stroke="#1E40AF" strokeWidth="0.75" markerEnd="url(#arrowhead)" />
          <line x1="58" y1="50" x2="70" y2="50" stroke="#1E40AF" strokeWidth="0.75" markerEnd="url(#arrowhead)" />
          
          {/* MOVING FLOW DOTS */}
          {["p-top", "p-bottom", "p-left", "p-right"].map((p, i) => (
            <circle r="1" fill="#3B82F6" filter="url(#glow)" key={p}>
              <animateMotion dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite">
                <mpath href={`#${p}`} />
              </animateMotion>
            </circle>
          ))}
        </svg>
      </div>
    </div>
  );
}
