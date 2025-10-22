
'use client';

import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

const Node = ({ name, x, y, delay }: { name: string; x: string; y: string; delay: number }) => (
  <g transform={`translate(${x}, ${y})`} className="opacity-0 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    <circle r="40" className="fill-primary/10" />
    <circle r="30" className="fill-primary/20 animate-pulse-slow" />
    <circle r="20" className="fill-primary" />
    <text textAnchor="middle" y="5" className="fill-primary-foreground font-semibold text-xs tracking-wider">
      {name}
    </text>
  </g>
);

const ConnectionLine = ({ path, delay, duration }: { path: string; delay: number, duration: number }) => (
  <>
    <path d={path} stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
    <path
      d={path}
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeDasharray="10 10"
      className="animate-flow"
      style={{ animationDelay: `${delay}ms`, animationDuration: `${duration}s` }}
    />
  </>
);

export function ConnectivityAnimation() {
  const [ref, isInView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={cn("w-full max-w-lg aspect-square p-4 opacity-0", isInView && 'animate-fade-in-up')}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <radialGradient id="hub-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Central Hub */}
        <g transform="translate(200, 200)">
          <circle r="80" fill="url(#hub-gradient)" className="animate-pulse-slow" />
          <circle r="60" className="fill-primary/20" />
          <circle r="50" className="fill-primary/50" />
          <text textAnchor="middle" y="-5" className="fill-primary-foreground font-bold text-sm">Platform</text>
          <text textAnchor="middle" y="15" className="fill-primary-foreground/80 text-xs">SyMetric</text>
        </g>

        {/* Lines */}
        <g>
            <ConnectionLine path="M 200 200 L 100 100" delay={200} duration={4} />
            <ConnectionLine path="M 200 200 L 300 150" delay={400} duration={3.5} />
            <ConnectionLine path="M 200 200 L 250 300" delay={600} duration={4.5} />
        </g>
        
        {/* Nodes */}
        <Node name="IRT/IWRS" x="100" y="100" delay={500} />
        <Node name="EDC" x="300" y="150" delay={700} />
        <Node name="CTM" x="250" y="300" delay={900} />
      </svg>
    </div>
  );
}
