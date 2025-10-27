
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
import { Card } from "@/components/ui/card";

export function CustomerSuccessSection() {
  const quoteImage = PlaceHolderImages.find((p) => p.id === "quote-icon");

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-96 flex items-center justify-center">
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
                    <Card className="border-0 bg-transparent shadow-none text-center">
                      <p className="text-muted-foreground italic">"{story.quote}"</p>
                      <h6 className="font-semibold text-lg mt-4">{story.author}</h6>
                      <small className="text-muted-foreground">{story.company}</small>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
               <div className="flex justify-center gap-4 mt-6">
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
