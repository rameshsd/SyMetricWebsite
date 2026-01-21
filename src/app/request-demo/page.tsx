
import type { Metadata } from 'next';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { salesSpecialistHelp } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Request a Demo',
};

export default function RequestDemoPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'request-demo-hero');
    return (
        <>
            <section style={{ backgroundColor: '#f4f7fb' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-10 items-center py-20">
                        <div className="text-left">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Request a Personalized Demo</h1>
                            <p className="mt-4 text-lg md:text-xl text-muted-foreground">See the SyMetric platform in action. Fill out the form below, and one of our product experts will contact you to schedule a demo tailored to your needs.</p>
                        </div>
                        <div className="relative h-80 w-full">
                            {heroImage && (
                                <Image
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    data-ai-hint={heroImage.imageHint}
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">Connect With a Sales Specialist</h2>
                                <p className="mt-2 text-muted-foreground">Our customer-centric support system manned by specialists are ever-ready to give you personalized guidance on any questions – whether you are evaluating products, starting your first Clinical Trial, or considering migration to SyMetric.</p>
                            </div>
                            <ul className="space-y-4">
                                {salesSpecialistHelp.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                                        <div>
                                            <h3 className="font-semibold">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <Card className="p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
                                <DemoRequestForm />
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
