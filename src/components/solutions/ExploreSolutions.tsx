'use client';

import { solutions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredSolutions = ['irt-iwrs', 'edc', 'ctm'];

export function ExploreSolutions() {
  const solutionsToShow = solutions.filter(s => featuredSolutions.includes(s.slug));

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Explore Our Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our comprehensive technology platform brings together AI, data, and applications to transform your clinical operations.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {solutionsToShow.map(solution => (
                <div key={solution.id}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                        <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{solution.name}</h3>
                    <p className="text-muted-foreground mb-4 min-h-[140px]">{solution.longDescription}</p>
                    <Button variant="link" asChild className="p-0 h-auto font-semibold text-primary">
                        <Link href={`/solutions/${solution.slug}`}>
                            Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
