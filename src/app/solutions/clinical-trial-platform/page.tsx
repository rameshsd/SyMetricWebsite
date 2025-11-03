

import { Metadata } from 'next';
import Link from 'next/link';
import { solutions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/PageHeader';
import { PlatformAnimation } from '@/components/animations/PlatformAnimation';
import { PlatformToolsGrid } from '@/components/solutions/PlatformToolsGrid';
import { HostingOptions } from '@/components/solutions/HostingOptions';
import { SyMetricAdvantage } from '@/components/solutions/SyMetricAdvantage';
import { SecurityCompliance } from '@/components/solutions/SecurityCompliance';
import { BuiltWithPurpose } from '@/components/solutions/BuiltWithPurpose';
import { RelatedProductsSection } from '@/components/solutions/RelatedProductsSection';
import { CapabilitiesSection } from '@/components/solutions/CapabilitiesSection';
import { TechEdBanner } from '@/components/layout/TechEdBanner';
import { GlobalPresence } from '@/components/solutions/GlobalPresence';
import { CollaborationVision } from '@/components/solutions/CollaborationVision';


export const metadata: Metadata = {
  title: 'Clinical Trial Platform - SyMetric',
  description: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools.',
};


export default function ClinicalTrialPlatformPage() {
    const solution = solutions.find((s) => s.slug === 'clinical-trial-platform');
    
    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Tools', href: '#tools' },
        { label: 'Related Products', href: '#related-products' },
        { label: 'Hosting', href: '#hosting' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Pricing', href: '#pricing' },
    ];

  return (
    <>
        <PageHeader
            title="Clinical Trial Platform"
            breadcrumb={{ href: '/solutions', label: 'Solutions' }}
            secondaryNav={secondaryNav}
        />
        
        <div>
            {solution && (
                <section id="overview" className="w-full min-h-[450px] flex items-center bg-[#f5f3ff] dark:bg-card py-20">
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

            <div id="how-it-works">
                <BuiltWithPurpose />
            </div>
            
            <div id="tools">
              <PlatformToolsGrid />
            </div>

            <div id="related-products">
                <RelatedProductsSection />
            </div>
            <CollaborationVision />
            <GlobalPresence />
            <div id="hosting">
                <HostingOptions />
            </div>
            <SyMetricAdvantage />
            <SecurityCompliance />
            <div id="capabilities">
                <CapabilitiesSection />
            </div>
            
            <section id="pricing" className="bg-secondary/50">
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
        </div>
    </>
  );
}
