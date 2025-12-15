'use client';

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from '../shared/section-title';

const features = [
    {
        value: "item-1",
        title: "Agile, Patient-Centric Processes",
        description: "Make the shift from traditional trial models to processes driven by our unified Clinical Trial Platform."
    },
    {
        value: "item-2",
        title: "Automation and Simplification",
        description: "Use the power of technology to automate and simplify project management in clinical trials and improve productivity."
    },
    {
        value: "item-3",
        title: "Modular and Integrated Solutions",
        description: "Integrate your processes with our user-friendly applications or choose from comprehensive modules for every stage of your trial."
    }
];

export function RevolutionizingTrialsSection() {
    const image = PlaceHolderImages.find((img) => img.id === 'revolutionizing-trials');

    return (
        <section className="bg-subtle-blue">
            <div className="container">
                <SectionTitle 
                    title="Revolutionizing Clinical Trials With Innovation"
                    description="At SyMetric, we help you make the shift from traditional trial models to agile, patient-centric processes driven by our unified Clinical Trial Platform. With us, you can use the power of technology to automate and simplify project management in clinical trials and improve your productivity."
                    className="mb-16"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="relative">
                        <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                            {features.map((feature) => (
                                 <AccordionItem value={feature.value} key={feature.value} className="border-b">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left py-6">
                                        {feature.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6 pr-4">
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </AccordionContent>
                                 </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                            {image && (
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                data-ai-hint={image.imageHint}
                                fill
                                className="object-cover"
                            />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
