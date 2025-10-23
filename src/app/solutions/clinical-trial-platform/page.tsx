

import { Metadata } from 'next';
import Link from 'next/link';
import { solutions } from '@/lib/data';
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
import { Database } from 'lucide-react';
import { Card } from '@/components/ui/card';


export const metadata: Metadata = {
  title: 'Clinical Trial Platform - SyMetric',
  description: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools.',
};


export default function ClinicalTrialPlatformPage() {
    const solution = solutions.find((s) => s.slug === 'clinical-trial-platform');

  return (
    <>
        <ProductPageHeader productName="Clinical Trial Platform" />
        
        {solution && (
             <section className="w-full py-12 md:py-20 lg:py-28 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            {solution.hero.title}
                        </h1>
                        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
                            {solution.hero.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                            <Link href="/contact">Request a demo</Link>
                        </Button>
                        </div>
                    </div>
                    <div className="relative w-full h-[450px] grid grid-cols-4">
                      <div className="col-span-3 bg-blue-100/50 rounded-l-lg relative p-4">
                        <PlatformAnimation />
                      </div>
                      <div className="col-span-1 bg-background rounded-r-lg flex items-center justify-center p-4 border-t border-b border-r">
                         <div className="flex flex-col items-center gap-2">
                           <Card className="w-36 h-24 flex items-center justify-center shadow-lg">
                              <Database className="w-10 h-10 text-primary" />
                           </Card>
                           <p className="font-semibold text-sm text-foreground text-center">EDC</p>
                         </div>
                      </div>
                    </div>
                    </div>
                </div>
            </section>
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
