
'use client';

import { companyInfo } from '@/lib/data';
import { PageHeader } from '@/components/layout/PageHeader';
import { LeadershipSection } from '@/components/layout/LeadershipSection';
import { GrowthStoryTimeline } from '@/components/layout/GrowthStoryTimeline';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { CompanyOverview } from '@/components/layout/CompanyOverview';
import Link from 'next/link';
import CtpPieChart from '@/components/about/CtpPieChart';
import { RevolutionizingTrialsSection } from '@/components/about/RevolutionizingTrialsSection';
import { SectionTitle } from '@/components/shared/section-title';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { contentSchemas } from '@/lib/content-schemas';

export default function AboutPage() {
  const firestore = useFirestore();
  const contentDocRef = useMemoFirebase(() => firestore ? doc(firestore, 'pageContent', 'about') : null, [firestore]);
  const { data: pageContent, isLoading } = useDoc(contentDocRef);

  const secondaryNav = [
    { label: 'Company Information', href: '#company-info' },
    { label: 'Overview', href: '#overview' },
    { label: 'Our story', href: '#our-story' },
    { label: 'Our Growth Story', href: '#growth-story' },
    { label: 'Our strategy', href: '#our-strategy' },
    { label: 'Innovation', href: '#innovation' },
  ];

  const heroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
  const strategyImage = PlaceHolderImages.find(p => p.id === 'strategy-illustration');

  const defaultContent = contentSchemas.about.fields.reduce((acc, field) => {
    acc[field.name as keyof typeof acc] = field.defaultValue;
    return acc;
  }, {} as { [key: string]: string });

  const content = pageContent || defaultContent;

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
                {isLoading ? <Skeleton className="h-12 w-3/4" /> : <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{content.heroTitle}</h1>}
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ) : (
                  <p className="max-w-lg text-lg text-primary-foreground/80">{content.heroSubtitle}</p>
                )}
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

        <section id="overview" className="bg-secondary/30">
          <div className="container">
            <CompanyOverview />
          </div>
        </section>
        
        <div id="innovation">
          <RevolutionizingTrialsSection />
        </div>

        <section id="our-strategy" className="bg-subtle-blue py-16">
          <div className="container">
            <SectionTitle
                eyebrow="Our Approach"
                title="Our Strategy"
                description="Our vision and mission drive everything we do."
                className="mb-12"
             />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="relative">
                    <Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="w-full">
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
                                        {isLoading ? <Skeleton className="h-6 w-3/4 mb-2"/> : <p className="text-lg font-semibold text-foreground">{content.visionSemiboldText}</p>}
                                        {isLoading ? <div className="space-y-2 mt-2"><Skeleton className="h-4 w-full"/><Skeleton className="h-4 w-5/6"/></div> : <p className="text-muted-foreground mt-2">{content.visionDescription}</p>}
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
                                       {isLoading ? <Skeleton className="h-6 w-3/4 mb-2"/> : <p className="text-lg font-semibold text-foreground">{content.missionSemiboldText}</p>}
                                       {isLoading ? <div className="space-y-2 mt-2"><Skeleton className="h-4 w-full"/><Skeleton className="h-4 w-5/6"/></div> : <p className="text-muted-foreground mt-2">{content.missionDescription}</p>}
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
        
        <div id="our-story" className="bg-background pt-20">
          <div className="container">
             <SectionTitle 
                title="Our Story"
                description="A Stellar Journey Led by…"
             />
          </div>
          <LeadershipSection />
        </div>
        <div id="growth-story" className="bg-sap-gradient text-primary-foreground">
          <GrowthStoryTimeline />
        </div>
      </div>
    </div>
  );
}
