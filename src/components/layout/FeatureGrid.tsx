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
            description="Our platform provides a modular, integrated set of tools to manage every aspect of your clinical trial, from startup to closeout."
            className="mb-16"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featureGridItems.map((item) => (
            <Card key={item.title} className="group flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                  <Link href={item.link} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {item.title}
                  </Link>
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
