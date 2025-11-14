
"use client";

import { featureGridItems } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "../shared/section-title";

export function FeatureGrid() {
  return (
    <section className="w-full">
      <div className="container">
        <SectionTitle 
            title="The Building Blocks of a Seamless Trial"
            description="Explore our full suite of integrated modules, meticulously designed to power every phase of your clinical trial with precision and ease."
            className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureGridItems.map((item) => (
            <Card key={item.title} className="group flex flex-col text-left p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1 bg-background">
              <div className="flex-shrink-0 flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
              <div className="mt-4">
                <Button variant="link" asChild className="p-0 h-auto font-semibold">
                    <Link href={item.link}>
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
