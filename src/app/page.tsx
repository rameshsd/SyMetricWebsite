

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { whyChooseUsItems, homepageContent, latestNews } from '@/lib/data';
import { CustomerSuccessSection } from '@/components/layout/CustomerSuccessSection';
import { SapTechedHero } from '@/components/layout/SapTechedHero';
import { FutureOfTrials } from '@/components/layout/FutureOfTrials';
import { FeatureGrid } from '@/components/layout/FeatureGrid';


const revolutionImage = PlaceHolderImages.find((img) => img.id === 'clinical-trial-revolution');

export default function Home() {
  
  const content = homepageContent;
  const newsItems = latestNews;
  const mainNews = newsItems[0];
  const otherNews = newsItems.slice(1);
  
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
         <SapTechedHero />
         <FutureOfTrials />
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {content ? (
                  <div className="space-y-6 text-center md:text-left">
                      <p className="text-primary font-semibold tracking-wide uppercase">
                          About SyMetric
                      </p>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                          {content.revolutionTitle}
                      </h2>
                      <p className="text-muted-foreground text-lg">
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
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                          Loading...
                      </h2>
                      <p className="text-muted-foreground text-lg">
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
        
        <CustomerSuccessSection />

        <FeatureGrid />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-sap-gradient text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6">
                {content ? (
                   <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Why SyMetric?
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                      Our platform is built on four key pillars that ensure your success.
                    </p>
                  </div>
                ) : (
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Loading...
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                      Loading content...
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                    {whyChooseUsItems.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle className="h-6 w-6 text-primary" />
                            </div>
                            <span className="font-medium text-lg">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center sm:text-4xl md:text-5xl">Latest From SyMetric</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item) => {
                const image = PlaceHolderImages.find(p => p.id === item.imageId);
                return (
                  <Card key={item.id} className="overflow-hidden group">
                    <Link href={item.link} className="block h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={item.title}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex-grow">{item.title}</h3>
                        <Button variant="link" className="p-0 self-start mt-4 text-green-600 hover:text-green-700">
                          Read More
                        </Button>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
