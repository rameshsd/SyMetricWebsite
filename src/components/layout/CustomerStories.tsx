
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { successStories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionTitle } from "../shared/section-title";

export function CustomerStories() {
  return (
    <section>
      <div className="container">
        <SectionTitle
          title="Customer success at SyMetric"
          description="Learn why companies of all sizes trust SyMetric to help them run their business."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {successStories.map((story) => {
            const logo = PlaceHolderImages.find((p) => p.id === story.logoId);
            return (
              <div key={story.id} className="text-center md:text-left">
                <div className="relative h-20 mb-6 flex justify-center md:justify-start">
                  {logo && (
                    <Image
                      src={logo.imageUrl}
                      alt={story.title}
                      data-ai-hint={logo.imageHint}
                      width={160}
                      height={80}
                      className="object-contain"
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {story.title}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {story.description}
                </p>
                <Link
                  href={story.linkUrl}
                  className="inline-flex items-center text-primary font-semibold mt-4"
                >
                  {story.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
