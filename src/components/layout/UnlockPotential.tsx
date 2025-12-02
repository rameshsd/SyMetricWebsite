
'use client';

import { unlockPotentialItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '../shared/section-title';

export function UnlockPotential() {
    return (
        <section className="py-16 bg-secondary/30">
            <div className="container">
                <SectionTitle 
                    title="Unlock the full potential of your AI, data, and applications"
                    description="Our Business Technology Platform provides the foundation for innovation and agility."
                    className="mb-16"
                />
                <div className="grid md:grid-cols-3 gap-10">
                    {unlockPotentialItems.map(item => {
                        const image = PlaceHolderImages.find(p => p.id === item.imageId);
                        return (
                            <div key={item.id} className="group">
                                {image && (
                                    <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                                        <Image
                                            src={image.imageUrl}
                                            alt={item.title}
                                            data-ai-hint={image.imageHint}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                                <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                <Link href={item.linkUrl} className="text-primary font-semibold hover:underline">
                                    {item.linkText} &gt;
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
