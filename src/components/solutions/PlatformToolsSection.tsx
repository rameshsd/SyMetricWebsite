'use client';

import Link from "next/link";
import { toolsData } from "@/lib/platform-tools-data";
import { cn } from "@/lib/utils";

export function PlatformToolsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-900 relative pl-4">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></span>
            Support every team and strengthen every process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Empower your teams with the adaptive tools they need to innovate, scale, and achieve remarkable outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {toolsData.map(tool => (
            <div
              key={tool.id}
              className="group flex flex-col items-start text-left p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >

              {/* Icon */}
              <div className="p-3 rounded-xl text-primary bg-primary/10 group-hover:bg-primary/10 transition mb-4">
                <tool.icon className="h-16 w-16" />
              </div>

              {/* Text */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">
                  {tool.label}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {tool.description}
                </p>
              </div>

              <Link
                  href={tool.link}
                  className="mt-4 inline-block text-primary font-medium text-sm hover:underline"
                >
                  Explore {tool.label.toLowerCase()} →
                </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
