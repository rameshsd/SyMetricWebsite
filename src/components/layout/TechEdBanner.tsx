
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export function TechEdBanner() {
  return (
    <section className="w-full bg-background py-4 px-0">
      <div className="container">
        <div className="bg-blue-900 text-white rounded-lg p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-4 text-center md:text-left">
                <h2 className="text-lg font-bold flex-shrink-0">SyMetric TechEd</h2>
                <p className="text-sm text-white/80">
                  Transform your business with Joule, agents, and SyMetric's AI
                  operating system, November 4-6, 2025.
                </p>
              </div>
              <Button
                asChild
                variant="link"
                className="text-white hover:text-white/80 mt-2 md:mt-0 flex-shrink-0"
              >
                <Link href="#">
                  <BookOpen className="mr-2" />
                  Learn more
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
