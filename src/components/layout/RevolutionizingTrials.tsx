'use client';

import { AnimatedTimeline } from '../animations/AnimatedTimeline';

export function RevolutionizingTrials() {
  return (
    <section className="w-full bg-secondary/30 py-20 md:py-28">
      <div className="container">
        <div className="mb-16 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Efficiency In The Clinical Trials</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our unified platform uses automation and a scalable infrastructure to streamline workflows, unify data, and accelerate every phase of your trial.</p>
        </div>
        <AnimatedTimeline />
      </div>
    </section>
  );
}
