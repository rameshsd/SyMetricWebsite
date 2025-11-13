
"use client";

import React from "react";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const Node = ({ Icon, label }: {Icon: React.ElementType, label: string}) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow">
      <Icon className="h-7 w-7" />
    </div>
    <p className="text-sm font-medium text-slate-700">{label}</p>
  </div>
);

const IRTHub = () => (
  <div className="h-20 w-20 rounded-full border-2 border-blue-600 text-blue-600
                  flex items-center justify-center text-lg font-semibold shadow-md bg-white">
    IRT
  </div>
);

export function IrtDiagram() {
  const centerX = 260;
  const centerY = 230;
  const radius = 40; // radius of IRT circle
  const arrowLength = 80; // distance from circle to node direction

  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="relative w-[520px] h-[460px] bg-white rounded-2xl shadow-xl">

        {/* ==========================
            CENTER ARROW LINES
        ============================ */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 460">

          <defs>
            <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill="#1E40AF" />
            </marker>
          </defs>

          {/* TOP ARROW */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX}
            y2={centerY - radius - arrowLength}
            stroke="#1E40AF"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />

          {/* BOTTOM ARROW */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX}
            y2={centerY + radius + arrowLength}
            stroke="#1E40AF"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />

          {/* LEFT ARROW */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX - radius - arrowLength}
            y2={centerY}
            stroke="#1E40AF"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />

          {/* RIGHT ARROW */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX + radius + arrowLength}
            y2={centerY}
            stroke="#1E40AF"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
        </svg>

        {/* ==========================
            NODES (perfectly aligned)
        ============================ */}

        {/* TOP */}
        <div className="absolute" style={{ left: centerX - 40, top: 60 }}>
          <Node Icon={Shuffle} label="Randomization" />
        </div>

        {/* LEFT */}
        <div className="absolute" style={{ left: 60, top: centerY - 40 }}>
          <Node Icon={Beaker} label="Clinical Supplies" />
        </div>

        {/* CENTER IRT */}
        <div className="absolute" style={{ left: centerX - 40, top: centerY - 40 }}>
          <IRTHub />
        </div>

        {/* RIGHT */}
        <div className="absolute" style={{ left: 380, top: centerY - 40 }}>
          <Node Icon={Users} label="Subject Management" />
        </div>

        {/* BOTTOM */}
        <div className="absolute" style={{ left: centerX - 40, top: 340 }}>
          <Node Icon={Hospital} label="Site Management" />
        </div>

      </div>
    </div>
  );
}
