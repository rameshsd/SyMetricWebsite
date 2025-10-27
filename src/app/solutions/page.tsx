
import Image from 'next/image';
import Link from 'next/link';
import { solutions } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { SolutionsAnimation } from '@/components/animations/SolutionsAnimation';
import { TechEdBanner } from '@/components/layout/TechEdBanner';

export const metadata: Metadata = {
  title: 'Solutions',
};

export default function SolutionsPage() {
    const headerSolutions = solutions.map(({ id, name, slug }) => ({ id, name, slug }));
    const heroBgImage = PlaceHolderImages.find(p => p.id === 'solutions-hero-bg');
    return (
        <>
            <ProductPageHeader productName="SyMetric business applications" solutions={headerSolutions} />
            <section className="relative w-full py-12 md:py-20 lg:py-28 text-white overflow-hidden">
              {heroBgImage && (
                <Image 
                    src={heroBgImage.imageUrl}
                    alt={heroBgImage.description}
                    data-ai-hint={heroBgImage.imageHint}
                    fill
                    className="object-cover"
                />
              )}
              <div className="relative container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                      SyMetric Solutions
                    </h1>
                    <p className="max-w-[600px] text-lg text-white/80 md:text-xl/relaxed">
                      Don't get held back by disconnected applications. Be ready to seize opportunities and secure your success with an integrated suite of solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" asChild>
                        <Link href="/contact">Request a demo</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative min-h-[450px]">
                    <SolutionsAnimation />
                    <div className="absolute -top-4 -right-4 lg:top-4 lg:-left-4 w-24 h-6 bg-[#36D9C4] rounded-full"></div>
                    <div className="absolute top-4 right-16 lg:left-16 lg:right-auto w-32 h-6 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-12 right-8 lg:left-8 lg:right-auto w-24 h-6 bg-[#F065A6] rounded-full"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-1/4 lg:left-1/4 lg:right-auto w-16 h-16 bg-[#2B7DFF] rounded-lg flex items-center justify-center -rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M12 22V9"/><path d="m3.29 9 8.71 4.36 8.71-4.36"/></svg>
                    </div>
                    <div className="absolute -bottom-8 right-1/2 lg:left-[40%] lg:right-auto w-12 h-12 bg-purple-500 rounded-full" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
                    <div className="absolute bottom-4 right-[40%] lg:left-[55%] lg:right-auto w-12 h-12 bg-[#F065A6] rounded-full" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%)'}}></div>
                  </div>
                </div>
              </div>
            </section>
            
            <TechEdBanner />

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {solutions.map((solution) => {
                            const placeholder = PlaceHolderImages.find(p => p.id === solution.image);
                            const solutionUrl = solution.slug === 'clinical-trial-platform' 
                              ? '/solutions/clinical-trial-platform' 
                              : `/solutions/${solution.slug}`;
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
                                            <Link href={solutionUrl}>
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
