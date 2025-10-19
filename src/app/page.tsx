import { HeroSection } from '@/components/home/hero-section';
import { SolutionsShowcase } from '@/components/home/solutions-showcase';
import { IndustriesSection } from '@/components/home/industries-section';
import { CustomerSuccess } from '@/components/home/customer-success';
import { ResourcesCarousel } from '@/components/home/resources-carousel';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsShowcase />
      <IndustriesSection />
      <CustomerSuccess />
      <ResourcesCarousel />
    </>
  );
}
