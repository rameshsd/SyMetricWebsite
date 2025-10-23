

import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

export const metadata: Metadata = {
  title: 'Clinical Trial Platform - SyMetric',
  description: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools.',
};


export default function ClinicalTrialPlatformPage() {
    
  return (
    <>
        <ProductPageHeader productName="Clinical Trial Platform" />
        <section className="py-12 md:py-16 lg:py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">SyMetric Clinical Trial Platform</h1>
                      <p className="text-xl text-muted-foreground">Designed and built to be an end-to-end platform for Clinical Trials, this Cloud-Based Solution features fully modular tools that allow you to pick and configure them according to your needs.</p>
                  </div>
                  <div className="flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                    <PlatformAnimation />
                  </div>
              </div>
            </div>
        </section>

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
