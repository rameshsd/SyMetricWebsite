
import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Briefcase, FileText, Settings, Database, Beaker, Code, Layers, ShieldCheck, LifeBuoy, PlayCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { PlatformAnimation } from '@/components/animations/PlatformAnimation';

export const metadata: Metadata = {
  title: 'Clinical Trial Platform - SyMetric',
  description: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools.',
};

const ToolCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description?: string }) => (
    <Card className="text-center h-full">
        <CardContent className="p-6">
            <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{title}</h3>
            {description && <p className="text-sm text-muted-foreground mt-2">{description}</p>}
        </CardContent>
    </Card>
);

const AdvantageItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start gap-3">
        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
        <p className="text-muted-foreground">{children}</p>
    </div>
)

export default function ClinicalTrialPlatformPage() {
    const irtImage = PlaceHolderImages.find(p => p.id === 'irt-iwrs-image');
    const edcImage = PlaceHolderImages.find(p => p.id === 'edc-image');
    const ctmImage = PlaceHolderImages.find(p => p.id === 'ctm-image');
    const collaborationImage = PlaceHolderImages.find(p => p.id === 'collaboration-image');
    const hostingImage = PlaceHolderImages.find(p => p.id === 'hosting-providers-image');
    const securityImage = PlaceHolderImages.find(p => p.id === 'security-compliance-image');
    const privacyImage = PlaceHolderImages.find(p => p.id === 'data-privacy-image');
    const businessDataCloudImage = {
        "id": "sap-business-data-cloud",
        "description": "SAP Business Data Cloud diagram",
        "imageUrl": "https://storage.googleapis.com/aai-web-samples/product-screenshots/sap-business-data-cloud.png",
        "imageHint": "data cloud diagram"
    };
    
  return (
    <>
        <ProductPageHeader productName="Clinical Trial Platform" />
        <section className="py-12 md:py-16 lg:py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">SyMetric Clinical Trial Platform</h1>
                      <p className="text-xl text-muted-foreground">Designed and built to be an end-to-end platform for Clinical Trials, this Cloud-Based Solution features fully modular tools that allow you to pick and configure them according to your needs.</p>
                  </div>
                  <div className="flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                    <PlatformAnimation />
                  </div>
              </div>
            </div>
        </section>
        
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold">Built With Purpose</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                      Our platform is built for the cloud era with modular, integrated tools that are designed to provide flexibility. Whether you are a Pharmaceutical Company, Clinical Research Organization, or an Academic Institution, our Platform can be tailored to your Study requirements, including Adaptive Trials, Umbrella Trials, Basket Studies, and Virtual Clinical Trials.
                  </p>
              </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What is SAP Business Data Cloud?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SAP Business Data Cloud is a fully managed SaaS solution that unifies and governs all SAP data and seamlessly connects with third-party data—giving line-of-business leaders context to make even more impactful decisions.
              </p>
            </div>
            <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src={businessDataCloudImage.imageUrl}
                  alt={businessDataCloudImage.description}
                  data-ai-hint={businessDataCloudImage.imageHint}
                  width={600}
                  height={450}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-black/50 rounded-full p-3 text-white hover:bg-black/70 transition-colors">
                    <PlayCircle className="h-16 w-16" />
                  </button>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold">Transform outcomes with intelligent applications</h3>
                  <p className="mt-2 text-muted-foreground">Automate, adapt, and learn in real time with AI-powered applications that understand your business.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Connect all your data</h3>
                  <p className="mt-2 text-muted-foreground">Harmonise all your mission-critical data with an open data ecosystem, leveraging a powerful semantic layer to give you an unmatched knowledge of your business.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Foster reliable AI</h3>
                  <p className="mt-2 text-muted-foreground">Ensure data across applications and operations has a foundation for generative AI that is reliable, responsible, and relevant.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button size="lg">Take the product tour</Button>
                    <Button variant="link" asChild className="text-primary">
                        <Link href="#">Watch the demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-12">Overview of Tools on Our Platform</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <ToolCard icon={Users} title="Identity and Access Management" />
                  <ToolCard icon={Briefcase} title="Organization Management" />
                  <ToolCard icon={FileText} title="Study Management" />
                  <ToolCard icon={Settings} title="Site Management" />
                  <ToolCard icon={Beaker} title="Clinical Supplies Management" />
                  <ToolCard icon={Users} title="Subject Management" />
                  <ToolCard icon={Database} title="Data Management" />
                  <ToolCard icon={Beaker} title="Lab Management" />
                  <ToolCard icon={Code} title="Medical Coding" />
                  <ToolCard icon={Layers} title="Data Services" />
                  <ToolCard icon={ShieldCheck} title="Digital Learning" />
                  <ToolCard icon={LifeBuoy} title="Help and Support" />
              </div>
              <Card className="mt-12">
                  <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Data Management</h3>
                      <p className="text-muted-foreground">Global Library, Data Designer, Data Validation Manager, Data Collection, Discrepancy Management, Source Data Verification, and Data Exports</p>
                  </CardContent>
              </Card>
            </div>
        </section>
        
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold">Explore Our Solutions</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                      {irtImage && <Image src={irtImage.imageUrl} alt={irtImage.description} data-ai-hint={irtImage.imageHint} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />}
                      <CardHeader>
                          <CardTitle>IRT/IWRS</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Developed with years of strong industry expertise and tested to deliver against the most complex Clinical Trial designs, our IRT/IWRS solution is the most comprehensive one in the market today.</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                          <Button variant="link" className="p-0">Find out more</Button>
                      </div>
                  </Card>
                  <Card>
                      {edcImage && <Image src={edcImage.imageUrl} alt={edcImage.description} data-ai-hint={edcImage.imageHint} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />}
                      <CardHeader>
                          <CardTitle>EDC</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">The Electronic Data Capture solution includes well-designed tools that transform the Data Management processes and simplify and automate the Data flow and validation of Data in Clinical Trials.</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                          <Button variant="link" className="p-0">Find out more</Button>
                      </div>
                  </Card>
                  <Card>
                      {ctmImage && <Image src={ctmImage.imageUrl} alt={ctmImage.description} data-ai-hint={ctmImage.imageHint} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />}
                      <CardHeader>
                          <CardTitle>CTM</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">The Clinical Trial Master provides various repositories to maintain Global objects, including a repository of Trial Sites, Labs, Organizations, Global Data Libraries, and more.</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                          <Button variant="link" className="p-0">Find out more</Button>
                      </div>
                  </Card>
              </div>
            </div>
        </section>

        <section className="bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                      <h2 className="text-3xl font-bold mb-4">Our Collaboration Vision</h2>
                      <p className="text-muted-foreground mb-4">Clinical Trials are conducted by numerous organizations which employ several highly skilled teams and individuals to perform unique and complex roles. For a Trial to be successful, the activities and tasks of these Teams and Individuals must be synchronized and documented.</p>
                      <p className="text-muted-foreground">The SyMetric Platform provides a virtual collaborative environment that is secure, user-friendly, and intuitive. It streamlines the communication among the multiple teams involved in a Trial and provides the necessary tools for effective data capture and decision-making. This Collaboration Model along with fully customizable role-based authorizations enables teams and individuals with secure and real-time access to Trial Data.</p>
                  </div>
                  {collaborationImage && (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <Image src={collaborationImage.imageUrl} alt={collaborationImage.description} data-ai-hint={collaborationImage.imageHint} fill className="object-cover" />
                      </div>
                  )}
              </div>
            </div>
        </section>
        
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                      <h2 className="text-3xl font-bold mb-4">CTMS</h2>
                      <p className="text-muted-foreground mb-4">Affordable and Scalable, Globally</p>
                      <p className="text-muted-foreground">Over the years, we have delivered safe and reliable solutions to all our clients across India and abroad. We prove our commitment to our Global Customer base by ensuring regulatory compliance and security.</p>
                  </div>
                  <div className="order-1 md:order-2">
                      <Card className="bg-primary text-primary-foreground p-8">
                          <CardTitle className="text-2xl mb-4">Looking for Customized Hosting and Deployment Models?</CardTitle>
                          <p className="mb-4">Our Clinical Trial Platform is a SaaS Solution that is available with the most trusted and compliant Cloud-Hosting options.</p>
                          <div className="flex gap-4 items-center mb-6">
                              <p>Microsoft</p>
                              <p>SyMetric</p>
                              <p>Clouds</p>
                          </div>
                          <p className="mb-4">Get in touch with us to customize your solutions — whether for a dedicated single-tenant solution or a completely custom deployment model.</p>
                          <Button variant="secondary" asChild>
                              <Link href="/contact">Contact us</Link>
                          </Button>
                      </Card>
                  </div>
              </div>
            </div>
        </section>
        
        <section className="bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold">The SyMetric Advantage</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  <AdvantageItem>Fully Integrated Application with Modularized Experience</AdvantageItem>
                  <AdvantageItem>Simple and Intuitive User Interface</AdvantageItem>
                  <AdvantageItem>Single Sign-On Feature</AdvantageItem>
                  <AdvantageItem>Highly Flexible and Customizable for Research studies</AdvantageItem>
                  <AdvantageItem>Reusable Forms and Business Rules</AdvantageItem>
                  <AdvantageItem>Compliant With 21 CFR Part 11 and ICH-GCP Guidelines</AdvantageItem>
                  <AdvantageItem>Real-Time Reports and Dashboards</AdvantageItem>
                  <AdvantageItem>24x7 Dedicated Technical Support</AdvantageItem>
              </div>
            </div>
        </section>
        
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                      <h2 className="text-3xl font-bold mb-4">Security and Compliance</h2>
                      <p className="text-muted-foreground mb-4">Build data security from the ground up with the backing of our team of experts. We ensure that you meet regulatory requirements (Data protection laws, Good Clinical Practice guidelines, and more) through proactive compliance measures that use well-defined policies, processes, and a robust Standard Operating Procedure framework. Our methods are trusted by large Pharmaceutical Organizations, CROs, and Academic Institutions.</p>
                      <div className="flex gap-4 font-semibold">
                          <p>ISO 27001</p>
                          <p>ISO 9001</p>
                          <p>21 CFR Part 11 (US FDA)</p>
                          <p>ICH-GCP</p>
                      </div>
                  </div>
                  {securityImage && (
                      <div className="relative w-full aspect-square max-w-sm mx-auto">
                          <Image src={securityImage.imageUrl} alt={securityImage.description} data-ai-hint={securityImage.imageHint} fill className="object-cover rounded-lg" />
                      </div>
                  )}
              </div>
            </div>
        </section>

         <section className="bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                      <h2 className="text-3xl font-bold mb-4">Uncompromised Commitment to Data Privacy</h2>
                      <p className="text-muted-foreground mb-4">We go to great lengths to ensure that you have full control over data that powers your research. When it comes to data privacy, our resolve is unmatched and we are only custodians of data that is yours.</p>
                      <Button variant="link" asChild className="p-0">
                          <Link href="#">Read our privacy policy</Link>
                      </Button>
                  </div>
                  {privacyImage && (
                      <div className="relative w-full aspect-square max-w-sm mx-auto order-1 md:order-2">
                          <Image src={privacyImage.imageUrl} alt={privacyImage.description} data-ai-hint={privacyImage.imageHint} fill className="object-cover rounded-lg" />
                      </div>
                  )}
              </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center">
                  <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
                  <div className="flex gap-4 justify-center">
                      <Button size="lg" asChild><Link href="/contact">Get a demo</Link></Button>
                      <Button size="lg" variant="outline" asChild><Link href="/contact">Contact us for pricing</Link></Button>
                  </div>
              </div>
            </div>
        </section>
    </>
  );
}
