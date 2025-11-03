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
  const hasLongBio = member.bio.length > 1;

  return (
    <div className="relative pt-20 group">
      {/* Floating Profile Image with Gradient Ring */}
      {image && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
          <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-gray-200 via-white to-gray-300 shadow-lg">
            <Image
              src={image.imageUrl}
              alt={member.name}
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>
        </div>
      )}

      <Card className="rounded-2xl p-6 pt-20 bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
        {/* LinkedIn Button */}
        {member.linkedin && (
          <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
            <div className="h-9 w-9 bg-white/20 backdrop-blur-sm shadow-sm rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-white/30 transition-transform">
              <Linkedin className="h-5 w-5" />
            </div>
          </Link>
        )}

        <div className="text-center">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-primary-foreground/80 font-medium">{member.role}</p>
        </div>

        <CardContent className="p-0 mt-4">
          <div className={cn("text-primary-foreground/90 text-sm space-y-3 transition-all", !isExpanded && hasLongBio && "line-clamp-4")}>
            {member.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>

        {hasLongBio && (
          <div className="mt-5 text-center">
            <Button
              variant="secondary"
              className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export function LeadershipSection() {
  return (
    <section id="leadership">
      <div className="container">
        <SectionTitle title="A Stellar Journey Led by…" className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {leadership.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
