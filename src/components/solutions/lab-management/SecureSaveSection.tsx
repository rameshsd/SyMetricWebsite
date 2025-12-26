
'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Link from "next/link"
import { Building, ClipboardList, Beaker } from "lucide-react";

export function SecureSaveSection() {
    const mainImage = PlaceHolderImages.find(p => p.id === 'lab-management-conclusion');

    return (
        <section className="bg-background py-20" id="conclusion">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-tight">Unified Lab Operations, from Collection to Analysis</h2>
                </div>

                <Tabs defaultValue="setup" className="w-full">
                    <div className="flex justify-center">
                        <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4 h-auto">
                            <TabsTrigger value="setup" className="py-2.5">Configuration & Setup</TabsTrigger>
                            <TabsTrigger value="integration" className="py-2.5">Data Integration</TabsTrigger>
                            <TabsTrigger value="compliance" className="py-2.5">Quality & Compliance</TabsTrigger>
                            <TabsTrigger value="analytics" className="py-2.5">Reporting & Analytics</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="setup" className="mt-16">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="max-w-md">
                                <Accordion type="single" collapsible defaultValue="lab-master">
                                    <AccordionItem value="lab-master">
                                        <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <Building className="h-6 w-6 text-primary" />
                                                Lab Master
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-4 pl-9">
                                            <p className="text-muted-foreground">Define and manage all central and local labs participating in the study, ensuring a single source of truth for all laboratory entities.</p>
                                            <Link href="#" className="text-primary font-semibold mt-4 inline-block hover:underline">Learn more</Link>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="reference-ranges">
                                        <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <ClipboardList className="h-6 w-6 text-primary" />
                                                Reference Ranges
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-4 pl-9">
                                             <p className="text-muted-foreground">Configure and maintain normal ranges by age, gender, and other factors to automatically flag deviations and ensure data accuracy.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="sample-definitions" className="border-b-0">
                                        <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <Beaker className="h-6 w-6 text-primary" />
                                                Sample Definitions
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-4 pl-9">
                                            <p className="text-muted-foreground">Create a central catalog of all sample types, collection criteria, and processing rules required by the study protocol.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="relative flex items-center justify-center">
                               {mainImage && <Image src={mainImage.imageUrl} alt={mainImage.description} data-ai-hint={mainImage.imageHint} width={600} height={450} className="rounded-lg shadow-2xl" />}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
