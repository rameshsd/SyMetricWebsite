'use client';
import { useState } from 'react';
import { leadership } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SectionTitle } from '../shared/section-title';
import { cn } from '@/lib/utils';
import { ArrowRight, Linkedin } from 'lucide-react';

const LeadershipCard = ({ member }: { member: (typeof leadership)[0] }) => {
    const image = PlaceHolderImages.find((p) => p.id === member.imageId);
    const [isExpanded, setIsExpanded] = useState(false);
    const hasLongBio = member.bio.length > 1;

    return (
        <div className="relative pt-20">
            <Card className="bg-primary text-primary-foreground rounded-2xl p-6 pt-24 shadow-xl">
                {image && (
                    <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-40 h-40">
                         <Image
                            src={image.imageUrl}
                            alt={member.name}
                            width={160}
                            height={160}
                            className="rounded-full object-cover border-4 border-background shadow-lg"
                            data-ai-hint="portrait professional"
                        />
                    </div>
                )}
                {member.linkedin && (
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-8 right-8">
                        <div className="h-8 w-8 bg-white/90 rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </div>
                    </Link>
                )}
                <div className="text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary-foreground/80 font-medium">{member.role}</p>
                </div>
                <CardContent className="p-0 mt-4">
                    <div className={cn("text-primary-foreground/70 text-sm space-y-3", !isExpanded && hasLongBio && "line-clamp-4")}>
                        {member.bio.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </CardContent>
                <div className="mt-6 text-center">
                    <Button 
                        variant="secondary" 
                        className="bg-green-400 text-black hover:bg-green-500"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Read less' : 'Read more'}
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export function LeadershipSection() {
  return (
    <section id="leadership">
      <div className="container">
        <SectionTitle 
            title="A Stellar Journey Led by…" 
            className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {leadership.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
