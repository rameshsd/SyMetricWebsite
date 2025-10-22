
'use client';
import { leadership } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A Stellar Journey Led by…
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {leadership.map((member) => {
            const image = PlaceHolderImages.find((p) => p.id === member.imageId);
            return (
              <Card key={member.id} className="overflow-hidden">
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
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <p className="text-primary font-semibold">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      {member.bio.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground text-sm mb-3">
                          {paragraph}
                        </p>
                      ))}
                      <Button variant="link" asChild className="px-0">
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
