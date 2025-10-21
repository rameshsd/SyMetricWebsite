"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { homepageContent, customerSuccessStories } from "@/lib/data";

export function CustomerSuccessSection() {
  const content = homepageContent;
  const stories = customerSuccessStories;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {content.customerSuccessTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {content.customerSuccessSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => {
            const logo = PlaceHolderImages.find((p) => p.id === story.logoId);
            return (
              <Card key={story.id} className="flex flex-col">
                <CardContent className="p-6 flex-grow">
                  {logo && (
                    <div className="h-10 mb-4 flex items-center">
                      <Image
                        src={logo.imageUrl}
                        alt={`${story.customerName} logo`}
                        data-ai-hint={logo.imageHint}
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">
                    {story.customerName}
                  </h3>
                  <p className="text-muted-foreground italic">
                    "{story.quote}"
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="link" asChild className="p-0">
                    <Link href={story.link}>Read their story</Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
