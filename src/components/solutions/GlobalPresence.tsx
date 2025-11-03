
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const locations = [
    { name: 'United States', top: '38%', left: '21%', value: '232', color: 'bg-teal-500' },
    { name: 'Belize', top: '55%', left: '26%', value: '01', color: 'bg-pink-500' },
    { name: 'El Salvador', top: '58%', left: '25%', value: '02', color: 'bg-fuchsia-500' },
    { name: 'Puerto Rico', top: '52%', left: '30%', value: '01', color: 'bg-green-500' },
    { name: 'Spain', top: '38%', left: '46%', value: '18', color: 'bg-orange-500' },
    { name: 'Germany', top: '30%', left: '52%', value: '01', color: 'bg-emerald-500' },
    { name: 'Czech Republic', top: '32%', left: '54%', value: '05', color: 'bg-blue-600' },
    { name: 'Slovakia', top: '34%', left: '55%', value: '04', color: 'bg-indigo-600' },
    { name: 'Hungary', top: '35%', left: '56%', value: '09', color: 'bg-purple-500' },
    { name: 'Poland', top: '31%', left: '56%', value: '01', color: 'bg-rose-500' },
    { name: 'India', top: '50%', left: '70%', value: '19', color: 'bg-violet-500' },
];

export function GlobalPresence() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'world-map');

  return (
    <section className="bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight">
            Affordable and Scalable, Globally
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mt-8">
            <p className="text-muted-foreground text-lg">
                Over the years, we have delivered safe and reliable solutions to all our clients across India and abroad.
            </p>
            <p className="text-muted-foreground text-lg relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary">
                We prove our commitment to our Global Customer base by ensuring regulatory compliance and security.
            </p>
        </div>

        <div className="mt-16 relative">
          {mapImage && (
            <Image
              src={mapImage.imageUrl}
              alt="World map"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              data-ai-hint={mapImage.imageHint}
            />
          )}
          <TooltipProvider>
            {locations.map((loc) => (
              <Tooltip key={loc.name}>
                <TooltipTrigger
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="relative">
                    <div className={`w-3 h-3 ${loc.color} rounded-full animate-pulse`} />
                    <div className={`absolute -top-1 -left-1 w-5 h-5 ${loc.color} rounded-full opacity-30 animate-pulse-slow`} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{loc.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-2">
                {locations.map(loc => (
                    <li key={loc.name} className="flex items-center gap-2 text-sm">
                        <span className={`w-2 h-2 ${loc.color} rounded-full`}></span>
                        <span className="text-muted-foreground">{loc.name}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
