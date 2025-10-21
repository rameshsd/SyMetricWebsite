"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function SapTechedHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "sap-teched-hero");
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-sap-gradient text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Experience SyMetric at SAP TechEd 2024
              </h1>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                Join us in Las Vegas to discover how our AI-powered digital
                research platform is transforming the future of clinical trials.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#">
                  Book a Meeting <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#">Learn More</Link>
              </Button>
            </div>
          </div>
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              width="550"
              height="550"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          )}
        </div>
      </div>
    </section>
  );
}
