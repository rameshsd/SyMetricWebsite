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
  const cx = 260; 
  const cy = 230; 

  // Corrected perfect geometry
  const topEnd =    { x: 260, y: 130 };
  const bottomEnd = { x: 260, y: 330 };
  const leftEnd =   { x: 140, y: 230 };
  const rightEnd =  { x: 380, y: 230 };

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
            <path id="flow-top"    d={`M ${cx} ${cy - 40} L ${topEnd.x} ${topEnd.y}`} />
            <path id="flow-bottom" d={`M ${cx} ${cy + 40} L ${bottomEnd.x} ${bottomEnd.y}`} />
            <path id="flow-left"   d={`M ${cx - 40} ${cy} L ${leftEnd.x} ${leftEnd.y}`} />
            <path id="flow-right"  d={`M ${cx + 40} ${cy} L ${rightEnd.x} ${rightEnd.y}`} />


            {/* Glow */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* TOP ARROW */}
          <line
            x1={cx} y1={cy - 40}
            x2={topEnd.x} y2={topEnd.y}
            stroke="#1E40AF" strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle r="5" fill="#1E40AF" filter="url(#glow)">
            <animateMotion dur="2.3s" repeatCount="indefinite">
              <mpath href="#flow-top" />
            </animateMotion>
          </circle>

          {/* BOTTOM ARROW */}
          <line
            x1={cx} y1={cy + 40}
            x2={bottomEnd.x} y2={bottomEnd.y}
            stroke="#1E40AF" strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle r="5" fill="#1E40AF" filter="url(#glow)">
            <animateMotion dur="2.3s" repeatCount="indefinite" begin="0.2s">
              <mpath href="#flow-bottom" />
            </animateMotion>
          </circle>

          {/* LEFT ARROW */}
          <line
            x1={cx - 40} y1={cy}
            x2={leftEnd.x} y2={leftEnd.y}
            stroke="#1E40AF" strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle r="5" fill="#1E40AF" filter="url(#glow)">
            <animateMotion dur="2.3s" repeatCount="indefinite" begin="0.4s">
              <mpath href="#flow-left" />
            </animateMotion>
          </circle>

          {/* RIGHT ARROW */}
          <line
            x1={cx + 40} y1={cy}
            x2={rightEnd.x} y2={rightEnd.y}
            stroke="#1E40AF" strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle r="5" fill="#1E40AF" filter="url(#glow)">
            <animateMotion dur="2.3s" repeatCount="indefinite" begin="0.6s">
              <mpath href="#flow-right" />
            </animateMotion>
          </circle>

        </svg>

        {/* ==========================
            PERFECT NODE ALIGNMENT
        ============================ */}
        
        {/* TOP */}
        <div className="absolute left-[220px] top-[60px]">
          <Node Icon={Shuffle} label="Randomization" />
        </div>

        {/* LEFT */}
        <div className="absolute left-[60px] top-[200px]">
          <Node Icon={Beaker} label="Clinical Supplies" />
        </div>

        {/* IRT CENTER */}
        <div className="absolute left-[220px] top-[190px]">
          <IRTHub />
        </div>

        {/* RIGHT */}
        <div className="absolute left-[380px] top-[200px]">
          <Node Icon={Users} label="Subject Management" />
        </div>

        {/* BOTTOM */}
        <div className="absolute left-[220px] top-[340px]">
          <Node Icon={Hospital} label="Site Management" />
        </div>

      </div>
    </div>
  );
}