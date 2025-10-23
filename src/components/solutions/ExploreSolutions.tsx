'use client';

import { solutions } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SectionTitle } from '../shared/section-title';
import { ArrowRight } from 'lucide-react';

const featuredSolutions = ['irt-iwrs', 'edc', 'ctm'];

export function ExploreSolutions() {
  const solutionsToShow = solutions.filter(s => featuredSolutions.includes(s.slug));

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
            title="Explore Our Solutions"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionsToShow.map(solution => (
                <Card key={solution.id} className="bg-background border shadow-sm">
                    <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-foreground mb-4">{solution.name}</h3>
                        <p className="text-muted-foreground mb-6 min-h-[120px]">{solution.longDescription}</p>
                        <Button variant="link" asChild className="p-0 h-auto font-semibold">
                            <Link href={`/solutions/${solution.slug}`}>
                                Find out more <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
