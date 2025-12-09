
'use client';

import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { notFound, useParams } from 'next/navigation';
import { SectionTitle } from '@/components/shared/section-title';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const firestore = useFirestore();

  const newsQuery = useMemoFirebase(
    () => (firestore ? query(collection(firestore, 'newsItems'), where('slug', '==', slug), limit(1)) : null),
    [firestore, slug]
  );

  const { data: articles, isLoading } = useCollection(newsQuery);

  const article = articles?.[0];

  if (isLoading) {
    return (
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
            <Skeleton className="h-6 w-1/4 mb-2" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/3 mb-12" />
            <Skeleton className="w-full aspect-video rounded-lg mb-12" />
            <div className="space-y-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6" />
                <Skeleton className="h-5 w-full mt-4" />
                <Skeleton className="h-5 w-3/4" />
            </div>
        </div>
      </div>
    );
  }

  if (!article) {
    notFound();
  }

  return (
    <section>
      <div className="container">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <p className="text-primary font-semibold">{article.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">{article.title}</h1>
                <p className="text-muted-foreground mt-4">
                    Published on {article.publishDate ? format(article.publishDate.toDate(), 'MMMM d, yyyy') : ''}
                </p>
            </div>
            
            {article.imageUrl && (
                 <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12">
                    <Image src={article.imageUrl} alt={article.title} fill className="object-cover" />
                 </div>
            )}

          <div
            className="prose dark:prose-invert max-w-none"
          >
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
