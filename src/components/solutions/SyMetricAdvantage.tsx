
"use client";
import { CheckCircle } from "lucide-react";
import { SectionTitle } from "../shared/section-title";

const advantages = [
    "Fully Integrated Application with Modularized Experience",
    "Simple and Intuitive User Interface",
    "Single Sign-On Feature",
    "Highly Flexible and Customizable for Research studies",
    "Reusable Forms and Business Rules",
    "Compliant With 21 CFR Part 11 and ICH-GCP Guidelines",
    "Real-Time Reports and Dashboards",
    "24x7 Dedicated Technical Support",
];

export function SyMetricAdvantage() {
    return (
        <section>
            <div className="container">
                <SectionTitle title="The SyMetric Advantage" className="mb-16" />
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <p className="text-muted-foreground text-lg">{advantage}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
