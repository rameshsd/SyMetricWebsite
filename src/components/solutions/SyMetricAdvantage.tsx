"use client";
import { CheckCircle, Combine, MousePointerClick, Fingerprint, Files, ChevronsRight, BarChart, LifeBuoy } from "lucide-react";
import { SectionTitle } from "../shared/section-title";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const advantages = [
    {
        icon: Combine,
        title: "Fully Integrated Application",
        description: "A modularized experience that allows seamless integration and scalability for your trials.",
        link: "#"
    },
    {
        icon: MousePointerClick,
        title: "Simple and Intuitive UI",
        description: "An easy-to-use interface that reduces training time and increases user adoption.",
        link: "#"
    },
    {
        icon: Fingerprint,
        title: "Single Sign-On Feature",
        description: "Access all platform tools with a single, secure login, simplifying user management.",
        link: "#"
    },
    {
        icon: ChevronsRight,
        title: "Flexible and Customizable",
        description: "Highly adaptable to your specific research study protocols and unique workflows.",
        link: "#"
    },
    {
        icon: Files,
        title: "Reusable Forms & Rules",
        description: "Save time and ensure consistency by creating and reusing forms and business rules across studies.",
        link: "#"
    },
    {
        icon: CheckCircle,
        title: "Compliant and Secure",
        description: "Adheres to 21 CFR Part 11 and ICH-GCP guidelines, ensuring data integrity and audit readiness.",
        link: "#"
    },
    {
        icon: BarChart,
        title: "Real-Time Reporting",
        description: "Gain instant visibility into trial progress with powerful real-time dashboards and analytics.",
        link: "#"
    },
    {
        icon: LifeBuoy,
        title: "24x7 Dedicated Support",
        description: "Our expert technical support team is always available to ensure your trials run smoothly.",
        link: "#"
    }
];

export function SyMetricAdvantage() {
    return (
        <section>
            <div className="container">
                <SectionTitle title="The SyMetric Advantage" className="mb-16" />
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <Card key={index} className="flex flex-col border-none shadow-none bg-transparent">
                            <CardHeader>
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                                    <advantage.icon className="h-6 w-6 text-primary" />
                                </div>
                                <p className="text-sm uppercase text-muted-foreground tracking-wider">SyMetric Application</p>
                                <h3 className="text-xl font-bold pt-2 !m-0">{advantage.title}</h3>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{advantage.description}</p>
                                <Link href={advantage.link} className="flex items-center text-sm text-primary font-semibold mt-4">
                                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
