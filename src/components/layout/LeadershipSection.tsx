
'use client';
import { useState } from 'react';
import { leadership } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';

const LeadershipCard = ({ member }: { member: (typeof leadership)[0] }) => {
  const image = PlaceHolderImages.find((p) => p.id === member.imageId);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="relative group overflow-hidden rounded-2xl h-[500px] w-full max-w-sm mx-auto">
        {image && (
            <Image
            src={image.imageUrl}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-white/80 font-medium">{member.role}</p>
        </CardContent>

         {member.linkedin && (
          <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 z-10">
            <div className="h-9 w-9 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Linkedin className="h-5 w-5" />
            </div>
          </Link>
        )}
    </Card>
  );
};

export function LeadershipSection() {
  return (
    <section id="leadership" className="pt-20">
      <div className="container">
        <Carousel 
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="-ml-4">
                {leadership.map((member) => (
                    <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                         <LeadershipCard member={member} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white bg-white/10 hover:bg-white/20 border-white/20" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white bg-white/10 hover:bg-white/20 border-white/20" />
        </Carousel>
      </div>
    </section>
  );
}
