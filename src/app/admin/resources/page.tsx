'use client';

import * as React from 'react';
import { useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking, updateDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp, query, orderBy, doc } from 'firebase/firestore';
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
import type { Resource } from '@/lib/types';
import { format } from 'date-fns';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription as DialogDesc, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Loader2, Plus, Edit } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const resourceSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters.'),
  slug: z.string().min(3, 'Slug must be at least 3 characters.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  category: z.string().min(3, 'Category is required.'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters.'),
  imageId: z.string().optional(),
});


interface ResourceEditorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  resourceItem?: Resource | null;
  onSave: () => void;
}

function ResourceEditor({ isOpen, setIsOpen, resourceItem, onSave }: ResourceEditorProps) {
  const firestore = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: '',
      slug: '',
      category: 'Blog',
      excerpt: '',
      imageId: '',
    },
  });

  React.useEffect(() => {
    if (isOpen) {
      form.reset(resourceItem ? {
        title: resourceItem.title,
        slug: resourceItem.slug,
        category: resourceItem.category,
        excerpt: resourceItem.excerpt,
        imageId: resourceItem.imageId || '',
      } : {
        title: '',
        slug: '',
        category: 'Blog',
        excerpt: '',
        imageId: '',
      });
    }
  }, [resourceItem, isOpen, form]);

  const onSubmit = async (values: z.infer<typeof resourceSchema>) => {
    if (!firestore) return;
    try {
      if (resourceItem?.id) {
        const itemRef = doc(firestore, 'resources', resourceItem.id);
        await updateDocumentNonBlocking(itemRef, { ...values });
        toast({ title: 'Resource updated successfully!' });
      } else {
        const resourcesCollection = collection(firestore, 'resources');
        await addDocumentNonBlocking(resourcesCollection, {
          ...values,
          publishDate: serverTimestamp(),
        });
        toast({ title: 'Resource created successfully!' });
      }
      onSave();
      setIsOpen(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error saving resource',
        description: (error as Error).message,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{resourceItem ? 'Edit Resource' : 'Create New Resource'}</DialogTitle>
          <DialogDesc>
            {resourceItem ? 'Update the details of this resource.' : 'Fill out the form to create a new resource.'}
          </DialogDesc>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-h-[70vh] overflow-y-auto pr-4">
            <FormField control={form.control} name="title" render={({ field }) => (
                <FormItem><FormLabel>Title</FormLabel><FormControl><Input placeholder="E.g., The Future of Decentralized Trials" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="slug" render={({ field }) => (
                    <FormItem><FormLabel>Slug</FormLabel><FormControl><Input placeholder="future-of-decentralized-trials" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="category" render={({ field }) => (
                    <FormItem><FormLabel>Category</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Blog">Blog</SelectItem>
                          <SelectItem value="News and Events">News and Events</SelectItem>
                          <SelectItem value="White Papers and Case Studies">White Papers and Case Studies</SelectItem>
                        </SelectContent>
                      </Select>
                    <FormMessage /></FormItem>
                )}/>
            </div>
            <FormField control={form.control} name="imageId" render={({ field }) => (
                <FormItem>
                  <FormLabel>Image ID (from placeholder-images.json)</FormLabel>
                  <FormControl><Input placeholder="e.g., 'resource-1'" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
            )}/>
            <FormField control={form.control} name="excerpt" render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt / Short Description</FormLabel>
                  <FormControl><Textarea placeholder="A short summary of the resource..." rows={5} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
            )}/>
            <DialogFooter className="sticky bottom-0 bg-background py-4 pr-6">
              <DialogClose asChild><Button type="button" variant="secondary">Cancel</Button></DialogClose>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {resourceItem ? 'Save Changes' : 'Create Resource'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}


function ResourcesList({ onEditClick, forceRerender }: { onEditClick: (item: Resource) => void, forceRerender: number }) {
    const firestore = useFirestore();
    const resourcesQuery = useMemoFirebase(() => firestore ? query(collection(firestore, 'resources'), orderBy('publishDate', 'desc')) : null, [firestore, forceRerender]);
    const { data: resourceItems, isLoading } = useCollection<Resource>(resourcesQuery);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Existing Resources</CardTitle>
                <CardDescription>A list of all resources on your website.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead className="hidden md:table-cell">Category</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({length: 3}).map((_, i) => (
                           <TableRow key={i}>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                                <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell className="flex gap-2 justify-end"><Skeleton className="h-8 w-20" /><Skeleton className="h-8 w-20" /></TableCell>
                            </TableRow>
                        ))}
                        {resourceItems && resourceItems.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.publishDate ? format(item.publishDate.toDate(), 'PP') : 'N/A'}</TableCell>
                                <TableCell className="font-medium">{item.title}</TableCell>
                                <TableCell className="hidden md:table-cell">{item.category}</TableCell>
                                <TableCell className="text-right space-x-2">
                                     <Button variant="link" size="sm" asChild>
                                        <Link href={`/resources/${item.slug}`} target="_blank">View</Link>
                                    </Button>
                                     <Button variant="outline" size="sm" onClick={() => onEditClick(item)}>
                                        <Edit className="mr-2 h-3 w-3" />
                                        Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                         {!isLoading && resourceItems?.length === 0 && (
                            <TableRow><TableCell colSpan={4} className="h-24 text-center">No resources found.</TableCell></TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default function ResourcesAdminPage() {
  const [rerenderCount, setRerenderCount] = React.useState(0);
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const [selectedResource, setSelectedResource] = React.useState<Resource | null>(null);

  const handleCreateClick = () => {
    setSelectedResource(null);
    setIsEditorOpen(true);
  };

  const handleEditClick = (item: Resource) => {
    setSelectedResource(item);
    setIsEditorOpen(true);
  };
  
  const handleSave = () => {
    setRerenderCount(c => c + 1);
  };
  
  return (
    <div className="space-y-8">
       <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <SectionTitle title="Manage Resources" description="Create and manage resources for your website's Insights & Resources pages." />
        <Button onClick={handleCreateClick} className="w-full md:w-auto">
            <Plus className="mr-2 h-4 w-4"/>
            Create Resource
        </Button>
      </div>

      <ResourcesList forceRerender={rerenderCount} onEditClick={handleEditClick} />

      <ResourceEditor 
        isOpen={isEditorOpen}
        setIsOpen={setIsEditorOpen}
        resourceItem={selectedResource}
        onSave={handleSave}
      />
    </div>
  );
}
