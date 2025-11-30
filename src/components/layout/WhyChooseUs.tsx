"use client";

import { whyChooseUsFeatures } from "@/lib/data";
import { SectionTitle } from "../shared/section-title";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-background">
      <div className="container">
        <SectionTitle
          title="Why Choose Us?"
          description="Discover why SyMetric stands apart — our clinical trial solutions blend intelligence, accuracy, and innovation to simplify complex workflows and empower research success."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {whyChooseUsFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex"
            >
              <Card className="bg-transparent border-none shadow-none text-center flex flex-col items-center">
                <CardHeader className="p-0 mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
