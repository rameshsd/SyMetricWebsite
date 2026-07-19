
'use client';

import Link from "next/link";
import { toolsData } from "@/lib/platform-tools-data";
import { Button } from "@/components/ui/button";

export function PlatformToolsSection() {
  return (
    <section 
      className="py-16" 
      style={{ 
        background: 'linear-gradient(135deg, #16002D 0%, #2A0B5A 35%, #4C1D95 70%, #6D28D9 100%)' 
      }}
    >
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Support Every Stake Holder and Strengthen The Process
          </h2>
          <p className="mt-4 text-lg text-purple-200/90">
            A comprehensive, modular suite to power every aspect of your clinical trial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map(tool => (
            <div 
              key={tool.id} 
              className="p-8 rounded-2xl flex flex-col text-left h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              style={{ 
                backgroundColor: '#FCFAFF',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
              }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 mb-6">
                <tool.icon className="h-8 w-8 text-[#7C3AED]" />
              </div>
              <h3 className="text-xl font-bold text-[#16002D]">{tool.label}</h3>
              <p className="text-slate-600 mt-3 text-sm flex-grow leading-relaxed">{tool.description}</p>
              <Button 
                asChild 
                className="mt-6 self-start bg-[#7C3AED] text-white hover:bg-[#6D28D9] border-none shadow-sm transition-all"
              >
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
