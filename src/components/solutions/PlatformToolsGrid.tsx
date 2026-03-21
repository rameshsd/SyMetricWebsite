'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  OrganizationIcon,
  StudyIcon,
  SiteIcon,
  SuppliesIcon,
  SubjectIcon,
  DataManagementIcon,
  LabIcon,
  MedicalCodingIcon,
  DataServicesIcon,
  DigitalLearningIcon,
  HelpSupportIcon,
  IdentityAccessIcon,
  CustomerManagementIcon,
  ReportsIcon,
  SampleManagementIcon,
  LabelManagementIcon,
} from '@/components/icons/platform-tool-icons';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const toolsData = [
    {
      id: 'iam',
      icon: IdentityAccessIcon,
      label: 'Identity and Access Management',
      description: 'Secure, centralized control over users, roles, and permissions across all studies and organizations, featuring single sign-on, multi-factor authentication, and self-service account management.',
      imageId: 'tool-iam-1'
    },
    {
      id: 'org-management',
      icon: OrganizationIcon,
      label: 'Organization Management',
      description: 'A centralized directory to define, manage, and link all entities in the clinical trial ecosystem, including sponsors, CROs, sites, labs, and warehouses.',
      imageId: 'tool-org-1'
    },
    {
      id: 'customer',
      icon: CustomerManagementIcon,
      label: 'Customer Management',
      description: 'A centralized module to manage all sponsor and CRO customers, ensuring controlled access, contract-based configurations, and seamless multi-study operations.',
      imageId: 'customer-management-hero'
    },
    {
      id: 'study-management',
      icon: StudyIcon,
      label: 'Study Management',
      description: 'The control center for your trials. Configure study protocols, treatment arms, visit schedules, and operational parameters in a version-controlled environment.',
      imageId: 'tool-study-1'
    },
    {
      id: 'site-management',
      icon: SiteIcon,
      label: 'Site Management',
      description: 'Provides a unified framework to configure, govern, and monitor every site participating in a clinical study, ensuring consistent and compliant operations globally.',
      imageId: 'tool-site-1'
    },
    {
      id: 'supplies-management',
      icon: SuppliesIcon,
      label: 'Clinical Supplies Management',
      description: 'End-to-end control of Investigational Products (IP), packaging, inventory, shipments, retention, and temperature management across global clinical trials.',
      imageId: 'tool-supplies-1'
    },
    {
      id: 'subject-management',
      icon: SubjectIcon,
      label: 'Subject Management',
      description: 'A comprehensive framework to manage every stage of a subject’s journey, from screening and randomization to study completion, ensuring protocol adherence and data accuracy.',
      imageId: 'tool-subject-1'
    },
    {
      id: 'data-management',
      icon: DataManagementIcon,
      label: 'Data Management',
      description: 'A unified ecosystem to design eCRFs, collect subject data, validate accuracy with a powerful rules engine, manage queries, perform SDV, and export analysis-ready datasets.',
      imageId: 'tool-data-1'
    },
    {
      id: 'lab-management',
      icon: LabIcon,
      label: 'Lab Management',
      description: 'Unified lab setup, reference ranges, and automated data uploads to ensure all lab results are standardized, validated, and fully traceable across central and local labs.',
      imageId: 'tool-lab-1'
    },
    {
      id: 'medical-coding',
      icon: MedicalCodingIcon,
      label: 'Medical Coding',
      description: 'Automated and manual coding of clinical terms using MedDRA & WHO-DD with full review, approval workflows, and integrated discrepancy management.',
      imageId: 'tool-coding-1'
    },
    {
      id: 'reports',
      icon: ReportsIcon,
      label: 'Reports',
      description: 'A unified reporting hub that delivers real-time, study-wide insights across sites, subjects, inventory, shipments, data management, and more.',
      imageId: 'reports-hero'
    },
    {
      id: 'learning',
      icon: DigitalLearningIcon,
      label: 'Digital Learning',
      description: 'Empower users with role-based training modules, interactive content, and automated certification to ensure platform proficiency and regulatory compliance.',
      imageId: 'tool-learning-1'
    },
    {
      id: 'data-services',
      icon: DataServicesIcon,
      label: 'Data Services',
      description: 'A powerful and flexible integration framework for securely connecting SyMetric with external clinical platforms like SAP ICSM, Veeva, and other third-party systems.',
      imageId: 'tool-data-svc-1'
    },
    {
      id: 'sample',
      icon: SampleManagementIcon,
      label: 'Sample Management',
      description: 'A powerful, end-to-end module designed to manage the lifecycle of clinical samples—from definition to collection, labeling, shipment, storage, and final analysis.',
      imageId: 'sample-management-hero-2'
    },
    {
      id: 'label',
      icon: LabelManagementIcon,
      label: 'Label Management',
      description: 'A complete end-to-end module for defining, generating, and verifying labels for subjects and samples, ensuring accuracy and compliance.',
      imageId: 'label-management-hero'
    },
    {
      id: 'support',
      icon: HelpSupportIcon,
      label: 'Help and Support',
      description: 'Get instant assistance with context-aware help, guided learning, and an efficient ticketing system for seamless issue resolution across the platform.',
      imageId: 'tool-support-1'
    },
  ];

const ToolButton = ({ tool, isActive, onClick }: { tool: typeof toolsData[0], isActive: boolean, onClick: () => void }) => (
    <button onClick={onClick} className="text-center group flex flex-col items-center gap-2">
        <tool.icon className={cn("h-14 w-14 transition-colors", isActive ? "text-[#bc10b6]" : "text-purple-400 group-hover:text-purple-300")} />
        <div className="text-sm font-semibold max-w-[120px]">
            <p className={cn("transition-colors", isActive ? "text-white" : "text-white/80 group-hover:text-white")}>{tool.label}</p>
             <div className={cn("mt-2 h-1 w-full bg-[#bc10b6] rounded-full transition-transform duration-300", isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50")} />
        </div>
    </button>
)

export function PlatformToolsGrid() {
  const [activeTool, setActiveTool] = useState(toolsData[0]);
  const activeImage = PlaceHolderImages.find(p => p.id === activeTool.imageId);

  return (
    <section 
        className="py-20 text-white" 
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #4f46e5 100%)' }}
    >
      <div className="container">
        <div className="text-center mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">
            Support Every Stake Holder and Strengthen The Process
          </h2>
          <p className="mt-4 text-lg text-white/80 mx-auto">
            A comprehensive, modular suite to power every aspect of your clinical trial.
          </p>
        </div>
      
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-8 mt-16">
            {toolsData.slice(0, 8).map((tool) => (
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
                        <h3 className="text-3xl font-bold text-[#bc10b6]">{activeTool.label}</h3>
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

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-8">
            {toolsData.slice(8).map((tool) => (
                <ToolButton key={tool.id} tool={tool} isActive={activeTool.id === tool.id} onClick={() => setActiveTool(tool)} />
            ))}
        </div>
      </div>
    </section>
  );
}
