"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { heroCarouselItems } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";

export function HeroCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 })]}
    >
      <CarouselContent>
        {heroCarouselItems.map((item) => {
          const image = PlaceHolderImages.find((p) => p.id === item.imageId);
          return (
            <CarouselItem key={item.id}>
              <div className="relative h-[80vh] min-h-[600px] w-full">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                    priority={item.id === 1}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground p-8">
                  <div className="max-w-4xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      {item.title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 md:text-xl">
                      {item.subtitle}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <Button asChild size="lg">
                        <Link href={item.cta1.link}>{item.cta1.text}</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <Link href={item.cta2.link}>{item.cta2.text}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex" />
    </Carousel>
  );
}
