

import { Metadata } from 'next';
import { solutions } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { PlatformAnimation } from '@/components/animations/PlatformAnimation';
import { PlatformToolsGrid } from '@/components/solutions/PlatformToolsGrid';
import { CollaborationVision } from '@/components/solutions/CollaborationVision';
import { HostingOptions } from '@/components/solutions/HostingOptions';
import { SyMetricAdvantage } from '@/components/solutions/SyMetricAdvantage';
import { SecurityCompliance } from '@/components/solutions/SecurityCompliance';
import { BuiltWithPurpose } from '@/components/solutions/BuiltWithPurpose';
import { RelatedProductsSection } from '@/components/solutions/RelatedProductsSection';
import { CapabilitiesSection } from '@/components/solutions/CapabilitiesSection';
import { ProductHero } from '@/components/solutions/ProductHero';


export const metadata: Metadata = {
  title: 'Clinical Trial Platform - SyMetric',
  description: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools.',
};


export default function ClinicalTrialPlatformPage() {
    const solution = solutions.find((s) => s.slug === 'clinical-trial-platform');
    const heroImage = PlaceHolderImages.find(p => p.id === 'product-hero-business-people');

  return (
    <>
        <ProductPageHeader productName="Clinical Trial Platform" />
        {solution && heroImage && (
            <ProductHero 
                title={solution.hero.title}
                subtitle={solution.hero.subtitle}
                imageSrc={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
            />
        )}

        <BuiltWithPurpose />
        
        <PlatformToolsGrid />

        <CollaborationVision />
        <HostingOptions />
        <SyMetricAdvantage />
        <SecurityCompliance />
        <CapabilitiesSection />
        <RelatedProductsSection />

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center">
                  <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
                  <div className="flex gap-4 justify-center">
                      <Button size="lg" asChild><a href="/contact">Get a demo</a></Button>
                      <Button size="lg" variant="outline" asChild><a href="/contact">Contact us for pricing</a></Button>
                  </div>
              </div>
            </div>
        </section>
    </>
  );
}
