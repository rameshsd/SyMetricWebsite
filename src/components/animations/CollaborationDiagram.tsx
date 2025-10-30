"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import {
  RealWorldEvidenceIcon,
  TrialDirectoriesIcon,
  ClinicalTrialsDataIcon,
  DataRepositoriesIcon,
  PublicDomainDataIcon,
  EHR_EMR_Icon,
  UsersIcon,
  PillIcon,
} from '@/components/icons/collaboration-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const Hexagon = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={cn(
      'relative flex items-center justify-center text-center p-2',
      className
    )}
    style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 260, damping: 20, delay: delay },
      },
    }}
  >
    {children}
  </motion.div>
);

const Node = ({
  label,
  className,
  delay = 0,
}: {
  label: string;
  className?: string;
  delay?: number;
}) => (
  <Hexagon
    className={cn('w-24 h-28 bg-violet-200/20 text-white text-xs font-semibold', className)}
    delay={delay}
  >
    {label}
  </Hexagon>
);

const SourceNode = ({
  icon,
  label,
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  delay?: number;
}) => (
  <motion.div
    className="flex flex-col items-center gap-1 text-white text-center text-xs w-20"
    variants={itemVariants}
    custom={delay}
  >
    <div className="w-16 h-16 bg-pink-900/40 rounded-lg flex items-center justify-center">
      {React.createElement(icon, { className: 'w-8 h-8 text-pink-300' })}
    </div>
    <span className="font-medium">{label}</span>
  </motion.div>
);

const PlatformNode = ({
  label,
  delay = 0,
}: {
  label: string;
  delay?: number;
}) => (
    <motion.div
        className="w-40 h-20 bg-cyan-400/20 text-white text-sm font-semibold flex items-center justify-center text-center p-2"
        style={{
            clipPath: 'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)'
        }}
        variants={itemVariants}
        custom={delay}
    >
        {label}
    </motion.div>
);

const Line = ({ d, delay = 0 }: { d: string; delay?: number }) => (
  <motion.path
    d={d}
    fill="none"
    stroke="url(#line-gradient)"
    strokeWidth="1.5"
    variants={pathVariants}
    custom={delay}
  />
);

export function CollaborationDiagram() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="w-full h-full">
      <motion.div
        className="relative w-full h-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* SVG lines */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 1000 625"
          preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                </linearGradient>
            </defs>
            {/* Lines from outer nodes to group nodes */}
            <Line d="M 280 156 L 390 312" delay={0.8} /> {/* Partners */}
            <Line d="M 720 156 L 610 312" delay={0.8} /> {/* Processes */}
            <Line d="M 280 468 L 390 312" delay={0.8} /> {/* Sources */}
            <Line d="M 720 468 L 610 312" delay={0.8} /> {/* Platforms */}
            {/* Line to result */}
            <Line d="M 500 380 V 540" delay={1} />
        </svg>

        {/* Central Node */}
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={itemVariants} custom={0.5}
        >
          <Hexagon className="w-48 h-56 bg-violet-600">
            <div className="flex flex-col items-center justify-center text-white">
              <UsersIcon className="w-16 h-16" />
              <span className="text-xl font-bold mt-2">Patients Data</span>
            </div>
          </Hexagon>
        </motion.div>
        
        {/* Main Group Nodes */}
        <motion.div className="absolute top-[25%] left-[28%]" variants={itemVariants} custom={0.6}>
            <Hexagon className="w-28 h-32 bg-orange-600 text-lg font-bold text-white">Partners</Hexagon>
        </motion.div>
        <motion.div className="absolute top-[25%] left-[72%]" variants={itemVariants} custom={0.6} style={{transform: 'translateX(-100%)'}}>
            <Hexagon className="w-28 h-32 bg-blue-600 text-lg font-bold text-white">Processes</Hexagon>
        </motion.div>
        <motion.div className="absolute top-[75%] left-[28%]" variants={itemVariants} custom={0.6} style={{transform: 'translateY(-100%)'}}>
            <Hexagon className="w-28 h-32 bg-pink-600 text-lg font-bold text-white">Sources</Hexagon>
        </motion.div>
        <motion.div className="absolute top-[75%] left-[72%]" variants={itemVariants} custom={0.6} style={{transform: 'translate(-100%, -100%)'}}>
            <Hexagon className="w-28 h-32 bg-green-600 text-lg font-bold text-white">Platforms</Hexagon>
        </motion.div>

        {/* Partners Cluster */}
        <div className="absolute top-[10%] left-[8%]"> <Node label="Labs" delay={1.1} /> </div>
        <div className="absolute top-[10%] left-[18%]"> <Node label="Labeling" delay={1.2} /> </div>
        <div className="absolute top-[10%] left-[28%]"> <Node label="Warehouse" delay={1.3} /> </div>
        <div className="absolute top-[23%] left-[13%]"> <Node label="CRO" delay={1.4} /> </div>
        <div className="absolute top-[23%] left-[23%]"> <Node label="Retention" delay={1.5} /> </div>
        <div className="absolute top-[36%] left-[8%]"> <Node label="Sponsor" delay={1.6} /> </div>
        <div className="absolute top-[36%] left-[18%]"> <Node label="Statistician" delay={1.7} /> </div>
        <div className="absolute top-[36%] left-[28%]"> <Node label="Investigators" delay={1.8} /> </div>

        {/* Processes Cluster */}
        <div className="absolute top-[10%] right-[28%]"> <Node label="Randomization" delay={1.1} /> </div>
        <div className="absolute top-[10%] right-[18%]"> <Node label="Sites Mgmt." delay={1.2} /> </div>
        <div className="absolute top-[10%] right-[8%]"> <Node label="Supplies Mgmt." delay={1.3} /> </div>
        <div className="absolute top-[23%] right-[23%]"> <Node label="Research Platform" delay={1.4} /> </div>
        <div className="absolute top-[23%] right-[13%]"> <Node label="Pharmaco-vigilance" delay={1.5} /> </div>
        <div className="absolute top-[23%] right-[3%]"> <Node label="Trial Mgmt" delay={1.6} /> </div>
        <div className="absolute top-[36%] right-[28%]"> <Node label="Pharmaco-vigilance" delay={1.7} /> </div>
        <div className="absolute top-[36%] right-[18%]"> <Node label="Subjects Mgmt." delay={1.8} /> </div>
        <div className="absolute top-[36%] right-[8%]"> <Node label="Medical Coding" delay={1.9} /> </div>
        <div className="absolute top-[23%] right-[-7%]"> <Node label="ePRO eTMF" delay={2.0} /> </div>

        {/* Sources Cluster */}
        <div className="absolute bottom-[28%] left-[2%]"><SourceNode icon={RealWorldEvidenceIcon} label="Real World Evidence" delay={1.1} /></div>
        <div className="absolute bottom-[14%] left-[2%]"><SourceNode icon={TrialDirectoriesIcon} label="Trial Directories" delay={1.2} /></div>
        <div className="absolute bottom-[2%] left-[10%]"><SourceNode icon={EHR_EMR_Icon} label="EHR/EMR/PMR" delay={1.3} /></div>
        <div className="absolute bottom-[2%] left-[24%]"><SourceNode icon={PublicDomainDataIcon} label="Public Domain Data" delay={1.4} /></div>
        <div className="absolute bottom-[14%] left-[32%]"><SourceNode icon={DataRepositoriesIcon} label="Data Repositories / Data Lakes" delay={1.5} /></div>
        <div className="absolute bottom-[28%] left-[32%]"><SourceNode icon={ClinicalTrialsDataIcon} label="Clinical Trials Data" delay={1.6} /></div>
        
        {/* Platforms Cluster */}
        <div className="absolute bottom-[24%] right-[24%]"><PlatformNode label="SAP BTP" delay={1.1} /></div>
        <div className="absolute bottom-[24%] right-[2%]"><PlatformNode label="Customer Landscape" delay={1.2} /></div>
        <div className="absolute bottom-[4%] right-[18%]"><PlatformNode label="SyMetric Trial Analytics on SAP CP" delay={1.3} /></div>
        <div className="absolute bottom-[4%] right-[0%]"><PlatformNode label="SyMetric CTP on Azure" delay={1.4} /></div>

        {/* Result Node */}
        <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center p-4 w-64 h-32 bg-blue-900 rounded-lg text-white"
            variants={itemVariants}
            custom={1.5}
        >
            <div className="flex items-center gap-3">
                <PillIcon className="w-10 h-10 shrink-0 text-blue-300"/>
                <p className="text-xs font-semibold">Analytical outcomes leading to predictive, preventive, and personalized medicine</p>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
