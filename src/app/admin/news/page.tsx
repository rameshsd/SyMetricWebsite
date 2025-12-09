
'use client';

import { useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionTitle } from '@/components/shared/section-title';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { NewsItem } from '@/lib/types';
import { format } from 'date-fns';
import Link from 'next/link';

const newsSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters.'),
  slug: z.string().min(3, 'Slug must be at least 3 characters.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  category: z.string().min(3, 'Category is required.'),
  content: z.string().min(20, 'Content must be at least 20 characters.'),
  imageUrl: z.string().url('Please enter a valid image URL.'),
});

function CreateNewsForm() {
  const firestore = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof newsSchema>>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: '',
      slug: '',
      category: 'Press Release',
      content: '',
      imageUrl: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof newsSchema>) => {
    if (!firestore) return;
    const newsCollection = collection(firestore, 'newsItems');
    try {
      await addDocumentNonBlocking(newsCollection, {
        ...values,
        publishDate: serverTimestamp(),
      });
      toast({ title: 'News article created successfully!' });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error creating article',
        description: (error as Error).message,
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create News Article</CardTitle>
        <CardDescription>Fill out the form to add a new article to the news feed.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="title" render={({ field }) => (
                <FormItem><FormLabel>Title</FormLabel><FormControl><Input placeholder="SyMetric Announces New Partnership" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="slug" render={({ field }) => (
                    <FormItem><FormLabel>Slug</FormLabel><FormControl><Input placeholder="symetric-announces-partnership" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="category" render={({ field }) => (
                    <FormItem><FormLabel>Category</FormLabel><FormControl><Input placeholder="e.g., Press Release, Event" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
            </div>
            <FormField control={form.control} name="imageUrl" render={({ field }) => (
                <FormItem><FormLabel>Image URL</FormLabel><FormControl><Input placeholder="https://example.com/image.jpg" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <FormField control={form.control} name="content" render={({ field }) => (
                <FormItem><FormLabel>Content</FormLabel><FormControl><Textarea placeholder="Write your article content here. Markdown is supported." rows={10} {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Creating...' : 'Create Article'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

function NewsList() {
    const firestore = useFirestore();
    const newsQuery = useMemoFirebase(() => firestore ? query(collection(firestore, 'newsItems'), orderBy('publishDate', 'desc')) : null, [firestore]);
    const { data: newsItems, isLoading } = useCollection<NewsItem>(newsQuery);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Existing News Articles</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && <TableRow><TableCell colSpan={4} className="h-24 text-center">Loading...</TableCell></TableRow>}
                        {newsItems && newsItems.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.publishDate ? format(item.publishDate.toDate(), 'PP') : 'N/A'}</TableCell>
                                <TableCell className="font-medium">{item.title}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>
                                     <Button variant="link" asChild>
                                        <Link href={`/news/${item.slug}`} target="_blank">View</Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                         {!isLoading && newsItems?.length === 0 && (
                            <TableRow><TableCell colSpan={4} className="h-24 text-center">No news articles found.</TableCell></TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default function NewsAdminPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Manage News Feed" description="Create and manage articles for your website's news feed." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <CreateNewsForm />
        <NewsList />
      </div>
    </div>
  );
}
