
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

export const metadata: Metadata = {
  title: 'Clinical Trial Platform - SyMetric',
  description: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools.',
};


export default function ClinicalTrialPlatformPage() {
    const irtImage = PlaceHolderImages.find(p => p.id === 'irt-iwrs-image');
    const edcImage = PlaceHolderImages.find(p => p.id === 'edc-image');
    const ctmImage = PlaceHolderImages.find(p => p.id === 'ctm-image');
    
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

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold">Explore Our Core Solutions</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                      {irtImage && <Image src={irtImage.imageUrl} alt={irtImage.description} data-ai-hint={irtImage.imageHint} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />}
                      <CardHeader>
                          <CardTitle>IRT/IWRS</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Developed with years of strong industry expertise and tested to deliver against the most complex Clinical Trial designs, our IRT/IWRS solution is the most comprehensive one in the market today.</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                          <Button variant="link" className="p-0">Find out more</Button>
                      </div>
                  </Card>
                  <Card>
                      {edcImage && <Image src={edcImage.imageUrl} alt={edcImage.description} data-ai-hint={edcImage.imageHint} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />}
                      <CardHeader>
                          <CardTitle>EDC</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">The Electronic Data Capture solution includes well-designed tools that transform the Data Management processes and simplify and automate the Data flow and validation of Data in Clinical Trials.</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                          <Button variant="link" className="p-0">Find out more</Button>
                      </div>
                  </Card>
                  <Card>
                      {ctmImage && <Image src={ctmImage.imageUrl} alt={ctmImage.description} data-ai-hint={ctmImage.imageHint} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />}
                      <CardHeader>
                          <CardTitle>CTM</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">The Clinical Trial Master provides various repositories to maintain Global objects, including a repository of Trial Sites, Labs, Organizations, Global Data Libraries, and more.</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                          <Button variant="link" className="p-0">Find out more</Button>
                      </div>
                  </Card>
              </div>
            </div>
        </section>

        <CollaborationVision />
        <HostingOptions />
        <SyMetricAdvantage />
        <SecurityCompliance />
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
