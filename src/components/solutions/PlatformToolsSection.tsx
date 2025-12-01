
'use client';

import Link from "next/link";
import { toolsData } from "@/lib/platform-tools-data";
import { cn } from "@/lib/utils";

export function PlatformToolsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 relative pl-4">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></span>
            Support every team and strengthen every process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Empower your teams with the adaptive tools they need to innovate, scale, and achieve remarkable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
