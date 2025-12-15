
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const FactItem = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-bold text-primary">{value}</p>
        <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">{label}</p>
    </div>
);

export function CompanyFacts() {
    const facts = {
      founded: '2012',
      employees: '50+',
      countries: '3+',
      customers: '100+'
    };
    
    const companyImage = PlaceHolderImages.find(p => p.id === 'about-hero');

    const accordionItems = [
        {
            value: "fast-facts",
            title: "Fast facts",
            content: (
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
                    <FactItem value={facts.founded} label="Founded" />
                    <FactItem value={facts.employees} label="Employees" />
                    <FactItem value={facts.countries} label="Countries Served" />
                    <FactItem value={facts.customers} label="Successful Trials" />
                </div>
            )
        }
    ]

    return (
        <div className="w-full">
            <div className="max-w-6xl mx-auto">
                 <div className="mb-12">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">SyMetric Company Information</h2>
                    <p className="text-muted-foreground text-lg max-w-prose">
                        SyMetric is a leader in clinical trial technology, providing an integrated platform to manage trials with accuracy and ease. Since 2012, we have been trusted by Pharma Companies, CROs, and Academic Institutions to accelerate research and improve outcomes.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <Accordion type="single" collapsible defaultValue="fast-facts" className="w-full">
                        {accordionItems.map((item, index) => (
                             <AccordionItem value={item.value} key={item.value} className="border-b">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="relative w-full aspect-square max-w-md mx-auto rounded-xl overflow-hidden">
                        {companyImage && (
                            <Image
                                src={companyImage.imageUrl}
                                alt="SyMetric Team"
                                data-ai-hint="team collaboration"
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
