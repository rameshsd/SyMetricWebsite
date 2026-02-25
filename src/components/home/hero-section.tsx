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
import { cn } from "@/lib/utils";
import { Pause, ChevronLeft, ChevronRight } from "lucide-react";

const heroItems = [
  {
    id: "fsd-hero",
    title: "Full Self-Driving (Supervised)",
    subtitle: "Available for $99/mo",
    imageId: 'fsd-hero',
    cta1: {
        text: "Demo FSD (Supervised)",
        link: "/request-demo"
    },
    cta2: {
        text: "Learn More",
        link: "/solutions"
    }
  }
];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden -mt-16">
        <Carousel
        className="w-full"
        opts={{ loop: true }}
        >
        <CarouselContent>
            {heroItems.map((item) => {
            const image = PlaceHolderImages.find((p) => p.id === item.imageId);
            return (
                <CarouselItem key={item.id}>
                <div className="relative h-screen min-h-[700px] w-full">
                    {image && (
                    <Image
                        src={image.imageUrl}
                        alt={item.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                        priority
                    />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
                      <div className="max-w-4xl">
                          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                            {item.title}
                          </h1>
                          <p className="mt-4 text-lg">
                            {item.subtitle}
                          </p>
                          <div className="mt-8 flex items-center justify-center gap-x-4">
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                              <Link href={item.cta1.link}>{item.cta1.text}</Link>
                            </Button>
                            <Button asChild size="lg" variant="secondary" className="bg-gray-100 text-black hover:bg-gray-200">
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
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 bg-gray-800/50 hover:bg-gray-800/80 text-white border-none rounded-md">
            <ChevronLeft className="h-6 w-6"/>
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 bg-gray-800/50 hover:bg-gray-800/80 text-white border-none rounded-md">
            <ChevronRight className="h-6 w-6"/>
        </CarouselNext>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
            <Button variant="ghost" size="icon" className="bg-gray-800/50 hover:bg-gray-800/80 text-white rounded-full h-10 w-10">
                <Pause className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white"></div>
                <div className="h-2 w-2 rounded-full bg-white/50"></div>
                <div className="h-2 w-2 rounded-full bg-white/50"></div>
            </div>
        </div>
        </Carousel>
    </section>
  );
}
