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
  { name: 'India', top: '50%', left: '70%', value: '19', color: 'bg-violet-500', isHQ: true },
];

function parsePercent(p: string) {
  return Number(p.replace('%', '').trim());
}

export function GlobalPresence() {
  const mapImage = PlaceHolderImages.find((p) => p.id === 'world-map');
  const origin = locations.find((l) => l.isHQ) || locations.find((l) => l.name === 'India');

  // Build SVG path data using viewBox 0 0 100 100 (percent coords -> numbers)
  const linePaths = origin
    ? locations
        .filter((l) => !l.isHQ)
        .map((target) => {
          const x1 = parsePercent(origin.left);
          const y1 = parsePercent(origin.top);
          const x2 = parsePercent(target.left);
          const y2 = parsePercent(target.top);

          // Midpoint
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;

          // Perpendicular offset for curve (scaled to distance)
          const dx = x2 - x1;
          const dy = y2 - y1;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const offset = Math.min(14 + dist * 0.08, 28); // tweak curvature

          // Perpendicular control point
          const pcx = mx - (dy / dist) * offset;
          const pcy = my + (dx / dist) * offset;

          // Quadratic Bezier: M x1 y1 Q pcx pcy x2 y2
          return {
            id: `${origin.name}-${target.name}`,
            d: `M ${x1} ${y1} Q ${pcx} ${pcy} ${x2} ${y2}`,
          };
        })
    : [];

  return (
    <section className="bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight">Affordable and Scalable, Globally</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mt-8">
          <p className="text-muted-foreground text-lg">
            Over the years, we have delivered safe and reliable solutions to all our clients across India and abroad.
          </p>
          <p className="text-muted-foreground text-lg relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary">
            We prove our commitment to our Global Customer base by ensuring regulatory compliance and security.
          </p>
        </div>

        <div className="mt-16 relative max-w-[1200px] mx-auto">
          {mapImage && (
            <Image
              src={mapImage.imageUrl}
              alt="World map"
              width={1200}
              height={600}
              className="w-full h-auto object-contain rounded-2xl shadow-soft"
              data-ai-hint={mapImage.imageHint}
            />
          )}

          {/* SVG overlay that uses percentage coordinates inside a 0..100 viewBox */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 w-full h-full"
            aria-hidden
          >
            {linePaths.map((p) => (
              <path
                key={p.id}
                d={p.d}
                stroke="rgba(14, 165, 233, 0.85)" /* teal-blue feel */
                strokeWidth={0.45}
                fill="none"
                strokeLinecap="round"
                className="route-path"
              />
            ))}
          </svg>

          <TooltipProvider>
            {locations.map((loc) => (
              <Tooltip key={loc.name}>
                <TooltipTrigger
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="relative flex items-center justify-center" aria-hidden>
                    <div
                      className={`w-8 h-8 ${loc.color} text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md relative z-10`}
                    >
                      {loc.value}
                    </div>

                    <div
                      className={`absolute -top-1 -left-1 w-10 h-10 ${loc.color} rounded-full opacity-25 animate-pulse-slow`}
                      aria-hidden
                    />

                    {/* subtle halo for HQ */}
                    {loc.isHQ && (
                      <span
                        className="absolute rounded-full"
                        style={{
                          width: '56px',
                          height: '56px',
                          left: '-22px',
                          top: '-22px',
                          background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, rgba(14,165,233,0) 60%)',
                          zIndex: 0,
                          pointerEvents: 'none',
                        }}
                      />
                    )}
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
            {locations.map((loc) => (
              <li key={loc.name} className="flex items-center gap-2 text-sm">
                <span className={`w-2 h-2 ${loc.color} rounded-full`} />
                <span className="text-muted-foreground">{loc.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Animated dashed route */
        .route-path {
          stroke-dasharray: 3 6;
          stroke-dashoffset: 0;
          animation: dash-move 3.2s linear infinite;
          opacity: 0.95;
        }

        @keyframes dash-move {
          to {
            stroke-dashoffset: -18;
          }
        }

        /* pulse-slow (used for halo) */
        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.36;
          }
          100% {
            transform: scale(1);
            opacity: 0.25;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4.6s ease-in-out infinite;
        }

        /* soft shadow util */
        .shadow-soft {
          box-shadow: 0 12px 30px rgba(2, 6, 23, 0.06);
        }

        /* ensure svg scales correctly over image */
        :global(section .container > .mt-16) {
          position: relative;
        }
      `}</style>
    </section>
  );
}
