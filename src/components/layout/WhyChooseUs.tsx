"use client";

import { whyChooseUsFeatures } from "@/lib/data";
import { SectionTitle } from "../shared/section-title";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-background">
      <div className="container">
        <SectionTitle
          title="Why Choose SyMetric?"
          description="Discover why SyMetric stands apart — our clinical trial solutions blend intelligence, accuracy, and innovation to simplify complex workflows and empower research success."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                 <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
