
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
import { latestNews } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function NewsCard({ item }: { item: NewsItem }) {
    return (
        <Card className="overflow-hidden group flex flex-col rounded-2xl h-full bg-background border border-border/60 hover:shadow-lg transition-all">
            {item.imageUrl && (
              <div className="relative w-full aspect-video overflow-hidden bg-slate-950 flex items-center justify-center">
                <Link href={`/news/${item.slug}`} className="relative w-full h-full block">
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
                <CardTitle className="text-xl group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">{item.content}</p>
            </CardContent>
            <div className="p-6 pt-0">
                <Button variant="link" asChild className="p-0 font-semibold text-primary">
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
    );
}

export default function NewsPage() {
    const firestore = useFirestore();
    const newsQuery = useMemoFirebase(() => 
        firestore 
            ? query(collection(firestore, 'newsItems'), orderBy('publishDate', 'desc')) 
            : null, 
        [firestore]
    );
    const { data: firestoreNews, isLoading } = useCollection<NewsItem>(newsQuery);

    // Combine static latestNews with any Firestore items (avoiding duplicates)
    const existingTitles = new Set(latestNews.map(item => item.title.toLowerCase().trim()));
    const additionalFirestoreItems = (firestoreNews || []).filter(
        item => !existingTitles.has(item.title.toLowerCase().trim())
    );

    return (
        <section className="py-16">
            <div className="container">
                <SectionTitle
                    title="News & Updates"
                    description="Stay up to date with the latest announcements, press releases, and events from SyMetric."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Always render latestNews (What's new items including Everest Group recognition) */}
                    {latestNews.map(item => {
                        const image = PlaceHolderImages.find(p => p.id === item.imageId);
                        return (
                            <Card key={item.id} className="overflow-hidden group flex flex-col rounded-2xl h-full bg-background border border-border/60 hover:shadow-lg transition-all">
                                {image && (
                                  <div className="relative w-full aspect-video overflow-hidden bg-slate-950 flex items-center justify-center">
                                    <Link href={item.link} className="relative w-full h-full block">
                                      <Image
                                        src={image.imageUrl}
                                        alt={item.title}
                                        fill
                                        className={item.imageId === 'news-everest-peak-matrix' ? "object-contain p-2 transition-transform duration-300 group-hover:scale-105" : "object-cover transition-transform duration-300 group-hover:scale-105"}
                                      />
                                    </Link>
                                  </div>
                                )}
                                <CardHeader>
                                    <CardDescription>{item.category || 'Press release'}</CardDescription>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-snug">
                                        <Link href={item.link}>{item.title}</Link>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                  <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">{item.description}</p>
                                </CardContent>
                                <div className="p-6 pt-0">
                                    <Button variant="link" asChild className="p-0 font-semibold text-primary">
                                        <Link href={item.link}>Read More &rarr;</Link>
                                    </Button>
                                </div>
                            </Card>
                        );
                    })}

                    {isLoading && (
                        <>
                           <NewsSkeleton />
                           <NewsSkeleton />
                        </>
                    )}

                    {additionalFirestoreItems.map(item => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
