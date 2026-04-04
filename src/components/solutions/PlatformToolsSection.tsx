'use client';

import Link from "next/link";
import { toolsData } from "@/lib/platform-tools-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PlatformToolsSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 relative pl-4">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></span>
            Support Every Stake Holder and Strengthen The Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Empower your teams with the adaptive tools they need to innovate, scale, and achieve remarkable outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map(tool => (
            <Card key={tool.id} className="flex flex-col overflow-hidden bg-background rounded-2xl shadow-sm border">
              {/* Icon as image placeholder */}
              <div className="flex items-center justify-center h-48 bg-slate-100 dark:bg-slate-800/50 relative">
                  <tool.icon className="h-20 w-20 text-primary" />
              </div>

              {/* Content */}
              <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground">
                      {tool.label}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm flex-grow">
                      {tool.description}
                  </p>
                  <Button variant="outline" asChild className="mt-6 self-start">
                      <Link href={tool.link}>
                          Learn more
                      </Link>
                  </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
