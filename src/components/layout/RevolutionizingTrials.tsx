'use client';

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const features = [
    {
        value: "item-1",
        title: "Accelerate trial timelines",
        description: "Go from study setup to submission faster than ever. Our unified platform automates manual tasks, streamlines workflows, and provides real-time data access to eliminate bottlenecks and accelerate every phase of your trial."
    },
    {
        value: "item-2",
        title: "Unify data and teams",
        description: "Break down data silos and connect your sponsors, CROs, sites, and patients on a single platform. Ensure data integrity and a single source of truth for more reliable, high-quality outcomes."
    },
    {
        value: "item-3",
        title: "Ensure compliance and security",
        description: "Navigate complex regulations with confidence. Our platform is built with 21 CFR Part 11 and ICH-GCP guidelines at its core, ensuring your data is secure, and your trial is always audit-ready."
    },
    {
        value: "item-4",
        title: "Scale with confidence",
        description: "Whether you're running a single-site study or a complex global trial, our modular and scalable platform adapts to your needs, allowing you to innovate and expand without technology constraints."
    },
];

export function RevolutionizingTrials() {
  const image = PlaceHolderImages.find((img) => img.id === 'revolutionizing-trials');

  return (
    <section className="w-full bg-subtle-blue py-20">
      <div className="container">
        <div className="text-left mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">HOW IT WORKS</p>
            <h2 className="text-4xl font-bold tracking-tight mt-2">Revolutionizing Clinical Trials</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
                <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                    {features.map((feature, index) => (
                         <AccordionItem value={feature.value} key={feature.value} className="border-b-0">
                            <div className="flex gap-4">
                                <div className="pt-4">
                                    <div className="w-1 h-full bg-border transition-colors data-[state=open]:bg-primary"></div>
                                </div>
                                <div className="flex-1">
                                    <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left py-4">
                                        {feature.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-8 pr-4">
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </AccordionContent>
                                </div>
                            </div>
                         </AccordionItem>
                    ))}
                </Accordion>
                <div className="mt-8">
                    <Button asChild>
                        <Link href="/about">
                            Know More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <div className="relative w-full aspect-video">
                    {image && (
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="rounded-2xl object-cover shadow-lg"
                    />
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
