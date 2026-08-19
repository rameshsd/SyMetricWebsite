import { Metadata } from 'next';
import Link from 'next/link';
import { solutions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/PageHeader';
import UltraHeroDiagram from '@/components/animations/UltraHeroDiagram';
import { PlatformToolsGrid } from '@/components/solutions/PlatformToolsGrid';
import { HostingOptions } from '@/components/solutions/HostingOptions';
import { SyMetricAdvantage } from '@/components/solutions/SyMetricAdvantage';
import { SecurityCompliance } from '@/components/solutions/SecurityCompliance';
import { BuiltWithPurpose } from '@/components/solutions/BuiltWithPurpose';
import { GlobalPresence } from '@/components/solutions/GlobalPresence';
import { ReadyToGetStarted } from '@/components/shared/ReadyToGetStarted';

export const metadata: Metadata = {
  title: 'Clinical Trial Platform - SyMetric',
  description: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools that allow you to pick and configure them according to your needs.',
};

export default function ClinicalTrialPlatformPage() {
    const solution = solutions.find((s) => s.slug === 'clinical-trial-platform');
    
    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'Purpose', href: '#purpose' },
        { label: 'Platform Tools', href: '#tools' },
        { label: 'Hosting', href: '#hosting' },
    ];

  return (
    <>
        <PageHeader
            title="Clinical Trial Platform"
            breadcrumb={{ href: '/solutions', label: 'Solutions' }}
            secondaryNav={secondaryNav}
        />
        
        <div className="flex flex-col">
            {solution && (
                <section id="overview" className="w-full flex items-center bg-[#f5f3ff] dark:bg-card pt-8 pb-12">
                    <div className="container">
                        <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="space-y-6 lg:col-span-5">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                {solution.hero.title}
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
                                {solution.hero.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <Link href="/request-demo">Request a demo</Link>
                            </Button>
                            </div>
                        </div>
                        <div className="relative w-full flex items-center justify-center lg:col-span-7">
                            <UltraHeroDiagram />
                        </div>
                        </div>
                    </div>
                </section>
            )}

            <div id="purpose">
                <BuiltWithPurpose />
            </div>
            
            <div id="tools">
              <PlatformToolsGrid />
            </div>



            <GlobalPresence />

            <div id="hosting">
                <HostingOptions />
            </div>

            <SyMetricAdvantage />
            <SecurityCompliance />
            
            <ReadyToGetStarted />
        </div>
    </>
  );
}
