
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { jobOpenings, companyValues, employeeBenefits } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, MapPin, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ApplyForm } from '@/components/careers/ApplyForm';
import { SectionTitle } from '@/components/shared/section-title';

export const metadata = {
    title: 'Careers - SyMetric',
    description: 'Join our team and help us revolutionize clinical trials.',
};

export default function CareersPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'careers-hero');

    return (
        <div className="bg-background">
            <section className="relative bg-secondary/50">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 py-20">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Join Our Mission to Transform Healthcare
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
                                We're looking for passionate innovators, problem-solvers, and collaborators to help us build the future of clinical research.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="#open-positions">View Open Positions</Link>
                            </Button>
                        </div>
                        <div className="relative h-[500px] hidden lg:block">
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

            <section>
                <div className="container">
                    <SectionTitle
                        title="Why Work at SyMetric?"
                        description="We're more than just a company; we're a community dedicated to making a difference."
                    />
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {companyValues.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center items-center mb-4">
                                    <div className="p-4 bg-primary/10 rounded-full">
                                        <value.icon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-secondary/50">
                <div className="container">
                    <SectionTitle
                        title="Perks & Benefits"
                        description="We invest in our team's well-being and professional growth."
                    />
                    <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {employeeBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="open-positions">
                <div className="container">
                    <SectionTitle
                        title="Current Openings"
                        description="Find your next opportunity and grow with us. We are always looking for talented individuals to join our team."
                    />
                    <div className="mt-16 max-w-4xl mx-auto space-y-6">
                        {jobOpenings.map((job) => (
                            <Card key={job.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl">{job.title}</CardTitle>
                                    <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="h-4 w-4" />
                                            <span>{job.department}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{job.shortDescription}</CardDescription>
                                </CardContent>
                                <div className="p-6 pt-0">
                                     <ApplyForm job={job}/>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
