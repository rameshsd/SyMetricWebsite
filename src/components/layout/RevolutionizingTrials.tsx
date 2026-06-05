'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedTimeline } from '@/components/animations/AnimatedTimeline';
import { SectionTitle } from '@/components/shared/section-title';

export function RevolutionizingTrials() {
    return (
        <section className="w-full bg-secondary/30 py-16">
            <div className="container text-left">
                {/* Heading and Description above content */}
                <SectionTitle
                    title="Efficiency in clinical trials"
                    description="Bring data and apps together with SyMetric to create a system where every decision informs the next."
                    className="mb-12"
                />

                <AnimatedTimeline />

                <div className="mt-10">
                    <Button asChild size="lg" className="rounded-xl">
                        <Link href="/solutions">
                            Explore More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
