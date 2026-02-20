'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useMemo } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/shared/section-title';
import type { Resource } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

const ResourceCard = ({ resource }: { resource: Resource }) => {
    const placeholder = PlaceHolderImages.find((p) => p.id === resource.imageId);
    const formattedDate = resource.publishDate ? format(resource.publishDate.toDate(), 'MMMM d, yyyy') : 'N/A';
    return (
        <Card key={resource.id} className="h-full flex flex-col group overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
            <div className="relative w-full h-48 overflow-hidden">
            {placeholder && (
                <Image
                    src={placeholder.imageUrl}
                    alt={resource.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={placeholder.imageHint}
                />
            )}
            </div>
            <CardContent className="p-8 flex-grow flex flex-col">
            <div className="flex-grow">
                <Badge variant="secondary" className="mb-2">{resource.category}</Badge>
                <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                <Link href={`/resources/${resource.slug}`}>{resource.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{resource.excerpt}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{formattedDate}</p>
            </CardContent>
        </Card>
    );
};

const ResourceSkeleton = () => (
    <Card className="h-full flex flex-col group overflow-hidden rounded-2xl">
        <Skeleton className="w-full h-48" />
        <CardContent className="p-8 flex-grow flex flex-col">
            <div className="flex-grow">
                <Skeleton className="h-5 w-1/4 mb-2" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mt-2" />
            </div>
            <Skeleton className="h-4 w-1/3 mt-4" />
        </CardContent>
    </Card>
)


export default function ResourcesPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'resources-hero');

    const firestore = useFirestore();
    const resourcesQuery = useMemoFirebase(
        () => firestore ? query(collection(firestore, 'resources'), orderBy('publishDate', 'desc')) : null,
        [firestore]
    );

    const { data: resources, isLoading } = useCollection<Resource>(resourcesQuery);
    
    const newsAndEvents = useMemo(() => resources?.filter(r => r.category === 'News and Events') || [], [resources]);
    const blog = useMemo(() => resources?.filter(r => r.category === 'Blog') || [], [resources]);
    const whitePapersAndCaseStudies = useMemo(() => resources?.filter(r => r.category === 'White Papers and Case Studies') || [], [resources]);

    return (
        <>
            <section className="py-20" style={{ backgroundColor: '#d9ebfc' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                      <div className="text-left">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Insights & Resources</h1>
                        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                          Explore our collection of articles, whitepapers, and success stories to stay ahead in the world of clinical research.
                        </p>
                      </div>
                      <div className="relative h-80 w-full">
                          {heroImage && (
                              <Image
                                  src={heroImage.imageUrl}
                                  alt={heroImage.description}
                                  data-ai-hint={heroImage.imageHint}
                                  fill
                                  className="object-cover rounded-2xl"
                              />
                          )}
                      </div>
                    </div>
                </div>
            </section>
            
            {isLoading || newsAndEvents.length > 0 ? (
                 <section>
                    <div className="container">
                        <SectionTitle title="News and Events" className="mb-12" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                           {isLoading ? Array.from({length: 3}).map((_, i) => <ResourceSkeleton key={i} />) : newsAndEvents.map(resource => <ResourceCard key={resource.id} resource={resource} />)}
                        </div>
                    </div>
                </section>
            ) : null}
            
            {isLoading || blog.length > 0 ? (
                <section>
                    <div className="container">
                        <SectionTitle title="Blog" className="mb-12" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                           {isLoading ? Array.from({length: 3}).map((_, i) => <ResourceSkeleton key={i} />) : blog.map(resource => <ResourceCard key={resource.id} resource={resource} />)}
                        </div>
                    </div>
                </section>
            ) : null}

            {isLoading || whitePapersAndCaseStudies.length > 0 ? (
                 <section>
                    <div className="container">
                        <SectionTitle title="White Papers and Case Studies" className="mb-12" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                           {isLoading ? Array.from({length: 3}).map((_, i) => <ResourceSkeleton key={i} />) : whitePapersAndCaseStudies.map(resource => <ResourceCard key={resource.id} resource={resource} />)}
                        </div>
                    </div>
                </section>
            ) : null}

             {!isLoading && resources?.length === 0 && (
                <section>
                    <div className="container text-center">
                        <p className="text-muted-foreground">No resources found.</p>
                    </div>
                </section>
             )}
        </>
    );
}
