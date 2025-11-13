
"use client";

import React from "react";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string; }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow">
      <Icon className="h-7 w-7" />
    </div>
    <p className="text-sm font-medium text-slate-700">{label}</p>
  </div>
);

const IRTHub = () => (
  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-600 bg-white
                  text-blue-600 text-lg font-bold shadow-lg">
    IRT
  </div>
);

export function IrtDiagram() {
  return (
    <div className="w-full flex justify-center py-10 bg-transparent">

      <div className="relative w-[520px] h-[460px] bg-white rounded-3xl shadow-xl overflow-visible">

        {/* ======================
            BUSINESS-AI LINES
        ======================= */}
        <svg className="absolute inset-0 w-full h-full z-30 pointer-events-none" viewBox="0 0 520 460">

          <defs>
            {/* glowing purple gradient */}
            <linearGradient id="bizLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C2B3FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            {/* line glow */}
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feBlend in="SourceGraphic" in2="blur" mode="normal" />
            </filter>
          </defs>

          {/* TOP CURVE */}
          <path
            id="line-top"
            d="M260 230 L260 170 Q260 150 260 130"
            stroke="url(#bizLine)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter="url(#softGlow)"
          />

          {/* BOTTOM CURVE */}
          <path
            id="line-bottom"
            d="M260 230 L260 290 Q260 310 260 340"
            stroke="url(#bizLine)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter="url(#softGlow)"
          />

          {/* LEFT CURVE */}
          <path
            id="line-left"
            d="M260 230 L200 230 Q170 230 140 230"
            stroke="url(#bizLine)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter="url(#softGlow)"
          />

          {/* RIGHT CURVE */}
          <path
            id="line-right"
            d="M260 230 L320 230 Q350 230 380 230"
            stroke="url(#bizLine)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter="url(#softGlow)"
          />

          {/* FLOATING DIAMONDS */}
          {["line-top", "line-bottom", "line-left", "line-right"].map((id, i) => (
            <rect
              key={i}
              width="10"
              height="10"
              transform="rotate(45)"
              fill="#8B5CF6"
              opacity="0.8"
            >
              <animateMotion dur="3.2s" repeatCount="indefinite">
                <mpath href={`#${id}`} />
              </animateMotion>
            </rect>
          ))}
        </svg>

        {/* ======================
            ABSOLUTE NODE LAYOUT
        ======================= */}

        {/* CENTER */}
        <div className="absolute top-[210px] left-[240px] z-[40]">
          <IRTHub />
        </div>

        {/* TOP */}
        <div className="absolute top-[60px] left-[220px] z-[40]">
          <Node icon={Shuffle} label="Randomization" />
        </div>

        {/* LEFT */}
        <div className="absolute top-[200px] left-[60px] z-[40]">
          <Node icon={Beaker} label="Clinical Supplies" />
        </div>

        {/* RIGHT */}
        <div className="absolute top-[200px] left-[380px] z-[40]">
          <Node icon={Users} label="Subject Management" />
        </div>

        {/* BOTTOM */}
        <div className="absolute top-[340px] left-[220px] z-[40]">
          <Node icon={Hospital} label="Site Management" />
        </div>

      </div>
    </div>
  );
}
