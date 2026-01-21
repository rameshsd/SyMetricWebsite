
'use client';

import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { notFound, useParams } from 'next/navigation';
import { SectionTitle } from '@/components/shared/section-title';
import { Skeleton } from '@/components/ui/skeleton';
import ReactMarkdown from 'react-markdown';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

function PageSkeleton() {
  return (
    <>
      <section className="bg-secondary/50 py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>
            <Skeleton className="w-full aspect-video rounded-2xl" />
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-4xl mx-auto py-20 space-y-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
        </div>
      </section>
    </>
  );
}


export default function DynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const firestore = useFirestore();

  const pageQuery = useMemoFirebase(
    () => (firestore && slug ? query(collection(firestore, 'pages'), where('slug', '==', slug), limit(1)) : null),
    [firestore, slug]
  );

  const { data: pages, isLoading } = useCollection(pageQuery);
  const page = pages?.[0];

  const heroImage = page?.heroImageId ? PlaceHolderImages.find(p => p.id === page.heroImageId) : null;

  if (isLoading) {
    return <PageSkeleton />;
  }
  
  if (!pages) {
    return <PageSkeleton />;
  }

  if (pages.length === 0) {
    notFound();
  }

  return (
    <>
      {(page.subtitle || heroImage) && (
        <section style={{ backgroundColor: page.heroBackgroundColor || 'transparent' }} className="py-20 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{page.title}</h1>
                {page.subtitle && <p className="text-lg md:text-xl text-muted-foreground">{page.subtitle}</p>}
              </div>
              {heroImage && (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={heroImage.imageUrl}
                    alt={page.title}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="container">
          <div className="max-w-4xl mx-auto py-12">
            {!page.subtitle && !heroImage && <SectionTitle title={page.title} className="mb-12" />}
            <div
              className="prose dark:prose-invert max-w-none"
            >
              <ReactMarkdown>{page.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
