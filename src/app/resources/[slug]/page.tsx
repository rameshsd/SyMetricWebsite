'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Skeleton } from '@/components/ui/skeleton';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import type { Resource } from '@/lib/types';
import { format } from 'date-fns';

function ArticleSkeleton() {
    return (
        <div className="container py-12">
            <div className="max-w-4xl mx-auto">
                <Skeleton className="h-5 w-1/2 mb-8" />
                <Skeleton className="h-10 w-3/4 mb-6" />
                <div className="space-y-4">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-5/6" />
                </div>
                <Skeleton className="h-48 w-full mt-8" />
            </div>
        </div>
    );
}

export default function ResourcePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const firestore = useFirestore();

  const resourceQuery = useMemoFirebase(
    () => (firestore && slug ? query(collection(firestore, 'resources'), where('slug', '==', slug), limit(1)) : null),
    [firestore, slug]
  );
  
  const { data: resourcesData, isLoading } = useCollection<Resource>(resourceQuery);
  const resource = resourcesData?.[0];

  if (isLoading) {
    return <ArticleSkeleton />;
  }

  if (!resource) {
    notFound();
  }
  
  const breadcrumbItems = [
    { label: 'Resources', href: '/resources' },
    { label: resource.category, href: '#' },
    { label: resource.title },
  ];
  
  const image = PlaceHolderImages.find(p => p.id === resource.imageId);
  const formattedDate = resource.publishDate ? format(resource.publishDate.toDate(), 'MMMM d, yyyy') : '';

  return (
    <section className="py-12 bg-background">
      <div className="container max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mt-4">{resource.title}</h1>
        
        <p className="text-sm text-muted-foreground mt-4 mb-8">
            Published on {formattedDate}
        </p>

        {image && (
             <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12 shadow-md">
                <Image src={image.imageUrl} alt={resource.title} fill className="object-cover" />
             </div>
        )}

        <div className="prose dark:prose-invert max-w-none">
            <p>{resource.excerpt}</p>
            <p>More content coming soon for this resource...</p>
        </div>
      </div>
    </section>
  );
}
