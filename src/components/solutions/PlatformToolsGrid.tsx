
"use client";

import {
  IdentityIcon,
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
  HelpIcon
} from '@/components/icons/collaboration-icons';
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from '../ui/card';

const toolsData = [
  { 
    id: "iam",
    icon: IdentityIcon, 
    label: "Identity and Access Management",
    description: "Role-Based Access Control and Self-Service Account Management.",
    images: ["tool-iam-1", "tool-iam-2"],
  },
  { 
    id: "org-management",
    icon: OrganizationIcon, 
    label: "Organization Management",
    description: "Manage all organizations participating in your trials from a central location.",
    images: ["tool-org-1", "tool-org-2"],
  },
  { 
    id: "study-management",
    icon: StudyIcon, 
    label: "Study Management",
    description: "Define, configure, and oversee all aspects of your clinical studies.",
    images: ["tool-study-1", "tool-study-2"],
  },
  { 
    id: "site-management",
    icon: SiteIcon, 
    label: "Site Management",
    description: "Streamline site activation, monitoring, and communication.",
    images: ["tool-site-1", "tool-site-2"],
  },
  { 
    id: "supplies-management",
    icon: SuppliesIcon, 
    label: "Clinical Supplies Management",
    description: "Track and manage investigational products and trial supplies in real-time.",
    images: ["tool-supplies-1", "tool-supplies-2"],
  },
  { 
    id: "subject-management",
    icon: SubjectIcon, 
    label: "Subject Management",
    description: "Handle subject enrollment, randomization, and tracking throughout the trial lifecycle.",
    images: ["tool-subject-1", "tool-subject-2"],
  },
  { 
    id: "data-management",
    icon: DataManagementIcon, 
    label: "Data Management",
    description: "Global Library, Data Designer, Data Validation Manager, Data Collection, Discrepancy Management, Source Data Verification, and Data Exports",
    images: ["tool-data-1", "tool-data-2"],
  },
  { 
    id: "lab-management",
    icon: LabIcon, 
    label: "Lab Management",
    description: "Manage lab data, normal ranges, and sample tracking with ease.",
    images: ["tool-lab-1", "tool-lab-2"],
  },
  { 
    id: "medical-coding",
    icon: MedicalCodingIcon, 
    label: "Medical Coding",
    description: "Standardize medical terms with integrated coding dictionaries like MedDRA and WHODrug.",
    images: ["tool-coding-1", "tool-coding-2"],
  },
  { 
    id: "data-services",
    icon: DataServicesIcon, 
    label: "Data Services",
    description: "Custom data exports, integrations, and reporting services.",
    images: ["tool-data-svc-1", "tool-data-svc-2"],
  },
  { 
    id: "learning",
    icon: DigitalLearningIcon, 
    label: "Digital Learning",
    description: "Provide training and certification for trial personnel directly on the platform.",
    images: ["tool-learning-1", "tool-learning-2"],
  },
  { 
    id: "support",
    icon: HelpIcon, 
    label: "Help and Support",
    description: "Access our dedicated support team and comprehensive knowledge base.",
    images: ["tool-support-1", "tool-support-2"],
  },
];


export function PlatformToolsGrid() {

  return (
    <section className="bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Overview of Tools on Our Platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose mx-auto">
            A comprehensive, modular suite to power every aspect of your clinical trial.
          </p>
        </div>
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-12">
            {toolsData.map((tool) => (
                <div key={tool.id} className="flex flex-col items-center text-center group">
                    <div className={cn(
                        "flex items-center justify-center h-24 w-24 rounded-lg shrink-0 transition-all duration-300 group-hover:scale-110"
                    )}>
                        <tool.icon className={cn("h-full w-full text-primary")} />
                    </div>
                    <span className="text-sm font-semibold mt-4 text-foreground">{tool.label}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
