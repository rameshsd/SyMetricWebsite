
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { whyChooseUsFeatures } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionTitle } from "../shared/section-title";
import { CheckCircle2 } from "lucide-react";

const tabs = [
  { id: "supply", label: "Supply Chain" },
  { id: "procurement", label: "Procurement" },
  { id: "finance", label: "Finance" },
  { id: "hr", label: "Human Resources" },
  { id: "customer", label: "Customer Experience" },
  { id: "it", label: "IT & Developers" },
];

export function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(whyChooseUsFeatures[0]);
  const [activeTab, setActiveTab] = useState("supply");
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
        <div className="flex flex-wrap justify-center items-center gap-8 border-b border-gray-200 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative pb-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <SectionTitle
          title="Why Choose Us?"
          description="Discover why SyMetric stands apart — our clinical trial solutions blend intelligence, accuracy, and innovation to simplify complex workflows and empower research success."
          className="mb-20 text-center max-w-3xl mx-auto"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/10 border border-white/20"
          >
            <AnimatePresence mode="wait">
              {activeImage && (
                <motion.div
                  key={activeFeature.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src={activeImage.imageUrl}
                    alt={activeImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={activeImage.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right — Feature List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-5"
          >
            {whyChooseUsFeatures.map((feature) => {
              const isActive = activeFeature.id === feature.id;
              return (
                <motion.button
                  key={feature.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveFeature(feature)}
                  className={cn(
                    "relative w-full text-left p-6 rounded-2xl transition-all duration-500 border",
                    "flex items-start gap-5 overflow-hidden",
                    isActive
                      ? "bg-white shadow-xl border-blue-300"
                      : "bg-white/60 hover:bg-white/80 border-transparent backdrop-blur-md"
                  )}
                >
                  {/* Animated Glow Accent */}
                  {isActive && (
                    <motion.span
                      layoutId="active-glow"
                      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-60 rounded-2xl -z-10"
                      transition={{ duration: 0.4 }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-xl shrink-0 transition-colors",
                      isActive ? "bg-blue-100" : "bg-blue-50"
                    )}
                  >
                    <CheckCircle2
                      className={cn(
                        "h-6 w-6 transition-colors",
                        isActive ? "text-blue-600" : "text-gray-500"
                      )}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-semibold mb-1 transition-colors",
                        isActive ? "text-blue-700" : "text-gray-800"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed transition-opacity",
                        isActive
                          ? "text-gray-600 opacity-100"
                          : "text-gray-600 opacity-80"
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
