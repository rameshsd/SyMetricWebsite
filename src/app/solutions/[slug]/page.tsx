import { solutions } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Section } from '@/components/shared/section';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) return { title: 'Solution Not Found' };
  return { title: solution.name };
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <ProductPageHeader productName={solution.name} />
      <SyMetricBusinessAI />

      <Section className="bg-secondary/50 dark:bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <solution.icon className="h-12 w-12 text-primary mb-4" />
                <h1 className="text-4xl font-bold tracking-tight mb-4">{solution.name}</h1>
                <p className="text-xl text-muted-foreground">{solution.longDescription}</p>
                 <Button asChild size="lg" className="mt-8">
                  <Link href="/contact">Request a Demo</Link>
                </Button>
            </div>
            <div>
                 {PlaceHolderImages.find(p => p.id === solution.image) && (
                     <Card className="overflow-hidden">
                        <div className="relative w-full aspect-video">
                            <Image 
                                src={PlaceHolderImages.find(p => p.id === solution.image)!.imageUrl}
                                alt={solution.name}
                                fill
                                className="object-cover"
                                data-ai-hint={PlaceHolderImages.find(p => p.id === solution.image)!.imageHint}
                            />
                        </div>
                     </Card>
                 )}
            </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i}>
                    <CardContent className="p-6">
                        <CheckCircle className="h-6 w-6 text-green-500 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Feature {i+1}</h3>
                        <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}
