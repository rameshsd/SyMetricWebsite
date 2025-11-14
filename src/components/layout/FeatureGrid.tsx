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
            title="A Comprehensive Suite of Tools"
            description="Equip every team with the tools to adapt, scale, and deliver real results."
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
                    <Link href={item.link} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.title}
                    </Link>
                </h3>
              </div>
              <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
