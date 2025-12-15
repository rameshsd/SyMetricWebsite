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
       <h2 className={cn("text-3xl sm:text-4xl font-bold tracking-tight relative pl-4", eyebrow && "mt-2")}>
        <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></span>
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
