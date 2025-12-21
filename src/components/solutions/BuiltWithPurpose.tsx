"use client";

import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function BuiltWithPurpose() {
  const image = PlaceHolderImages.find(p => p.id === 'built-with-purpose-image');
  return (
    <section>
      <div className="container">
        <Card className="grid md:grid-cols-2 items-center bg-card shadow-lg rounded-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our Philosophy</p>
            <h2 className="text-4xl font-bold tracking-tight mt-2">
              Built With Purpose
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
                Our platform is built for the cloud era with modular, integrated tools that are designed to provide flexibility. Whether you are a Pharmaceutical Company, Clinical Research Organization, or an Academic Institution, our Platform can be tailored to your Study requirements, including Adaptive Trials, Umbrella Trials, Basket Studies, and Virtual Clinical Trials.
            </p>
            <Button asChild className="mt-8" size="lg">
                <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          <div className="relative h-64 md:h-full min-h-[400px]">
            {image && (
                 <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                />
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}