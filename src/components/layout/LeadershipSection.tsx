
'use client';
import { leadership } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SectionTitle } from '../shared/section-title';

export function LeadershipSection() {
  return (
    <section id="leadership">
      <div className="container">
        <SectionTitle 
            title="A Stellar Journey Led by…" 
            className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {leadership.map((member) => {
            const image = PlaceHolderImages.find((p) => p.id === member.imageId);
            return (
              <Card key={member.id} className="overflow-hidden rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="relative h-60 sm:h-auto">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                        data-ai-hint="portrait professional"
                      />
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <CardHeader className="p-8">
                      <CardTitle>{member.name}</CardTitle>
                      <p className="text-primary font-semibold pt-1">{member.role}</p>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      {member.bio.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground text-sm mb-3">
                          {paragraph}
                        </p>
                      ))}
                      <Button variant="link" asChild className="px-0 mt-2">
                        <Link href="#">Read more</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
