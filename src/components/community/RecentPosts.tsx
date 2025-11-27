'use client';

import { Card, CardContent } from '@/components/ui/card';
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
import { Eye, MessageSquare, ThumbsUp } from 'lucide-react';
import type { CommunityPost } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { recentActivity } from '@/lib/data';
import { useState } from 'react';

function PostItem({ post }: { post: CommunityPost }) {
  const createdAt = new Date(post.createdAt as string);

  return (
    <Card className="p-4 sm:p-6">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary/20 text-primary font-bold">
              {post.author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" /> {post.views}
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" /> {post.comments}
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" /> {post.likes}
          </div>
        </div>
      </div>
      <div className="mt-4 pl-14">
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


export function RecentPosts() {
  const [posts, setPosts] = useState<CommunityPost[]>(recentActivity);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Recent Activity</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Select defaultValue="creation-date">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="creation-date">Sort by: Creation Date</SelectItem>
              <SelectItem value="most-recent">Most Recent</SelectItem>
              <SelectItem value="most-kudos">Most Kudos</SelectItem>
            </SelectContent>
          </Select>
            <Button className="w-full sm:w-auto whitespace-nowrap">Create Post</Button>
        </div>
      </div>
      <div className="space-y-6">
        {posts.map(post => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
}
