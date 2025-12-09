
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import type { NewsItem } from '@/lib/types';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';

function NewsCard({ item }: { item: NewsItem }) {
    return (
        <Card className="overflow-hidden group flex flex-col rounded-2xl h-full">
            {item.imageUrl && (
              <div className="relative w-full aspect-video overflow-hidden">
                <Link href={`/news/${item.slug}`}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
            )}
            <CardHeader>
                <CardDescription>{item.category} &bull; {item.publishDate ? format(item.publishDate.toDate(), 'MMMM d, yyyy') : 'N/A'}</CardDescription>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{item.content}</p>
            </CardContent>
            <div className="p-6 pt-0">
                <Button variant="link" asChild className="p-0">
                    <Link href={`/news/${item.slug}`}>Read More &rarr;</Link>
                </Button>
            </div>
        </Card>
    );
}

function NewsSkeleton() {
    return (
        <Card className="overflow-hidden group flex flex-col rounded-2xl h-full">
            <Skeleton className="w-full aspect-video" />
            <CardHeader>
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-6 w-3/4 mt-2" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <div className="p-6 pt-0">
                <Skeleton className="h-5 w-24" />
            </div>
        </Card>
    )
}

export default function NewsPage() {
    const firestore = useFirestore();
    const newsQuery = useMemoFirebase(() => 
        firestore 
            ? query(collection(firestore, 'newsItems'), orderBy('publishDate', 'desc')) 
            : null, 
        [firestore]
    );
    const { data: newsItems, isLoading } = useCollection<NewsItem>(newsQuery);

    return (
        <section>
            <div className="container">
                <SectionTitle
                    title="News & Updates"
                    description="Stay up to date with the latest announcements, press releases, and events from SyMetric."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading && (
                        <>
                           <NewsSkeleton />
                           <NewsSkeleton />
                           <NewsSkeleton />
                        </>
                    )}
                    {newsItems && newsItems.map(item => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                    {!isLoading && newsItems?.length === 0 && (
                        <p className="col-span-full text-center text-muted-foreground">No news articles found.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
