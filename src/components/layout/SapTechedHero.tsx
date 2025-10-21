"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function SapTechedHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "sap-teched-hero");
  return (
    <section className="w-full bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px] py-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Join us at SyMetric TechEd
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                Attend the leading event for developers and IT pros to go deep on SyMetric Business AI, SyMetric Business Technology Platform, and SyMetric Business Data Cloud.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#">Register now</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-full w-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover rounded-lg"
              />
            )}
             <div className="absolute -top-4 -right-4 lg:top-4 lg:-left-4 w-24 h-6 bg-green-400 rounded-full"></div>
            <div className="absolute top-4 right-16 lg:left-16 lg:right-auto w-32 h-6 bg-blue-500 rounded-full"></div>
            <div className="absolute top-12 right-8 lg:left-8 lg:right-auto w-24 h-6 bg-pink-500 rounded-full"></div>
             <div className="absolute top-1/2 -translate-y-1/2 right-1/4 lg:left-1/4 lg:right-auto w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center -rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M12 22V9"/><path d="m3.29 9 8.71 4.36 8.71-4.36"/></svg>
            </div>
            <div className="absolute bottom-4 right-1/4 lg:left-1/4 lg:right-auto w-10 h-10 bg-purple-500 rounded-xl rotate-45"></div>
            <div className="absolute -bottom-8 right-1/2 lg:left-1/2 lg:right-auto w-12 h-12 bg-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
