
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, GanttChartSquare, Server, GraduationCap, LifeBuoy } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  { icon: Database, label: "Data Management" },
  { icon: GanttChartSquare, label: "Project Management" },
  { icon: Server, label: "Data Migration" },
  { icon: GraduationCap, label: "Training" },
  { icon: LifeBuoy, label: "Support" },
];

export function ServicesAnimation() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const numServices = services.length;
  const radius = 160;
  const center = { x: 225, y: 225 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };
  
  const lineVariants = (i: number) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 + i * 0.1 },
    },
  });

  const particleVariants = (i: number) => ({
      offset: [0, 1],
      transition: {
          offset: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5 + i * 0.3
          }
      }
  });


  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full h-full flex items-center justify-center"
    >
      <svg viewBox="0 0 450 450" className="w-full h-auto max-w-lg overflow-visible">
        <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
        </defs>

        {/* Center Node */}
        <motion.g variants={itemVariants}>
          <circle cx={center.x} cy={center.y} r="50" fill="rgba(255, 255, 255, 0.1)" />
          <circle cx={center.x} cy={center.y} r="60" fill="url(#centerGlow)" />
          <text x={center.x} y={center.y + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            SyMetric
          </text>
           <text x={center.x} y={center.y + 20} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Services
          </text>
        </motion.g>

        {services.map((service, i) => {
          const angle = (i / numServices) * 2 * Math.PI - Math.PI / 2;
          const x = center.x + radius * Math.cos(angle);
          const y = center.y + radius * Math.sin(angle);

          return (
            <g key={service.label}>
              {/* Connecting Line */}
              <motion.path
                d={`M${center.x},${center.y} L${x},${y}`}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
                variants={lineVariants(i)}
              >
                  <motion.circle 
                    r="3" 
                    fill="white"
                    animate={particleVariants(i)}
                  >
                     <animateMotion dur="3s" repeatCount="indefinite" path={`M${center.x},${center.y} L${x},${y}`} />
                  </motion.circle>
              </motion.path>
              
              {/* Service Node */}
              <motion.g transform={`translate(${x}, ${y})`} variants={itemVariants}>
                <circle cx="0" cy="0" r="30" fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                <foreignObject x="-16" y="-16" width="32" height="32">
                    <service.icon
                        stroke="white"
                        strokeWidth="1.5"
                        className="w-full h-full"
                    />
                </foreignObject>
                <text
                  y="45"
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="medium"
                >
                  {service.label.split(' ').map((word, index) => (
                      <tspan key={index} x="0" dy={index > 0 ? "1.2em" : "0"}>
                          {word}
                      </tspan>
                  ))}
                </text>
              </motion.g>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}
