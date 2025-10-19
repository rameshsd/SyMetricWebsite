import Image from 'next/image';
import { industries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from '@/components/shared/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries',
};

export default function IndustriesPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'industries-hero');
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
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Powering Research Across the Life Sciences Spectrum</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">We provide specialized solutions to meet the unique regulatory and operational needs of diverse organizations.</p>
                    </div>
                </div>
            </Section>

            <Section>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry) => (
                    <Card key={industry.name} className="h-full text-center group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <CardHeader>
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110">
                            <industry.icon className="h-10 w-10 text-primary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-xl">{industry.name}</CardTitle>
                            <p className="mt-2 text-muted-foreground">{industry.description}</p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </Section>
        </>
    )
}
