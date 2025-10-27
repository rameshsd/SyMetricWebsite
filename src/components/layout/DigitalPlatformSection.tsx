
'use client';

import { Beaker, Building, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/section-title";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const platformUsers = [
  {
    icon: Beaker,
    title: "Pharma Companies",
    description: "Optimize the time to market for new products with our seamlessly integrated Clinical Trial Platform.",
    cta: "Get started",
    link: "/solutions/pharma",
    imageId: "platform-pharma",
  },
  {
    icon: Building,
    title: "Contract Research Organizations (CROs)",
    description: "Ace your game by integrating your services with that of sponsors on our Clinical Trial Platform.",
    cta: "Try now",
    link: "/solutions/cro",
    imageId: "platform-cro",
  },
  {
    icon: GraduationCap,
    title: "Academia (Hospitals and Universities)",
    description: "Accelerate research and development efforts through broad collaborations with the industry on our platform.",
    cta: "Get going",
    link: "/solutions/academia",
    imageId: "platform-academia",
  },
];

export function DigitalPlatformSection() {
    const [ref, isInView] = useInView({ triggerOnce: true });
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Digital Platform To Transform Your Processes"
          className="mb-12"
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platformUsers.map((user, index) => {
            const image = PlaceHolderImages.find((p) => p.id === user.imageId);
            return (
              <Card
                key={user.title}
                className={cn(
                    "overflow-hidden relative group text-white flex flex-col justify-end p-8 min-h-[450px] opacity-0",
                    isInView && "animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={user.title}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10">
                  <div className="mb-4">
                    <user.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{user.title}</h3>
                  <p className="text-white/90 mb-6">{user.description}</p>
                  <Button asChild variant="secondary" className="bg-white/90 text-black hover:bg-white">
                    <Link href={user.link}>
                      {user.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
