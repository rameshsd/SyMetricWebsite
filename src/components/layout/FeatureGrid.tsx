"use client";

import { featureGridItems } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeatureGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Support every team and strengthen every process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Equip every team with the tools to adapt, scale, and deliver real
            results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featureGridItems.map((item) => (
            <div key={item.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4 min-h-[100px]">
                {item.description}
              </p>
              <Button variant="link" asChild className="px-0 text-primary font-semibold">
                <Link href={item.link}>
                  {item.linkText} &gt;
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
