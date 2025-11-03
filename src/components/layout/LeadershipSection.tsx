'use client';
import { useState } from 'react';
import { leadership } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SectionTitle } from '../shared/section-title';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const LeadershipCard = ({ member }: { member: (typeof leadership)[0] }) => {
    const image = PlaceHolderImages.find((p) => p.id === member.imageId);
    const [isExpanded, setIsExpanded] = useState(false);
    const hasLongBio = member.bio.length > 1;

    return (
        <Card className="bg-background border-none shadow-none text-center h-full flex flex-col">
            <CardHeader className="items-center">
                {image && (
                    <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                        <Image
                            src={image.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                            data-ai-hint="portrait professional"
                        />
                    </div>
                )}
                <CardTitle>{member.name}</CardTitle>
                <p className="text-primary font-semibold pt-1">{member.role}</p>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className={cn("text-muted-foreground text-sm space-y-3", !isExpanded && hasLongBio && "line-clamp-4")}>
                    {member.bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </CardContent>
            {hasLongBio && (
                 <div className="p-6 pt-0">
                    <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="px-0 mt-2 text-primary">
                        {isExpanded ? 'Read less' : 'Read more'}
                    </Button>
                </div>
            )}
        </Card>
    )
}

export function LeadershipSection() {
  const [founder, ...otherMembers] = leadership;
  
  return (
    <section id="leadership">
      <div className="container">
        <SectionTitle 
            title="A Stellar Journey Led by…" 
            className="mb-16"
        />

        {founder && (
            <div className="mb-16 max-w-4xl mx-auto">
                <Card className="overflow-hidden rounded-2xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative h-80 md:h-auto">
                            <Image
                                src={PlaceHolderImages.find((p) => p.id === founder.imageId)?.imageUrl || ''}
                                alt={founder.name}
                                fill
                                className="object-cover"
                                data-ai-hint="portrait professional"
                            />
                        </div>
                        <div className="md:col-span-2 flex flex-col justify-center">
                            <CardHeader>
                                <CardTitle>{founder.name}</CardTitle>
                                <p className="text-primary font-semibold pt-1">{founder.role}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm mb-3">
                                    {founder.bio[0]}
                                </p>
                                <Button variant="link" asChild className="px-0 mt-2 text-primary font-semibold">
                                    <Link href="#">
                                        Read more about {founder.name.split(' ')[0]} <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </div>
                    </div>
                </Card>
            </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {otherMembers.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
