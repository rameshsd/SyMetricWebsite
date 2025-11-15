'use client';

import { solutions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredSolutions = ['irt-iwrs', 'edc', 'ctm'];

export function ExploreSolutions() {
  const solutionsToShow = solutions.filter(s => featuredSolutions.includes(s.slug));

  return (
    <section>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
                Explore Our Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose mx-auto">
                Our comprehensive technology platform brings together AI, data, and applications to transform your clinical operations.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutionsToShow.map(solution => (
                <div key={solution.id} className="text-left bg-card p-8 rounded-2xl border transition-shadow hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                        <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{solution.name}</h3>
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
