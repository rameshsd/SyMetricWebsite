'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Eye, MessageSquare, ThumbsUp, Plus } from 'lucide-react';
import type { CommunityPost } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, updateDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, Timestamp, doc } from 'firebase/firestore';
import { CreatePostForm } from './CreatePostForm';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';

function PostItem({ post }: { post: CommunityPost }) {
  const firestore = useFirestore();
  const createdAt = post.createdAt instanceof Timestamp ? post.createdAt.toDate() : new Date(post.createdAt as string);
  
  let authorName = post.author.name;
  if (authorName && authorName.includes('@')) {
    authorName = authorName.split('@')[0];
  }
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!firestore) return;
    const postRef = doc(firestore, 'communityPosts', post.id);
    updateDocumentNonBlocking(postRef, {
        likes: (post.likes || 0) + 1
    });
  };

  const PostStats = ({ isMobile = false }: { isMobile?: boolean }) => (
      <div className={cn(
          "flex items-center gap-4 text-sm text-muted-foreground",
          isMobile ? "mt-2 sm:hidden" : "hidden sm:flex flex-shrink-0"
      )}>
        <div className="flex items-center gap-1">
          <Eye className="h-4 w-4" /> {post.views || 0}
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="h-4 w-4" /> {post.comments || 0}
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-primary" onClick={handleLike}>
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <span>{post.likes || 0}</span>
        </div>
      </div>
  );


  return (
    <Card className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary/20 text-primary font-bold">
              {authorName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{authorName}</p>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
             <PostStats isMobile />
          </div>
        </div>
        <PostStats />
      </div>
      <div className="mt-4 sm:pl-14">
        <h3 className="text-lg font-bold hover:text-primary cursor-pointer">{post.title}</h3>
        <p className="mt-2 text-muted-foreground line-clamp-3">{post.content}</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <span>{formatDistanceToNow(createdAt, { addSuffix: true })}</span>
          <span>|</span>
          <span>Posted in <Link href="#" className="text-primary hover:underline">{post.category}</Link></span>
        </div>
      </div>
    </Card>
  );
}

const PostSkeleton = () => (
    <Card className="p-4 sm:p-6">
        <div className="flex items-start gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[100px]" />
            </div>
        </div>
        <div className="mt-4 pl-14 space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-1/2" />
        </div>
    </Card>
)


export function RecentPosts() {
  const firestore = useFirestore();
  const [sortOrder, setSortOrder] = useState('createdAt');

  const postsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'communityPosts'), orderBy(sortOrder, 'desc'));
  }, [firestore, sortOrder]);

  const { data: posts, isLoading, error } = useCollection<CommunityPost>(postsQuery);

  const [forceRerender, setForceRerender] = useState(0);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Recent Activity</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Select defaultValue="createdAt" onValueChange={setSortOrder}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt">Sort by: Creation Date</SelectItem>
              <SelectItem value="likes">Most Kudos</SelectItem>
               <SelectItem value="views">Most Views</SelectItem>
            </SelectContent>
          </Select>
          <CreatePostForm 
            trigger={
                <Button className="w-full sm:w-auto whitespace-nowrap">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Post
                </Button>
            } 
            onPostCreated={() => setForceRerender(c => c + 1)} // Doesn't do anything but triggers re-render
          />
        </div>
      </div>
      <div className="space-y-6">
        {isLoading && (
            <>
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
            </>
        )}
        {error && <p className="text-destructive-foreground">{error.message}</p>}
        {posts && posts.map(post => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
}
