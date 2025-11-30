
'use client';

import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { notFound, useParams } from 'next/navigation';
import { SectionTitle } from '@/components/shared/section-title';

export default function DynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const firestore = useFirestore();

  const pageQuery = useMemoFirebase(
    () => (firestore ? query(collection(firestore, 'pages'), where('slug', '==', slug), limit(1)) : null),
    [firestore, slug]
  );

  const { data: pages, isLoading } = useCollection(pageQuery);

  if (isLoading) {
    return (
      <div className="container py-20">
        <div className="space-y-4">
            <div className="h-10 bg-muted rounded w-1/2 mx-auto animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-3/4 mx-auto animate-pulse"></div>
            <div className="pt-12 space-y-2">
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
            </div>
        </div>
      </div>
    );
  }

  const page = pages?.[0];

  // Only call notFound if loading is complete and no page was found.
  if (!isLoading && !page) {
    notFound();
  }

  // Render a loading state or nothing if page is not yet available but still loading
  if (!page) {
      return (
        <div className="container py-20">
          <div className="space-y-4">
              <div className="h-10 bg-muted rounded w-1/2 mx-auto animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-3/4 mx-auto animate-pulse"></div>
              <div className="pt-12 space-y-2">
                  <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
              </div>
          </div>
        </div>
      );
  }


  return (
    <section>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title={page.title} />
          <div
            className="prose dark:prose-invert mt-12"
            dangerouslySetInnerHTML={{ __html: page.content.replace(/\n/g, '<br />') }}
          />
        </div>
      </div>
    </section>
  );
}
