
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
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const heroItems = [
  {
    id: "fsd-hero",
    title: "Full Self-Driving (Supervised)",
    subtitle: "Available for $99/mo",
    imageId: 'fsd-hero',
    cta1: {
        text: "Demo FSD (Supervised)",
        link: "#"
    },
    cta2: {
        text: "Learn More",
        link: "#"
    }
  }
];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden -mt-16">
        <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
        >
        <CarouselContent>
            {heroItems.map((item) => {
            const image = PlaceHolderImages.find((p) => p.id === item.imageId);
            return (
                <CarouselItem key={item.id}>
                <div className="relative h-[90vh] min-h-[700px] w-full">
                    {image && (
                    <Image
                        src={image.imageUrl}
                        alt={item.subtitle}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                        priority={item.id === "fsd-hero"}
                    />
                    )}
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground p-8">
                      <div className="max-w-4xl">
                          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                            {item.title}
                          </h1>
                          <p className="mt-4 text-xl leading-8 md:text-2xl">
                            {item.subtitle}
                          </p>
                          <div className="mt-8 flex items-center justify-center gap-x-4">
                            <Button asChild size="lg">
                              <Link href={item.cta1.link}>{item.cta1.text}</Link>
                            </Button>
                            {item.cta2 && (
                              <Button asChild size="lg" variant="secondary" className="bg-gray-100 text-gray-900 hover:bg-gray-200">
                                <Link href={item.cta2.link}>{item.cta2.text}</Link>
                              </Button>
                            )}
                          </div>
                      </div>
                    </div>
                </div>
                </CarouselItem>
            );
            })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex bg-black/30 hover:bg-black/50 text-white border-white/50" />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex bg-black/30 hover:bg-black/50 text-white border-white/50" />
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
            <Button variant="ghost" size="icon" className="bg-black/30 hover:bg-black/50 text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
            </Button>
            <div className="flex items-center gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className={cn("h-2 w-2 rounded-full transition-colors", index === 0 ? 'bg-white' : 'bg-white/50')}></div>
                ))}
            </div>
        </div>
        </Carousel>
    </section>
  );
}
