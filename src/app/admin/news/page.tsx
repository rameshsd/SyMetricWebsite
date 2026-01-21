
'use client';

import * as React from 'react';
import { useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking, updateDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp, query, orderBy, doc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionTitle } from '@/components/shared/section-title';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { NewsItem } from '@/lib/types';
import { format } from 'date-fns';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription as DialogDesc, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Loader2, Plus, Edit } from 'lucide-react';


const newsSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters.'),
  slug: z.string().min(3, 'Slug must be at least 3 characters.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  category: z.string().min(3, 'Category is required.'),
  content: z.string().min(20, 'Content must be at least 20 characters.'),
  imageUrl: z.string().url('Please enter a valid image URL.'),
});


interface NewsEditorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  newsItem?: NewsItem | null;
  onSave: () => void;
}

function NewsEditor({ isOpen, setIsOpen, newsItem, onSave }: NewsEditorProps) {
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

  React.useEffect(() => {
    if (isOpen) {
      form.reset(newsItem ? {
        title: newsItem.title,
        slug: newsItem.slug,
        category: newsItem.category,
        content: newsItem.content,
        imageUrl: newsItem.imageUrl,
      } : {
        title: '',
        slug: '',
        category: 'Press Release',
        content: '',
        imageUrl: '',
      });
    }
  }, [newsItem, isOpen, form]);

  const onSubmit = async (values: z.infer<typeof newsSchema>) => {
    if (!firestore) return;
    try {
      if (newsItem?.id) {
        const itemRef = doc(firestore, 'newsItems', newsItem.id);
        await updateDocumentNonBlocking(itemRef, { ...values });
        toast({ title: 'Article updated successfully!' });
      } else {
        const newsCollection = collection(firestore, 'newsItems');
        await addDocumentNonBlocking(newsCollection, {
          ...values,
          publishDate: serverTimestamp(),
        });
        toast({ title: 'Article created successfully!' });
      }
      onSave();
      setIsOpen(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error saving article',
        description: (error as Error).message,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{newsItem ? 'Edit Article' : 'Create New Article'}</DialogTitle>
          <DialogDesc>
            {newsItem ? 'Update the details of your news article below.' : 'Fill out the form to create a new article.'}
          </DialogDesc>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-h-[70vh] overflow-y-auto pr-4">
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
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl><Input placeholder="https://example.com/image.jpg" {...field} /></FormControl>
                  <FormDescription>This is the main image for the article, displayed at the top.</FormDescription>
                  <FormMessage />
                </FormItem>
            )}/>
            <FormField control={form.control} name="content" render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl><Textarea placeholder="Write your article content here. Markdown is supported." rows={10} {...field} /></FormControl>
                  <FormDescription>To add multiple images in the article body, use Markdown syntax: `![alt text](image_url)`.</FormDescription>
                  <FormMessage />
                </FormItem>
            )}/>
            <DialogFooter className="sticky bottom-0 bg-background py-4 pr-6">
              <DialogClose asChild><Button type="button" variant="secondary">Cancel</Button></DialogClose>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {newsItem ? 'Save Changes' : 'Create Article'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}


function NewsList({ onEditClick, forceRerender }: { onEditClick: (item: NewsItem) => void, forceRerender: number }) {
    const firestore = useFirestore();
    const newsQuery = useMemoFirebase(() => firestore ? query(collection(firestore, 'newsItems'), orderBy('publishDate', 'desc')) : null, [firestore, forceRerender]);
    const { data: newsItems, isLoading } = useCollection<NewsItem>(newsQuery);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Existing News Articles</CardTitle>
                <CardDescription>A list of all news articles on your website.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({length: 3}).map((_, i) => (
                           <TableRow key={i}>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell className="flex gap-2 justify-end"><Skeleton className="h-8 w-20" /><Skeleton className="h-8 w-20" /></TableCell>
                            </TableRow>
                        ))}
                        {newsItems && newsItems.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.publishDate ? format(item.publishDate.toDate(), 'PP') : 'N/A'}</TableCell>
                                <TableCell className="font-medium">{item.title}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell className="text-right space-x-2">
                                     <Button variant="link" size="sm" asChild>
                                        <Link href={`/news/${item.slug}`} target="_blank">View</Link>
                                    </Button>
                                     <Button variant="outline" size="sm" onClick={() => onEditClick(item)}>
                                        <Edit className="mr-2 h-3 w-3" />
                                        Edit
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
  const [rerenderCount, setRerenderCount] = React.useState(0);
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const [selectedNewsItem, setSelectedNewsItem] = React.useState<NewsItem | null>(null);

  const handleCreateClick = () => {
    setSelectedNewsItem(null);
    setIsEditorOpen(true);
  };

  const handleEditClick = (item: NewsItem) => {
    setSelectedNewsItem(item);
    setIsEditorOpen(true);
  };
  
  const handleSave = () => {
    setRerenderCount(c => c + 1);
  };
  
  return (
    <div className="space-y-8">
       <div className="flex justify-between items-start">
        <SectionTitle title="Manage News Feed" description="Create and manage articles for your website's news feed." />
        <Button onClick={handleCreateClick}>
            <Plus className="mr-2 h-4 w-4"/>
            Create Article
        </Button>
      </div>

      <NewsList forceRerender={rerenderCount} onEditClick={handleEditClick} />

      <NewsEditor 
        isOpen={isEditorOpen}
        setIsOpen={setIsEditorOpen}
        newsItem={selectedNewsItem}
        onSave={handleSave}
      />
    </div>
  );
}
