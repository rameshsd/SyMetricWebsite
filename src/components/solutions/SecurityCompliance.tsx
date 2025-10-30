
"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "../shared/section-title";

const securityItems = [
    "Review security measures to help protect your data's integrity, availability, and confidentiality",
    "Implement a secure software development lifecycle",
    "Explore security products and services from SyMetric",
    "Report a security issue"
]

const complianceItems = [
    "Learn about routine compliance checks through internal reviews and audits",
    "View global offerings, such as ISO/IEC, SOC, and bridge letters",
    "Access local and industry-specific compliance certificates, including TISAX"
]

const privacyItems = [
    "Understand how SyMetric protects and respects individuals' privacy",
    "View data protection guidelines",
    "Explore global compliance of data protection laws",
    "Learn about our data centers and their locations"
]

export function SecurityCompliance() {
  return (
    <section className="bg-background">
      <div className="container">
        <SectionTitle
            title="Our commitment to protecting your business operations and data"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Security Column */}
            <div>
                <h3 className="text-xl font-bold mb-4">Security</h3>
                <ul className="space-y-3">
                    {securityItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
                <Link href="#" className="text-primary font-semibold text-sm flex items-center gap-1 mt-6">
                    Learn about security <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {/* Compliance Column */}
            <div>
                <h3 className="text-xl font-bold mb-4">Compliance</h3>
                <ul className="space-y-3">
                    {complianceItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
                 <Link href="#" className="text-primary font-semibold text-sm flex items-center gap-1 mt-6">
                    Learn about compliance <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {/* Data Protection Column */}
            <div>
                <h3 className="text-xl font-bold mb-4">Data protection and privacy</h3>
                <ul className="space-y-3">
                    {privacyItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                             <span className="text-primary mt-1.5">•</span>
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
                <Link href="#" className="text-primary font-semibold text-sm flex items-center gap-1 mt-6">
                    Learn about privacy <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
