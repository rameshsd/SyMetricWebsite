import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-sap-gradient-light dark:bg-sap-gradient-dark bg-200% animate-gradient-bg -z-10" />
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-primary-foreground">
              Transforming Clinical Research Through Technology.
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              SyMetric Systems enables end-to-end digital transformation in clinical trials and research management.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild className="transform transition-transform duration-300 hover:scale-105">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 transform transition-transform duration-300 hover:scale-105">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
