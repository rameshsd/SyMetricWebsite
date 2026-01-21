'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import type { NewsItem } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export function NewsSidebar() {
    const pathname = usePathname();
    const firestore = useFirestore();

    const recentNewsQuery = useMemoFirebase(
        () => firestore ? query(collection(firestore, 'newsItems'), orderBy('publishDate', 'desc'), limit(10)) : null,
        [firestore]
    );

    const { data: recentNews, isLoading } = useCollection<NewsItem>(recentNewsQuery);

    return (
        <aside className="hidden md:block w-full md:w-64 flex-shrink-0">
            <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Recent News</h2>
                <nav className="flex flex-col gap-1 border-l pl-4">
                    {isLoading && Array.from({ length: 7 }).map((_, i) => (
                        <Skeleton key={i} className="h-5 w-full mb-2" />
                    ))}
                    {recentNews && recentNews.map((article) => (
                        <Link
                            key={article.id}
                            href={`/news/${article.slug}`}
                            className={cn(
                                'py-1 text-sm text-muted-foreground hover:text-primary transition-colors',
                                pathname === `/news/${article.slug}` && 'font-bold text-primary',
                            )}
                        >
                            {article.title}
                        </Link>
                    ))}
                </nav>
            </div>
             <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Categories</h2>
                <nav className="flex flex-col gap-1 border-l pl-4">
                    {/* In a real app, these would be fetched dynamically */}
                    <Link href="#" className="py-1 text-sm text-muted-foreground hover:text-primary transition-colors">Press Release</Link>
                    <Link href="#" className="py-1 text-sm text-muted-foreground hover:text-primary transition-colors">Event</Link>
                    <Link href="#" className="py-1 text-sm text-muted-foreground hover:text-primary transition-colors">Product Update</Link>
                </nav>
            </div>
        </aside>
    );
}
