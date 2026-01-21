
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { doc } from 'firebase/firestore';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

import { contentSchemas } from '@/lib/content-schemas';
import type { PageSchema } from '@/lib/content-schemas';
import { useFirestore, useDoc, setDocumentNonBlocking, useMemoFirebase } from '@/firebase';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionTitle } from '@/components/shared/section-title';
import { navItems } from '@/lib/data';

function EditContentForm({ pageSchema, onSave }: { pageSchema: PageSchema; onSave: () => void }) {
    const firestore = useFirestore();
    const { toast } = useToast();
    const contentDocRef = useMemoFirebase(() => firestore ? doc(firestore, 'pageContent', pageSchema.id) : null, [firestore, pageSchema.id]);
    const { data: contentData, isLoading } = useDoc(contentDocRef);
    
    const defaultValues = React.useMemo(() => pageSchema.fields.reduce((acc: any, field: any) => {
        acc[field.name] = contentData?.[field.name] || field.defaultValue || '';
        return acc;
    }, {}), [pageSchema.fields, contentData]);

    const form = useForm({
        defaultValues: defaultValues,
    });

    React.useEffect(() => {
        form.reset(defaultValues);
    }, [defaultValues, form]);
    
    const onSubmit = async (values: any) => {
        if (!firestore) return;
        try {
            // Using setDoc with merge:true will create the document if it doesn't exist, or update it if it does.
            await setDoc(doc(firestore, 'pageContent', pageSchema.id), values, { merge: true });
            toast({ title: 'Content updated successfully!' });
            onSave();
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error updating content',
                description: (error as Error).message,
            });
        }
    };

    if (isLoading) return <div className="flex justify-center items-center h-48"><Loader2 className="h-8 w-8 animate-spin" /></div>;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-h-[60vh] overflow-y-auto pr-6">
                {pageSchema.fields.map((field) => (
                    <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name}
                        render={({ field: formField }) => (
                            <FormItem>
                                <FormLabel>{field.label}</FormLabel>
                                <FormControl>
                                    {field.type === 'textarea' ? (
                                        <Textarea {...formField} rows={5} />
                                    ) : (
                                        <Input {...formField} />
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                 <DialogFooter className="pr-6 pt-4 bg-background sticky bottom-0">
                    <DialogClose asChild><Button type="button" variant="secondary">Cancel</Button></DialogClose>
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {form.formState.isSubmitting ? 'Saving...' : 'Save Changes'}
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    );
}

function EditPageDialog({ pageSchema }: { pageSchema: PageSchema }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Edit {pageSchema.label}</DialogTitle>
                    <DialogDescription>
                        Make changes to the content of the {pageSchema.label} page. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <EditContentForm pageSchema={pageSchema} onSave={() => setIsOpen(false)} />
                </div>
            </DialogContent>
        </Dialog>
    );
}


export default function ContentAdminPage() {
    const allEditablePages = Object.values(contentSchemas);
    const allNavPages = navItems
        .filter(item => item.href && !item.href.startsWith('/admin') && !['/community', '/login', '/news', '/resources', '/solutions', '/services'].includes(item.href))
        .map(item => ({
            id: item.href.substring(1) || 'home',
            label: item.name,
            href: item.href,
            description: `Manage content for the ${item.name} page.`
        }));
    
    const displayedPages = allNavPages.map(page => {
        const editableSchema = allEditablePages.find(p => p.id === page.id);
        return editableSchema ? { ...page, isEditable: true, schema: editableSchema } : { ...page, isEditable: false };
    });

    return (
        <div className="space-y-8">
            <SectionTitle title="Page Content Management" description="Edit the content for the main pages of your website." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPages.map(page => (
                    <Card key={page.id}>
                        <CardHeader>
                            <CardTitle>{page.label}</CardTitle>
                            <CardDescription>{page.isEditable ? page.schema?.description : "No editable fields have been defined for this page yet."}</CardDescription>
                        </CardHeader>
                        <CardFooter className="gap-2">
                             <Button asChild variant="outline">
                                <Link href={page.href} target="_blank">Preview</Link>
                            </Button>
                            {page.isEditable ? <EditPageDialog pageSchema={page.schema!} /> : <Button disabled>Edit</Button>}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
