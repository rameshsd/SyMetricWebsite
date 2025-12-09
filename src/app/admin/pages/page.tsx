
'use client';

import { useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
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

const pageSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  slug: z.string().min(3, 'Slug must be at least 3 characters.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  content: z.string().min(10, 'Content must be at least 10 characters.'),
});

function CreatePageForm() {
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

function PagesList() {
    const firestore = useFirestore();
    const pagesQuery = useMemoFirebase(() => firestore ? collection(firestore, 'pages') : null, [firestore]);
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
                            <TableHead>Slug</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && <TableRow><TableCell colSpan={3}>Loading...</TableCell></TableRow>}
                        {pages && pages.map(page => (
                            <TableRow key={page.id}>
                                <TableCell>{page.title}</TableCell>
                                <TableCell>/pages/{page.slug}</TableCell>
                                <TableCell>
                                    <Button variant="link" asChild>
                                        <Link href={`/pages/${page.slug}`} target="_blank">View</Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default function PagesAdminPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Manage Pages" description="Create and manage dynamic pages for your website." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <CreatePageForm />
        <PagesList />
      </div>
    </div>
  );
}
