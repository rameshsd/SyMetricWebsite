
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { SectionTitle } from "../shared/section-title";
import { complianceStandards } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle } from "lucide-react";

export function SecurityCompliance() {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-secondary/50">
      <div className="container">
        <div className="max-w-4xl">
            <SectionTitle
                title="Compliance & Regulatory Standards"
                description="We adhere to globally recognized regulatory frameworks and quality standards to ensure security, compliance, and operational excellence across all our solutions."
                className="!max-w-4xl mb-16"
            />
        </div>
        
        <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: { transition: { staggerChildren: 0.05 } }
            }}
        >
          {complianceStandards.map((standard) => (
            <motion.div
                key={standard.id}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <Card className="h-full flex flex-col bg-background shadow-md hover:shadow-xl transition-shadow rounded-xl">
                    <CardHeader className="flex-row items-center gap-4">
                        <div className="w-24 h-12 flex-shrink-0">
                            <standard.Icon className="w-full h-full" />
                        </div>
                        <CardTitle className="text-lg leading-tight">{standard.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-6 pt-0">
                        <p className="text-sm text-muted-foreground">{standard.description}</p>
                        <div className="mt-4 flex-grow">
                            <h4 className="font-semibold text-sm mb-2">Key Highlights:</h4>
                            <ul className="space-y-1.5">
                                {standard.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                            <p className="text-xs text-muted-foreground"><strong className="text-foreground">Why it matters:</strong> {standard.whyItMatters}</p>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 max-w-3xl mx-auto text-center">
            <p className="text-xl font-medium text-foreground italic">“We integrate compliance into every layer of our platform—ensuring security, reliability, and global regulatory alignment for our clients.”</p>
        </div>
      </div>
    </section>
  );
}
