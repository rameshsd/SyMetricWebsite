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


export const metadata = {
  title: 'About Us - SyMetric',
  description: 'Learn about the history, mission, and team behind SyMetric.',
};

export default function AboutPage() {
  const secondaryNav = [
    { label: 'Company Information', href: '/about' },
    { label: 'Overview', href: '#' },
    { label: 'Our story', href: '#' },
    { label: 'Our strategy', href: '#' },
    { label: 'Innovation', href: '#' },
    { label: 'Global sponsorships', href: '#' },
    { label: 'Equality and inclusion', href: '#' },
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
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-12 md:py-24">
              <p className="text-sm mb-2">/ About SyMetric</p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Global Company Information
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg">
                With a global network of customers, partners, employees, and thought leaders, SyMetric helps the world run better and improves people's lives.
              </p>
              <Button asChild variant="outline" className="mt-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  <Link href="#">About SyMetric India</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
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

      <CompanyFacts />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Revolutionizing Clinical Trials With Innovation
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At SyMetric, we help you make the shift from traditional trial models to agile, patient-centric processes driven by our unified Clinical Trial Platform. With us, you can use the power of technology to automate and simplify project management in clinical trials and improve your productivity. We offer modularized solutions for Pharma Companies, Contract Research Organizations, and Academia. You can integrate your processes with our user-friendly applications or choose from comprehensive modules for every stage of your trial. And all this comes to you, complete with Study Configurations, in a matter of three to four weeks. So take a big leap with SyMetric!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
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

      <LeadershipSection />
      <GrowthStoryTimeline />
    </div>
  );
}