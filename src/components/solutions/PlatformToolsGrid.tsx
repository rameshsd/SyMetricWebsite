
"use client";

import {
  Users,
  Building,
  Book,
  Hospital,
  Beaker,
  ClipboardList,
  Database,
  FlaskConical,
  GraduationCap,
  LifeBuoy,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";
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

const toolsData = [
  { 
    id: "iam",
    icon: ShieldCheck, 
    label: "Identity and Access Management",
    description: "Role-Based Access Control and Self-Service Account Management.",
    images: ["tool-iam-1", "tool-iam-2"],
  },
  { 
    id: "org-management",
    icon: Building, 
    label: "Organization Management",
    description: "Manage all organizations participating in your trials from a central location.",
    images: ["tool-org-1", "tool-org-2"],
  },
  { 
    id: "study-management",
    icon: Book, 
    label: "Study Management",
    description: "Define, configure, and oversee all aspects of your clinical studies.",
    images: ["tool-study-1", "tool-study-2"],
  },
  { 
    id: "site-management",
    icon: Hospital, 
    label: "Site Management",
    description: "Streamline site activation, monitoring, and communication.",
    images: ["tool-site-1", "tool-site-2"],
  },
  { 
    id: "supplies-management",
    icon: Beaker, 
    label: "Clinical Supplies Management",
    description: "Track and manage investigational products and trial supplies in real-time.",
    images: ["tool-supplies-1", "tool-supplies-2"],
  },
  { 
    id: "subject-management",
    icon: Users, 
    label: "Subject Management",
    description: "Handle subject enrollment, randomization, and tracking throughout the trial lifecycle.",
    images: ["tool-subject-1", "tool-subject-2"],
  },
  { 
    id: "data-management",
    icon: Database, 
    label: "Data Management",
    description: "Global Library, Data Designer, Data Validation Manager, Data Collection, Discrepancy Management, Source Data Verification, and Data Exports",
    images: ["tool-data-1", "tool-data-2"],
  },
  { 
    id: "lab-management",
    icon: FlaskConical, 
    label: "Lab Management",
    description: "Manage lab data, normal ranges, and sample tracking with ease.",
    images: ["tool-lab-1", "tool-lab-2"],
  },
  { 
    id: "medical-coding",
    icon: ClipboardList, 
    label: "Medical Coding",
    description: "Standardize medical terms with integrated coding dictionaries like MedDRA and WHODrug.",
    images: ["tool-coding-1", "tool-coding-2"],
  },
  { 
    id: "data-services",
    icon: LayoutGrid, 
    label: "Data Services",
    description: "Custom data exports, integrations, and reporting services.",
    images: ["tool-data-svc-1", "tool-data-svc-2"],
  },
  { 
    id: "learning",
    icon: GraduationCap, 
    label: "Digital Learning",
    description: "Provide training and certification for trial personnel directly on the platform.",
    images: ["tool-learning-1", "tool-learning-2"],
  },
  { 
    id: "support",
    icon: LifeBuoy, 
    label: "Help and Support",
    description: "Access our dedicated support team and comprehensive knowledge base.",
    images: ["tool-support-1", "tool-support-2"],
  },
];


export function PlatformToolsGrid() {
  const [selectedTool, setSelectedTool] = useState(toolsData[0]);

  return (
    <section className="bg-secondary/50 flex flex-col">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Overview of Tools on Our Platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose mx-auto">
            A comprehensive, modular suite to power every aspect of your clinical trial.
          </p>
        </div>
      
        <div className="flex-grow grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 lg:col-span-4 sticky top-24 h-auto md:h-[calc(100vh-20rem)]">
                <ScrollArea className="h-full pr-4">
                    <div className="space-y-2">
                        {toolsData.map((tool) => (
                            <button 
                                key={tool.id} 
                                onClick={() => setSelectedTool(tool)}
                                className={cn(
                                    "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200",
                                    selectedTool.id === tool.id 
                                        ? "bg-primary text-primary-foreground font-semibold shadow-md" 
                                        : "text-foreground hover:bg-background/50"
                                )}
                            >
                                <div className={cn(
                                    "flex items-center justify-center h-8 w-8 rounded-lg shrink-0",
                                    selectedTool.id === tool.id ? "bg-primary-foreground/20" : "bg-primary/10"
                                )}>
                                    <tool.icon className={cn("h-5 w-5", selectedTool.id === tool.id ? "text-primary-foreground" : "text-primary")} />
                                </div>
                                <span className="text-sm font-medium">{tool.label}</span>
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8 sticky top-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTool.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-primary">{selectedTool.label}</h3>
                            <p className="mt-2 text-lg text-muted-foreground">{selectedTool.description}</p>
                        </div>
                        
                        <div className="relative">
                            <Carousel className="w-full rounded-2xl overflow-hidden border shadow-lg bg-background">
                                <CarouselContent>
                                {selectedTool.images.map((imageId, index) => {
                                    const image = PlaceHolderImages.find(p => p.id === imageId);
                                    return (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                {image && (
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={image.description}
                                                    width={800}
                                                    height={500}
                                                    data-ai-hint={image.imageHint}
                                                    className="object-contain w-full"
                                                />
                                                )}
                                            </div>
                                        </CarouselItem>
                                    )
                                })}
                                </CarouselContent>
                                {selectedTool.images.length > 1 && (
                                <>
                                    <CarouselPrevious className="left-4" />
                                    <CarouselNext className="right-4" />
                                </>
                                )}
                            </Carousel>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
}
