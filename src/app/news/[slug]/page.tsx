'use client';

import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { notFound, useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { NewsSidebar } from '@/components/news/NewsSidebar';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function ArticleSkeleton() {
    return (
        <div className="container py-12">
            <div className="grid md:grid-cols-[256px_1fr] gap-x-12 lg:gap-x-16">
                {/* Sidebar Skeleton */}
                <aside className="hidden md:block">
                    <Skeleton className="h-8 w-3/4 mb-6" />
                    <div className="space-y-4 pl-4 border-l">
                        <Skeleton className="h-5 w-5/6" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-4/6" />
                        <Skeleton className="h-5 w-5/6 mt-4" />
                        <Skeleton className="h-5 w-full" />
                    </div>
                </aside>
                {/* Main Content Skeleton */}
                <main>
                    <Skeleton className="h-5 w-1/2 mb-8" />
                    <Skeleton className="h-10 w-3/4 mb-6" />
                    <div className="space-y-4">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-5/6" />
                    </div>
                    <Skeleton className="h-48 w-full mt-8" />
                </main>
            </div>
        </div>
    );
}

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const firestore = useFirestore();

  const newsQuery = useMemoFirebase(
    () => (firestore && slug ? query(collection(firestore, 'newsItems'), where('slug', '==', slug), limit(1)) : null),
    [firestore, slug]
  );

  const { data: articles, isLoading } = useCollection(newsQuery);

  const article = articles?.[0];

  if (isLoading || !article) {
    return <ArticleSkeleton />;
  }
  
  const breadcrumbItems = [
    { label: 'News', href: '/news' },
    { label: article.category, href: '#' },
    { label: article.title },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-[256px_1fr] gap-x-12 lg:gap-x-16">
          <NewsSidebar />
          <main>
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mt-4">{article.title}</h1>
            
            <Accordion type="single" collapsible className="w-full my-6">
              <AccordionItem value="item-1" className="border-t">
                <AccordionTrigger className="font-semibold text-sm hover:no-underline py-2">Applies To</AccordionTrigger>
                <AccordionContent>
                  SyMetric Platform users and visitors interested in {article.category}.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <p className="text-sm text-muted-foreground mb-8">
                Published on {article.publishDate ? format(article.publishDate.toDate(), 'MMMM d, yyyy') : ''}
            </p>

            {article.imageUrl && (
                 <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12 shadow-md">
                    <Image src={article.imageUrl} alt={article.title} fill className="object-cover" />
                 </div>
            )}

            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
