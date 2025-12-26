
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

const AccordionContentSection = () => {
    const mainImage = PlaceHolderImages.find(p => p.id === 'conclusion-main-image');

    return (
        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">For your desktop</h3>
                <p className="text-muted-foreground">
                    Back up your important files, photos, apps, and settings so they&apos;re available no matter what happens to your device.
                </p>
                <Button variant="link" asChild className="p-0">
                    <Link href="#">Learn more</Link>
                </Button>
            </div>
            <div className="relative w-full aspect-[4/3]">
                {mainImage && (
                    <Image 
                        src={mainImage.imageUrl}
                        alt={mainImage.description}
                        fill
                        className="object-contain"
                    />
                )}
            </div>
        </div>
    );
};


export function ConclusionSection() {

  return (
    <section id="conclusion" className="bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Securely save and share what&apos;s important</h2>
        </div>

        <Tabs defaultValue="backup" className="mt-12">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-4">
                <TabsTrigger value="backup">Back up and protect</TabsTrigger>
                <TabsTrigger value="access">Access from anywhere</TabsTrigger>
                <TabsTrigger value="rediscover">Rediscover and share</TabsTrigger>
                <TabsTrigger value="copilot">Copilot in OneDrive</TabsTrigger>
            </TabsList>
            <TabsContent value="backup">
                <Accordion type="single" collapsible defaultValue="desktop" className="w-full max-w-4xl mx-auto">
                    <AccordionItem value="desktop">
                        <AccordionTrigger className="text-lg font-semibold">For your desktop</AccordionTrigger>
                        <AccordionContent>
                           <AccordionContentSection />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="phone">
                        <AccordionTrigger className="text-lg font-semibold">For your phone</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-muted-foreground p-4">Content for your phone goes here.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="xbox">
                        <AccordionTrigger className="text-lg font-semibold">For your Xbox</AccordionTrigger>
                         <AccordionContent>
                            <p className="text-muted-foreground p-4">Content for your Xbox goes here.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </TabsContent>
            <TabsContent value="access">
                <p className="text-center p-8 text-muted-foreground">Access from anywhere content.</p>
            </TabsContent>
            <TabsContent value="rediscover">
                <p className="text-center p-8 text-muted-foreground">Rediscover and share content.</p>
            </TabsContent>
            <TabsContent value="copilot">
                <p className="text-center p-8 text-muted-foreground">Copilot in OneDrive content.</p>
            </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
