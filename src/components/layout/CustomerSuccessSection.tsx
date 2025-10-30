
"use client";

import { customerSuccessStories } from "@/lib/data";
import { SectionTitle } from "../shared/section-title";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export function CustomerSuccessSection() {
    const quoteIcon = PlaceHolderImages.find(p => p.id === 'quote-icon');

  return (
    <section className="bg-secondary/50">
        <div className="container">
            <SectionTitle
                title="What Our Customers Say"
                description="Real-world success stories from organizations who have partnered with SyMetric."
            />
            <div className="mt-16">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {customerSuccessStories.map(story => (
                            <CarouselItem key={story.id}>
                                <div className="p-1">
                                    <Card className="bg-background">
                                        <CardContent className="p-10 text-center">
                                            {quoteIcon && (
                                                <Image 
                                                    src={quoteIcon.imageUrl}
                                                    alt="quote"
                                                    data-ai-hint={quoteIcon.imageHint}
                                                    width={40}
                                                    height={40}
                                                    className="mx-auto mb-6"
                                                />
                                            )}
                                            <blockquote className="text-lg text-muted-foreground italic">"{story.quote}"</blockquote>
                                            <p className="font-bold text-foreground mt-6">{story.author}</p>
                                            <p className="text-sm text-primary">{story.company}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </div>
    </section>
  );
}

