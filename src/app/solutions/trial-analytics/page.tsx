
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { trialAnalyticsBenefits, trialAnalyticsFeatures } from '@/lib/data';
import { Sap } from '@/components/icons/brand-icons';

export const metadata: Metadata = {
  title: 'Trial Analytics - SyMetric',
  description: 'Analytics-Driven Clinical Trial Planning System',
};

export default function TrialAnalyticsPage() {
    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'Features', href: '#features' },
        { label: 'Get Started', href: '#get-started' },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'trial-analytics-hero');

    return (
        <>
            <PageHeader title="Trial Analytics" secondaryNav={secondaryNav} showTitle={false} />
            <div id="overview">
                <section className="bg-[#f5f3ff] dark:bg-card pt-12">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="space-y-6">
                                <Sap className="h-12" />
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                                    SyMetric Trial Analytics
                                </h1>
                                <p className="text-xl font-medium text-primary">Analytics-Driven Clinical Trial Planning System</p>
                                <p className="text-muted-foreground">
                                    The SyMetric Trial Analytics solution helps you make informed decisions while planning a new Clinical Trial using insights from study data and performance analytics of stakeholders such as CROs, Investigation Sites, and Investigators. With our Analytics Tool, you can cut Trial Planning time significantly and enhance efficiency.
                                </p>
                                <p className="text-muted-foreground">
                                    Also, the system is built on SAP Business Technology Platform, enabling you to explore various services that SAP has to offer on the Cloud. Our solution can be integrated with your system to deliver insightful analysis while leveraging cloud initiatives from SAP in Life Sciences. Here are the various sources of data that we analyze to help you plan effectively.
                                </p>
                                <Button variant="outline" asChild>
                                    <Link href="#">View on SAP store</Link>
                                </Button>
                            </div>
                            <div className="relative h-[400px] w-full">
                                {heroImage && (
                                    <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} fill className="object-contain" />
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="benefits">
                    <div className="container">
                        <SectionTitle title="Benefits" className="mb-12"/>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {trialAnalyticsBenefits.map(benefit => (
                                <Card key={benefit.title} className="bg-secondary/50 border-none">
                                    <CardHeader>
                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mb-4">
                                            <benefit.icon className="h-8 w-8 text-primary"/>
                                        </div>
                                        <CardTitle>{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="features" className="bg-secondary/50">
                    <div className="container">
                        <SectionTitle title="Features" className="mb-12"/>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {trialAnalyticsFeatures.map(feature => (
                                <Card key={feature.title} className="bg-background">
                                    <CardHeader>
                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mb-4">
                                            <feature.icon className="h-8 w-8 text-primary"/>
                                        </div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section id="get-started">
                    <div className="container text-center">
                        <SectionTitle title="Get Started" className="mx-auto" />
                        <div className="mt-8 flex justify-center gap-4">
                            <Button size="lg">Get a demo</Button>
                            <Button size="lg" variant="outline">Contact us for pricing</Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
