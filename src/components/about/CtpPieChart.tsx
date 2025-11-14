
"use client";

import React from "react";
import { CheckCircle, PlusCircle } from "lucide-react";

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

  return (
    <section className="bg-secondary/50">
        <div className="container">
             <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold tracking-tighter">
                    Every day, organizations around the world trust SyMetric CTP
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-prose mx-auto">
                    Our clinical trial platform is built on a strong, reliable, and secure foundation. Global cloud delivery services protect you from external threats, help you collect and process personal data lawfully, and enable you to meet regulatory and compliance requirements.
                </p>
            </div>
            <div className="relative max-w-6xl w-full px-6 mx-auto mt-16">
                <div className="flex items-center justify-center gap-12">

                {/* Left side: Compliance & Data protection lists */}
                <aside className="w-1/4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Compliance</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Wide range of certifications (21 CFR Part 11, GxP)</span>
                        </li>
                        <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Product localizations for global trials</span>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Data protection and privacy</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Strong company measures (GDPR, HIPAA)</span>
                        </li>
                        <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Global data center locations</span>
                        </li>
                    </ul>
                    </div>
                </aside>

                {/* Center SVG pie */}
                <div className="w-2/3 relative flex justify-center">
                    <svg viewBox="0 0 600 600" className="w-[560px] h-[560px]" role="img" aria-label="SyMetric CTP pie chart">
                    <defs>
                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.08" />
                        </filter>

                        {/* arc paths for curved labels */}
                        <path id="arc-security" d={arcPath(300, 300, 160, 0, 120)} fill="none" />
                        <path id="arc-compliance" d={arcPath(300, 300, 160, 120, 240)} fill="none" />
                        <path id="arc-privacy" d={arcPath(300, 300, 160, 240, 360)} fill="none" />
                    </defs>

                    {/* outer dotted circle */}
                    <circle cx="300" cy="300" r="260" fill="none" stroke="#2b6fd6" strokeWidth="6" strokeDasharray="1 12" opacity="0.85" />

                    {/* three equal slices (120° each) */}
                    <path d={sectorPath(300, 300, 220, 0, 120)} fill="#1073f6" />
                    <path d={sectorPath(300, 300, 220, 120, 240)} fill="#1e8bff" />
                    <path d={sectorPath(300, 300, 220, 240, 360)} fill="#0b63d9" />

                    {/* curved labels using textPath (xlinkHref for compatibility) */}
                    <text fontSize={18} fontWeight={600} fill="#fff">
                        <textPath href="#arc-security" startOffset="50%" textAnchor="middle">Security</textPath>
                    </text>

                    <text fontSize={18} fontWeight={600} fill="#fff">
                        <textPath href="#arc-compliance" startOffset="50%" textAnchor="middle">Compliance</textPath>
                    </text>

                    <text fontSize={18} fontWeight={600} fill="#fff">
                        <textPath href="#arc-privacy" startOffset="50%" textAnchor="middle">Data protection and privacy</textPath>
                    </text>

                    {/* center rings */}
                    <circle cx="300" cy="300" r="95" fill="hsl(var(--card))" stroke="#cfe6ff" strokeWidth="8" filter="url(#shadow)" />
                    <circle cx="300" cy="300" r="65" fill="#0b63d9" />

                    {/* center text */}
                    <text x="300" y="275" textAnchor="middle" fontSize={24} fontWeight={700} fill="#fff">SyMetric CTP</text>
                    <text x="300" y="305" textAnchor="middle" fontSize={12} fontWeight={600} fill="#cfe6ff">Secure foundation</text>
                    </svg>
                </div>

                {/* Right feature cards: Security items */}
                <aside className="w-1/4 pr-6">
                    <div className="space-y-4">
                    <div className="p-3 rounded-md bg-blue-100 dark:bg-blue-900/40 flex gap-3 items-start shadow-sm">
                        <div className="bg-background rounded-full p-1 shadow-sm">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                        <div className="font-semibold text-foreground">Highest product and operations security</div>
                        </div>
                    </div>

                    <div className="p-3 rounded-md bg-blue-100 dark:bg-blue-900/40 flex gap-3 items-start shadow-sm">
                        <div className="bg-background rounded-full p-1 shadow-sm">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                        <div className="font-semibold text-foreground">Resilience and business continuity</div>
                        </div>
                    </div>

                    <div className="p-3 rounded-md bg-blue-100 dark:bg-blue-900/40 flex gap-3 items-start shadow-sm">
                        <div className="bg-background rounded-full p-1 shadow-sm">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                        <div className="font-semibold text-foreground">Cyber-defense measures</div>
                        </div>
                    </div>
                    </div>
                </aside>

                </div>
            </div>
        </div>
    </section>
  );
}