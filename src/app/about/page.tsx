
import { companyInfo } from '@/lib/data';
import { PageHeader } from '@/components/layout/PageHeader';
import { LeadershipSection } from '@/components/layout/LeadershipSection';
import { GrowthStoryTimeline } from '@/components/layout/GrowthStoryTimeline';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { CompanyFacts } from '@/components/layout/CompanyFacts';
import Link from 'next/link';
import { SapCloudPortfolio } from '@/components/layout/SapCloudPortfolio';
import { RevolutionizingTrialsSection } from '@/components/about/RevolutionizingTrialsSection';
import { SectionTitle } from '@/components/shared/section-title';


export const metadata = {
  title: 'About Us - SyMetric',
  description: 'Learn about the history, mission, and team behind SyMetric.',
};

export default function AboutPage() {
  const secondaryNav = [
    { label: 'Company Information', href: '#company-info' },
    { label: 'Overview', href: '#overview' },
    { label: 'Our story', href: '#our-story' },
    { label: 'Our Growth Story', href: '#growth-story' },
    { label: 'Our strategy', href: '#our-strategy' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Global sponsorships', href: '#sponsorships' },
    { label: 'Equality and inclusion', href: '#equality' },
  ];

  const heroImage = PlaceHolderImages.find(p => p.id === 'sap-building');

  return (
    <div className="bg-background">
      <PageHeader
        title="Company Information"
        breadcrumb={{ href: '/about', label: 'About' }}
        secondaryNav={secondaryNav}
        showTitle={false}
      />
      <section id="company-info" className="bg-primary text-primary-foreground py-0 px-0">
        <div className="container mx-auto px-0">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-20 px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Revolutionizing<br/>Clinical Trials<br/>With Innovation
              </h1>
            </div>
            <div className="relative h-64 md:h-full min-h-[500px]">
                {heroImage && (
                    <div className="absolute inset-0 clip-path-polygon-about-hero">
                        <Image 
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            data-ai-hint={heroImage.imageHint}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>
          </div>
        </div>
      </section>

      <div id="overview">
        <SectionTitle title="Company Overview" className='pt-20'/>
        <CompanyFacts />
      </div>
      
      <div id="innovation">
        <RevolutionizingTrialsSection />
      </div>

      <section id="our-strategy" className="bg-secondary">
        <div className="container">
          <SectionTitle title="Our Strategy" description="Our vision and mission drive everything we do." className="mb-16"/>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight">Vision</h2>
              <p className="mt-2 text-muted-foreground italic">Our vision...</p>
              <p className="mt-4 text-xl font-semibold text-primary">
                To accelerate the impact of clinical research on healthcare outcomes through digital interventions.
              </p>
              <p className="mt-4 text-muted-foreground">
                We are committed to building technology solutions that stimulate research for the advancement of Patient-Centric medical science. At the core of our vision lies our efforts to make clinical research less resource-intensive and more affordable.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight">Mission</h2>
              <p className="mt-2 text-muted-foreground italic">And we are on a mission!</p>
              <p className="mt-4 text-xl font-semibold text-primary">
                To transform the drug development landscape.
              </p>
              <p className="mt-4 text-muted-foreground">
                The SyMetric team works persistently towards this mission by helping systems adopt innovative digital technologies that improve productivity, lower costs, and assure safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SapCloudPortfolio />
      
      <div id="our-story">
        <SectionTitle title="Our Story" className='pt-20' />
        <LeadershipSection />
        <GrowthStoryTimeline />
      </div>

      <section id="sponsorships" className="bg-background">
        <div className="container text-center">
          <SectionTitle title="Global Sponsorships" description="This is a placeholder for the Global Sponsorships section." />
        </div>
      </section>

      <section id="equality" className="bg-secondary/50">
        <div className="container text-center">
          <SectionTitle title="Equality and Inclusion" description="This is a placeholder for the Equality and Inclusion section." />
        </div>
      </section>

    </div>
  );
}
