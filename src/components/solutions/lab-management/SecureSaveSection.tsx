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
import { DesktopIcon, PhoneIcon, XboxIcon } from "@/components/icons/onedrive-icons";

export function SecureSaveSection() {
    const mainImage = PlaceHolderImages.find(p => p.id === 'conclusion-main-image');

    return (
        <section className="bg-background py-20">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-tight">Securely save and share what’s important</h2>
                </div>

                <Tabs defaultValue="backup" className="w-full">
                    <div className="flex justify-center">
                        <TabsList className="grid w-full max-w-xl grid-cols-2 md:grid-cols-4 h-auto">
                            <TabsTrigger value="backup" className="py-2.5">Back up and protect</TabsTrigger>
                            <TabsTrigger value="access" className="py-2.5">Access from anywhere</TabsTrigger>
                            <TabsTrigger value="rediscover" className="py-2.5">Rediscover and share</TabsTrigger>
                            <TabsTrigger value="copilot" className="py-2.5">Copilot in OneDrive</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="backup" className="mt-16">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="max-w-md">
                                <Accordion type="single" collapsible defaultValue="desktop">
                                    <AccordionItem value="desktop">
                                        <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <DesktopIcon className="h-6 w-6 text-primary" />
                                                For your desktop
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-4 pl-9">
                                            <p className="text-muted-foreground">Back up your important files, photos, apps, and settings so they're available no matter what happens to your device.</p>
                                            <Link href="#" className="text-primary font-semibold mt-4 inline-block hover:underline">Learn more</Link>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="phone">
                                        <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <PhoneIcon className="h-6 w-6 text-primary" />
                                                For your phone
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-4 pl-9">
                                             <p className="text-muted-foreground">Content for phone backup.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="xbox" className="border-b-0">
                                        <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <XboxIcon className="h-6 w-6 text-primary" />
                                                For your Xbox
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-4 pl-9">
                                            <p className="text-muted-foreground">Content for Xbox backup.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="relative flex items-center justify-center">
                               {mainImage && <Image src={mainImage.imageUrl} alt={mainImage.description} width={600} height={450} className="rounded-lg shadow-2xl" />}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}