
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

const heroItems = [
  {
    id: "hero-carousel-1",
    title: "Better Data. Better Clinical Trials.",
    subtitle: "Rely on our technology platform to manage your Clinical Trials with accuracy and ease",
    cta: {
        text: "Schedule a live demo",
        link: "/contact"
    }
  },
  {
    id: "hero-carousel-2",
    title: "Keep Close Tabs on Your Clinical Supplies",
    subtitle: "Experience seamless management of Clinical Supplies with real-time data and active monitoring",
    cta: {
        text: "Contact us for a demo",
        link: "/contact"
    }
  },
  {
    id: "hero-carousel-3",
    title: "A Well-Integrated CTP",
    subtitle: "For a bird’s-eye view of Clinical Trials",
    cta: {
        text: "Discover now",
        link: "/solutions/clinical-trial-platform"
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
            const image = PlaceHolderImages.find((p) => p.id === item.id);
            return (
                <CarouselItem key={item.id}>
                <div className="relative h-[85vh] min-h-[650px] w-full">
                    {image && (
                    <Image
                        src={image.imageUrl}
                        alt={image.subtitle}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                        priority={item.id === "hero-carousel-1"}
                    />
                    )}
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground p-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" dangerouslySetInnerHTML={{ __html: item.title }}></h1>
                        <p className="mt-6 text-lg leading-8 md:text-xl" dangerouslySetInnerHTML={{ __html: item.subtitle }}></p>
                        <div className="mt-10">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href={item.cta.link}>{item.cta.text}</Link>
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
    </section>
  );
}

    