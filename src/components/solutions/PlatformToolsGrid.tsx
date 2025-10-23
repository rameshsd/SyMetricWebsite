
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
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-16 md:py-24 bg-[#0a0029] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">
            Overview of Tools on Our Platform
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {toolsData.map((tool) => (
            <button key={tool.id} onClick={() => setSelectedTool(tool)}>
              <Card 
                className={cn(
                    "text-center bg-transparent border-none shadow-none transition-all duration-300",
                    selectedTool.id === tool.id ? "text-primary" : "text-white/70 hover:text-white"
                )}
              >
                <CardContent className="p-4">
                  <tool.icon className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="font-semibold text-sm">{tool.label}</h3>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
        
        {selectedTool && (
          <div className="mt-20 pt-10 border-t border-white/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-300">{selectedTool.label}</h3>
                <p className="mt-2 text-lg text-white/80">{selectedTool.description}</p>
              </div>
              <div className="relative">
                 <Carousel className="w-full max-w-xl mx-auto">
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
                                    className="rounded-lg shadow-2xl object-contain"
                                />
                              )}
                          </CarouselItem>
                       )
                    })}
                  </CarouselContent>
                  {selectedTool.images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-[-50px] text-white" />
                      <CarouselNext className="right-[-50px] text-white" />
                    </>
                  )}
                </Carousel>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

