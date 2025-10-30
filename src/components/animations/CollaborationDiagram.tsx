
"use client";

import React, { useEffect, useRef, useState } from 'react';

// NOTE: This file is a self-contained, static SVG React component.
// Removed external alias imports and framer-motion to avoid build/runtime issues in sandbox.

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
          if (options && options.triggerOnce) observer.disconnect();
        }
        else {
          if (!(options && options.triggerOnce)) setInView(false);
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


// Minimal inline SVG icons used in diagram
function UsersIcon(props: {className?: string}) {
  var className = props && props.className ? props.className : undefined;
  return (
    React.createElement("svg", { viewBox: "0 0 24 24", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true },
      React.createElement("path", { d: "M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z", stroke: "currentColor", strokeWidth: 1.4 }),
      React.createElement("path", { d: "M3 21c0-3.866 3.582-7 9-7s9 3.134 9 7", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" })
    )
  );
}

function PillIcon(props: {className?: string}) {
  var className = props && props.className ? props.className : undefined;
  return (
    React.createElement("svg", { viewBox: "0 0 24 24", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true },
      React.createElement("rect", { x: 3, y: 10, width: 18, height: 6, rx: 3, stroke: "currentColor", strokeWidth: 1.4 }),
      React.createElement("path", { d: "M8 10l8 6", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" })
    )
  );
}

// Exported component — static SVG for pixel-accurate layout
export function CollaborationDiagram() {
  var _a = useInView({ threshold: 0.15, triggerOnce: true }), ref = _a[0];

  // This implementation intentionally avoids framer-motion to prevent build-time issues.
  // If you want animated path-draw, reintroduce framer-motion and use <motion.path>.

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
            React.createElement("feGaussianBlur", { stdDeviation: 6, result: "coloredBlur" }),
            React.createElement("feMerge", null,
              React.createElement("feMergeNode", { in: "coloredBlur" }),
              React.createElement("feMergeNode", { in: "SourceGraphic" })
            )
          ),
          React.createElement("g", { id: "cloud" },
            React.createElement("ellipse", { cx: 0, cy: 0, rx: 44, ry: 30 }),
            React.createElement("ellipse", { cx: 34, cy: -10, rx: 34, ry: 24 }),
            React.createElement("ellipse", { cx: -28, cy: -10, rx: 36, ry: 26 })
          ),
          React.createElement("g", { id: "cylinder" },
            React.createElement("ellipse", { cx: 0, cy: 0, rx: 26, ry: 10, fill: "currentColor" }),
            React.createElement("rect", { x: -26, y: 0, width: 52, height: 56 }),
            React.createElement("ellipse", { cx: 0, cy: 56, rx: 26, ry: 10 })
          )
        ),

        // background
        React.createElement("rect", { x: 0, y: 0, width: 1100, height: 900, fill: "#000" }),

        // Left sources polygon outline
        React.createElement("polygon", { points: "60,450 220,600 420,720 420,420", fill: "none", stroke: "#be185d", strokeWidth: 2, opacity: 0.12 }),

        // Right platforms polygon outline
        React.createElement("polygon", { points: "680,420 780,600 980,720 980,420", fill: "none", stroke: "#4ade80", strokeWidth: 2, opacity: 0.08 }),

        // Center big hexagon (Patients Data)
        React.createElement("g", { transform: "translate(550,320)" },
          React.createElement("path", { d: "M0 -90 L78 -45 L78 45 L0 90 L-78 45 L-78 -45 Z", fill: "url(#centerGrad)", stroke: "#5b21b6", strokeWidth: 2, filter: "url(#softGlow)" }),

          // users icon (simple shapes)
          React.createElement("g", { transform: "translate(-10,-10)", fill: "none", stroke: "#fff", strokeWidth: 1.5 },
            React.createElement("path", { d: "M-8 -24a18 18 0 1 1 16 0", strokeLinecap: "round" }),
            React.createElement("circle", { cx: 10, cy: -12, r: 12, fill: "none" }),
            React.createElement("path", { d: "M-60 36c10-12 40-28 70-28s60 16 70 28", strokeLinecap: "round", opacity: 0.9 })
          ),

          React.createElement("text", { x: 0, y: 40, textAnchor: "middle", fill: "#fff", fontSize: 20, fontWeight: 700 }, "Patients Data")
        ),

        // Connectors from groups to center (static lines)
        React.createElement("path", { d: "M330 220 L472 290", stroke: "url(#lineGrad)", strokeWidth: 2, fill: "none" }),
        React.createElement("path", { d: "M770 220 L628 290", stroke: "url(#lineGrad)", strokeWidth: 2, fill: "none" }),
        React.createElement("path", { d: "M330 460 L472 350", stroke: "url(#lineGrad)", strokeWidth: 2, fill: "none" }),
        React.createElement("path", { d: "M770 460 L628 350", stroke: "url(#lineGrad)", strokeWidth: 2, fill: "none" }),

        // Arrow to result
        React.createElement("path", { d: "M550 410 L550 620", stroke: "url(#lineGrad)", strokeWidth: 3, fill: "none" }),
        React.createElement("polygon", { points: "544,620 556,620 550,632", fill: "#fff", opacity: 0.9 }),

        // Bottom result box
        React.createElement("g", { transform: "translate(550,700)" },
          React.createElement("rect", { x: -110, y: -40, width: 220, height: 80, rx: 10, fill: "#0b5394" }),
          React.createElement("g", { transform: "translate(-70,-10)" },
            React.createElement("svg", { viewBox: "0 0 24 24", width: 28, height: 28, "aria-hidden": true },
              React.createElement("rect", { x: 3, y: 10, width: 18, height: 6, rx: 3, stroke: "#c7f9ff", strokeWidth: 1.4, fill: "none" }),
              React.createElement("path", { d: "M8 10l8 6", stroke: "#c7f9ff", strokeWidth: 1.4, strokeLinecap: "round" })
            )
          ),
          React.createElement("text", { x: 0, y: 6, textAnchor: "middle", fill: "#dbeafe", fontSize: 12, fontWeight: 600 }, "Analytical outcomes leading to predictive, preventive, and personalized medicine")
        ),

        // Main group hexagons: Partners, Processes, Sources, Platforms
        React.createElement("g", { transform: "translate(330,200)" },
          React.createElement("path", { d: "M0 -32 L28 -16 L28 16 L0 32 L-28 16 L-28 -16 Z", fill: "#f97316", stroke: "#c2410c", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 6, textAnchor: "middle", fill: "#fff", fontSize: 12 }, "Partners")
        ),
        React.createElement("g", { transform: "translate(770,200)" },
          React.createElement("path", { d: "M0 -32 L28 -16 L28 16 L0 32 L-28 16 L-28 -16 Z", fill: "#0ea5e9", stroke: "#0369a1", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 6, textAnchor: "middle", fill: "#fff", fontSize: 12 }, "Processes")
        ),
        React.createElement("g", { transform: "translate(330,440)" },
          React.createElement("path", { d: "M0 -32 L28 -16 L28 16 L0 32 L-28 16 L-28 -16 Z", fill: "#d946ef", stroke: "#7e22ce", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 6, textAnchor: "middle", fill: "#fff", fontSize: 12 }, "Sources")
        ),
        React.createElement("g", { transform: "translate(770,440)" },
          React.createElement("path", { d: "M0 -32 L28 -16 L28 16 L0 32 L-28 16 L-28 -16 Z", fill: "#86efac", stroke: "#4ade80", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 6, textAnchor: "middle", fill: "#064e3b", fontSize: 12 }, "Platforms")
        ),

        // Partners cluster hexes (top-left)
        React.createElement("g", { transform: "translate(180,80)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#fbcfe8", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Labs")
        ),
        React.createElement("g", { transform: "translate(260,80)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#f3e8ff", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Labeling")
        ),
        React.createElement("g", { transform: "translate(340,80)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#fbcfe8", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Warehouse")
        ),

        // Row 2
        React.createElement("g", { transform: "translate(220,150)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#e9d5ff", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "CRO")
        ),
        React.createElement("g", { transform: "translate(300,150)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#fbcfe8", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Retention")
        ),

        // Row 3
        React.createElement("g", { transform: "translate(180,220)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#fbcfe8", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Sponsor")
        ),
        React.createElement("g", { transform: "translate(260,220)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#e9d5ff", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Statistician")
        ),
        React.createElement("g", { transform: "translate(340,220)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#fbcfe8", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Investigators")
        ),

        // Processes cluster
        React.createElement("g", { transform: "translate(860,80)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#f3e8ff", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Randomization")
        ),
        React.createElement("g", { transform: "translate(780,80)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#fbcfe8", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Sites Mgmt.")
        ),
        React.createElement("g", { transform: "translate(700,80)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#f3e8ff", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Supplies Mgmt.")
        ),

        React.createElement("g", { transform: "translate(760,150)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#f3e8ff", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Research Platform")
        ),
        React.createElement("g", { transform: "translate(820,150)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#fbcfe8", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Pharmacovigilance")
        ),
        React.createElement("g", { transform: "translate(700,220)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#f3e8ff", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Subjects Mgmt.")
        ),
        React.createElement("g", { transform: "translate(820,220)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#fbcfe8", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "Medical Coding")
        ),
        React.createElement("g", { transform: "translate(620,150)" },
          React.createElement("path", { d: "M0 -20 L18 -10 L18 10 L0 20 L-18 10 L-18 -10 Z", fill: "#f3e8ff", stroke: "#7c3aed", strokeWidth: 1 }),
          React.createElement("text", { x: 0, y: 4, textAnchor: "middle", fontSize: 9, fill: "#0b0b0b" }, "ePRO eTMF")
        ),

        // Sources cluster cylinders and icons
        React.createElement("g", { transform: "translate(120,520)" },
          React.createElement("g", { transform: "translate(0,-60)", fill: "#ec4899", opacity: 0.95 },
            React.createElement("ellipse", { cx: 0, cy: 0, rx: 28, ry: 10 }),
            React.createElement("rect", { x: -28, y: 0, width: 56, height: 44 }),
            React.createElement("ellipse", { cx: 0, cy: 44, rx: 28, ry: 10 })
          ),
          React.createElement("text", { x: 0, y: 60, textAnchor: "middle", fill: "#fff", fontSize: 11 }, "Real World Evidence")
        ),

        React.createElement("g", { transform: "translate(120,620)" },
          React.createElement("g", { transform: "translate(0,-60)", fill: "#ec4899", opacity: 0.95 },
            React.createElement("ellipse", { cx: 0, cy: 0, rx: 28, ry: 10 }),
            React.createElement("rect", { x: -28, y: 0, width: 56, height: 44 }),
            React.createElement("ellipse", { cx: 0, cy: 44, rx: 28, ry: 10 })
          ),
          React.createElement("text", { x: 0, y: 60, textAnchor: "middle", fill: "#fff", fontSize: 11 }, "Trial Directories")
        ),

        React.createElement("g", { transform: "translate(240,740)" },
          React.createElement("g", { transform: "translate(0,-60)", fill: "#ec4899", opacity: 0.95 },
            React.createElement("ellipse", { cx: 0, cy: 0, rx: 28, ry: 10 }),
            React.createElement("rect", { x: -28, y: 0, width: 56, height: 44 }),
            React.createElement("ellipse", { cx: 0, cy: 44, rx: 28, ry: 10 })
          ),
          React.createElement("text", { x: 0, y: 60, textAnchor: "middle", fill: "#fff", fontSize: 11 }, "EHR/ EMR/ PMR")
        ),

        React.createElement("g", { transform: "translate(360,740)" },
          React.createElement("g", { transform: "translate(0,-60)", fill: "#ec4899", opacity: 0.95 },
            React.createElement("ellipse", { cx: 0, cy: 0, rx: 28, ry: 10 }),
            React.createElement("rect", { x: -28, y: 0, width: 56, height: 44 }),
            React.createElement("ellipse", { cx: 0, cy: 44, rx: 28, ry: 10 })
          ),
          React.createElement("text", { x: 0, y: 60, textAnchor: "middle", fill: "#fff", fontSize: 11 }, "Public Domain Data")
        ),

        React.createElement("g", { transform: "translate(360,660)" },
          React.createElement("g", { transform: "translate(0,-60)", fill: "#ec4899", opacity: 0.95 },
            React.createElement("ellipse", { cx: 0, cy: 0, rx: 28, ry: 10 }),
            React.createElement("rect", { x: -28, y: 0, width: 56, height: 44 }),
            React.createElement("ellipse", { cx: 0, cy: 44, rx: 28, ry: 10 })
          ),
          React.createElement("text", { x: 0, y: 60, textAnchor: "middle", fill: "#fff", fontSize: 11 }, "Data Repositories / Data Lakes")
        ),

        React.createElement("g", { transform: "translate(280,600)" },
          React.createElement("g", { transform: "translate(0,-60)", fill: "#ec4899", opacity: 0.95 },
            React.createElement("ellipse", { cx: 0, cy: 0, rx: 28, ry: 10 }),
            React.createElement("rect", { x: -28, y: 0, width: 56, height: 44 }),
            React.createElement("ellipse", { cx: 0, cy: 44, rx: 28, ry: 10 })
          ),
          React.createElement("text", { x: 0, y: 60, textAnchor: "middle", fill: "#fff", fontSize: 11 }, "Clinical Trials Data")
        ),

        // Platforms cluster clouds
        React.createElement("g", { transform: "translate(760,520)" },
          React.createElement("g", { transform: "translate(-120,-20) scale(1)" },
            React.createElement("g", { transform: "translate(0,0)", fill: "#c7f9ff", stroke: "#0369a1", strokeWidth: 0.8 },
              React.createElement("use", { href: "#cloud" })
            ),
            React.createElement("text", { x: -80, y: 10, fontSize: 11, fill: "#052e3d" }, "SAP BTP")
          ),

          React.createElement("g", { transform: "translate(-40,30) scale(0.95)" },
            React.createElement("g", { transform: "translate(0,0)", fill: "#c7f9ff", stroke: "#0369a1", strokeWidth: 0.8 },
              React.createElement("use", { href: "#cloud" })
            ),
            React.createElement("text", { x: 0, y: 10, fontSize: 11, fill: "#052e3d" }, "SyMetric CTP on Azure")
          ),

          React.createElement("g", { transform: "translate(80,0) scale(0.95)" },
            React.createElement("g", { transform: "translate(0,0)", fill: "#c7f9ff", stroke: "#0369a1", strokeWidth: 0.8 },
              React.createElement("use", { href: "#cloud" })
            ),
            React.createElement("text", { x: 0, y: 10, fontSize: 11, fill: "#052e3d" }, "Customer Landscape")
          ),

          React.createElement("g", { transform: "translate(20,70) scale(0.95)" },
            React.createElement("g", { transform: "translate(0,0)", fill: "#c7f9ff", stroke: "#0369a1", strokeWidth: 0.8 },
              React.createElement("use", { href: "#cloud" })
            ),
            React.createElement("text", { x: 0, y: 10, fontSize: 11, fill: "#052e3d" }, "SyMetric Trial Analytics on SAP CP")
          )
        ),

        // Small connectors from central to group hexes (short lines)
        React.createElement("path", { d: "M472 320 L422 275", stroke: "#777", strokeWidth: 1.2, opacity: 0.9 }),
        React.createElement("path", { d: "M628 320 L678 275", stroke: "#777", strokeWidth: 1.2, opacity: 0.9 }),
        React.createElement("path", { d: "M472 320 L422 365", stroke: "#777", strokeWidth: 1.2, opacity: 0.9 }),
        React.createElement("path", { d: "M628 320 L678 365", stroke: "#777", strokeWidth: 1.2, opacity: 0.9 })

      )
    )
  );
}

    