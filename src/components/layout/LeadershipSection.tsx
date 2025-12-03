
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
import { Linkedin } from 'lucide-react';

const LeadershipCard = ({ member }: { member: (typeof leadership)[0] }) => {
  const image = PlaceHolderImages.find((p) => p.id === member.imageId);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pt-20 group h-full">
      {/* Floating Profile Image with Gradient Ring */}
      {image && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
          <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-gray-200 via-white to-gray-300 shadow-lg">
            <Image
              src={image.imageUrl}
              alt={member.name}
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-background shadow-md"
            />
          </div>
        </div>
      )}

      <Card className="rounded-2xl p-6 pt-20 bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        
        {/* LinkedIn Button */}
        {member.linkedin && (
          <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
            <div className="h-9 w-9 bg-white/90 rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </div>
          </Link>
        )}

        <div className="text-center">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-primary-foreground/80 font-medium">{member.role}</p>
        </div>

        <CardContent className="p-0 mt-4 flex-grow">
          <div className={cn("text-primary-foreground/70 text-sm space-y-3 transition-all", !isExpanded && "line-clamp-4")}>
            {member.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>

        {/* Always Show Button */}
        <div className="mt-5 text-center">
          <Button
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export function LeadershipSection() {
  return (
    <section id="leadership">
      <div className="container">
        <SectionTitle title="A Stellar Journey Led by…" className="mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {leadership.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
