
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ProductHeroProps = {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageHint: string;
    backgroundColor?: string;
};

const accentColors = [
    'bg-yellow-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-indigo-400',
]

let colorIndex = 0;

export function ProductHero({ title, subtitle, imageSrc, imageHint, backgroundColor = 'bg-[#f5f3ff]' }: ProductHeroProps) {
    const accentColor = accentColors[colorIndex % accentColors.length];
    colorIndex++;

  return (
    <section className={cn("w-full min-h-[450px] flex items-center py-12 dark:bg-card px-0", backgroundColor)}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Request a demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className={`absolute -top-8 -left-8 w-40 h-40 ${accentColor}/50 rounded-full blur-2xl`} />
            <div className={`absolute -bottom-8 -right-8 w-40 h-40 ${accentColor}/50 rounded-full blur-2xl`} />
            <div className="relative w-[500px] h-[350px]">
                <Image
                    src={imageSrc}
                    alt={title}
                    data-ai-hint={imageHint}
                    width={500}
                    height={350}
                    className="rounded-lg object-cover shadow-lg z-10"
                />
                 <div 
                    className={`absolute -bottom-4 -left-4 w-48 h-32 ${accentColor}/70 z-0`} 
                    style={{clipPath: 'polygon(0 0, 100% 25%, 100% 100%, 0% 100%)'}}
                />
                <div 
                    className={`absolute -top-4 -right-4 w-48 h-32 ${accentColor}/70 z-0`}
                    style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)'}}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
