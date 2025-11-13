"use client";

import React from "react";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const Node = ({ Icon, label }: { Icon: any; label: string }) => (
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
        <style>{`
          @keyframes float-diamond {
            0% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.18); }
            100% { opacity: 0.85; transform: scale(1); }
          }
          .flow-diamond { 
            fill: #9b7bff;
            transform-origin: center;
            animation: float-diamond 2.6s ease-in-out infinite; 
          }
          .soft-glow { filter: drop-shadow(0 6px 14px rgba(139,92,246,0.12)); }
        `}</style>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 520 460"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="bizGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CBBAFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            id="line-top"
            d={`M ${cx} ${cy} L ${cx} ${topEndY}`}
            stroke="url(#bizGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none"
            className="soft-glow" filter="url(#glow)"
          />
          <path
            id="line-bottom"
            d={`M ${cx} ${cy} L ${cx} ${bottomEndY}`}
            stroke="url(#bizGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none"
            className="soft-glow" filter="url(#glow)"
          />
          <path
            id="line-left"
            d={`M ${cx} ${cy} L ${leftEndX} ${cy}`}
            stroke="url(#bizGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none"
            className="soft-glow" filter="url(#glow)"
          />
          <path
            id="line-right"
            d={`M ${cx} ${cy} L ${rightEndX} ${cy}`}
            stroke="url(#bizGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none"
            className="soft-glow" filter="url(#glow)"
          />

          <rect className="flow-diamond" width="8" height="8" transform="rotate(45)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#line-top" />
            </animateMotion>
          </rect>
           <rect className="flow-diamond" width="8" height="8" transform="rotate(45)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#line-bottom" />
            </animateMotion>
          </rect>
           <rect className="flow-diamond" width="8" height="8" transform="rotate(45)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#line-left" />
            </animateMotion>
          </rect>
           <rect className="flow-diamond" width="8" height="8" transform="rotate(45)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#line-right" />
            </animateMotion>
          </rect>
        </svg>

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