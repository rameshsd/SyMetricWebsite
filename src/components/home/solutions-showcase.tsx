'use client';
import Link from 'next/link';
import Image from 'next/image';
import { solutions } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Section } from '@/components/shared/section';
import { SectionTitle } from '@/components/shared/section-title';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function SolutionsShowcase() {
  const [ref, isInView] = useInView();

  return (
    <Section className="bg-secondary/50 dark:bg-card">
      <SectionTitle
        title="Explore Our Solutions"
        description="A comprehensive suite of tools to digitize and streamline every aspect of your clinical trials."
      />
      <div
        ref={ref}
        className={cn('mt-12 opacity-0', isInView && 'animate-fade-in-up')}
      >
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {solutions.map((solution) => {
              const placeholder = PlaceHolderImages.find(p => p.id === solution.image);
              return (
                <CarouselItem key={solution.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col group overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                       <CardHeader>
                        <div className="flex items-center gap-4">
                           <solution.icon className="h-8 w-8 text-primary" />
                           <CardTitle className="text-xl">{solution.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{solution.description}</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                          <Button variant="link" asChild className="p-0 h-auto">
                              <Link href={`/solutions/${solution.slug}`}>
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                          </Button>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </Section>
  );
}
