
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
import { AchievementsSection } from '@/components/layout/AchievementsSection';
import { DigitalPlatformSection } from '@/components/layout/DigitalPlatformSection';
import { ResearchIntegrateAnalyze } from '@/components/layout/ResearchIntegrateAnalyze';
import { WhyChooseUs } from '@/components/layout/WhyChooseUs';
import { RevolutionizingTrials } from '@/components/layout/RevolutionizingTrials';
import { UnlockPotential } from '@/components/layout/UnlockPotential';
import { SectionTitle } from '@/components/shared/section-title';
import { useState } from 'react';
import { CustomerStories } from '@/components/layout/CustomerStories';
import { CustomerSuccess } from '@/components/home/customer-success';


export default function Home() {
  
  const content = homepageContent;
  const featuredNews = latestNews.find(item => item.main);
  const otherNews = latestNews.filter(item => !item.main);

  const INITIAL_VISIBLE_NEWS = 2;
  const [visibleNewsCount, setVisibleNewsCount] = useState(INITIAL_VISIBLE_NEWS);

  const handleLoadMore = () => {
    setVisibleNewsCount(otherNews.length);
  };
  
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
         <SapTechedHero />
        <RevolutionizingTrials />
        <UnlockPotential />
        <FeatureGrid />

        <WhyChooseUs />
        
        <DigitalPlatformSection />
        <ResearchIntegrateAnalyze />
        <AchievementsSection />

        <section className="w-full bg-secondary/30">
          <div className="container">
            <SectionTitle title="What's new" className="text-left !max-w-none mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredNews && (() => {
                const image = PlaceHolderImages.find(p => p.id === featuredNews.imageId);
                return (
                  <Card className="md:col-span-2 overflow-hidden group flex flex-col md:flex-row rounded-2xl">
                    {image && (
                      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                        <Link href={featuredNews.link}>
                          <Image
                            src={image.imageUrl}
                            alt={featuredNews.title}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover"
                          />
                        </Link>
                      </div>
                    )}
                    <div className="flex flex-col justify-center p-8 md:p-12 md:w-1/2">
                      <p className="text-sm text-primary font-semibold mb-2">SyMetric events</p>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        <Link href={featuredNews.link}>{featuredNews.title}</Link>
                      </h3>
                      <p className="text-muted-foreground mb-6">{featuredNews.description}</p>
                      <div className="mt-auto">
                        <Button asChild>
                          <Link href={featuredNews.link}>Read More</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })()}

              {otherNews.slice(0, visibleNewsCount).map((item) => {
                  const image = PlaceHolderImages.find(p => p.id === item.imageId);
                  return (
                    <Card key={item.id} className="overflow-hidden group flex flex-col p-6 rounded-2xl bg-background">
                        {image && (
                          <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
                              <Link href={item.link}>
                                  <Image
                                  src={image.imageUrl}
                                  alt={item.title}
                                  data-ai-hint={image.imageHint}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                              </Link>
                          </div>
                        )}
                        <CardContent className="p-0 flex-grow flex flex-col">
                          <p className="text-sm text-muted-foreground mb-2">Press release</p>
                          <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors flex-grow">
                            <Link href={item.link}>{item.title}</Link>
                          </h3>
                          <div className="mt-auto">
                            <Button asChild>
                              <Link href={item.link}>Read More</Link>
                            </Button>
                          </div>
                        </CardContent>
                    </Card>
                  )
                })}
            </div>
            {visibleNewsCount < otherNews.length && (
              <div className="text-center mt-12">
                <Button onClick={handleLoadMore} variant="outline" size="lg">
                  Load More News
                </Button>
              </div>
            )}
          </div>
        </section>

        <CustomerSuccess />
      </main>
    </div>
  );
}
