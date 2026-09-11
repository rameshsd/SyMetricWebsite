import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { trialAnalyticsBenefits, trialAnalyticsFeatures } from '@/lib/data';
import { SectionTitle } from '@/components/shared/section-title';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ReadyToGetStarted } from '@/components/shared/ReadyToGetStarted';
import { RelatedProductsSection } from '@/components/solutions/RelatedProductsSection';

export const metadata: Metadata = {
  title: 'Trial Analytics - SyMetric',
  description: 'Analytics-Driven Clinical Trial Planning System',
};

export default function TrialAnalyticsPage() {
    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'Features', href: '#features' },
        { label: 'Related Products', href: '#related-products' },
        { label: 'Get Started', href: '#get-started' },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'trial-analytics-hero');

    return (
        <>
            <PageHeader
                title="Trial Analytics"
                breadcrumb={{ href: '/solutions', label: 'Solutions' }}
                secondaryNav={secondaryNav}
            />
            <div id="overview">
                <section
                    className="w-full min-h-[450px] flex items-center py-20 dark:bg-card px-0"
                    style={{ backgroundColor: '#D7E3FA' }}
                >
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                                    SyMetric Trial Analytics
                                </h1>
                                <p className="text-xl font-medium text-primary">
                                    Analytics-Driven Clinical Trial Planning System
                                </p>
                                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                                    The SyMetric Trial Analytics solution helps you make informed decisions while planning a new Clinical Trial using insights from study data and performance analytics of stakeholders such as CROs, Investigation Sites, and Investigators. With our Analytics Tool, you can cut Trial Planning time significantly and enhance efficiency.
                                </p>
                                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                                    Also, the system is built on SAP Business Technology Platform, enabling you to explore various services that SAP has to offer on the Cloud. Our solution can be integrated with your system to deliver insightful analysis while leveraging cloud initiatives from SAP in Life Sciences.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <Button size="lg" asChild>
                                        <Link href="/request-demo">Request a demo</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center h-auto md:h-[500px]">
                                <div className="relative w-full max-w-[550px] h-[360px] md:h-[400px]">
                                    {heroImage && (
                                        <Image
                                            src={heroImage.imageUrl}
                                            alt={heroImage.description}
                                            data-ai-hint={heroImage.imageHint}
                                            fill
                                            className="rounded-2xl object-contain md:object-cover shadow-2xl"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="benefits">
                    <div className="container">
                        <SectionTitle title="Benefits" className="mb-12"/>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {trialAnalyticsBenefits.map(benefit => (
                                <Card key={benefit.title} className="bg-secondary/50 border border-[#2463EB] shadow-sm hover:shadow-md transition-all rounded-2xl">
                                    <CardHeader>
                                        <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-primary/10 mb-4">
                                            <benefit.icon className="h-16 w-16 text-primary" strokeWidth={2.5}/>
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
                                <Card key={feature.title} className="bg-background border border-[#2463EB] shadow-sm hover:shadow-md transition-all rounded-2xl">
                                    <CardHeader>
                                        <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-primary/10 mb-4">
                                            <feature.icon className="h-16 w-16 text-primary" strokeWidth={2.5}/>
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
                
                <div id="related-products">
                    <RelatedProductsSection currentSlug="trial-analytics" />
                </div>
                
                <div id="get-started">
                    <ReadyToGetStarted />
                </div>
            </div>
        </>
    );
}
