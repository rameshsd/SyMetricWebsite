'use client';

import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="py-10" style={{ backgroundColor: '#D7E3FA' }}>
        <div className="container">
          <div className="max-w-3xl text-left space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-800 text-xs font-semibold uppercase tracking-wider">
              Multimedia Showcase
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              SyMetric Gallery
            </h1>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-normal">
              Explore our journey, milestone achievements, industry events, team culture, and product innovation through photos and videos.
            </p>
          </div>
        </div>
      </section>

      {/* Empty Gallery Section */}
      <section className="py-24 flex-1 flex items-center justify-center bg-secondary/10">
        <div className="container text-center max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border border-blue-100 shadow-sm">
            <ImageIcon className="w-8 h-8 stroke-[1.5]" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Gallery Coming Soon</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Photos, videos, and event highlights will be uploaded here shortly.
          </p>
        </div>
      </section>
    </div>
  );
}
