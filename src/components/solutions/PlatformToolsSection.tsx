
'use client';

import Link from "next/link";
import { toolsData } from "@/lib/platform-tools-data";
import { cn } from "@/lib/utils";

export function PlatformToolsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Support every team and strengthen every process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Equip every team with the tools to adapt, scale, and deliver real results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          {toolsData.map(tool => (
            <div
              key={tool.id}
              className="group flex gap-6 items-start"
            >

              {/* Icon */}
              <div className="p-4 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition">
                <tool.icon className="h-10 w-10" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {tool.label}
                </h3>
                <p className="mt-2 text-gray-600">
                  {tool.description}
                </p>

                <Link
                  href={tool.link}
                  className="mt-4 block text-blue-700 font-medium hover:underline"
                >
                  Explore {tool.label.toLowerCase()} →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
