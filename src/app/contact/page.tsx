
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact/contact-form';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { salesSpecialistHelp } from '@/lib/data';
import { SectionTitle } from '@/components/shared/section-title';

export const metadata: Metadata = {
  title: 'Contact Us',
};


export default function ContactPage() {
    return (
        <>
            <section className="bg-secondary/50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
                        <p className="mt-4 text-lg md:text-xl text-muted-foreground">The SyMetric team is always ready to answer your questions.</p>
                        <p className="mt-2 text-muted-foreground">Reach us anytime between 9:00AM and 6:00PM IST, Monday-Friday on <a href="tel:+918041135402" className="text-primary font-semibold">+91-80-41135402</a> / <a href="tel:+919740272700" className="text-primary font-semibold">+91 97402 72700</a></p>
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
                                <ContactForm />
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

             <section className="bg-secondary/50">
                <div className="container">
                    <SectionTitle title="We Would Love To Hear From You" description="Here’s how you can reach us" />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                        <Card className="p-6">
                            <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="text-lg font-semibold">Dial</h3>
                            <p className="text-muted-foreground mt-2">
                                <a href="tel:+918041135402" className="hover:text-primary">+91 (80) 41135402</a><br/>
                                <a href="tel:+919740272700" className="hover:text-primary">+91 97402 72700</a>
                            </p>
                        </Card>
                        <Card className="p-6">
                            <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="text-lg font-semibold">Reach out to us</h3>
                            <p className="text-muted-foreground mt-2">
                                <a href="mailto:info@symetricsystems.com" className="text-primary hover:underline">info@symetricsystems.com</a>
                            </p>
                        </Card>
                        <Card className="p-6">
                            <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                             <h3 className="text-lg font-semibold">Visit us</h3>
                            <p className="text-muted-foreground mt-2">
                                No. 51, 1st Floor<br/>
                                Kodihalli Main Road<br/>
                                HAL 2nd Stage<br/>
                                Opp. Udupi Park Hotel<br/>
                                Bengaluru - 560 008, India
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}
