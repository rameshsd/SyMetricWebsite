
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/PageHeader';
import { TechEdBanner } from '@/components/layout/TechEdBanner';
import { Card, CardContent } from '@/components/ui/card';
import { LogIn, Library, ClipboardCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training Services - SyMetric',
  description: 'Customized training services to make your workforce future-ready.',
};

const trainingSteps = [
    {
        icon: LogIn,
        title: 'Log in and access a customized training module'
    },
    {
        icon: Library,
        title: 'Access a library of tailor-made how-to videos'
    },
    {
        icon: ClipboardCheck,
        title: 'Take tests until you get a passing score'
    },
    {
        icon: Award,
        title: 'Earn a certificate and get started with SyMetric'
    }
]

export default function TrainingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'training-hero');
  
  const secondaryNav = [
    { label: 'Overview', href: '#overview' },
    { label: 'Process', href: '#process' },
    { label: 'Get Started', href: '#get-started' },
  ];

  return (
    <>
      <PageHeader
        title="Training Services"
        breadcrumb={{ href: '/services', label: 'Services' }}
        secondaryNav={secondaryNav}
      />
      
      <div>
        <section id="overview" className="w-full relative py-20 bg-light-cyan">
           <div className="container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Make Your Workforce Future-Ready</h1>
                      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Our promise of technology includes easy adoption. With our training module, introducing your workforce to new technology is a cakewalk.</p>
                  </div>
                  <div className="relative h-80 w-full lg:h-96">
                      {heroImage && (
                          <Image
                              src={heroImage.imageUrl}
                              alt={heroImage.description}
                              data-ai-hint={heroImage.imageHint}
                              fill
                              className="object-cover rounded-2xl shadow-lg"
                          />
                      )}
                  </div>
              </div>
          </div>
        </section>
        
        <TechEdBanner />

        <section id="process">
          <div className="container">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold tracking-tight">Your Digital Bootcamp</h2>
                      <p className="mt-4 text-muted-foreground text-lg">
                          We upskill end users on our SyMetric tool — a role-based system where training modules are customized to suit individuals according to their tasks and configuration requirements. Now, train your employees across geographies and verticals with ease. Track progress and ensure that your entire workforce completes every training milestone before performing transactions or accessing Study Data.
                      </p>
                      <p className="mt-4 text-muted-foreground text-lg">
                          Along with the online training module, we also provide customized instructor-led training sessions based on specific needs such as system admin training, study build and configuration, and more.
                      </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {trainingSteps.map(step => (
                          <Card key={step.title}>
                              <CardContent className="p-6 text-center">
                                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                      <step.icon className="h-6 w-6 text-primary" />
                                  </div>
                                  <p className="text-sm font-medium">{step.title}</p>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </div>
          </div>
        </section>

        <section id="get-started" className="bg-secondary/50">
          <div className="container">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Empower Your Team?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-prose mx-auto">Contact us to learn more about our customized training solutions.</p>
              <div className="flex gap-4 justify-center mt-8">
                <Button size="lg" asChild><Link href="/contact">Request Information</Link></Button>
                <Button size="lg" variant="outline" asChild><Link href="/contact">Contact us</Link></Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

    