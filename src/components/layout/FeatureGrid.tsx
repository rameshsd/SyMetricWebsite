"use client";

import { featureGridItems } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeatureGrid() {
  return (
    <section className="w-full">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tighter">
            Support every team and strengthen every process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose mx-auto">
            Equip every team with the tools to adapt, scale, and deliver real
            results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featureGridItems.map((item) => (
            <div key={item.title} className="bg-card p-8 rounded-2xl border transition-shadow hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
