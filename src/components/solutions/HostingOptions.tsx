
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Microsoft, Sap } from "../icons/brand-icons";

export function HostingOptions() {
  const image = PlaceHolderImages.find(
    (p) => p.id === "hosting-providers-image"
  );
  return (
    <section className="bg-secondary/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover rounded-2xl"
              />
            )}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Looking for Customized Hosting and Deployment Models?
            </h2>
            <p className="text-muted-foreground text-lg max-w-prose">
              Our Clinical Trial Platform is a SaaS Solution that is available
              with the most trusted and compliant Cloud-Hosting options.
            </p>
            <div className="flex gap-4">
              <Card>
                <CardContent className="p-4 flex items-center justify-center">
                  <Microsoft className="h-8" />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center justify-center">
                  <Sap className="h-8" />
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground">
              Get in touch with us to customize your solutions — whether for a
              dedicated single-tenant solution or a completely custom
              deployment model.
            </p>
            <Button asChild className="mt-4">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
