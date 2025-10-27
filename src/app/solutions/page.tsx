'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { solutions } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { TechEdBanner } from '@/components/layout/TechEdBanner';

const SolutionsAnimation = dynamic(
  () => import('@/components/animations/SolutionsAnimation').then(mod => mod.SolutionsAnimation),
  { ssr: false, loading: () => <div className="h-[400px] w-[400px]" /> } 
);

export default function SolutionsPage() {
  const headerSolutions = solutions.map(({ id, name, slug }) => ({ id, name, slug }));

  return (
    <>
      <ProductPageHeader productName="SyMetric business applications" solutions={headerSolutions} />

      {/* ✅ Hero Section (Fixed Animation Container) */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 text-white overflow-hidden bg-solutions-hero-gradient bg-cover bg-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                SyMetric Solutions
              </h1>
              <p className="max-w-[600px] text-lg text-white/80 md:text-xl/relaxed">
                Don't get held back by disconnected applications. Be ready to seize opportunities
                and secure your success with an integrated suite of solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Request a demo</Link>
                </Button>
              </div>
            </div>

            {/* ✅ Animated Diagram (Right Side) */}
            <div className="flex items-center justify-center min-h-[450px]">
              <div className="relative bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-lg w-full max-w-[500px] flex items-center justify-center">
                <SolutionsAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TechEd Banner */}
      <TechEdBanner />

      {/* Solutions Cards Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {solutions.map((solution) => {
              const placeholder = PlaceHolderImages.find(p => p.id === solution.image);
              const solutionUrl = solution.slug === 'clinical-trial-platform'
                ? '/solutions/clinical-trial-platform'
                : `/solutions/${solution.slug}`;

              return (
                <Card
                  key={solution.id}
                  className="h-full flex flex-col group overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    {placeholder && (
                      <Image
                        src={placeholder.imageUrl}
                        alt={solution.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={placeholder.imageHint}
                      />
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <solution.icon className="h-8 w-8 text-primary shrink-0" />
                      <CardTitle className="text-xl">{solution.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{solution.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="link" asChild className="p-0 h-auto">
                      <Link href={solutionUrl}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
