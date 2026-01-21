
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { SectionTitle } from "../shared/section-title";
import { Iso27001, Iso9001, Fda21Cfr, IchGcp, GdprIcon, GmpIcon, Gs1Icon, HipaaIcon } from "../icons/compliance-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, FileCheck } from "lucide-react";

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


const AnimatedDiagram = () => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const diagramContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const centerIcon = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }
    }
  };

  const orbitingItem = (i: number) => ({
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.6 + i * 0.2 }
    }
  });

  const lineVariant = (delay: number) => ({
      hidden: { pathLength: 0, opacity: 0 },
      visible: { 
          pathLength: 1, 
          opacity: 0.5,
          transition: { duration: 1, ease: "easeInOut", delay: delay }
      }
  });

  const floatingAnimation = (delay: number, distance: string = "3px") => ({
    y: [`-${distance}`, distance],
    transition: {
      delay,
      duration: 3 + delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  });

  return (
    <motion.div
      ref={ref}
      variants={diagramContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full max-w-lg mx-auto h-96 flex items-center justify-center"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <motion.line
          x1="200"
          y1="150"
          x2="200"
          y2="60"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          variants={lineVariant(0.9)}
        />
        <motion.line
          x1="200"
          y1="150"
          x2="90"
          y2="210"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          variants={lineVariant(1.1)}
        />
        <motion.line
          x1="200"
          y1="150"
          x2="310"
          y2="210"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          variants={lineVariant(1.3)}
        />
      </svg>
      
      {/* Central Node */}
      <motion.div
        variants={centerIcon}
        className="absolute"
        style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
      >
        <motion.div animate={floatingAnimation(0, '4px')}>
            <div className="w-28 h-28 bg-primary/10 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-14 h-14 text-primary" strokeWidth={2} />
            </div>
        </motion.div>
      </motion.div>

      {/* Top Node */}
      <motion.div
        variants={orbitingItem(0)}
        className="absolute flex flex-col items-center gap-2"
        style={{ top: '20%', left: '50%', x: '-50%', y: '-50%' }}
      >
        <motion.div animate={floatingAnimation(0.5)}>
          <div className="w-20 h-20 bg-background border rounded-full flex items-center justify-center shadow-md">
            <Lock className="w-10 h-10 text-primary" strokeWidth={2} />
          </div>
          <span className="font-semibold text-sm text-foreground mt-2 block text-center">Security</span>
        </motion.div>
      </motion.div>
      
      {/* Bottom-Left Node */}
      <motion.div
        variants={orbitingItem(1)}
        className="absolute flex flex-col items-center gap-2"
        style={{ top: '70%', left: '22%', x: '-50%', y: '-50%' }}
      >
        <motion.div animate={floatingAnimation(1)}>
          <div className="w-20 h-20 bg-background border rounded-full flex items-center justify-center shadow-md">
            <FileCheck className="w-10 h-10 text-primary" strokeWidth={2} />
          </div>
          <span className="font-semibold text-sm text-foreground mt-2 block text-center">Compliance</span>
        </motion.div>
      </motion.div>
      
      {/* Bottom-Right Node */}
      <motion.div
        variants={orbitingItem(2)}
        className="absolute flex flex-col items-center gap-2"
        style={{ top: '70%', left: '78%', x: '-50%', y: '-50%' }}
      >
        <motion.div animate={floatingAnimation(1.5)}>
          <div className="w-20 h-20 bg-background border rounded-full flex items-center justify-center shadow-md">
            <ShieldCheck className="w-10 h-10 text-primary" strokeWidth={2} />
          </div>
          <span className="font-semibold text-sm text-foreground mt-2 block text-center">Data Privacy</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
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

        <AnimatedDiagram />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto"
        >
          {/* Left Column: Text Content */}
          <div className="space-y-10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-foreground mb-4">Security, Compliance, and Data Integrity</h3>
              <p className="text-lg text-muted-foreground">
                Our system design ensures full compliance with federal regulations like **21 CFR Part 11**, with a proven track record for maintaining data integrity, security, and electronic signatures. Data security is an implicit part of our product development, with security features built from the ground up, backed by our team of experts.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-foreground mb-4">Uncompromised Commitment to Data Privacy</h3>
              <p className="text-lg text-muted-foreground">
                We ensure you meet regulatory requirements like **GDPR** and **HIPAA** through proactive measures. Our strict data governance policies ensure the use and disclosure of PHI is well-governed, and the collection, storage, and use of personal data is always justified and consent-based.
              </p>
               <Button variant="link" asChild className="p-0 h-auto mt-4 text-primary">
                  <Link href="#">
                    Read our privacy policy <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
            </motion.div>

             <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-foreground mb-4">Built on Global Standards</h3>
              <p className="text-lg text-muted-foreground">
                System processes are designed around **ICH-GCP** and **GMP** guidelines to ensure subject safety and product quality. Our solution is also fully compliant with **GS1** requirements, providing a common framework for identifying, capturing, and sharing data across all stakeholders.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Animated Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
             <motion.div variants={badgeVariants}><Fda21Cfr className="w-auto h-16 mx-auto" /></motion.div>
            <motion.div variants={badgeVariants}><IchGcp className="w-auto h-16 mx-auto" /></motion.div>
            <motion.div variants={badgeVariants}><GdprIcon className="w-auto h-16 mx-auto" /></motion.div>
            <motion.div variants={badgeVariants}><HipaaIcon className="w-auto h-16 mx-auto" /></motion.div>
            <motion.div variants={badgeVariants}><GmpIcon className="w-auto h-16 mx-auto" /></motion.div>
            <motion.div variants={badgeVariants}><Gs1Icon className="w-auto h-16 mx-auto" /></motion.div>
            <motion.div variants={badgeVariants}><Iso27001 className="w-auto h-16 mx-auto" /></motion.div>
            <motion.div variants={badgeVariants}><Iso9001 className="w-auto h-16 mx-auto" /></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
