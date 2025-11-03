
"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { UsersIcon, PillIcon, RealWorldEvidenceIcon, TrialDirectoriesIcon, ClinicalTrialsDataIcon, DataRepositoriesIcon, PublicDomainDataIcon, EHR_EMR_Icon } from "@/components/icons/collaboration-icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

const lineVariant = (delay: number = 0) => ({
  hidden: { pathLength: 0 },
  show: { pathLength: 1, transition: { duration: 1, delay } }
});

const Section = ({ title, children, className }: { title: string; children: React.ReactNode, className?: string }) => (
  <div className={`text-center ${className}`}>
    <h3 className="font-bold text-sm text-white/80 uppercase tracking-widest mb-4">{title}</h3>
    <motion.div variants={container} className="flex justify-center gap-4 flex-wrap">
      {children}
    </motion.div>
  </div>
);

const IconCard = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div variants={item} className="flex flex-col items-center gap-2 w-24">
    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <span className="text-xs text-white/70">{label}</span>
  </motion.div>
);

export function CollaborationDiagram() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="relative w-full p-8 bg-blue-900/50 rounded-lg overflow-hidden">
      <motion.div initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-12">
        <Section title="Partners">
          <IconCard icon={UsersIcon} label="Users" />
          <IconCard icon={PillIcon} label="Drug discovery and development" />
        </Section>
        
        <div className="relative flex justify-center items-center h-20">
             <svg className="absolute w-full h-48" viewBox="0 0 300 100" preserveAspectRatio="none">
                <motion.path d="M 40 0 V 50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" variants={lineVariant(0.5)} />
                <motion.path d="M 150 0 V 50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" variants={lineVariant(0.7)} />
                <motion.path d="M 260 0 V 50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" variants={lineVariant(0.9)} />

                <motion.path d="M 40 50 H 260" stroke="rgba(255,255,255,0.3)" strokeWidth="1" variants={lineVariant(1.1)} />
                
                <motion.path d="M 150 50 V 100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" variants={lineVariant(1.3)} />
            </svg>
        </div>

        <Section title="Process">
          <IconCard icon={RealWorldEvidenceIcon} label="Real world evidence" />
          <IconCard icon={TrialDirectoriesIcon} label="Trial directories" />
          <IconCard icon={ClinicalTrialsDataIcon} label="Clinical trials data" />
          <IconCard icon={DataRepositoriesIcon} label="Data repositories" />
          <IconCard icon={PublicDomainDataIcon} label="Public domain data" />
          <IconCard icon={EHR_EMR_Icon} label="EHR/EMR" />
        </Section>
      </motion.div>
    </div>
  );
}
