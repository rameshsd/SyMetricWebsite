
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
  const [ref, isInView] = useInView({ triggerOnce: true });
  const quoteIcon = PlaceHolderImages.find((p) => p.id === 'quote-icon');

  return (
    <section className="bg-secondary/50 dark:bg-card py-16 md:py-24">
        <div className="container">
            <SectionTitle
                title="Customer Success Stories"
                description="See how leading organizations are achieving their goals with SyMetric Systems."
            />
            <div
                ref={ref}
                className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {customers.map((customer, index) => {
                const placeholder = PlaceHolderImages.find((p) => p.id === customer.logo);
                return (
                    <Card
                        key={customer.name}
                        className={cn(
                            'opacity-0 bg-background rounded-2xl flex flex-col justify-between p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2', 
                            isInView && 'animate-fade-in-up'
                        )}
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <CardContent className="p-0">
                            {quoteIcon && (
                                <Image 
                                    src={quoteIcon.imageUrl} 
                                    alt="quote"
                                    width={32}
                                    height={32}
                                    className="mb-4 opacity-20" 
                                />
                            )}
                            <blockquote className="text-muted-foreground italic text-base leading-relaxed">
                                {customer.story}
                            </blockquote>
                        </CardContent>
                        <div className="mt-6">
                            {placeholder && (
                                <div className="relative h-10 mb-4">
                                    <Image
                                        src={placeholder.imageUrl}
                                        alt={`${customer.company} logo`}
                                        fill
                                        style={{ objectFit: 'contain', objectPosition: 'left' }}
                                        data-ai-hint={placeholder.imageHint}
                                        className="grayscale opacity-70"
                                    />
                                </div>
                            )}
                            <p className="font-semibold text-foreground text-sm">{customer.name}</p>
                            <p className="text-xs text-muted-foreground">{customer.company}</p>
                        </div>
                    </Card>
                );
                })}
            </div>
      </div>
    </section>
  );
}
