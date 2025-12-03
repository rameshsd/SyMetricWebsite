
'use client';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
}

export function SectionTitle({ title, description, eyebrow, className }: SectionTitleProps) {
  const [ref, isInView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-3xl text-left opacity-0',
        isInView && 'animate-fade-in-up',
        className
      )}
    >
      {eyebrow && (
         <p className="text-sm font-semibold text-primary uppercase tracking-wider">{eyebrow}</p>
      )}
      <h2 className={cn("text-4xl font-bold tracking-tight", eyebrow && "mt-2")}>{title}</h2>
      {description && <p className="mt-2 text-muted-foreground">{description}</p>}
    </div>
  );
}
