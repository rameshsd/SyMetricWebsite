
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { ShieldCheck, FileText, Lock } from "lucide-react";
import { SectionTitle } from "../shared/section-title";
import { cn } from "@/lib/utils";

const securityConcepts = [
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Highest product and operations security, resilience, business continuity, and cyber-defense measures.",
  },
  {
    icon: FileText,
    title: "Compliance",
    description: "Wide range of certifications (ISO, 21 CFR Part 11, ICH-GCP) and product localizations to meet regulatory requirements.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Strong company measures and global data center locations to ensure you have full control over your data.",
  },
];

export function SecurityCompliance() {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <section className="bg-secondary/50">
      <div className="container">
        <SectionTitle
          title="Our Commitment to Protecting Your Business"
          description="We provide a strong, reliable, and secure foundation for your clinical operations."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {securityConcepts.map((concept) => (
            <motion.div
              key={concept.title}
              variants={itemVariants}
              className="bg-card p-8 rounded-2xl border text-center flex flex-col items-center shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <concept.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{concept.title}</h3>
              <p className="text-muted-foreground">{concept.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
