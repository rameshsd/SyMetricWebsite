
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { trialAnalyticsBenefits, trialAnalyticsFeatures } from '@/lib/data';
import { SectionTitle } from '@/components/shared/section-title';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trial Analytics - SyMetric',
  description: 'Analytics-Driven Clinical Trial Planning System',
};

export default function TrialAnalyticsPage() {
    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'Features', href: '#features' },
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
                <section className="bg-secondary/50">
                    <div className="container">
                        <div className="text-center">
                            <div className="flex gap-4 justify-center mt-8">
                                <Button size="lg" asChild><Link href="/contact">Get a demo</Link></Button>
                                <Button size="lg" variant="outline" asChild><Link href="/contact">Contact us for pricing</Link></Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
