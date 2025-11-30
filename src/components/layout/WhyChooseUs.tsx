"use client";

import { whyChooseUsFeatures } from "@/lib/data";
import { SectionTitle } from "../shared/section-title";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-background">
      <div className="container">
        <SectionTitle
          title="Why Choose Us?"
          description="Discover why SyMetric stands apart — our clinical trial solutions blend intelligence, accuracy, and innovation to simplify complex workflows and empower research success."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsFeatures.map((feature, index) => {
            const image = PlaceHolderImages.find(p => p.id === feature.imageId);
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Card className="group flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {image && (
                     <div className="relative w-full h-48 overflow-hidden">
                        <Image
                            src={image.imageUrl}
                            alt={feature.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                        />
                     </div>
                  )}
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{feature.description}</p>
                     <div className="mt-4">
                        <Button variant="link" asChild className="p-0 h-auto font-semibold">
                            <Link href="#">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
