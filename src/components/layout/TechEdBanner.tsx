
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export function TechEdBanner() {
  return (
    <section className="w-full bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold">SyMetric TechEd</h2>
            <p className="hidden md:block text-white/80">
              Transform your business with Joule, agents, and SyMetric's AI
              operating system, November 4-6, 2025.
            </p>
          </div>
          <Button
            asChild
            variant="link"
            className="text-white hover:text-white/80"
          >
            <Link href="#">
              <BookOpen className="mr-2" />
              Learn more
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
