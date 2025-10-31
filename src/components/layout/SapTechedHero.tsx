
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function SapTechedHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'whats-new-data');

  return (
    <section className="w-full bg-sap-gradient text-white py-20 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center text-center md:text-left space-y-6 relative">
            <div className="border border-dashed border-white/30 p-8 rounded-lg">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Join us at SAP TechEd
                </h1>
                <p className="mt-4 max-w-[600px] mx-auto md:mx-0 text-white/80 md:text-xl">
                    Attend the leading event for developers and IT pros to go deep on SAP Business AI, SAP Business Technology Platform, and SAP Business Data Cloud.
                </p>
                 <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
                    <Button asChild size="lg">
                        <Link href="/contact">Register now</Link>
                    </Button>
                </div>
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
            <div className="absolute -top-8 -left-12 w-32 h-8 bg-[#36D9C4] rounded-full" />
            <div className="absolute top-8 -left-24 w-40 h-8 bg-blue-500 rounded-full" />
            <div className="absolute top-24 -left-16 w-32 h-8 bg-[#F065A6] rounded-full" />

            <div className="absolute bottom-[-2rem] left-[5%] w-10 h-10 bg-purple-500 rounded-full" style={{clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)'}}>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white" style={{clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)'}} />
                </div>
            </div>
            
            <div className="absolute top-1/2 right-[10%] w-16 h-16 bg-[#2B7DFF] rounded-lg flex items-center justify-center -rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M12 22V9"/><path d="m3.29 9 8.71 4.36 8.71-4.36"/></svg>
            </div>

             <div className="absolute bottom-[20%] right-[5%] w-24 h-12 bg-[#F065A6] rounded-full" style={{clipPath: 'path("M 0 50 C 0 22, 22 0, 50 0 S 100 22, 100 50 S 78 100, 50 100 S 0 78, 0 50 Z")'
}}></div>

            <div className="absolute bottom-4 -right-4 w-12 h-12 flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8H7"/><path d="M17 12H7"/></svg>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );