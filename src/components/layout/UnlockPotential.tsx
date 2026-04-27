'use client';

import Image from 'next/image';
import Link from 'next/link';
import { unlockPotentialItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from '@/components/shared/section-title';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function UnlockPotential() {
    const cardData = unlockPotentialItems.slice(0, 3).map(item => {
        const image = PlaceHolderImages.find(p => p.id === item.imageId);
        return {
            ...item,
            image: image,
        };
    });

    const [mainCard, card2, card3] = cardData;

    return (
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container">
                <SectionTitle
                    title="Unlock the Potential of your clinical Study Data"
                    description="Our Clinical Trial platform provides the foundation for innovation and agility."
                    className="mb-12"
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Main Card */}
                    {mainCard && mainCard.image && (
                        <div className="relative aspect-video lg:aspect-auto lg:min-h-[620px] rounded-2xl overflow-hidden group">
                            <Image 
                                src={mainCard.image.imageUrl}
                                alt={mainCard.title.replace(/<[^>]+>/g, '')}
                                data-ai-hint={mainCard.image.imageHint}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                                <h3 className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: mainCard.title }}></h3>
                                <p className="mt-2 text-white/90 max-w-md" dangerouslySetInnerHTML={{ __html: mainCard.description }}></p>
                                <Button asChild variant="secondary" className="mt-6">
                                    <Link href={mainCard.linkUrl}>
                                        {mainCard.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    )}
                    
                    {/* Side Cards Container */}
                    <div className="flex flex-col gap-6">
                        {card2 && card2.image && (
                             <div className="relative aspect-video rounded-2xl overflow-hidden group">
                                <Image 
                                    src={card2.image.imageUrl}
                                    alt={card2.title.replace(/<[^>]+>/g, '')}
                                    data-ai-hint={card2.image.imageHint}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                                <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white">
                                    <h3 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: card2.title }}></h3>
                                    <p className="mt-2 text-white/90 max-w-sm text-sm" dangerouslySetInnerHTML={{ __html: card2.description }}></p>
                                </div>
                            </div>
                        )}

                        {card3 && card3.image && (
                             <div className="relative aspect-video rounded-2xl overflow-hidden group">
                                <Image 
                                    src={card3.image.imageUrl}
                                    alt={card3.title.replace(/<[^>]+>/g, '')}
                                    data-ai-hint={card3.image.imageHint}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                                <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white">
                                    <h3 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: card3.title }}></h3>
                                    <p className="mt-2 text-white/90 max-w-sm text-sm" dangerouslySetInnerHTML={{ __html: card3.description }}></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
