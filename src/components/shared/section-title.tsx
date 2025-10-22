'use client';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({ title, description, className }: SectionTitleProps) {
  const [ref, isInView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        'mx-auto max-w-3xl text-center opacity-0',
        isInView && 'animate-fade-in-up',
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
