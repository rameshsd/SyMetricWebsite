
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { customers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from '@/components/shared/section-title';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card';

export function CustomerSuccess() {
  const [ref, isInView] = useInView();
  return (
    <section className="bg-secondary/50 dark:bg-card py-16 md:py-24">
        <div className="container">
            <SectionTitle
                title="Customer Success Stories"
                description="See how leading organizations are achieving their goals with SyMetric Systems."
            />
            <div
                ref={ref}
                className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
                {customers.map((customer, index) => {
                const placeholder = PlaceHolderImages.find((p) => p.id === customer.logo);
                return (
                    <div
                    key={customer.name}
                    className={cn('opacity-0', isInView && 'animate-fade-in-up')}
                    style={{ animationDelay: `${index * 100}ms` }}
                    >
                    <Card className="h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <CardContent className="p-6">
                        {placeholder && (
                            <div className="relative h-12 mb-6 grayscale opacity-60">
                                <Image
                                    src={placeholder.imageUrl}
                                    alt={`${customer.name} logo`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-ai-hint={placeholder.imageHint}
                                />
                            </div>
                        )}
                        <blockquote className="italic text-muted-foreground">"{customer.story}"</blockquote>
                        <p className="mt-4 font-semibold text-foreground">{customer.name}</p>
                        </CardContent>
                    </Card>
                    </div>
                );
                })}
            </div>
      </div>
    </section>
  );
}
