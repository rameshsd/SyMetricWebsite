
"use client";

import { whyChooseUsFeatures } from "@/lib/data";
import { SectionTitle } from "../shared/section-title";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
                className="h-full flex"
              >
                  <Card className="h-full flex flex-col group overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl bg-card border">
                      {image && (
                        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                          <Image 
                            src={image.imageUrl}
                            alt={feature.title}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                      <CardFooter>
                          <Link href={feature.learnMoreLink} className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:underline">
                              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                      </CardFooter>
                  </Card>
              </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
