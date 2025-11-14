'use client';
import Image from 'next/image';
import { customers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from '@/components/shared/section-title';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card';
import { User, CheckCircle } from 'lucide-react';

export function CustomerSuccess() {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-blue-100/50 dark:bg-blue-900/10">
        <div className="container">
            <SectionTitle
                title="Read what our customers say"
            />
            <div
                ref={ref}
                className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
            >
                {customers.map((customer, index) => {
                const placeholder = PlaceHolderImages.find((p) => p.id === customer.avatarId);
                return (
                    <Card
                        key={customer.name}
                        className={cn(
                            'opacity-0 bg-background text-foreground rounded-2xl flex flex-col p-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2', 
                            isInView && 'animate-fade-in-up'
                        )}
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <CardContent className="p-0 flex-grow flex flex-col">
                            <span className="text-6xl font-bold text-primary/20 leading-none">“</span>
                            <blockquote className="text-muted-foreground text-base leading-relaxed -mt-4 flex-grow">
                                {customer.story}
                            </blockquote>
                        </CardContent>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                                <CheckCircle className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground text-base">{customer.name}</p>
                                <p className="text-sm text-muted-foreground">{customer.role}, {customer.company}</p>
                            </div>
                        </div>
                    </Card>
                );
                })}
            </div>
      </div>
    </section>
  );
}
