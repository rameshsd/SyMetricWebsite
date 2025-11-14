
import { companyInfo } from '@/lib/data';
import { PageHeader } from '@/components/layout/PageHeader';
import { LeadershipSection } from '@/components/layout/LeadershipSection';
import { GrowthStoryTimeline } from '@/components/layout/GrowthStoryTimeline';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { CompanyFacts } from '@/components/layout/CompanyFacts';
import Link from 'next/link';
import CtpPieChart from '@/components/about/CtpPieChart';
import { RevolutionizingTrialsSection } from '@/components/about/RevolutionizingTrialsSection';
import { SectionTitle } from '@/components/shared/section-title';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';


export const metadata = {
  title: 'About Us - SyMetric',
  description: 'Learn about the history, mission, and team behind SyMetric.',
};

const StrategyCard = ({ title, description }: { title: string, description: React.ReactNode }) => (
  <Card className="bg-background/10 dark:bg-blue-900/30 p-8 rounded-2xl border-white/20 shadow-sm text-primary-foreground">
    <div className="w-12 h-1.5 bg-primary rounded-full mb-4" />
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <div className="text-primary-foreground/90 space-y-3">{description}</div>
  </Card>
);

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

  const heroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
  const sponsorshipImage = PlaceHolderImages.find(p => p.id === 'global-sponsorships-soccer');
  const strategyImage = PlaceHolderImages.find(p => p.id === 'strategy-illustration');

  return (
    <div className="bg-background">
      <PageHeader
        title="Company Information"
        breadcrumb={{ href: '/about', label: 'About' }}
        secondaryNav={secondaryNav}
        showTitle={false}
      />
      <div>
        <section id="company-info" className="bg-primary text-primary-foreground py-20 px-0">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Global Company Information
                </h1>
                <p className="max-w-lg text-lg text-primary-foreground/80">
                  With a global network of customers, partners, employees, and thought leaders, SyMetric helps the world run better and improves people's lives.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
                  <Link href="#our-story">Learn More</Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-full min-h-[400px]">
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

        <section id="our-strategy" className="bg-sap-gradient text-primary-foreground py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white">Our Strategy</h2>
              <p className="mt-2 text-primary-foreground/80">
                Our vision and mission drive everything we do.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] max-w-lg mx-auto">
                {strategyImage && (
                  <Image
                    src={strategyImage.imageUrl}
                    alt={strategyImage.description}
                    data-ai-hint={strategyImage.imageHint}
                    fill
                    className=""
                  />
                )}
              </div>
              <div className="space-y-8">
                <StrategyCard 
                  title="Vision"
                  description={
                    <>
                      <p className="text-lg font-semibold text-white">To accelerate the impact of clinical research on healthcare outcomes through digital interventions.</p>
                      <p>We are committed to building technology solutions that stimulate research for the advancement of Patient-Centric medical science. At the core of our vision lies our efforts to make clinical research less resource-intensive and more affordable.</p>
                    </>
                  }
                />
                 <StrategyCard 
                  title="Mission"
                  description={
                    <>
                      <p className="text-lg font-semibold text-white">To transform the drug development landscape.</p>
                      <p>The SyMetric team works persistently towards this mission by helping systems adopt innovative digital technologies that improve productivity, lower costs, and assure safety.</p>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <CtpPieChart />
        
        <div id="our-story">
          <SectionTitle title="Our Story" className='pt-20' />
          <LeadershipSection />
          <GrowthStoryTimeline />
        </div>

        <section id="sponsorships" className="bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight mb-12">Global Sponsorships</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  {sponsorshipImage && (
                    <Image
                      src={sponsorshipImage.imageUrl}
                      alt={sponsorshipImage.description}
                      data-ai-hint={sponsorshipImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    As the leader in technology software, SAP is proud to expand our relationships within the sports and entertainment world. Partnerships with world-class teams, leagues, and properties have afforded us the ability to create technology solutions that engage fans, media, players, and coaches on another level, integrating real-time cloud-based analytics.
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto text-primary font-semibold">
                    <Link href="#">
                      Explore SAP sponsorships <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="equality" className="bg-secondary/50">
          <div className="container text-center">
            <SectionTitle title="Equality and Inclusion" description="This is a placeholder for the Equality and Inclusion section." />
          </div>
        </section>
      </div>
    </div>
  );
}
