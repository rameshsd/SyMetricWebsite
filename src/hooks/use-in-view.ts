'use client';
import { useState, useEffect, useRef } from 'react';

type UseInViewOptions = IntersectionObserverInit & {
  triggerOnce?: boolean;
};

export const useInView = (options: UseInViewOptions = { triggerOnce: true }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
           if (!options.triggerOnce) {
            setIsInView(false);
          }
        }
      },
      { threshold: 0.1, ...options }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView] as const;
};
