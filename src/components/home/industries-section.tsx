
'use client';
import { industries } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function IndustriesSection() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-16 md:py-24">
        <div className="container">
            <SectionTitle
                title="Industries We Serve"
                description="Tailored solutions for the unique challenges of each life sciences sector."
            />
            <div
                ref={ref}
                className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
            >
                {industries.map((industry, index) => (
                <div
                    key={industry.name}
                    className={cn('opacity-0', isInView && 'animate-fade-in-up')}
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <Card className="h-full text-center group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <CardHeader>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110">
                        <industry.icon className="h-8 w-8 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="text-lg">{industry.name}</CardTitle>
                        <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
                    </CardContent>
                    </Card>
                </div>
                ))}
            </div>
      </div>
    </section>
  );
}
