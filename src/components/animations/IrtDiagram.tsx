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
      <div className="relative bg-white rounded-2xl shadow-xl w-[520px] h-[460px]">

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
            top: "75px",
            transform: "translateX(-50%)"
          }}
        >
          <Node Icon={Shuffle} label="Randomization" />
        </div>

        {/* BOTTOM NODE */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "325px",
            transform: "translateX(-50%)"
          }}
        >
          <Node Icon={Hospital} label="Site Management" />
        </div>

        {/* LEFT NODE */}
        <div
          className="absolute"
          style={{
            left: "85px",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        >
          <Node Icon={Beaker} label="Clinical Supplies" />
        </div>

        {/* RIGHT NODE */}
        <div
          className="absolute"
          style={{
            left: "355px",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        >
          <Node Icon={Users} label="Subject Management" />
        </div>

        {/* === SVG LAYER FOR LINES + MOVING DOTS === */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 460">
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0 0 L8 4 L0 8 Z" fill="#1E40AF" />
            </marker>

            {/* Glow Effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>

            {/* FLOW PATHS GENERATED FROM TRUE CENTER (260,230) */}
            <path id="p-top" d="M 260 230 L 260 150" />
            <path id="p-bottom" d="M 260 230 L 260 310" />
            <path id="p-left" d="M 260 230 L 180 230" />
            <path id="p-right" d="M 260 230 L 340 230" />
          </defs>

          {/* ARROWS */}
          {/* TOP */}
          <line x1="260" y1="230" x2="260" y2="150" stroke="#1E40AF" strokeWidth="3"
                markerEnd="url(#arrowhead)" />

          {/* BOTTOM */}
          <line x1="260" y1="230" x2="260" y2="310" stroke="#1E40AF" strokeWidth="3"
                markerEnd="url(#arrowhead)" />

          {/* LEFT */}
          <line x1="260" y1="230" x2="180" y2="230" stroke="#1E40AF" strokeWidth="3"
                markerEnd="url(#arrowhead)" />

          {/* RIGHT */}
          <line x1="260" y1="230" x2="340" y2="230" stroke="#1E40AF" strokeWidth="3"
                markerEnd="url(#arrowhead)" />

          {/* MOVING FLOW DOTS */}
          {["p-top", "p-bottom", "p-left", "p-right"].map((p) => (
            <circle r="5" fill="#1E40AF" filter="url(#glow)" opacity="0.9" key={p}>
              <animateMotion dur="1.5s" repeatCount="indefinite">
                <mpath href={`#${p}`} />
              </animateMotion>
            </circle>
          ))}
        </svg>
      </div>
    </div>
  );
}
