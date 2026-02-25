"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden -mt-16">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
        poster="https://images.pexels.com/videos/2099496/pexels-photo-2099496.jpeg"
      >
        <source
          src="https://videos.pexels.com/video-files/2099496/2099496-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Better Data. Better Clinical Trials.
          </h1>
          <p className="mt-6 text-lg leading-8 md:text-xl">
            Rely on our technology platform to manage your Clinical Trials with accuracy and ease
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/request-demo">Schedule a live demo</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-gray-100 text-black hover:bg-gray-200">
                <Link href="/solutions">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
