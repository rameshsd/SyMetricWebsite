
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";

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
    images: ["tool-org-1"],
  },
  { 
    id: "study-management",
    icon: Book, 
    label: "Study Management",
    description: "Define, configure, and oversee all aspects of your clinical studies.",
    images: ["tool-study-1"],
  },
  { 
    id: "site-management",
    icon: Hospital, 
    label: "Site Management",
    description: "Streamline site activation, monitoring, and communication.",
    images: ["tool-site-1"],
  },
  { 
    id: "supplies-management",
    icon: Beaker, 
    label: "Clinical Supplies Management",
    description: "Track and manage investigational products and trial supplies in real-time.",
    images: ["tool-supplies-1"],
  },
  { 
    id: "subject-management",
    icon: Users, 
    label: "Subject Management",
    description: "Handle subject enrollment, randomization, and tracking throughout the trial lifecycle.",
    images: ["tool-subject-1"],
  },
  { 
    id: "data-management",
    icon: Database, 
    label: "Data Management",
    description: "Global Library, Data Designer, Data Validation Manager, Data Collection, Discrepancy Management, Source Data Verification, and Data Exports",
    images: ["tool-iam-1"],
  },
  { 
    id: "lab-management",
    icon: FlaskConical, 
    label: "Lab Management",
    description: "Manage lab data, normal ranges, and sample tracking with ease.",
    images: ["tool-iam-1"],
  },
  { 
    id: "medical-coding",
    icon: ClipboardList, 
    label: "Medical Coding",
    description: "Standardize medical terms with integrated coding dictionaries like MedDRA and WHODrug.",
    images: ["tool-iam-1"],
  },
  { 
    id: "data-services",
    icon: LayoutGrid, 
    label: "Data Services",
    description: "Custom data exports, integrations, and reporting services.",
    images: ["tool-iam-1"],
  },
  { 
    id: "learning",
    icon: GraduationCap, 
    label: "Digital Learning",
    description: "Provide training and certification for trial personnel directly on the platform.",
    images: ["tool-iam-1"],
  },
  { 
    id: "support",
    icon: LifeBuoy, 
    label: "Help and Support",
    description: "Access our dedicated support team and comprehensive knowledge base.",
    images: ["tool-iam-1"],
  },
];


export function PlatformToolsGrid() {
  const [selectedTool, setSelectedTool] = useState(toolsData[0]);

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Overview of Tools on Our Platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive, modular suite to power every aspect of your clinical trial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 sticky top-24">
                <ScrollArea className="h-full max-h-[600px] pr-4">
                    <div className="space-y-2">
                        {toolsData.map((tool) => (
                            <button 
                                key={tool.id} 
                                onClick={() => setSelectedTool(tool)}
                                className={cn(
                                    "w-full flex items-center gap-4 p-3 rounded-lg text-left transition-all duration-200",
                                    selectedTool.id === tool.id 
                                        ? "bg-primary/10 text-primary font-semibold shadow-sm" 
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                )}
                            >
                                <div className={cn(
                                    "flex items-center justify-center h-10 w-10 rounded-lg shrink-0",
                                    selectedTool.id === tool.id ? "bg-primary/20" : "bg-muted"
                                )}>
                                    <tool.icon className="h-6 w-6" />
                                </div>
                                <span className="text-sm">{tool.label}</span>
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </div>
            
            <div className="md:col-span-2">
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
                            <Carousel className="w-full rounded-lg overflow-hidden border shadow-lg">
                                <CarouselContent>
                                {selectedTool.images.map((imageId, index) => {
                                    const image = PlaceHolderImages.find(p => p.id === imageId);
                                    return (
                                        <CarouselItem key={index}>
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
