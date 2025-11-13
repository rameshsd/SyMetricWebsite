"use client";

import React from "react";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const Node = ({ Icon, label }: { Icon: any; label: string }) => (
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
  const cx = 260;
  const cy = 230;
  const lineLength = 95; // PERFECT MATCH TO YOUR SCREENSHOT

  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="relative w-[520px] h-[460px] bg-white rounded-2xl shadow-xl overflow-visible">

        {/* ==========================
            ARROW LINES + FLOW DOTS
        ============================ */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 460">
          
          <defs>
            {/* ARROWHEAD */}
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0 0 L8 4 L0 8 Z" fill="#1E40AF" />
            </marker>

            {/* FLOW PATHS */}
            <path id="path-top"    d={`M ${cx} ${cy} L ${cx} ${cy - lineLength}`} />
            <path id="path-bottom" d={`M ${cx} ${cy} L ${cx} ${cy + lineLength}`} />
            <path id="path-left"   d={`M ${cx} ${cy} L ${cx - lineLength} ${cy}`} />
            <path id="path-right"  d={`M ${cx} ${cy} L ${cx + lineLength} ${cy}`} />

            {/* GLOW */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* ===== TOP LINE ===== */}
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={cy - lineLength}
            stroke="#1E40AF"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />

          <circle r="5" fill="#1E40AF" filter="url(#glow)">
            <animateMotion dur="2s" repeatCount="indefinite">
              <mpath href="#path-top" />
            </animateMotion>
          </circle>

          {/* ===== BOTTOM LINE ===== */}
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={cy + lineLength}
            stroke="#1E40AF"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />

          <circle r="5" fill="#1E40AF" filter="url(#glow)">
            <animateMotion dur="2s" repeatCount="indefinite">
              <mpath href="#path-bottom" />
            </animateMotion>
          </circle>

          {/* ===== LEFT LINE ===== */}
          <line
            x1={cx}
            y1={cy}
            x2={cx - lineLength}
            y2={cy}
            stroke="#1E40AF"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />

          <circle r="5" fill="#1E40AF" filter="url(#glow)">
            <animateMotion dur="2s" repeatCount="indefinite">
              <mpath href="#path-left" />
            </animateMotion>
          </circle>

          {/* ===== RIGHT LINE ===== */}
          <line
            x1={cx}
            y1={cy}
            x2={cx + lineLength}
            y2={cy}
            stroke="#1E40AF"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />

          <circle r="5" fill="#1E40AF" filter="url(#glow)">
            <animateMotion dur="2s" repeatCount="indefinite">
              <mpath href="#path-right" />
            </animateMotion>
          </circle>

        </svg>

        {/* ==========================
            NODES (PERFECT ALIGNMENT)
        ============================ */}

        {/* TOP */}
        <div className="absolute" style={{ left: cx - 40, top: 55 }}>
          <Node Icon={Shuffle} label="Randomization" />
        </div>

        {/* LEFT */}
        <div className="absolute" style={{ left: 60, top: cy - 40 }}>
          <Node Icon={Beaker} label="Clinical Supplies" />
        </div>

        {/* CENTER */}
        <div className="absolute" style={{ left: cx - 40, top: cy - 40 }}>
          <IRTHub />
        </div>

        {/* RIGHT */}
        <div className="absolute" style={{ left: 380, top: cy - 40 }}>
          <Node Icon={Users} label="Subject Management" />
        </div>

        {/* BOTTOM */}
        <div className="absolute" style={{ left: cx - 40, top: 340 }}>
          <Node Icon={Hospital} label="Site Management" />
        </div>

      </div>
    </div>
  );
}