'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact/contact-form';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { salesSpecialistHelp } from '@/lib/data';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function ContactPageSkeleton() {
    return (
        <div className="space-y-12">
            <section className="relative py-20 md:py-28">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <Skeleton className="h-12 w-3/4" />
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-5/6" />
                        </div>
                        <Skeleton className="h-80 w-full rounded-lg" />
                    </div>
                </div>
            </section>
            <section className="py-20 md:py-24">
                <div className="container">
                    <Skeleton className="h-96 w-full" />
                </div>
            </section>
        </div>
    );
}

export default function ContactPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const contactHeroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeInOut"
            }
        })
    };

    if (!isClient) {
        return <ContactPageSkeleton />;
    }

    return (
        <div className="bg-background overflow-hidden">
            {/* Section 1: Hero */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900/50 dark:via-gray-900 dark:to-indigo-900/20"
            >
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="container relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInVariants} custom={0} className="text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">Contact SyMetric</h1>
                            <p className="mt-4 text-lg md:text-xl text-muted-foreground">Our team is ready to help you accelerate your clinical trials with expert guidance and robust technology solutions.</p>
                        </motion.div>
                        <motion.div variants={fadeInVariants} custom={1} className="relative hidden md:block">
                            {contactHeroImage && (
                                <Image
                                    src={contactHeroImage.imageUrl}
                                    alt="Contact SyMetric illustration"
                                    width={600}
                                    height={450}
                                    className="object-cover w-full h-auto rounded-2xl shadow-xl border border-slate-200/60 dark:border-slate-800"
                                    data-ai-hint={contactHeroImage.imageHint}
                                />
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Section 2: Main Content */}
            <section className="py-20 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8 lg:mt-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">Talk to our experts</h2>
                                <p className="mt-2 text-muted-foreground">Our customer-centric support system manned by specialists are ever-ready to give you personalized guidance.</p>
                            </div>
                            <ul className="space-y-4">
                                {salesSpecialistHelp.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-1">
                                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-gray-100 dark:border-gray-800 grid sm:grid-cols-2 gap-6">
                                <div className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">India Office</h4>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed pl-1">
                                        <span className="text-gray-800 dark:text-gray-200 font-semibold block mb-1">Achiral Systems Pvt. Ltd.</span>
                                        No. 51, Kodihalli Main Road<br />
                                        HAL 2nd Stage<br />
                                        Bengaluru – 560008, India
                                    </p>
                                </div>
                                <div className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-[#bc10b6] dark:text-purple-400">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">USA Office</h4>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed pl-1">
                                        <span className="text-gray-800 dark:text-gray-200 font-semibold block mb-1">USA Address</span>
                                        DOVER, DELAWARE, USA
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <ContactForm />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: Map */}
            <section className="py-20 md:py-24">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl overflow-hidden shadow-lg aspect-video"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.026922998394!2d77.65089421482208!3d12.970119990856987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae140696abcf89%3A0x9ab27f331297cfae!2s1st+Floor%2C+SyMetric+(A+brand+owned+by+Achiral+Systems+Pvt.+Ltd.)!5e0!3m2!1sen!2sin!4v1628581898555!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="SyMetric Office Location"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}