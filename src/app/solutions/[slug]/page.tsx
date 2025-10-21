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

  const businessAIImage = PlaceHolderImages.find(p => p.id === 'business-ai-hero');

  return (
    <>
      <ProductPageHeader productName={solution.name} />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-violet-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                SyMetric Business AI
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
                Create transformative impact with the most powerful AI and agents fuelled by the context of all your business data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Request a demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">Sign up for our newsletter</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              {businessAIImage && (
                <Image
                  src={businessAIImage.imageUrl}
                  alt={businessAIImage.description}
                  data-ai-hint={businessAIImage.imageHint}
                  width={600}
                  height={450}
                  className="rounded-lg object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </section>

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
