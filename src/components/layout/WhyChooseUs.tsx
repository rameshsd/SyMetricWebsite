
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { whyChooseUsFeatures } from '@/lib/data';
import { cn } from '@/lib/utils';
import { SectionTitle } from '../shared/section-title';
import { CheckCircle } from 'lucide-react';

export function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(whyChooseUsFeatures[0]);

  const activeImage = PlaceHolderImages.find(p => p.id === activeFeature.imageId);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Why Choose Us?"
          description="SyMetric offers reliable, accurate, and user-friendly Clinical Trial Solutions. You can plan, monitor, and manage trials effectively, every step of the way."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-background">
            <AnimatePresence mode="wait">
              {activeImage && (
                <motion.div
                  key={activeFeature.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <Image
                    src={activeImage.imageUrl}
                    alt={activeImage.description}
                    data-ai-hint={activeImage.imageHint}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="space-y-4">
            {whyChooseUsFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={cn(
                  "w-full text-left p-4 rounded-lg transition-all duration-300 border-2",
                  activeFeature.id === feature.id
                    ? 'bg-background border-primary shadow-lg scale-105'
                    : 'bg-background/50 border-transparent hover:bg-background hover:shadow-md'
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("flex items-center justify-center h-10 w-10 rounded-lg shrink-0 transition-colors", activeFeature.id === feature.id ? 'bg-primary/10' : 'bg-secondary')}>
                    <CheckCircle className={cn(
                      "h-6 w-6 shrink-0 transition-colors",
                      activeFeature.id === feature.id ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <span className="text-lg font-medium text-foreground">{feature.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
