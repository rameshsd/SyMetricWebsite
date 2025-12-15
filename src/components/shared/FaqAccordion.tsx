'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionTitle } from './section-title';

interface FAQ {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FAQ[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleAll = (expand: boolean) => {
    if (expand) {
      setOpenItems(faqs.map((_, index) => `item-${index}`));
    } else {
      setOpenItems([]);
    }
  };

  return (
    <section className="py-20" id="faq">
      <div className="container max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <SectionTitle title="Frequently asked questions" className="!mb-0" />
          <div className="hidden md:flex gap-2">
            <Button variant="outline" onClick={() => toggleAll(true)}>Expand all</Button>
            <Button variant="outline" onClick={() => toggleAll(false)}>Collapse all</Button>
          </div>
        </div>

        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="w-full space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 group">
                <div className="flex items-start gap-6">
                   <span className="text-sm font-medium text-primary mt-1">
                    {String(index + 1).padStart(2, '0')}/
                  </span>
                  <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </div>
                 <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    {openItems.includes(`item-${index}`) ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-8 pb-6">
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
