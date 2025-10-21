
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { resources } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { SectionTitle } from '@/components/shared/section-title';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function ResourcesCarousel() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-16 md:py-24">
        <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <SectionTitle
                title="Insights & Resources"
                description="Stay informed with our latest articles, case studies, and industry analysis."
                className="text-left max-w-xl mx-0"
                />
                <Button asChild variant="outline" className="mt-4 md:mt-0">
                <Link href="/resources">
                    View All Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </Button>
            </div>

            <div ref={ref} className={cn('opacity-0', isInView && 'animate-fade-in-up')}>
                <Carousel opts={{ align: 'start' }} className="w-full">
                <CarouselContent>
                    {resources.map((resource) => {
                    const placeholder = PlaceHolderImages.find((p) => p.id === resource.image);
                    return (
                        <CarouselItem key={resource.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="h-full flex flex-col group overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="relative w-full h-48 overflow-hidden">
                                {placeholder && (
                                <Image
                                    src={placeholder.imageUrl}
                                    alt={resource.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-500 group-hover:scale-105"
                                    data-ai-hint={placeholder.imageHint}
                                />
                                )}
                            </div>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <div className="flex-grow">
                                <Badge variant="secondary" className="mb-2">{resource.category}</Badge>
                                <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                                    <Link href={`/resources/${resource.slug}`}>{resource.title}</Link>
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{resource.excerpt}</p>
                                </div>
                                <p className="text-xs text-muted-foreground mt-4">{resource.date}</p>
                            </CardContent>
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
        </div>
    </section>
  );
}
