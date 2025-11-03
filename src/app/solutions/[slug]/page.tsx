

import { solutions } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { RelatedProductsSection } from '@/components/solutions/RelatedProductsSection';
import { CapabilitiesSection } from '@/components/solutions/CapabilitiesSection';
import { ProductHero } from '@/components/solutions/ProductHero';
import { TechEdBanner } from '@/components/layout/TechEdBanner';

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

  const heroImage = PlaceHolderImages.find(p => p.id === solution.image) || PlaceHolderImages.find(p => p.id === 'product-hero-business-people');
  
  const secondaryNav = [
    { label: 'Overview', href: '#overview' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Related Products', href: '#related-products' },
  ];

  return (
    <>
      <PageHeader
        title={solution.name}
        breadcrumb={{ href: '/solutions', label: 'Solutions' }}
        secondaryNav={secondaryNav}
      />
      <div className="pt-16">
        {heroImage && (
          <div id="overview">
            <ProductHero 
              title={solution.hero.title}
              subtitle={solution.hero.subtitle}
              imageSrc={heroImage.imageUrl}
              imageHint={heroImage.imageHint}
              backgroundColor={solution.backgroundColor}
            />
          </div>
        )}
        <TechEdBanner />
        <div id="capabilities">
          <CapabilitiesSection capabilities={solution.capabilities} />
        </div>
        <div id="related-products">
          <RelatedProductsSection />
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}
