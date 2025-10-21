
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact/contact-form';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};


export default function ContactPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');
    const mapImage = PlaceHolderImages.find(p => p.id === 'map-placeholder');

    return (
        <>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white rounded-lg overflow-hidden">
                        {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                        )}
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="relative z-10 text-center p-4">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Get in Touch</h1>
                            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">We're here to answer your questions and help you find the right solution for your organization.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
                            <p className="mt-4 text-muted-foreground">Fill out the form to the right, or use one of the methods below to connect with our team. We look forward to hearing from you.</p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">Our Headquarters</h3>
                                        <p className="text-muted-foreground">123 Innovation Drive, Tech Park, CA 94043</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">Email Us</h3>
                                        <p className="text-muted-foreground">info@symetric.com</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">Call Us</h3>
                                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div>
                            <Card>
                                <ContactForm />
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-16 md:pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    {mapImage && (
                        <div className="relative h-96 w-full rounded-lg overflow-hidden">
                            <Image
                                src={mapImage.imageUrl}
                                alt="Map to headquarters"
                                fill
                                className="object-cover"
                                data-ai-hint={mapImage.imageHint}
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
