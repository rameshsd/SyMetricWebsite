

'use client';

import { solutions } from '@/lib/data';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Shuffle, FormInput, ClipboardList } from 'lucide-react';
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
  const productSlugs = [
    'clinical-trial-platform',
    'irt-iwrs',
    'edc',
    'ctm',
    'trial-analytics',
    'sample-management',
    'epro'
  ];
  const productSolutions = productSlugs
    .map(slug => solutions.find(s => s.slug === slug))
    .filter(Boolean) as typeof solutions;

  return (
    <div>
      <ProductPageHeader productName="Solutions" solutions={solutions} />
      <section className="bg-sap-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="container relative z-10">
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

      {/* <PillarsSection /> */}

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productSolutions.map(solution => {
              let Icon = solution.icon;
              if (solution.slug === 'irt-iwrs') Icon = Shuffle;
              if (solution.slug === 'edc') Icon = FormInput;
              if (solution.slug === 'ctm') Icon = ClipboardList;
              return (
                <Card key={solution.id} className="p-8 rounded-2xl bg-background shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between border border-[#2463EB]">
                  <CardContent className="p-0 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="p-3 bg-primary/10 rounded-xl inline-block mb-4">
                        {Icon && <Icon className="h-10 w-10 text-primary" strokeWidth={2.2} />}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{solution.name}</h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed min-h-[80px]">
                        {solution.longDescription || solution.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-auto">
                      <Button variant="link" asChild className="p-0 text-primary font-semibold group/btn">
                        <Link href={`/solutions/${solution.slug}`} className="inline-flex items-center gap-1.5 hover:underline">
                          Know more <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
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

