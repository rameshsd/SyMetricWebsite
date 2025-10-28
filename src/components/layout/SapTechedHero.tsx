"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SapTechedHero() {
  return (
    <section className="w-full bg-sap-gradient text-white">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center min-h-[500px] space-y-6">
          <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Better Data. Better Clinical Trials.
              </h1>
              <p className="mt-4 max-w-[600px] mx-auto text-white/80 md:text-xl">
                Rely on our technology platform to manage your Clinical Trials with accuracy and ease
              </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" variant="secondary" className="bg-green-400 text-black hover:bg-green-500">
              <Link href="/contact">Schedule a live demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
