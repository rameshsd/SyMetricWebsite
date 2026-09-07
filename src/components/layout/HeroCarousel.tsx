
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { heroCarouselItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AUTO_SLIDE_DELAY = 10000;

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = heroCarouselItems.map(item => {
    const image = PlaceHolderImages.find(p => p.id === item.imageId);
    return {
      id: item.id,
      heading: item.title,
      subheading: item.subtitle,
      image: image?.imageUrl || '',
      imageHint: image?.imageHint || '',
      cta1: item.cta1,
      cta2: item.cta2
    }
  });

  const startTimer = useCallback(() => {
    if (slides.length <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, AUTO_SLIDE_DELAY);
  }, [isPaused, slides.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goToSlide = (index: number) => {
    if (slides.length <= 1) return;
    setCurrentSlide(index);
    startTimer();
  };

  const nextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer();
  }, [slides.length, startTimer]);

  const prevSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
  }, [slides.length, startTimer]);


  const togglePause = () => {
    if (slides.length <= 1) return;
    setIsPaused(!isPaused);
  };

  return (
    <section
      className="relative w-full h-[85vh] -mt-16 overflow-hidden bg-black"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1200ms] ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className={cn(
                "object-cover",
                index === currentSlide && slides.length > 1 && "animate-ken-burns"
              )}
              priority={index === 0}
              data-ai-hint={slide.imageHint}
            />
          </div>
          <div className={cn(
            "absolute inset-0 z-20",
            slide.id === 'hero-carousel-4'
              ? "bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/50"
              : "bg-black/50"
          )} />
        </div>
      ))}

      {/* Main Slide Content */}
      <div className="relative z-30 container h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {slides[currentSlide].id === 'hero-carousel-4' ? (
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
                Industry Recognition • Everest Group PEAK Matrix® 2025
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight">
                Recognized as <span className="text-emerald-400">Major Contender</span> in Global RTSM
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Everest Group has recognized SyMetric in the <strong className="text-white font-semibold">Life Sciences RTSM Products PEAK Matrix® Assessment 2025</strong> for our strong market impact, proven capability excellence, and customer-centric clinical trial solutions.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[3/4] max-h-[50vh] rounded-xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900/80 backdrop-blur-md group hover:border-blue-400/40 transition-all duration-300">
                <Image
                  src="/everest-peak-matrix-dark.jpg"
                  alt="SyMetric Everest Group Recognition Poster"
                  fill
                  className="object-contain p-2 rounded-xl group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg md:whitespace-nowrap">
              {slides[currentSlide].heading}
            </h1>

            <p className="text-base text-white/80 font-medium drop-shadow-md max-w-3xl mx-auto">
              {slides[currentSlide].subheading}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="default"
                className="min-w-[200px] h-10 rounded-md text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition-all"
                asChild
              >
                <Link href={slides[currentSlide].cta1.link}>{slides[currentSlide].cta1.text}</Link>
              </Button>
              <Button
                size="default"
                variant="secondary"
                className="min-w-[200px] h-10 rounded-md text-sm font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-xl transition-all"
                asChild
              >
                <Link href={slides[currentSlide].cta2.link}>{slides[currentSlide].cta2.text}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-md bg-black/20 text-white/80 backdrop-blur-sm hover:bg-black/40 hover:text-white transition-all group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-md bg-black/20 text-white/80 backdrop-blur-sm hover:bg-black/40 hover:text-white transition-all group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-8 left-8 z-40">
            <button
              onClick={togglePause}
              className="p-2 rounded-md bg-black/40 text-white hover:bg-black/60 transition-all"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4 fill-current" />}
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-1.5 rounded-full bg-white/40 transition-all duration-500 hover:bg-white/70",
                  index === currentSlide ? "w-6 bg-white" : "w-1.5"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
