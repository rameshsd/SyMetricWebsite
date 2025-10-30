
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { SectionTitle } from "../shared/section-title";
import { Iso27001, Iso9001, Fda21Cfr, IchGcp } from "../icons/compliance-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 }
    },
};

export function SecurityCompliance() {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-secondary/50">
      <div className="container">
        <SectionTitle
          title="Security, Compliance, and Data Privacy"
          className="mb-16"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
        >
          {/* Left Column: Text Content */}
          <div className="space-y-10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-foreground mb-4">Security and Compliance</h3>
              <p className="text-muted-foreground">
                Build data security from the ground up with the backing of our team of experts. We ensure that you meet regulatory requirements (Data protection laws, Good Clinical Practice guidelines, and more) through proactive compliance measures that use well-defined policies, processes, and a robust Standard Operating Procedure framework. Our methods are trusted by large Pharmaceutical Organizations, CROs, and Academic Institutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-foreground mb-4">Uncompromised Commitment to Data Privacy</h3>
              <p className="text-muted-foreground">
                We go to great lengths to ensure that you have full control over data that powers your research. When it comes to data privacy, our resolve is unmatched and we are only custodians of data that is yours.
              </p>
               <Button variant="link" asChild className="p-0 h-auto mt-4 text-primary">
                  <Link href="#">
                    Read our privacy policy <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Animated Badges */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div variants={badgeVariants}>
                <Iso27001 className="w-full h-auto" />
            </motion.div>
            <motion.div variants={badgeVariants}>
                <Iso9001 className="w-full h-auto" />
            </motion.div>
            <motion.div variants={badgeVariants}>
                <Fda21Cfr className="w-full h-auto" />
            </motion.div>
            <motion.div variants={badgeVariants}>
                <IchGcp className="w-full h-auto" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
