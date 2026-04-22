'use client';

import Link from "next/link";
import { toolsData } from "@/lib/platform-tools-data";
import { Button } from "@/components/ui/button";

export function PlatformToolsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: 'rgb(2,3,129)' }}>
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Support Every Stake Holder and Strengthen The Process
          </h2>
          <p className="mt-4 text-lg text-white/80">
            A comprehensive, modular suite to power every aspect of your clinical trial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map(tool => (
            <div key={tool.id} className="bg-white/5 p-8 rounded-2xl flex flex-col text-left h-full">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white/10 mb-6">
                <tool.icon className="h-10 w-10 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{tool.label}</h3>
              <p className="text-white/70 mt-4 text-base flex-grow">{tool.description}</p>
              <Button variant="outline" asChild className="mt-6 self-start bg-transparent text-white border-white/50 hover:bg-white/10">
                <Link href={tool.link}>
                  Explore more
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
