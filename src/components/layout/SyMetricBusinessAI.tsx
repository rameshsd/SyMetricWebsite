
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface SyMetricBusinessAIProps {
  title: string;
  subtitle: string;
}

export function SyMetricBusinessAI({ title, subtitle }: SyMetricBusinessAIProps) {
  const businessAIImage = PlaceHolderImages.find(p => p.id === 'business-ai-hero');

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#f5f3ff] dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[400px]">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
              {title}
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Request a demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">Sign up for our newsletter</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-full w-full">
            {businessAIImage && (
              <Image
                src={businessAIImage.imageUrl}
                alt={businessAIImage.description}
                data-ai-hint={businessAIImage.imageHint}
                fill
                className="rounded-lg object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
