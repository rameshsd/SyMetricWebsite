"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IrtDiagram } from '../animations/IrtDiagram';

type ProductHeroProps = {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageHint: string;
    backgroundColor?: string;
    slug?: string;
};

export function ProductHero({ title, subtitle, imageSrc, imageHint, backgroundColor, slug }: ProductHeroProps) {
  const sectionStyle = backgroundColor ? { backgroundColor } : {};
  const defaultBgClass = backgroundColor ? '' : 'bg-[#f5f3ff]';
  const isIrtIwrs = slug === 'irt-iwrs';

  return (
    <section 
        className={cn("w-full min-h-[450px] flex items-center py-20 dark:bg-card px-0", defaultBgClass)}
        style={sectionStyle}
    >
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
                <Link href="/solutions">Explore the solutions</Link>
              </Button>
               <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request a demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {isIrtIwrs ? (
                <div className="relative w-full max-w-[500px] h-[350px] bg-white dark:bg-slate-900/50 p-4 rounded-2xl shadow-lg">
                    <IrtDiagram />
                </div>
            ) : (
                <div className="relative w-full max-w-[500px] h-[350px] bg-white p-4 rounded-2xl shadow-lg">
                    <Image
                        src={imageSrc}
                        alt={title}
                        data-ai-hint={imageHint}
                        fill
                        className="rounded-lg object-cover z-10"
                    />
                    <div 
                        className="absolute -top-2 right-10 w-24 h-24 border-l-[12px] border-t-[12px] border-blue-600 z-0" 
                    />
                </div>
            )}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 space-y-3 z-20">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-blue-300/50" style={{clipPath: 'polygon(0 0, 100% 50%, 0 100%)'}} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
