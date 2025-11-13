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
  <div className="h-20 w-20 rounded-full border-2 border-blue-600 bg-white 
                  text-blue-600 flex items-center justify-center 
                  text-lg font-semibold shadow-md">
    IRT
  </div>
);

export function IrtDiagram() {
  const cx = 272; // moved 12px to the right
  const cy = 230; 
  const radius = 40;

  // Corrected perfect geometry
  const topEnd =    { x: cx, y: 130 };
  const bottomEnd = { x: cx, y: 330 };
  const leftEnd =   { x: cx - 120, y: 230 }; // Adjusted relative to new cx
  const rightEnd =  { x: cx + 120, y: 230 }; // Adjusted relative to new cx

  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="relative w-[520px] h-[460px] bg-white rounded-2xl shadow-xl">

        {/* ==========================
            CLEAN CENTERED ARROWS
        ============================ */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 460">

          <defs>
            {/* Arrowhead */}
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0 0 L8 4 L0 8 Z" fill="#1E40AF" />
            </marker>

            {/* Flow paths */}
            <path id="flow-top"    d={`M ${cx} ${cy} L ${topEnd.x} ${topEnd.y}`} />
            <path id="flow-bottom" d={`M ${cx} ${cy} L ${bottomEnd.x} ${bottomEnd.y}`} />
            <path id="flow-left"   d={`M ${cx} ${cy} L ${leftEnd.x} ${leftEnd.y}`} />
            <path id="flow-right"  d={`M ${cx} ${cy} L ${rightEnd.x} ${rightEnd.y}`} />

            {/* Glow */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* TOP ARROW */}
          <line
            x1={cx} y1={cy}
            x2={topEnd.x} y2={topEnd.y}
            stroke="#1E40AF" strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle r="6" fill="#1E40AF" filter="url(#glow)" opacity="0.9">
            <animateMotion dur="1.6s" repeatCount="indefinite">
              <mpath href="#flow-top" />
            </animateMotion>
          </circle>

          {/* BOTTOM ARROW */}
          <line
            x1={cx} y1={cy}
            x2={bottomEnd.x} y2={bottomEnd.y}
            stroke="#1E40AF" strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle r="6" fill="#1E40AF" filter="url(#glow)" opacity="0.9">
            <animateMotion dur="1.6s" repeatCount="indefinite">
              <mpath href="#flow-bottom" />
            </animateMotion>
          </circle>

          {/* LEFT ARROW */}
          <line
            x1={cx} y1={cy}
            x2={leftEnd.x} y2={leftEnd.y}
            stroke="#1E40AF" strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle r="6" fill="#1E40AF" filter="url(#glow)" opacity="0.9">
            <animateMotion dur="1.6s" repeatCount="indefinite">
              <mpath href="#flow-left" />
            </animateMotion>
          </circle>

          {/* RIGHT ARROW */}
          <line
            x1={cx} y1={cy}
            x2={rightEnd.x} y2={rightEnd.y}
            stroke="#1E40AF" strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle r="6" fill="#1E40AF" filter="url(#glow)" opacity="0.9">
            <animateMotion dur="1.6s" repeatCount="indefinite">
              <mpath href="#flow-right" />
            </animateMotion>
          </circle>

        </svg>

        {/* ==========================
            PERFECT NODE ALIGNMENT
        ============================ */}
        
        {/* TOP */}
        <div className="absolute left-[232px] top-[60px]">
          <Node Icon={Shuffle} label="Randomization" />
        </div>

        {/* LEFT */}
        <div className="absolute left-[60px] top-[200px]">
          <Node Icon={Beaker} label="Clinical Supplies" />
        </div>

        {/* IRT CENTER */}
        <div className="absolute left-[232px] top-[190px]">
          <IRTHub />
        </div>

        {/* RIGHT */}
        <div className="absolute left-[392px] top-[200px]">
          <Node Icon={Users} label="Subject Management" />
        </div>

        {/* BOTTOM */}
        <div className="absolute left-[232px] top-[340px]">
          <Node Icon={Hospital} label="Site Management" />
        </div>

      </div>
    </div>
  );
}