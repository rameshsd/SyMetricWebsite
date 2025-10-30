
"use client";

import React, { useEffect, useRef, useState } from 'react';

// NOTE: This file is a self-contained, static SVG React component.
// It has been rebuilt to be a pixel-perfect representation of the provided image.
// Framer-motion has been removed to avoid runtime issues and focus on visual accuracy.

// Small helper to join classnames (local fallback)
function cn(...parts: (string | boolean | null | undefined)[]) {
  return parts.filter(Boolean).join(' ');
}

// Lightweight useInView hook (no types) — optional: can be used to add reveal classes
function useInView(options?: { threshold?: number, triggerOnce?: boolean }) {
  var ref = useRef(null);
  var [_a, setInView] = useState(false);
  var inView = _a;

  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setInView(true);
          if (options && options.triggerOnce) {
            observer.disconnect();
          }
        }
        else {
          if (!(options && options.triggerOnce)) {
            setInView(false);
          }
        }
      });
    }, { threshold: (options && options.threshold) || 0.2 });
    if (el) {
        observer.observe(el);
    }
    return function () { 
        if (el) {
            observer.unobserve(el); 
        }
    };
  }, [ref, options]);

  return [ref, inView];
}

// Exported component — static SVG for pixel-accurate layout
export function CollaborationDiagram() {
  var _a = useInView({ threshold: 0.15, triggerOnce: true }), ref = _a[0];

  return (
    React.createElement("div", { ref: ref, className: "w-full h-full" },
      React.createElement("svg", { viewBox: "0 0 1100 900", preserveAspectRatio: "xMidYMid meet", className: "w-full h-auto" },
        React.createElement("defs", null,
          React.createElement("linearGradient", { id: "lineGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
            React.createElement("stop", { offset: "0%", stopColor: "#a855f7", stopOpacity: "0.7" }),
            React.createElement("stop", { offset: "100%", stopColor: "#3b82f6", stopOpacity: "0.9" })
          ),
          React.createElement("linearGradient", { id: "centerGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            React.createElement("stop", { offset: "0%", stopColor: "#7c3aed" }),
            React.createElement("stop", { offset: "100%", stopColor: "#6d28d9" })
          ),
          React.createElement("filter", { id: "softGlow", x: "-50%", y: "-50%", width: "200%", height: "200%" },
            React.createElement("feGaussianBlur", { stdDeviation: 8, result: "coloredBlur" }),
            React.createElement("feMerge", null,
              React.createElement("feMergeNode", { in: "coloredBlur" }),
              React.createElement("feMergeNode", { in: "SourceGraphic" })
            )
          ),
          React.createElement("g", { id: "cloud" },
             React.createElement("path", { d: "M 52.8 3.8 C 65.4 -3.1 81.3 0.1 88.2 12.7 C 95.1 25.3 88 41.2 75.3 48.1 C 75.3 48.1 75.3 48.1 75.3 48.1 C 75.3 48.1 75.3 48.1 75.3 48.1 C 71.5 50.2 67.2 51.2 62.8 51.2 C 59.9 51.2 57 50.7 54.3 49.8 C 53.6 55.4 48.8 59.9 43 59.9 L 21.6 59.9 C 14.5 59.9 8.8 54.2 8.8 47.1 C 8.8 40.8 13.5 35.5 19.5 34.6 C 16.5 32 14.4 28.5 14.4 24.5 C 14.4 18 19.4 12.9 25.9 12.9 C 26.6 12.9 27.4 13 28.1 13.1 C 32 -0.3 46.2 0.8 52.8 3.8 Z", fill: "currentColor" })
          ),
          // Correct Cylinder Icon
          React.createElement("g", { id: "cylinderIcon" },
            React.createElement("ellipse", { cx: "30", cy: "10", rx: "18", ry: "5", fill: "currentColor", opacity: "0.6" }),
            React.createElement("rect", { x: "12", y: "10", width: "36", height: "40", fill: "currentColor", opacity: "0.6" }),
            React.createElement("ellipse", { cx: "30", cy: "50", rx: "18", ry: "5", fill: "currentColor", opacity: "0.6" }),
            React.createElement("ellipse", { cx: "30", cy: "10", rx: "18", ry: "5", fill: "none", stroke: "#fff", strokeWidth: "1" }),
            React.createElement("path", { d: "M12 10 V50 M48 10 V50", stroke: "#fff", strokeWidth: "1", fill: "none" })
          ),
          // Correct Patients Data Icon
          React.createElement("g", { id: "patientsIcon" },
            React.createElement("path", { d: "M25,12 A5,5 0 1,1 15,12 A5,5 0 0,1 25,12 M10,28 C10,21 30,21 30,28", stroke: "white", strokeWidth: "1.5", fill: "none", "stroke-dasharray": "2 2" }),
            React.createElement("path", { d: "M48,22 A7,7 0 1,1 34,22 A7,7 0 0,1 48,22 M27,42 C27,32 55,32 55,42", stroke: "white", strokeWidth: "2", fill: "none", "stroke-dasharray": "3 3" }),
            React.createElement("path", { d: "M-8,22 A7,7 0 1,1 -22,22 A7,7 0 0,1 -8,22 M-29,42 C-29,32 -1,32 -1,42", stroke: "white", strokeWidth: "2", fill: "none", "stroke-dasharray": "3 3" })
          ),
          // Correct Result Icon
          React.createElement("g", { id: "resultIcon" },
            React.createElement("path", { d: "M15.5,1.9 C8.4,2.4 2.4,8.4 1.9,15.5 C1.3,23.3 6.7,30 14,30 L14,16 L30,16 C30,8.8 23.2,2 16,2 L15.5,1.9 Z", stroke:"#fff", strokeWidth: "1.5", fill:"none" }),
             React.createElement("path", { d: "M17,14 L17,2 C9.8,2 4,7.8 4,15 C4,22.2 9.8,28 17,28 L23,28", stroke:"#fff", strokeWidth: "1.5", fill:"none", transform: "translate(2,3)" })
          )
        ),
        
        // Background
        React.createElement("rect", { x: 0, y: 0, width: 1100, height: 900, fill: "black" }),

        // -- Corrected Layout & Connections --

        // Center Hexagon (Patients Data)
        React.createElement("g", { transform: "translate(550, 450)" },
          React.createElement("path", { d: "M0 -120 L104 -60 L104 60 L0 120 L-104 60 L-104 -60 Z", fill: "url(#centerGrad)", stroke: "#a855f7", strokeWidth: 2, filter: "url(#softGlow)" }),
          React.createElement("use", { href: "#patientsIcon", transform: "translate(0 -30) scale(1.2)" }),
          React.createElement("text", { x: 0, y: 50, textAnchor: "middle", fill: "white", fontSize: 24, fontWeight: 600 }, "Patients Data")
        ),
        
        // Partners
        React.createElement("g", { transform: "translate(340, 310)" },
            React.createElement("path", { d: "M0 -40 L34.6 -20 L34.6 20 L0 40 L-34.6 20 L-34.6 -20 Z", fill: "#f97316" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fill: "#fff", fontSize: 16 }, "Partners")
        ),
        
        // Processes
        React.createElement("g", { transform: "translate(760, 310)" },
            React.createElement("path", { d: "M0 -40 L34.6 -20 L34.6 20 L0 40 L-34.6 20 L-34.6 -20 Z", fill: "#0ea5e9" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fill: "#fff", fontSize: 16 }, "Processes")
        ),

        // Sources
        React.createElement("g", { transform: "translate(340, 590)" },
            React.createElement("path", { d: "M0 -40 L34.6 -20 L34.6 20 L0 40 L-34.6 20 L-34.6 -20 Z", fill: "#d946ef" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fill: "#fff", fontSize: 16 }, "Sources")
        ),
        
        // Platforms
        React.createElement("g", { transform: "translate(760, 590)" },
            React.createElement("path", { d: "M0 -40 L34.6 -20 L34.6 20 L0 40 L-34.6 20 L-34.6 -20 Z", fill: "#84cc16" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fill: "#1a2e05", fontSize: 16, fontWeight: 600 }, "Platforms")
        ),

        // Lines connecting main hexes to center
        React.createElement("path", { d: "M410 330 L460 390", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 }),
        React.createElement("path", { d: "M690 330 L640 390", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 }),
        React.createElement("path", { d: "M410 570 L460 510", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 }),
        React.createElement("path", { d: "M690 570 L640 510", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 }),

        // Arrow to result
        React.createElement("path", { d: "M550 570 L550 720", stroke: "url(#lineGrad)", strokeWidth: 3, fill: "none" }),
        React.createElement("polygon", { points: "544,720 556,720 550,732", fill: "#fff", opacity: 0.9 }),
        
        // Bottom result box
        React.createElement("g", { transform: "translate(550,780)" },
          React.createElement("rect", { x: -160, y: -45, width: 320, height: 90, rx: 10, fill: "#0b5394" }),
          React.createElement("use", { href: "#resultIcon", transform: "translate(-120 0)" }),
          React.createElement("text", { x: 5, y: 0, textAnchor: "middle", fill: "#dbeafe", fontSize: 13, fontWeight: 600 }, 
            React.createElement("tspan", { x: 5, dy: "-0.5em" }, "Analytical outcomes"),
            React.createElement("tspan", { x: 5, dy: "1.2em" }, "leading to predictive,"),
            React.createElement("tspan", { x: 5, dy: "1.2em" }, "preventive, and"),
            React.createElement("tspan", { x: 5, dy: "1.2em" }, "personalized medicine")
          )
        ),
        
        // --- Top-Left Cluster (Partners) ---
        React.createElement("g", { transform: "translate(340, 160)" },
          React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
          React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 12, fill: "#0b0b0b" }, "Retention"),
          React.createElement("path", { d: "M0,25 L0,70", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(240, 100)" },
          React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
          React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 12, fill: "#0b0b0b" }, "CRO"),
          React.createElement("path", { d: "M18.8,12.5 L81.2,57.5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(440, 100)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#fbcfe8" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 12, fill: "#0b0b0b" }, "Labeling"),
            React.createElement("path", { d: "-18.8,12.5 L-81.2,57.5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(140, 160)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#fbcfe8" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 12, fill: "#0b0b0b" }, "Sponsor"),
            React.createElement("path", { d: "M21.6,0 L140,0", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
         React.createElement("g", { transform: "translate(240, 220)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 12, fill: "#0b0b0b" }, "Statistician"),
            React.createElement("path", { d: "M18.8,-12.5 L81.2,-57.5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(440, 220)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#fbcfe8" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 12, fill: "#0b0b0b" }, "Investigators"),
            React.createElement("path", { d: "-18.8,-12.5 L-81.2,-57.5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(340, 40)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 12, fill: "#0b0b0b" }, "Warehouse"),
            React.createElement("path", { d: "M0,25 L0,70", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
         React.createElement("g", { transform: "translate(540, 160)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#fbcfe8" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 12, fill: "#0b0b0b" }, "Labs"),
             React.createElement("path", { d: "-21.6,0 L-140,0", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),


        // --- Top-Right Cluster (Processes) ---
        React.createElement("g", { transform: "translate(760, 160)" },
          React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
          React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Pharmacovigilance"),
          React.createElement("path", { d: "M0,25 L0,70", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(660, 100)" },
          React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
          React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Research Platform"),
          React.createElement("path", { d: "M18.8,12.5 L81.2,57.5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(860, 100)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#fbcfe8" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Randomization"),
            React.createElement("path", { d: "-18.8,12.5 L-81.2,57.5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(960, 160)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
            React.createElement("text", { x: 0, y: 0, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "ePRO"),
             React.createElement("text", { x: 0, y: 12, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "eTMF"),
            React.createElement("path", { d: "-21.6,0 L-140,0", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
         React.createElement("g", { transform: "translate(660, 220)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Pharmacovigilance"),
            React.createElement("path", { d: "M18.8,-12.5 L81.2,-57.5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(860, 220)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#fbcfe8" }),
            React.createElement("text", { x: 0, y: 0, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Trial"),
            React.createElement("text", { x: 0, y: 12, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Mgmt"),
            React.createElement("path", { d: "-18.8,-12.5 L-81.2,-57.5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(760, 40)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#fbcfe8" }),
            React.createElement("text", { x: 0, y: 0, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Sites"),
             React.createElement("text", { x: 0, y: 12, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Mgmt."),
            React.createElement("path", { d: "M0,25 L0,70", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(960, 40)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
            React.createElement("text", { x: 0, y: 0, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Supplies"),
            React.createElement("text", { x: 0, y: 12, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Mgmt."),
            React.createElement("path", { d: "-18.8,12.5 L-181.2,117.5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(760, 400)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#fbcfe8" }),
            React.createElement("text", { x: 0, y: 0, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Subjects"),
            React.createElement("text", { x: 0, y: 12, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Mgmt."),
            React.createElement("path", { d: "M0,-25 L0,-70", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(960, 280)" },
            React.createElement("path", { d: "M0 -25 L21.6 -12.5 L21.6 12.5 L0 25 L-21.6 12.5 L-21.6 -12.5 Z", fill: "#f3e8ff" }),
            React.createElement("text", { x: 0, y: 5, textAnchor: "middle", fontSize: 11, fill: "#0b0b0b" }, "Medical Coding"),
            React.createElement("path", { d: "-21.6,0 L-140,0", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),

        // --- Bottom-Left Cluster (Sources) ---
        React.createElement("path", { d: "M 100 680 A 250 250 0 0 1 340 440", stroke: "#d946ef", strokeWidth: 1.5, fill: "none", opacity: 0.7}),
        React.createElement("g", { transform: "translate(100, 500)" },
            React.createElement("use", { href: "#cylinderIcon", fill: "#ec4899" }),
            React.createElement("text", { x:30, y:80, textAnchor:"middle", fill:"#fff", fontSize:12 }, "Clinical Trials Data"),
            React.createElement("path", { d: "M60,25 L180,30", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
         React.createElement("g", { transform: "translate(20, 600)" },
            React.createElement("use", { href: "#cylinderIcon", fill: "#ec4899" }),
            React.createElement("g", { transform: "translate(30, 25)"},
                React.createElement("circle", { cx:0, cy:0, r:12, stroke:"#fff", strokeWidth:1.5, fill:"none"}),
                React.createElement("path", { d:"M-12 0 H12 M0 -12 V12 M-8 -8L8 8 M-8 8L8 -8", stroke:"#fff", strokeWidth:1, opacity:0.8})
            ),
            React.createElement("text", { x:30, y:80, textAnchor:"middle", fill:"#fff", fontSize:12 }, "Real World Evidence"),
             React.createElement("path", { d: "M60,25 L260,-5", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(100, 700)" },
            React.createElement("use", { href: "#cylinderIcon", fill: "#ec4899" }),
            React.createElement("path", { d: "M20 20 H40 M30 15 V35", stroke:"#fff", strokeWidth:2, fill:"none", transform:"translate(0, 5)"}),
            React.createElement("text", { x:30, y:80, textAnchor:"middle", fill:"#fff", fontSize:12 }, "Trial Directories"),
             React.createElement("path", { d: "M60,25 L180,-70", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(240, 750)" },
            React.createElement("use", { href: "#cylinderIcon", fill: "#ec4899" }),
            React.createElement("path", { d: "M20 20 H40 M30 15 V35", stroke:"#fff", strokeWidth:2, fill:"none", transform:"translate(0, 5)"}),
            React.createElement("text", { x:30, y:80, textAnchor:"middle", fill:"#fff", fontSize:12 }, "EHR/EMR/PMR"),
             React.createElement("path", { d: "M30,-5 L30,-140", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(380, 700)" },
            React.createElement("use", { href: "#cylinderIcon", fill: "#ec4899" }),
            React.createElement("path", { d: "M20 20 H40 M30 15 V35", stroke:"#fff", strokeWidth:2, fill:"none", transform:"translate(0, 5)"}),
            React.createElement("text", { x:30, y:80, textAnchor:"middle", fill:"#fff", fontSize:12 }, "Public Domain Data"),
             React.createElement("path", { d: "M0,25 L-10,-70", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(220, 650)" },
            React.createElement("text", { x:0, y:0, textAnchor:"middle", fill:"#fff", fontSize:12 }, "In Collaboration"),
            React.createElement("text", { x:0, y:15, textAnchor:"middle", fill:"#fff", fontSize:12 }, "With Partners"),
            React.createElement("text", { x:0, y:30, textAnchor:"middle", fill:"#fff", fontSize:12 }, "Data Repositories/"),
            React.createElement("text", { x:0, y:45, textAnchor:"middle", fill:"#fff", fontSize:12 }, "Data Lakes"),
             React.createElement("path", { d: "M0,-15 L120,-45", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),


        // --- Bottom-Right Cluster (Platforms) ---
        React.createElement("path", { d: "M 660 740 A 250 250 0 0 1 950 510", stroke: "#84cc16", strokeWidth: 1.5, fill: "none", opacity: 0.7}),
        React.createElement("g", { transform: "translate(680, 700)" },
            React.createElement("use", { href: "#cloud", fill: "#c7d2fe"}),
            React.createElement("text", { x:0, y:5, textAnchor:"middle", fill:"#1e1b4b", fontSize:12, fontWeight: 500 }, "Customer"),
            React.createElement("text", { x:0, y:20, textAnchor:"middle", fill:"#1e1b4b", fontSize:12, fontWeight: 500 }, "Landscape"),
            React.createElement("path", { d: "M0,-30 L-80,-90", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(880, 720)" },
            React.createElement("use", { href: "#cloud", fill: "#c7d2fe"}),
            React.createElement("text", { x:0, y:0, textAnchor:"middle", fill:"#1e1b4b", fontSize:12, fontWeight: 500 }, "SyMetric Trial"),
            React.createElement("text", { x:0, y:15, textAnchor:"middle", fill:"#1e1b4b", fontSize:12, fontWeight: 500 }, "Analytics on"),
            React.createElement("text", { x:0, y:30, textAnchor:"middle", fill:"#1e1b4b", fontSize:12, fontWeight: 500 }, "SAP CP"),
             React.createElement("path", { d: "M-40,-20 L-180,-110", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(680, 480)" },
            React.createElement("use", { href: "#cloud", fill: "#c7d2fe"}),
            React.createElement("text", { x:0, y:5, textAnchor:"middle", fill:"#1e1b4b", fontSize:12, fontWeight: 500 }, "SAP BTP"),
             React.createElement("path", { d: "M0,30 L-80,90", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        ),
        React.createElement("g", { transform: "translate(880, 500)" },
            React.createElement("use", { href: "#cloud", fill: "#c7d2fe"}),
            React.createElement("text", { x:0, y:0, textAnchor:"middle", fill:"#1e1b4b", fontSize:12, fontWeight: 500 }, "SyMetric CTP"),
            React.createElement("text", { x:0, y:15, textAnchor:"middle", fill:"#1e1b4b", fontSize:12, fontWeight: 500 }, "on Azure"),
            React.createElement("path", { d: "-40,20 L-180,-10", stroke: "#ccc", strokeWidth: 1.5, opacity: 0.7 })
        )

      )
    )
  );
}
