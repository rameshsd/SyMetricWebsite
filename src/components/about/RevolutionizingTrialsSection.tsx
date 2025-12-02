
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';

const featurePoints = [
    {
        title: "Agile, Patient-Centric Processes",
        description: "Make the shift from traditional trial models to processes driven by our unified Clinical Trial Platform."
    },
    {
        title: "Automation and Simplification",
        description: "Use the power of technology to automate and simplify project management in clinical trials and improve productivity."
    },
    {
        title: "Modular and Integrated Solutions",
        description: "Integrate your processes with our user-friendly applications or choose from comprehensive modules for every stage of your trial."
    }
];

export function RevolutionizingTrialsSection() {
    const videoThumbnail = PlaceHolderImages.find(p => p.id === 'finance-driver-video');

    return (
        <section className="bg-secondary/50">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden group">
                        {videoThumbnail && (
                            <Image 
                                src={videoThumbnail.imageUrl}
                                alt={videoThumbnail.description}
                                data-ai-hint={videoThumbnail.imageHint}
                                fill
                                className="object-cover"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <PlayCircle className="h-20 w-20 text-white/80 transform transition-transform group-hover:scale-110" />
                        </div>
                    </div>
                    <div className="space-y-8">
                         <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground">Revolutionizing Clinical Trials With Innovation</h2>
                            <p className="mt-4 text-muted-foreground">At SyMetric, we help you make the shift from traditional trial models to agile, patient-centric processes driven by our unified Clinical Trial Platform. With us, you can use the power of technology to automate and simplify project management in clinical trials and improve your productivity. We offer modularized solutions for Pharma Companies, Contract Research Organizations, and Academia. You can integrate your processes with our user-friendly applications or choose from comprehensive modules for every stage of your trial. And all this comes to you, complete with Study Configurations, in a matter of three to four weeks. So take a big leap with SyMetric!</p>
                        </div>
                        {featurePoints.map(point => (
                            <div key={point.title}>
                                <h3 className="font-bold text-lg text-foreground">{point.title}</h3>
                                <p className="text-muted-foreground mt-1">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
