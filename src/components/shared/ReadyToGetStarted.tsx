
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ReadyToGetStarted() {
  return (
    <section id="get-started" className="bg-secondary/30 py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-prose mx-auto">
            Let our experts help you find the right services to accelerate your research.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link href="/request-demo">Get a demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
