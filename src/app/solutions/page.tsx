import Image from 'next/image';
import Link from 'next/link';
import { solutions } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from '@/components/shared/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
};

export default function SolutionsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'solutions-hero');
    return (
        <>
            <Section className="pt-0 md:pt-0">
                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white rounded-lg overflow-hidden">
                    {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                    />
                    )}
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 text-center p-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Comprehensive Digital Solutions for Clinical Trials.</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">From startup to submission, our integrated suite of solutions empowers you to run faster, smarter clinical trials.</p>
                    </div>
                </div>
            </Section>

            <Section>
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
                                        <Link href={`/solutions/${solution.slug}`}>
                                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </Section>
        </>
    )
}
