

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
import { Database, Repeat, ClipboardList } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TechEdBanner } from '@/components/layout/TechEdBanner';
import { ExploreSolutions } from '@/components/solutions/ExploreSolutions';
import { GlobalPresence } from '@/components/solutions/GlobalPresence';


export const metadata: Metadata = {
  title: 'Clinical Trial Platform - SyMetric',
  description: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools.',
};


export default function ClinicalTrialPlatformPage() {
    const solution = solutions.find((s) => s.slug === 'clinical-trial-platform');
    const headerSolutions = solutions.map(({ id, name, slug }) => ({ id, name, slug }));

  return (
    <>
        <ProductPageHeader productName="Clinical Trial Platform" solutions={headerSolutions} />
        
        {solution && (
             <section className="w-full min-h-[450px] flex items-center bg-[#f5f3ff] dark:bg-card py-0">
                <div className="container">
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
                    <div className="relative w-full min-h-[520px] flex items-center justify-center">
                        <PlatformAnimation />
                    </div>
                    </div>
                </div>
            </section>
        )}
        <TechEdBanner />

        <BuiltWithPurpose />
        
        <PlatformToolsGrid />

        <ExploreSolutions />
        <CollaborationVision />
        <HostingOptions />
        <SyMetricAdvantage />
        <SecurityCompliance />
        <GlobalPresence />
        <CapabilitiesSection />
        <RelatedProductsSection />

        <section>
            <div className="container">
              <div className="text-center">
                  <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
                  <div className="flex gap-4 justify-center mt-8">
                      <Button size="lg" asChild><a href="/contact">Get a demo</a></Button>
                      <Button size="lg" variant="outline" asChild><a href="/contact">Contact us for pricing</a></Button>
                  </div>
              </div>
            </div>
        </section>
    </>
  );
}
