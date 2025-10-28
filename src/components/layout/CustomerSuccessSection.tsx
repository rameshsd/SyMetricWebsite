
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { customerSuccessStories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export function CustomerSuccessSection() {
  const quoteImage = PlaceHolderImages.find((p) => p.id === "quote-icon");

  return (
    <section className="bg-secondary/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-auto md:aspect-square flex items-center justify-center">
            {quoteImage && (
              <Image
                src={quoteImage.imageUrl}
                alt={quoteImage.description}
                data-ai-hint={quoteImage.imageHint}
                width={300}
                height={257}
                className="object-contain"
              />
            )}
          </div>
          <div className="w-full">
            <Carousel>
              <CarouselContent>
                {customerSuccessStories.map((story, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 bg-transparent shadow-none text-center md:text-left">
                      <CardContent className="p-0">
                        <blockquote className="text-muted-foreground italic text-lg leading-relaxed">"{story.quote}"</blockquote>
                        <p className="font-semibold text-lg mt-6">{story.author}</p>
                        <p className="text-muted-foreground">{story.company}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
               <div className="flex justify-center md:justify-start gap-4 mt-8">
                <CarouselPrevious className="static -translate-y-0" />
                <CarouselNext className="static -translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
