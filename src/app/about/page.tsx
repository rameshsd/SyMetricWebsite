
import { companyInfo } from '@/lib/data';
import { PageHeader } from '@/components/layout/PageHeader';
import { LeadershipSection } from '@/components/layout/LeadershipSection';
import { GrowthStoryTimeline } from '@/components/layout/GrowthStoryTimeline';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { CompanyFacts } from '@/components/layout/CompanyFacts';
import Link from 'next/link';
import CtpPieChart from '@/components/about/CtpPieChart';
import { RevolutionizingTrialsSection } from '@/components/about/RevolutionizingTrialsSection';
import { SectionTitle } from '@/components/shared/section-title';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export const metadata = {
  title: 'About Us - SyMetric',
  description: 'Learn about the history, mission, and team behind SyMetric.',
};

const StrategyCard = ({ title, description }: { title: string, description: React.ReactNode }) => (
  <Card className="bg-background/80 dark:bg-blue-900/50 p-8 rounded-2xl border-white/20 shadow-sm text-foreground">
    <div className="w-12 h-1.5 bg-primary rounded-full mb-4" />
    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
    <div className="text-muted-foreground space-y-3">{description}</div>
  </Card>
);

export default function AboutPage() {
  const secondaryNav = [
    { label: 'Company Information', href: '#company-info' },
    { label: 'Overview', href: '#overview' },
    { label: 'Our story', href: '#our-story' },
    { label: 'Our Growth Story', href: '#growth-story' },
    { label: 'Our strategy', href: '#our-strategy' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Global sponsorships', href: '#sponsorships' },
    { label: 'Equality and inclusion', href: '#equality' },
  ];

  const heroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
  const sponsorshipImage = PlaceHolderImages.find(p => p.id === 'global-sponsorships-soccer');
  const strategyImage = PlaceHolderImages.find(p => p.id === 'strategy-illustration');

  return (
    <div className="bg-background">
      <PageHeader
        title="Company Information"
        breadcrumb={{ href: '/about', label: 'About' }}
        secondaryNav={secondaryNav}
        showTitle={false}
      />
      <div>
        <section id="company-info" className="bg-primary text-primary-foreground py-20 px-0">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Global Company Information
                </h1>
                <p className="max-w-lg text-lg text-primary-foreground/80">
                  With a global network of customers, partners, employees, and thought leaders, SyMetric helps the world run better and improves people's lives.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
                  <Link href="#our-story">Learn More</Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-full min-h-[400px]">
                  {heroImage && (
                      <div className="absolute inset-0 clip-path-polygon-about-hero">
                          <Image 
                              src={heroImage.imageUrl}
                              alt={heroImage.description}
                              data-ai-hint={heroImage.imageHint}
                              fill
                              className="object-cover"
                          />
                      </div>
                  )}
              </div>
            </div>
          </div>
        </section>

        <div id="overview">
          <SectionTitle title="Company Overview" className='pt-20'/>
          <CompanyFacts />
        </div>
        
        <div id="innovation">
          <RevolutionizingTrialsSection />
        </div>

        <section id="our-strategy" className="bg-blue-100/50 py-16">
          <div className="container">
            <div className="text-left mb-12">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">OUR APPROACH</p>
                <h2 className="text-4xl font-bold tracking-tight mt-2">Our Strategy</h2>
                 <p className="mt-2 text-muted-foreground">Our vision and mission drive everything we do.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="relative">
                    <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-b-0">
                            <div className="flex gap-4">
                                <div className="pt-4">
                                    <div className="w-1 h-full bg-border transition-colors data-[state=open]:bg-primary"></div>
                                </div>
                                <div className="flex-1">
                                    <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left py-4">
                                        Vision
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6 pr-4">
                                        <p className="text-lg font-semibold text-foreground">To accelerate the impact of clinical research on healthcare outcomes through digital interventions.</p>
                                        <p className="text-muted-foreground mt-2">We are committed to building technology solutions that stimulate research for the advancement of Patient-Centric medical science. At the core of our vision lies our efforts to make clinical research less resource-intensive and more affordable.</p>
                                    </AccordionContent>
                                </div>
                            </div>
                        </AccordionItem>
                         <AccordionItem value="item-2" className="border-b-0">
                            <div className="flex gap-4">
                                <div className="pt-4">
                                    <div className="w-1 h-full bg-border transition-colors data-[state=open]:bg-primary"></div>
                                </div>
                                <div className="flex-1">
                                    <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left py-4">
                                        Mission
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6 pr-4">
                                       <p className="text-lg font-semibold text-foreground">To transform the drug development landscape.</p>
                                       <p className="text-muted-foreground mt-2">The SyMetric team works persistently towards this mission by helping systems adopt innovative digital technologies that improve productivity, lower costs, and assure safety.</p>
                                    </AccordionContent>
                                </div>
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="relative flex items-center justify-center">
                    <div className="relative w-full aspect-video">
                        {strategyImage && (
                        <Image
                            src={strategyImage.imageUrl}
                            alt={strategyImage.description}
                            data-ai-hint={strategyImage.imageHint}
                            fill
                            className="rounded-2xl object-cover shadow-lg"
                        />
                        )}
                    </div>
                </div>
            </div>
          </div>
        </section>

        <CtpPieChart />
        
        <div id="our-story">
          <SectionTitle title="Our Story" className='pt-20' />
          <LeadershipSection />
          <GrowthStoryTimeline />
        </div>

        <section id="sponsorships" className="bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight mb-12">Global Sponsorships</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  {sponsorshipImage && (
                    <Image
                      src={sponsorshipImage.imageUrl}
                      alt={sponsorshipImage.description}
                      data-ai-hint={sponsorshipImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    As the leader in technology software, SAP is proud to expand our relationships within the sports and entertainment world. Partnerships with world-class teams, leagues, and properties have afforded us the ability to create technology solutions that engage fans, media, players, and coaches on another level, integrating real-time cloud-based analytics.
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto text-primary font-semibold">
                    <Link href="#">
                      Explore SAP sponsorships <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="equality" className="bg-secondary/50">
          <div className="container text-center">
            <SectionTitle title="Equality and Inclusion" description="This is a placeholder for the Equality and Inclusion section." />
          </div>
        </section>
      </div>
    </div>
  );
}
