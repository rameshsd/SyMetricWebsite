

'use client';

import { solutions } from '@/lib/data';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TrialAnalyticsFeature } from '@/components/solutions/TrialAnalyticsFeature';
import { PillarsSection } from '@/components/solutions/PillarsSection';
import { FeaturedPlatform } from '@/components/solutions/FeaturedPlatform';


export default function SolutionsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'services-hero-people');
    const solutionsSliderImage = PlaceHolderImages.find(p => p.id === 'solutions-slider-woman');

    const featuredSolutions = solutions.filter(s => ['irt-iwrs', 'edc', 'ctm'].includes(s.slug));

  return (
    <div>
        <ProductPageHeader productName="Solutions" solutions={solutions} />
        <section className="bg-primary text-white py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="">
                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  We Provide the Solutions You Need to Run Your Clinical Trials Efficiently
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg">
                  Our integrated, cloud-based solutions transform Clinical Trials from early phase to late phase and support organizations of all types and sizes — Pharmaceutical Sponsors, Clinical Research Organizations, and Academia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/contact">Request a demo</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                        <Link href="/industries">View all industries</Link>
                    </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-full min-h-[400px]">
                {heroImage && (
                  <Image
                      src={heroImage.imageUrl}
                      alt={heroImage.description}
                      data-ai-hint={heroImage.imageHint}
                      fill
                      className="object-cover rounded-2xl"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <PillarsSection />

        <section className="py-20 bg-secondary/30">
            <div className="container">
                <FeaturedPlatform />
            </div>
        </section>
        
        <section className="py-20">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-sm font-semibold text-primary uppercase">Explore our solutions</p>
                    <h2 className="text-3xl font-bold tracking-tight mt-2">Get the info you need to stay ahead</h2>
                    <p className="mt-4 text-muted-foreground">
                        Learn about the benefits of our core solutions for clinical trial management.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredSolutions.map(solution => {
                        const Icon = solution.icon;
                        return (
                            <Card key={solution.id} className="p-8 rounded-2xl bg-background shadow-lg transition-transform hover:-translate-y-1">
                                <CardContent className="p-0">
                                    <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                                        <Icon className="h-10 w-10 text-primary" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-xl font-bold">{solution.name}</h3>
                                    <p className="text-muted-foreground mt-2 min-h-[120px]">{solution.longDescription}</p>
                                    <Button variant="link" asChild className="p-0 mt-4">
                                        <Link href={`/solutions/${solution.slug}`}>Know more</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>

        <TrialAnalyticsFeature />
        
    </div>
  );
}
