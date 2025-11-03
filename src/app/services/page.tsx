

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ServicesTabs } from '@/components/services/ServicesTabs';
import { PageHeader } from '@/components/layout/PageHeader';
import { ExploreSolutions } from '@/components/solutions/ExploreSolutions';
import { ServicesUseCases } from '@/components/services/ServicesUseCases';
import { CustomerSuccessSection } from '@/components/layout/CustomerSuccessSection';
import { ResourcesCarousel } from '@/components/home/resources-carousel';
import { ServicesFAQ } from '@/components/services/ServicesFAQ';

export const metadata: Metadata = {
  title: 'Our Services - SyMetric',
  description: 'A comprehensive range of services for clinical trials, from data management to project support.',
};

const secondaryNav = [
    { label: 'Overview', href: '#overview' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Use cases', href: '#use-cases' },
    { label: 'Customer stories', href: '#customer-stories' },
    { label: 'Resources', href: '#resources' },
    { label: 'Get started', href: '#get-started' },
    { label: 'FAQs', href: '#faqs' },
  ];

export default function ServicesPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'services-hero-people');

  return (
    <div className="bg-background">
      <PageHeader
        title="Professional services"
        breadcrumb={{ href: '/industries', label: 'Industries' }}
        secondaryNav={secondaryNav}
      />
      <div className="pt-16">
        <section id="overview" className="w-full bg-primary text-white py-20 px-0 relative overflow-hidden">
          <div className="container relative z-10">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                          Our Services
                      </h1>
                      <p className="mt-4 text-lg text-white/80 max-w-lg">
                          As Clinical Trials create large amounts of data, managing the data ensuring high-quality and accuracy can be a highly complex task. Whether you need extensive assistance or solutions to individual problems, SyMetric’s range of services meet your needs by seamlessly integrating with your existing system or helping you build a new one.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 mt-6">
                          <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-200">Request a demo</Button>
                          <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                              <Link href="/industries">View all industries</Link>
                          </Button>
                      </div>
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

        <div id="services">
          <ServicesTabs />
        </div>

        <div id="products">
            <ExploreSolutions />
        </div>

        <div id="use-cases">
            <ServicesUseCases />
        </div>

        <div id="customer-stories">
            <CustomerSuccessSection />
        </div>

        <div id="resources">
            <ResourcesCarousel />
        </div>

        <section id="get-started" className="bg-secondary/50">
            <div className="container">
              <div className="text-center">
                  <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-prose mx-auto">Let our experts help you find the right services to accelerate your research.</p>
                  <div className="flex gap-4 justify-center mt-8">
                      <Button size="lg" asChild><a href="/contact">Get a demo</a></Button>
                      <Button size="lg" variant="outline" asChild><a href="/contact">Contact us</a></Button>
                  </div>
              </div>
            </div>
        </section>

        <div id="faqs">
            <ServicesFAQ />
        </div>
      </div>
    </div>
  );
}
