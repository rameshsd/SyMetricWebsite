
'use client';

import * as React from 'react';
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
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

const pageSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  slug: z.string().min(3, 'Slug must be at least 3 characters.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  content: z.string().min(10, 'Content must be at least 10 characters.'),
});

function CreatePageForm({ onPageCreated }: { onPageCreated: () => void }) {
  const firestore = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof pageSchema>>({
    resolver: zodResolver(pageSchema),
    defaultValues: { title: '', slug: '', content: '' },
  });

  const onSubmit = async (values: z.infer<typeof pageSchema>) => {
    if (!firestore) return;
    const pagesCollection = collection(firestore, 'pages');
    try {
      await addDocumentNonBlocking(pagesCollection, {
        ...values,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      toast({ title: 'Page created successfully!' });
      form.reset();
      onPageCreated();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error creating page',
        description: (error as Error).message,
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a New Page</CardTitle>
        <CardDescription>Fill out the form below to add a new page to your website.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Title</FormLabel>
                  <FormControl>
                    <Input placeholder="About Our New Service" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="about-our-new-service" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write your page content here. You can use Markdown." rows={10} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Creating...' : 'Create Page'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

function PagesList({ forceRerender }: { forceRerender: number }) {
    const firestore = useFirestore();
    const pagesQuery = useMemoFirebase(() => firestore ? query(collection(firestore, 'pages'), orderBy('createdAt', 'desc')) : null, [firestore, forceRerender]);
    const { data: pages, isLoading } = useCollection(pagesQuery);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Existing Pages</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>URL Path</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({length: 3}).map((_, i) => (
                          <TableRow key={i}>
                            <TableCell><Skeleton className="h-5 w-3/4" /></TableCell>
                            <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                            <TableCell><Skeleton className="h-5 w-12" /></TableCell>
                          </TableRow>
                        ))}
                        {pages && pages.map(page => (
                            <TableRow key={page.id}>
                                <TableCell className="font-medium">{page.title}</TableCell>
                                <TableCell>/pages/{page.slug}</TableCell>
                                <TableCell>
                                    <Button variant="link" asChild>
                                        <Link href={`/pages/${page.slug}`} target="_blank">View</Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {!isLoading && pages?.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={3} className="h-24 text-center">No pages created yet.</TableCell>
                          </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default function PagesAdminPage() {
  const [rerenderCount, setRerenderCount] = React.useState(0);

  return (
    <div className="space-y-8">
      <SectionTitle title="Manage Pages" description="Create and manage dynamic pages for your website." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <CreatePageForm onPageCreated={() => setRerenderCount(c => c + 1)} />
        <PagesList forceRerender={rerenderCount} />
      </div>
    </div>
  );
}
