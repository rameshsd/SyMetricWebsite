"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { homepageContent } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function FutureOfTrials() {
  const content = homepageContent.futureOfTrials;
  const image = PlaceHolderImages.find((img) => img.id === content.imageId);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {content.title}
            </h2>
            <p className="text-lg text-muted-foreground">{content.subtitle}</p>
            <ul className="space-y-4">
              {content.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{point}</p>
                </li>
              ))}
            </ul>
            <Button asChild size="lg">
              <Link href={content.cta.link}>
                {content.cta.text} <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                width={600}
                height={600}
                className="rounded-xl shadow-2xl"
              />
            )}
            <div className="absolute -bottom-8 -right-8 h-40 w-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
