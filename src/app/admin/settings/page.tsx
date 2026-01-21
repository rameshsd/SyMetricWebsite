
'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useFirestore, useDoc, setDocumentNonBlocking, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import type { SmtpConfiguration } from '@/lib/types';
import { Loader2 } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription as AlertDesc } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  smtpHost: z.string().min(1, 'SMTP Host is required.'),
  smtpPort: z.coerce.number().min(1, 'SMTP Port is required.'),
  smtpUser: z.string().email({message: "Please enter a valid email."}).min(1, 'SMTP User is required.'),
  smtpPass: z.string().min(1, 'SMTP Password or App Password is required.'),
  emailTo: z.string().email({message: "Please enter a valid email."}).min(1, 'Recipient email is required.'),
});

export default function SettingsPage() {
    const { toast } = useToast();
    const firestore = useFirestore();
    
    const smtpConfigRef = useMemoFirebase(() => firestore ? doc(firestore, 'configuration', 'smtp') : null, [firestore]);
    const { data: smtpConfig, isLoading } = useDoc<SmtpConfiguration>(smtpConfigRef);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            smtpHost: '',
            smtpPort: 587,
            smtpUser: '',
            smtpPass: '',
            emailTo: '',
        },
    });

    useEffect(() => {
        if (smtpConfig) {
            form.reset(smtpConfig);
        }
    }, [smtpConfig, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!firestore) return;
        try {
            await setDocumentNonBlocking(doc(firestore, 'configuration', 'smtp'), values, { merge: true });
            toast({
                title: "Settings Saved!",
                description: "Your SMTP settings have been updated.",
            });
        } catch(error) {
            toast({
                variant: 'destructive',
                title: "Error saving settings",
                description: (error as Error).message,
            });
        }
    };

    return (
        <div className="space-y-8">
            <SectionTitle title="Email Configuration" description="Configure SMTP settings for email notifications." />
            
            <Alert variant="destructive" className="max-w-4xl">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Security Warning</AlertTitle>
              <AlertDesc>
                Storing SMTP credentials in the database is not recommended for production environments. For maximum security, please use environment variables.
              </AlertDesc>
            </Alert>
            
            <Card className="max-w-2xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardHeader>
                            <CardTitle>SMTP Settings</CardTitle>
                            <CardDescription>
                                These settings will be used to send emails for contact forms and demo requests.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-48">
                                    <Loader2 className="h-8 w-8 animate-spin" />
                                </div>
                            ) : (
                                <>
                                    <FormField name="smtpHost" control={form.control} render={({field}) => (
                                        <FormItem>
                                            <FormLabel>SMTP Host</FormLabel>
                                            <FormControl><Input {...field} placeholder="e.g., smtp.gmail.com" /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                    <FormField name="smtpPort" control={form.control} render={({field}) => (
                                        <FormItem>
                                            <FormLabel>SMTP Port</FormLabel>
                                            <FormControl><Input type="number" {...field} placeholder="e.g., 587" /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                    <FormField name="smtpUser" control={form.control} render={({field}) => (
                                        <FormItem>
                                            <FormLabel>SMTP User (Email)</FormLabel>
                                            <FormControl><Input {...field} placeholder="your-email@example.com" /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                     <FormField name="smtpPass" control={form.control} render={({field}) => (
                                        <FormItem>
                                            <FormLabel>SMTP Password / App Password</FormLabel>
                                            <FormControl><Input type="password" {...field} placeholder="Enter your password or app password" /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                     <FormField name="emailTo" control={form.control} render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Recipient Email</FormLabel>
                                            <FormControl><Input {...field} placeholder="recipient@example.com" /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                </>
                            )}
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" disabled={form.formState.isSubmitting || isLoading}>
                                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {form.formState.isSubmitting ? 'Saving...' : 'Save Settings'}
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    );
}
