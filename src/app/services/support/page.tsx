
import { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';
import { faqItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Support Center - SyMetric',
  description: 'Welcome to the SyMetric Support Center. Find answers to frequently asked questions and get in touch with our dedicated support team.',
};

export default function SupportPage() {
  const secondaryNav = [
    { label: 'Overview', href: '#overview' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <PageHeader
        title="Support"
        breadcrumb={{ href: '/services', label: 'Services' }}
        secondaryNav={secondaryNav}
      />
      
      <div>
        <section id="overview" className="w-full min-h-[400px] flex items-center bg-primary/5 dark:bg-card py-20">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome to SyMetric Support Center!
              </h1>
              <p className="mt-6 max-w-prose text-lg text-muted-foreground md:text-xl/relaxed mx-auto">
                Our dedicated support team proactively helps you optimize your performance and improve speed by being your reliable technology partner. We save time for your team by helping you move faster on the cloud and focus on your core business. Close to 99% of the requests we receive are answered at best within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <section id="faqs">
          <div className="container max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Frequently Asked Questions</h2>
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

        <section id="contact" className="bg-secondary/50">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Need more help?</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                          <Phone className="h-8 w-8 text-primary"/>
                          <CardTitle>Call Us</CardTitle>
                      </CardHeader>
                      <CardContent className="text-muted-foreground">
                          <p>+91 (80) 4113 540</p>
                          <p>+91 97402 72700</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                          <Mail className="h-8 w-8 text-primary"/>
                          <CardTitle>Email Us</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <a href="mailto:support@symetricsystems.com" className="text-primary hover:underline">support@symetricsystems.com</a>
                      </CardContent>
                  </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

    