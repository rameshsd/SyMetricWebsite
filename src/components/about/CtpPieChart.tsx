
"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { SectionTitle } from "../shared/section-title";
import { Card } from "../ui/card";

export default function CtpPieChart(): JSX.Element {
  const arcPath = (
    cx: number,
    cy: number,
    r: number,
    startAngle: number,
    endAngle: number
  ) => {
    const toRad = (a: number) => (a - 90) * (Math.PI / 180);
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
  };

  const sectorPath = (
    cx: number,
    cy: number,
    r: number,
    startAngle: number,
    endAngle: number
  ) => {
    const toRad = (a: number) => (a - 90) * (Math.PI / 180);
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

  const featurePoints = [
    {
      title: 'Compliance',
      points: ['Wide range of certifications (21 CFR Part 11, GxP)', 'Product localizations for global trials'],
      position: 'md:absolute top-0 left-0 md:-translate-x-1/4'
    },
    {
      title: 'Data protection and privacy',
      points: ['Strong company measures (GDPR, HIPAA)', 'Global data center locations'],
      position: 'md:absolute bottom-0 left-0 md:-translate-x-1/2'
    },
    {
      title: 'Security',
      points: ['Highest product and operations security', 'Resilience and business continuity', 'Cyber-defense measures'],
      position: 'md:absolute top-1/2 right-0 md:translate-x-1/2 md:-translate-y-1/2'
    }
  ];

  return (
    <section className="bg-secondary/50">
        <div className="container">
            <SectionTitle title="Every day, organizations around the world trust SyMetric CTP" className="mb-12" />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-lg text-muted-foreground">
                        Our clinical trial platform is built on a strong, reliable, and secure foundation. Global cloud delivery services protect you from external threats, help you collect and process personal data lawfully, and enable you to meet regulatory and compliance requirements.
                    </p>
                </div>

                <div className="relative w-full max-w-[500px] mx-auto min-h-[400px] md:block flex flex-col items-center gap-4">
                    {/* SVG Diagram */}
                    <div className="relative w-[400px] h-[400px] md:absolute md:inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 600 600" className="w-full h-full" role="img" aria-label="SyMetric CTP pie chart">
                            <defs>
                                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.08" />
                                </filter>
                                <path id="arc-security" d={arcPath(300, 300, 160, 0, 120)} fill="none" />
                                <path id="arc-compliance" d={arcPath(300, 300, 160, 120, 240)} fill="none" />
                                <path id="arc-privacy" d={arcPath(300, 300, 160, 240, 360)} fill="none" />
                            </defs>
                            <circle cx="300" cy="300" r="260" fill="none" stroke="#2b6fd6" strokeWidth="6" strokeDasharray="1 12" opacity="0.85" />
                            <path d={sectorPath(300, 300, 220, 0, 120)} fill="#1073f6" />
                            <path d={sectorPath(300, 300, 220, 120, 240)} fill="#1e8bff" />
                            <path d={sectorPath(300, 300, 220, 240, 360)} fill="#0b63d9" />
                            <text fontSize={18} fontWeight={600} fill="#fff">
                                <textPath href="#arc-security" startOffset="50%" textAnchor="middle">Security</textPath>
                            </text>
                            <text fontSize={18} fontWeight={600} fill="#fff">
                                <textPath href="#arc-compliance" startOffset="50%" textAnchor="middle">Compliance</textPath>
                            </text>
                            <text fontSize={18} fontWeight={600} fill="#fff">
                                <textPath href="#arc-privacy" startOffset="50%" textAnchor="middle">Data protection</textPath>
                            </text>
                            <circle cx="300" cy="300" r="95" fill="hsl(var(--card))" stroke="#cfe6ff" strokeWidth="8" filter="url(#shadow)" />
                            <circle cx="300" cy="300" r="65" fill="#0b63d9" />
                            <text x="300" y="275" textAnchor="middle" fontSize={24} fontWeight={700} fill="#fff">SyMetric CTP</text>
                            <text x="300" y="305" textAnchor="middle" fontSize={12} fontWeight={600} fill="#cfe6ff">Secure foundation</text>
                        </svg>
                    </div>

                    {/* Feature Points */}
                    {featurePoints.map(feature => (
                      <div key={feature.title} className={feature.position}>
                        <Card className="p-4 rounded-xl shadow-lg bg-background/80 backdrop-blur-sm w-56">
                          <h4 className="font-bold text-foreground mb-2 text-base">{feature.title}</h4>
                          <ul className="space-y-2">
                            {feature.points.map(point => (
                              <li key={point} className="flex items-start gap-2 text-xs">
                                <CheckCircle className="h-3.5 w-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
