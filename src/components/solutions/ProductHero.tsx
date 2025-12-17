
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
  const hasDarkBg = !!backgroundColor;

  return (
    <section 
        className={cn("w-full min-h-[450px] flex items-center py-20 dark:bg-card px-0", defaultBgClass)}
        style={sectionStyle}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className={cn(
              "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl",
              hasDarkBg && "text-white"
            )}>
              {title}
            </h1>
            <p className={cn(
              "max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed",
              hasDarkBg && "text-white/80"
            )}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild variant={hasDarkBg ? "secondary" : "default"}>
                <Link href="/solutions">Explore the solutions</Link>
              </Button>
               <Button size="lg" variant="outline" className={cn(hasDarkBg && "bg-transparent border-white text-white hover:bg-white hover:text-primary")}>
                <Link href="/contact">Request a demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-auto md:h-[500px]">
            {isIrtIwrs ? (
                <IrtDiagram />
            ) : (
                <div className="relative w-full max-w-[500px] h-[350px]">
                    <Image
                        src={imageSrc}
                        alt={title}
                        data-ai-hint={imageHint}
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

    