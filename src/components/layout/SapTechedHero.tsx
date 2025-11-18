"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function SapTechedHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-section-image');

  return (
    <section className="w-full bg-sap-gradient text-white py-20 overflow-hidden">
      <div className="container">
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
            <div className="absolute -top-4 -right-4 lg:top-4 lg:-left-4 w-24 h-6 bg-[#36D9C4] rounded-full"></div>
            <div className="absolute top-4 right-16 lg:left-16 lg:right-auto w-32 h-6 bg-blue-500 rounded-full"></div>
            <div className="absolute top-12 right-8 lg:left-8 lg:right-auto w-24 h-6 bg-[#F065A6] rounded-full"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-1/4 lg:left-1/4 lg:right-auto w-16 h-16 bg-[#2B7DFF] rounded-lg flex items-center justify-center -rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M12 22V9"/><path d="m3.29 9 8.71 4.36 8.71-4.36"/></svg>
            </div>
            <div className="absolute -bottom-8 right-1/2 lg:left-[40%] lg:right-auto w-12 h-12 bg-purple-500 rounded-full" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
            <div className="absolute bottom-4 right-[40%] lg:left-[55%] lg:right-auto w-12 h-12 bg-[#F065A6] rounded-full" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%)'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
