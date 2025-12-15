
'use client';
import { useState } from 'react';
import { leadership } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Linkedin } from 'lucide-react';

const LeadershipCard = ({ member }: { member: (typeof leadership)[0] }) => {
  const image = PlaceHolderImages.find((p) => p.id === member.imageId);
  const [isExpanded, setIsExpanded] = useState(false);
  const bioPreview = member.bio[0].slice(0, 150);

  return (
    <Card className="flex flex-col bg-secondary/50 p-6 rounded-2xl shadow-sm transition-shadow hover:shadow-lg h-full text-center">
      <div className="relative self-center w-24 h-24 mb-4">
        {image && (
          <Image
            src={image.imageUrl}
            alt={member.name}
            fill
            className="object-cover rounded-full"
          />
        )}
      </div>
      
      <CardContent className="p-0 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
        <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
        <p className="text-muted-foreground text-sm flex-grow text-left">
          {isExpanded ? member.bio.join(' ') : `${bioPreview}...`}
        </p>
        <div className="flex justify-between items-center mt-4">
            <Button
              variant="link"
              className="p-0 h-auto text-sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </Button>
            {member.linkedin && (
              <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            )}
        </div>
      </CardContent>
    </Card>
  );
};

export function LeadershipSection() {
  return (
    <section id="leadership" className="pt-16 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member) => (
                <LeadershipCard key={member.id} member={member} />
            ))}
        </div>
      </div>
    </section>
  );
}
