'use client';

import { unlockPotentialItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export function UnlockPotential() {
    return (
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Unlock the Potential of your clinical Study Data
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our Clinical Trial platform provides the foundation for innovation and agility.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {unlockPotentialItems.map((item, index) => {
                            const image = PlaceHolderImages.find(p => p.id === item.imageId);
                            return (
                                <CarouselItem key={index}>
                                    <div className="relative aspect-[16/9] md:aspect-[2.2/1] rounded-2xl overflow-hidden">
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={item.title.replace(/<[^>]+>/g, '')}
                                                data-ai-hint={image.imageHint}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                                        <div className="absolute inset-0 flex items-center p-8 md:p-12 lg:p-16">
                                            <div className="max-w-md text-white">
                                                <h3 className="text-3xl lg:text-4xl font-bold" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                                                <p className="mt-4 text-white/90" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                                <Link href={item.linkUrl} className="mt-6 inline-block font-semibold text-white hover:text-primary transition-colors">
                                                    {item.linkText} &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-white/50" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-white/50" />
                </Carousel>
            </div>
        </section>
    );
}
