
import Image from 'next/image';
import { industries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries',
};

export default function IndustriesPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'industries-hero');
    return (
        <>
            <section className="bg-background py-0 px-0">
                <div className="container mx-auto px-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="py-20 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Powering Research Across the Life Sciences Spectrum
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                        We provide specialized solutions to meet the unique regulatory and operational needs of diverse organizations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Button size="lg" asChild>
                            <Link href="/contact">Request a demo</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/solutions">Explore solutions</Link>
                        </Button>
                    </div>
                    </div>
                    <div className="relative h-64 md:h-full min-h-[500px]">
                        {heroImage && (
                            <div className="absolute inset-0 clip-path-industries-hero">
                                <Image 
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    data-ai-hint={heroImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {industries.map((industry) => (
                        <Card key={industry.name} className="h-full text-center group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <CardHeader>
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110">
                                <industry.icon className="h-10 w-10 text-primary" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <CardTitle className="text-xl">{industry.name}</CardTitle>
                                <p className="mt-2 text-muted-foreground">{industry.description}</p>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
