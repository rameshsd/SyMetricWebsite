
'use client';

import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { notFound, useParams } from 'next/navigation';
import { SectionTitle } from '@/components/shared/section-title';
import { Skeleton } from '@/components/ui/skeleton';
import ReactMarkdown from 'react-markdown';

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

  if (isLoading) {
    return (
      <div className="container py-20">
        <div className="max-w-4xl mx-auto space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <div className="space-y-4 pt-8">
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

  if (!page) {
    notFound();
  }

  return (
    <section>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title={page.title} className="mb-12" />
          <div
            className="prose dark:prose-invert max-w-none"
          >
            <ReactMarkdown>{page.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
