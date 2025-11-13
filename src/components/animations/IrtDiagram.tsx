"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shuffle, Beaker, Users, Hospital } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const Node = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
    <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100/70 text-blue-600 shadow-sm">
      <Icon className="h-7 w-7" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-0 h-0 
        border-t-[6px] border-t-transparent
        border-l-[8px] border-l-blue-600
        border-b-[6px] border-b-transparent"></div>
    </div>
    <span className="text-sm font-medium text-slate-700">{label}</span>
  </motion.div>
);

const ClinicalSuppliesNode = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
    <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100/70 text-blue-600 shadow-sm">
      <Icon className="h-7 w-7" />
       <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-0 h-0 
        border-t-[6px] border-t-transparent
        border-r-[8px] border-r-blue-600
        border-b-[6px] border-b-transparent"></div>
    </div>
    <span className="text-sm font-medium text-slate-700">{label}</span>
  </motion.div>
);


const IRTHub = () => (
  <motion.div variants={itemVariants}>
    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-600 text-lg font-bold text-blue-600">
      IRT
    </div>
  </motion.div>
);

export function IrtDiagram() {
  return (
    <div className="flex items-center justify-center w-full py-10 bg-slate-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 grid-rows-3 w-[480px] h-[420px] bg-white rounded-2xl shadow-xl p-4 place-items-center"
      >
        {/* Row 1 */}
        <div />
        <div className="col-start-2">
          <Node icon={Shuffle} label="Randomization" />
        </div>
        <div />

        {/* Row 2 */}
        <div>
          <ClinicalSuppliesNode icon={Beaker} label="Clinical Supplies" />
        </div>
        <div>
          <IRTHub />
        </div>
        <div>
          <Node icon={Users} label="Subject Management" />
        </div>
        
        {/* Row 3 */}
        <div />
        <div className="col-start-2">
          <Node icon={Hospital} label="Site Management" />
        </div>
        <div />

      </motion.div>
    </div>
  );
}
