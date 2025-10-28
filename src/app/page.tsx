

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
import { FutureOfTrials } from '@/components/layout/FutureOfTrials';
import { FeatureGrid } from '@/components/layout/FeatureGrid';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AchievementsSection } from '@/components/layout/AchievementsSection';
import { DigitalPlatformSection } from '@/components/layout/DigitalPlatformSection';
import { ResearchIntegrateAnalyze } from '@/components/layout/ResearchIntegrateAnalyze';
import { WhyChooseUs } from '@/components/layout/WhyChooseUs';

const revolutionImage = PlaceHolderImages.find((img) => img.id === 'clinical-trial-revolution');

export default function Home() {
  
  const content = homepageContent;
  const newsItems = latestNews;
  
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
         <SapTechedHero />
         <FutureOfTrials />
        
        <section className="w-full bg-secondary/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {content ? (
                  <div className="space-y-6 text-center md:text-left">
                      <p className="text-primary font-semibold tracking-wide uppercase">
                          About SyMetric
                      </p>
                      <h2 className="text-4xl font-bold tracking-tighter text-foreground">
                          {content.revolutionTitle}
                      </h2>
                      <p className="text-muted-foreground text-lg max-w-prose">
                          {content.revolutionContent}
                      </p>
                      <Button asChild size="lg" variant="default">
                          <Link href="/about">
                              Know more <ArrowRight className="ml-2" />
                          </Link>
                      </Button>
                  </div>
                ) : (
                  <div className="space-y-6 text-center md:text-left">
                      <p className="text-primary font-semibold tracking-wide uppercase">
                          About SyMetric
                      </p>
                      <h2 className="text-4xl font-bold tracking-tighter text-foreground">
                          Loading...
                      </h2>
                      <p className="text-muted-foreground text-lg max-w-prose">
                          Loading content...
                      </p>
                  </div>
                )}
                <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                    {revolutionImage && (
                        <Image
                            src={revolutionImage.imageUrl}
                            alt={revolutionImage.description}
                            data-ai-hint={revolutionImage.imageHint}
                            width={500}
                            height={400}
                            className="object-contain rounded-lg z-10"
                        />
                    )}
                    <div className="absolute -bottom-10 -left-10 h-48 w-48 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="absolute -top-10 -right-10 h-48 w-48 bg-accent/10 rounded-full blur-2xl"></div>
                </div>
            </div>
          </div>
        </section>
        
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
