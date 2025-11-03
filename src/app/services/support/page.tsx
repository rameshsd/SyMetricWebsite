
import { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Support Center - SyMetric',
  description: 'Welcome to the SyMetric Support Center. Find answers to frequently asked questions and get in touch with our dedicated support team.',
};

const faqItems = [
  {
    question: "How do I access SyMetric Clinical Trial Platform? Do I need to install any specific software to use it?",
    answer: "The SyMetric Clinical Trial Platform is a web-based application. You can access it through any modern web browser without needing to install any specific software."
  },
  {
    question: "Can SyMetric products integrate with other systems?",
    answer: "Yes, our products are designed for flexibility and can be integrated with other systems, including legacy EDC tools and trial analytics solutions, through our robust data services and APIs."
  },
  {
    question: "How is SyMetric Clinical Trial Platform validated?",
    answer: "Our platform is validated through rigorous internal testing, User Acceptance Testing (UAT), and stringent quality control practices that comply with regulatory standards like 21 CFR Part 11 and ICH-GCP."
  },
  {
    question: "How can I get support for SyMetric’s products and solutions?",
    answer: "You can get support by contacting our dedicated support team via phone or email. We answer most requests within 24 hours. Contact details are provided on this page."
  },
  {
    question: "Is there any limit for the number of Studies, Sites, or Users that can be managed on the SyMetric Clinical Trial Platform?",
    answer: "No, our platform is designed to be highly scalable and can manage a virtually unlimited number of studies, sites, and users to grow with your research needs."
  },
  {
    question: "Can SyMetric Clinical Trial Platform be used for academic research?",
    answer: "Absolutely. Our platform is suitable for academic research, providing powerful tools to accelerate research and development efforts in hospitals and universities."
  },
  {
    question: "Can we change the build Parameters once the Study Build is completed and the Trial has started?",
    answer: "Yes, our platform is flexible and allows for mid-study changes and amendments to the study build without disrupting the ongoing trial."
  },
  {
    question: "Do you have Standard Operating Procedures (SOPs) in place to handle various business processes?",
    answer: "Yes, our solutions are guided by well-defined SOPs that comply with all applicable industry regulations and guidelines to ensure quality and consistency."
  },
  {
    question: "Does the IRT Solution on SyMetric Clinical Trial Platform come with IVRS capabilities?",
    answer: "Yes, our IRT (Interactive Response Technology) solution includes IVRS (Interactive Voice Response System) capabilities for comprehensive trial management."
  },
  {
    question: "How and where is the solution hosted? Can we customize the host of the solutions on our Cloud infrastructure?",
    answer: "Our platform is a SaaS solution available with trusted cloud-hosting options like Microsoft Azure and SAP. We also offer custom deployment models, including dedicated single-tenant solutions or hosting on your own cloud infrastructure."
  },
  {
    question: "Do we get training on how to use SyMetric Products and Solutions?",
    answer: "Yes, we provide comprehensive and customized training services, including online modules and instructor-led sessions, to ensure your workforce can use our solutions efficiently."
  },
  {
    question: "Does SyMetric have a back-up mechanism to deal with system failures?",
    answer: "Yes, we have robust back-up and disaster recovery mechanisms in place to ensure business continuity and data integrity in the event of system failures."
  },
  {
    question: "Is the technical support desk available 24/7?",
    answer: "Yes, our dedicated technical support desk is available 24/7 to provide assistance and answer your queries with a fast turnaround time."
  },
  {
    question: "Can the IRT Solution on SyMetric Clinical Trial Platform manage the reverse supply chain of Clinical Supplies?",
    answer: "Yes, our IRT solution is equipped to manage the complete supply chain, including the reverse logistics of clinical supplies."
  },
  {
    question: "Can the IRT Solution on SyMetric Clinical Trial Platform keep an account of the drugs dispensed to Subjects or Trial Participants?",
    answer: "Yes, the platform accurately tracks and accounts for all drugs dispensed to trial participants, ensuring precise inventory management and accountability."
  }
];

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
