
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionTitle } from "@/components/shared/section-title";
import { faqItems } from "@/lib/data";

export function ServicesFAQ() {
  return (
    <section>
      <div className="container max-w-4xl mx-auto">
        <SectionTitle
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services."
          className="mb-12"
        />
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left hover:no-underline">{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
