
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function SapTechedHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'new-hero-image');

  return (
    <section className="relative w-full text-white py-20 overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
                priority
            />
        )}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col justify-center text-center md:text-left space-y-6">
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
            </div>
        </div>
    </section>
  );
}
