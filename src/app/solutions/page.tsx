

import Image from 'next/image';
import Link from 'next/link';
import { solutions } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';

export const metadata: Metadata = {
  title: 'Solutions',
};

export default function SolutionsPage() {
    const heroImage = PlaceHolderImages.find((p) => p.id === 'sap-business-applications-hero');
    return (
        <>
            <ProductPageHeader productName="SAP business applications" />
            <section className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                      SAP business applications
                    </h1>
                    <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
                      Don't get held back by disconnected applications. Be ready to seize opportunities and secure your success with an integrated suite of solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" asChild>
                        <Link href="/contact">Request a demo</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    {heroImage && (
                      <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        data-ai-hint={heroImage.imageHint}
                        width={600}
                        height={450}
                        className="rounded-lg object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution) => {
                            const placeholder = PlaceHolderImages.find(p => p.id === solution.image);
                            return (
                                <Card key={solution.id} className="h-full flex flex-col group overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                    <div className="relative w-full h-48 overflow-hidden">
                                    {placeholder && (
                                        <Image
                                            src={placeholder.imageUrl}
                                            alt={solution.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="transition-transform duration-500 group-hover:scale-105"
                                            data-ai-hint={placeholder.imageHint}
                                        />
                                    )}
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <solution.icon className="h-8 w-8 text-primary shrink-0" />
                                            <CardTitle className="text-xl">{solution.name}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription>{solution.description}</CardDescription>
                                    </CardContent>
                                    <div className="p-6 pt-0">
                                        <Button variant="link" asChild className="p-0 h-auto">
                                            <Link href={solution.slug === 'clinical-trial-platform' ? '/solutions/clinical-trial-platform' : `/solutions/${solution.slug}`}>
                                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
