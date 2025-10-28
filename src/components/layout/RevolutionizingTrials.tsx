
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function RevolutionizingTrials() {
  const image = PlaceHolderImages.find((img) => img.id === 'revolutionizing-trials');

  return (
    <section className="w-full bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative p-4 bg-black rounded-lg shadow-lg">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                width={600}
                height={400}
                className="rounded-md"
              />
            )}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter">
              Revolutionizing Clinical Trials
            </h2>
            <p className="text-lg text-muted-foreground max-w-prose">
              Backed by years of expertise and a history of leading the industry's best practices, we design, develop, and deploy real-time solutions for Clinical Trials, resulting in time and cost advantages for you.
            </p>
            <p className="text-lg text-muted-foreground max-w-prose">
                Adopt our agile Platform to support your Clinical Trials across all its stages.
            </p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <Link href="/contact">
                Know more
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
