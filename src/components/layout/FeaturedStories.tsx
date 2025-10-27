
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
import { featuredStories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function FeaturedStories() {
  const isMobile = useIsMobile();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured stories
          </h2>
          <p className="text-muted-foreground mt-2">
            Helping companies of all sizes and in all industries worldwide
          </p>
        </div>
        
        {isMobile ? (
             <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredStories.map((story) => {
                  const logo = PlaceHolderImages.find(p => p.id === story.logoId);
                  return (
                    <CarouselItem key={story.id}>
                        <div className="flex flex-col gap-4 h-full p-1">
                            {logo && (
                                <div className="relative h-10">
                                    <Image
                                        src={logo.imageUrl}
                                        alt={`${story.id} logo`}
                                        data-ai-hint={logo.imageHint}
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            )}
                            <h3 className="font-bold text-lg">{story.title}</h3>
                            <p className="text-muted-foreground text-sm flex-grow">{story.description}</p>
                             <Button variant="link" asChild className="p-0 h-auto justify-start text-primary">
                                <Link href={story.link.href}>
                                    {story.link.text} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="left-[-1rem]" />
              <CarouselNext className="right-[-1rem]" />
            </Carousel>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredStories.map((story) => {
                const logo = PlaceHolderImages.find(p => p.id === story.logoId);
                return (
                    <div key={story.id} className="flex flex-col gap-4">
                        {logo && (
                            <div className="relative h-10">
                                <Image
                                    src={logo.imageUrl}
                                    alt={`${story.id} logo`}
                                    data-ai-hint={logo.imageHint}
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        )}
                        <h3 className="font-bold text-lg">{story.title}</h3>
                        <p className="text-muted-foreground text-sm flex-grow">{story.description}</p>
                         <Button variant="link" asChild className="p-0 h-auto justify-start text-primary">
                            <Link href={story.link.href}>
                                {story.link.text} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                );
            })}
            </div>
        )}
      </div>
    </section>
  );
}
