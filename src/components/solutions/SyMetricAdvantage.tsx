
"use client";
import { CheckCircle } from "lucide-react";

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
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold">The SyMetric Advantage</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <p className="text-muted-foreground">{advantage}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
