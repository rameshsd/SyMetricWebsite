

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { homepageContent, latestNews } from '@/lib/data';
import { CustomerSuccessSection } from '@/components/layout/CustomerSuccessSection';
import { SapTechedHero } from '@/components/layout/SapTechedHero';
import { FeatureGrid } from '@/components/layout/FeatureGrid';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AchievementsSection } from '@/components/layout/AchievementsSection';
import { DigitalPlatformSection } from '@/components/layout/DigitalPlatformSection';
import { ResearchIntegrateAnalyze } from '@/components/layout/ResearchIntegrateAnalyze';
import { WhyChooseUs } from '@/components/layout/WhyChooseUs';
import { RevolutionizingTrials } from '@/components/layout/RevolutionizingTrials';

const revolutionImage = PlaceHolderImages.find((img) => img.id === 'clinical-trial-revolution');

export default function Home() {
  
  const content = homepageContent;
  const newsItems = latestNews;
  
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
         <SapTechedHero />
        <RevolutionizingTrials />
        <FeatureGrid />

        <WhyChooseUs />
        
        <DigitalPlatformSection />
        <ResearchIntegrateAnalyze />
        <AchievementsSection />

        <section className="w-full bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">Latest From SyMetric</h2>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {newsItems.map((item) => {
                  const image = PlaceHolderImages.find(p => p.id === item.imageId);
                  return (
                    <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="overflow-hidden group h-full flex flex-col p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="block">
                                <div className="relative aspect-video overflow-hidden rounded-lg">
                                {image && (
                                    <Link href={item.link}>
                                        <Image
                                        src={image.imageUrl}
                                        alt={item.title}
                                        data-ai-hint={image.imageHint}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </Link>
                                )}
                                </div>
                            </div>
                            <CardContent className="p-0 pt-6 flex-grow flex flex-col">
                              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                              <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors flex-grow">
                                <Link href={item.link}>{item.title}</Link>
                              </h3>
                              <Button asChild>
                                <Link href={item.link}>Read More</Link>
                              </Button>
                            </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </div>
        </section>

        <CustomerSuccessSection />
      </main>
    </div>
  );
}

    
