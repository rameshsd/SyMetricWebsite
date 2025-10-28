"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { whyChooseUsFeatures } from "@/lib/data";

const tabs = whyChooseUsFeatures.map(feature => ({
  id: feature.id,
  label: feature.title,
}));

export function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(whyChooseUsFeatures[0]);

  const activeImage = PlaceHolderImages.find(
    (p) => p.id === activeFeature.imageId
  );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-24">
      {/* Floating gradient orbs for depth */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-40 w-64 h-64 bg-blue-200/40 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-10 right-40 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full animate-pulse-slow" />
      </div>

      <div className="container">
        {/* Modern Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 border-b border-gray-200 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                const newFeature = whyChooseUsFeatures.find(f => f.id === tab.id);
                if (newFeature) {
                  setActiveFeature(newFeature);
                }
              }}
              className="relative pb-3 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-all"
            >
              {tab.label}
              {activeFeature.id === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {activeImage && (
                <Image
                  src={activeImage.imageUrl}
                  alt={activeFeature.title}
                  data-ai-hint={activeImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Right - Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {activeFeature.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {activeFeature.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
