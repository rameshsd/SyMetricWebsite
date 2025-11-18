
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function SapTechedHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'new-hero-image');

  return (
    <section className="w-full bg-sap-gradient text-white py-20 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center text-center md:text-left space-y-6 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Better Data. Better Clinical Trials.
              </h1>
              <p className="mt-4 max-w-[600px] mx-auto md:mx-0 text-white/80 md:text-xl">
                Rely on our technology platform to manage your Clinical Trials with accuracy and ease
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
              <Button asChild size="lg" variant="secondary" className="bg-green-400 text-black hover:bg-green-500">
                <Link href="/contact">Schedule a live demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[400px] w-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
