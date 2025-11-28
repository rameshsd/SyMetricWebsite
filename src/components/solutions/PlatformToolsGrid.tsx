
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserAccessIcon,
  OrgManagementIcon,
  StudyManagementIcon,
  SiteManagementIcon,
  SuppliesManagementIcon,
  SubjectManagementIcon,
  DataManagementIcon,
  LabManagementIcon,
  MedicalCodingIcon,
  DataServicesIcon,
  DigitalLearningIcon,
  HelpSupportIcon,
} from '@/components/icons/platform-tool-icons';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const toolsData = [
  {
    id: 'iam',
    icon: UserAccessIcon,
    label: 'Identity and Access Management',
    description: 'Role-Based Access Control and Self-Service Account Management.',
    imageId: 'tool-iam-1'
  },
  {
    id: 'org-management',
    icon: OrgManagementIcon,
    label: 'Organization Management',
    description: 'Manage all organizations participating in your trials from a central location.',
    imageId: 'tool-org-1'
  },
  {
    id: 'study-management',
    icon: StudyManagementIcon,
    label: 'Study Management',
    description: 'Define, configure, and oversee all aspects of your clinical studies.',
    imageId: 'tool-study-1'
  },
  {
    id: 'site-management',
    icon: SiteManagementIcon,
    label: 'Site Management',
    description: 'Streamline site activation, monitoring, and communication.',
    imageId: 'tool-site-1'
  },
  {
    id: 'supplies-management',
    icon: SuppliesManagementIcon,
    label: 'Clinical Supplies Management',
    description: 'Track and manage investigational products and trial supplies in real-time.',
    imageId: 'tool-supplies-1'
  },
  {
    id: 'subject-management',
    icon: SubjectManagementIcon,
    label: 'Subject Management',
    description: 'Handle subject enrollment, randomization, and tracking throughout the trial lifecycle.',
    imageId: 'tool-subject-1'
  },
  {
    id: 'data-management',
    icon: DataManagementIcon,
    label: 'Data Management',
    description: 'Global Library, Data Designer, Data Validation Manager, Data Collection, Discrepancy Management, Source Data Verification, and Data Exports',
    imageId: 'tool-data-1'
  },
  {
    id: 'lab-management',
    icon: LabManagementIcon,
    label: 'Lab Management',
    description: 'Manage lab data, normal ranges, and sample tracking with ease.',
    imageId: 'tool-lab-1'
  },
  {
    id: 'medical-coding',
    icon: MedicalCodingIcon,
    label: 'Medical Coding',
    description: 'Standardize medical terms with integrated coding dictionaries like MedDRA and WHODrug.',
    imageId: 'tool-coding-1'
  },
  {
    id: 'data-services',
    icon: DataServicesIcon,
    label: 'Data Services',
    description: 'Custom data exports, integrations, and reporting services.',
    imageId: 'tool-data-svc-1'
  },
  {
    id: 'learning',
    icon: DigitalLearningIcon,
    label: 'Digital Learning',
    description: 'Provide training and certification for trial personnel directly on the platform.',
    imageId: 'tool-learning-1'
  },
  {
    id: 'support',
    icon: HelpSupportIcon,
    label: 'Help and Support',
    description: 'Access our dedicated support team and comprehensive knowledge base.',
    imageId: 'tool-support-1'
  },
];

const ToolButton = ({ tool, isActive, onClick }: { tool: typeof toolsData[0], isActive: boolean, onClick: () => void }) => (
    <button onClick={onClick} className="text-center group flex flex-col items-center gap-2">
        <tool.icon className={cn("h-14 w-14 transition-colors", isActive ? "text-[#a3ff12]" : "text-white/80 group-hover:text-white")} />
        <div className="text-sm font-semibold max-w-[120px]">
            <p className={cn("transition-colors", isActive ? "text-white" : "text-white/80 group-hover:text-white")}>{tool.label}</p>
             <div className={cn("mt-2 h-1 w-full bg-[#a3ff12] rounded-full transition-transform duration-300", isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50")} />
        </div>
    </button>
)

export function PlatformToolsGrid() {
  const [activeTool, setActiveTool] = useState(toolsData[0]);
  const activeImage = PlaceHolderImages.find(p => p.id === activeTool.imageId);

  return (
    <section className="bg-sap-gradient text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight">
            Overview of Tools on Our Platform
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-prose mx-auto">
            A comprehensive, modular suite to power every aspect of your clinical trial.
          </p>
        </div>
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 mt-16">
            {toolsData.slice(0, 6).map((tool) => (
                <ToolButton key={tool.id} tool={tool} isActive={activeTool.id === tool.id} onClick={() => setActiveTool(tool)} />
            ))}
        </div>

        <AnimatePresence mode="wait">
            <motion.div
                key={activeTool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="my-16 md:my-20"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-[#a3ff12]">{activeTool.label}</h3>
                        <p className="text-lg text-white/80">{activeTool.description}</p>
                    </div>
                     <div className="relative w-full aspect-video rounded-lg bg-gray-900/50 p-2 border border-white/20 shadow-2xl">
                        {activeImage && (
                            <Image 
                                src={activeImage.imageUrl}
                                alt={activeTool.label}
                                data-ai-hint={activeImage.imageHint}
                                fill
                                className="rounded-md object-cover"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8">
            {toolsData.slice(6).map((tool) => (
                <ToolButton key={tool.id} tool={tool} isActive={activeTool.id === tool.id} onClick={() => setActiveTool(tool)} />
            ))}
        </div>
      </div>
    </section>
  );
}

