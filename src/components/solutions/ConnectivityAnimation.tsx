
'use client';

import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

const Node = ({ name, x, y, delay }: { name: string; x: string; y: string; delay: number }) => (
  <g transform={`translate(${x}, ${y})`} className="opacity-0 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    <circle r="45" className="fill-primary/10" />
    <circle r="35" className="fill-primary/20 animate-pulse-slow" />
    <circle r="25" className="fill-primary" />
    <text textAnchor="middle" y="5" className="fill-primary-foreground font-semibold text-sm tracking-wider">
      {name}
    </text>
  </g>
);

const ConnectionLine = ({ path, delay, duration }: { path: string; delay: number, duration: number }) => (
  <g className="opacity-0 animate-fade-in" style={{animationDelay: `${delay}ms`}}>
    <path d={path} stroke="hsl(var(--primary) / 0.15)" strokeWidth="2" />
    <path
      d={path}
      stroke="hsl(var(--primary))"
      strokeWidth="2.5"
      strokeDasharray="8"
      strokeDashoffset="1000"
      className="animate-flow"
      style={{ animationDuration: `${duration}s` }}
    />
  </g>
);

export function ConnectivityAnimation() {
  const [ref, isInView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={cn("w-full max-w-lg aspect-square p-4 opacity-0", isInView && 'animate-fade-in-up')}>
      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="hub-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Central Hub */}
        <g transform="translate(200, 200)">
          <circle r="100" fill="url(#hub-gradient)" className="animate-pulse-slow" />
          <circle r="70" className="fill-primary/10" />
          <circle r="60" className="fill-primary/20" />
          <g className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <text textAnchor="middle" y="-8" className="fill-foreground font-bold text-lg">Platform</text>
            <text textAnchor="middle" y="12" className="fill-muted-foreground text-sm">SyMetric</text>
          </g>
        </g>

        {/* Lines */}
        <g>
            <ConnectionLine path="M 200 200 L 90 90" delay={400} duration={8} />
            <ConnectionLine path="M 200 200 L 310 120" delay={600} duration={7} />
            <ConnectionLine path="M 200 200 L 250 310" delay={800} duration={9} />
        </g>
        
        {/* Nodes */}
        <Node name="IRT/IWRS" x="90" y="90" delay={700} />
        <Node name="EDC" x="310" y="120" delay={900} />
        <Node name="CTM" x="250" y="310" delay={1100} />
      </svg>
    </div>
  );
}
