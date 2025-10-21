
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { homepageContent } from "@/lib/data";
import { Section } from "@/components/shared/section";

export function WhySyMetricAI() {
  const content = homepageContent.whySyMetricAI;
  const image = PlaceHolderImages.find((p) => p.id === content.imageId);

  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              width={550}
              height={550}
              className="rounded-xl shadow-lg"
            />
          )}
           <div className="absolute -top-12 -left-12 h-40 w-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
           <div className="absolute -bottom-12 -right-12 h-40 w-40 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        </div>
        <div className="space-y-6">
          <p className="text-primary font-semibold tracking-wide uppercase">
            {content.tagline}
          </p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.subtitle}
          </p>
          <div className="space-y-4">
            {content.points.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <point.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{point.title}</h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
