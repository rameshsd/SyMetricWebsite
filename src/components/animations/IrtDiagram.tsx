"use client";

import React from "react";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string; }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="h-16 w-16 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shadow-sm">
      <Icon className="h-7 w-7" />
    </div>
    <span className="text-sm font-medium text-slate-700">{label}</span>
  </div>
);

const IRT = () => (
  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-600 text-lg font-bold text-blue-600 bg-white shadow-md">
    IRT
  </div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-10 bg-slate-50 overflow-visible">
      <div className="relative w-[520px] h-[460px] bg-white rounded-2xl shadow-xl overflow-visible p-4">

        {/* BUSINESS-AI CURVED LINES */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[50]"
          viewBox="0 0 520 460"
        >
          <defs>
            <linearGradient id="bizLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C3B5FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* TOP CURVED */}
          <path
            d="
              M 260 230
              L 260 175
              C 260 155, 260 145, 260 130
            "
            stroke="url(#bizLine)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* LEFT CURVED */}
          <path
            d="
              M 260 230
              L 200 230
              C 175 230, 160 230, 140 230
            "
            stroke="url(#bizLine)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* RIGHT CURVED */}
          <path
            d="
              M 260 230
              L 320 230
              C 345 230, 360 230, 380 230
            "
            stroke="url(#bizLine)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* BOTTOM CURVED */}
          <path
            d="
              M 260 230
              L 260 285
              C 260 305, 260 320, 260 340
            "
            stroke="url(#bizLine)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* CENTER NODE */}
        <div className="absolute top-[210px] left-[240px]">
          <IRT />
        </div>

        {/* TOP NODE */}
        <div className="absolute top-[60px] left-[220px]">
          <Node icon={Shuffle} label="Randomization" />
        </div>

        {/* LEFT NODE */}
        <div className="absolute top-[200px] left-[60px]">
          <Node icon={Beaker} label="Clinical Supplies" />
        </div>

        {/* RIGHT NODE */}
        <div className="absolute top-[200px] left-[380px]">
          <Node icon={Users} label="Subject Management" />
        </div>

        {/* BOTTOM NODE */}
        <div className="absolute top-[340px] left-[220px]">
          <Node icon={Hospital} label="Site Management" />
        </div>
      </div>
    </div>
  );
}