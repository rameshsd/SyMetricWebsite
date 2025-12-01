"use client";

import { whyChooseUsFeatures } from "@/lib/data";
import { SectionTitle } from "../shared/section-title";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-background">
      <div className="container">
        <div className="text-left mb-16">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl relative pl-4">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></span>
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Discover why SyMetric stands apart — our clinical trial solutions blend intelligence, accuracy, and innovation to simplify complex workflows and empower research success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {whyChooseUsFeatures.map((feature, index) => {
            const image = PlaceHolderImages.find(p => p.id === feature.imageId);
            return (
                <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="h-full flex flex-col group overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
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
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
                            <Link href={feature.learnMoreLink} className="text-primary font-semibold text-sm flex items-center gap-1 mt-4">
                                {feature.linkText} <ArrowRight className="h-4 w-4" />
                            </Link>
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
