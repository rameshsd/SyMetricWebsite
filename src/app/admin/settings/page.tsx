'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';

const formSchema = z.object({
  smtpHost: z.string().min(1, 'SMTP Host is required.'),
  smtpPort: z.coerce.number().min(1, 'SMTP Port is required.'),
  smtpUser: z.string().email('Please enter a valid email.'),
  smtpPass: z.string().min(1, 'SMTP Password or App Password is required.'),
  emailTo: z.string().email('Please enter a valid recipient email.'),
});

export default function SettingsPage() {
    const { toast } = useToast();
    const [generatedEnv, setGeneratedEnv] = useState('');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            smtpHost: 'smtp.gmail.com',
            smtpPort: 587,
            smtpUser: '',
            smtpPass: '',
            emailTo: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const envContent = `
SMTP_HOST=${values.smtpHost}
SMTP_PORT=${values.smtpPort}
SMTP_USER=${values.smtpUser}
SMTP_PASS=${values.smtpPass}
EMAIL_TO=${values.emailTo}
        `.trim();
        setGeneratedEnv(envContent);
        toast({
            title: "Configuration Generated",
            description: "Copy the environment variables below and add them to your project.",
        })
    }

    const copyToClipboard = () => {
        if (generatedEnv) {
            navigator.clipboard.writeText(generatedEnv);
            toast({ title: "Copied to clipboard!" });
        }
    }

    return (
        <div className="space-y-8">
            <SectionTitle title="Email Settings" description="Configure SMTP settings for email notifications." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <Card>
                     <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <CardHeader>
                                <CardTitle>SMTP Configuration</CardTitle>
                                <CardDescription>
                                    Enter your SMTP details below to generate the necessary environment configuration. 
                                    For security, these settings are not saved in the database.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
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
                                        <FormControl><Input type="password" {...field} /></FormControl>
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
                            </CardContent>
                            <CardFooter>
                                <Button type="submit">Generate Configuration</Button>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Configuration</CardTitle>
                             <CardDescription>
                                After generating, copy this content into a <code>.env.local</code> file at the root of your project, then restart your server.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {generatedEnv ? (
                                <div>
                                    <div className="p-4 bg-muted rounded-md text-sm text-muted-foreground font-mono whitespace-pre-wrap overflow-x-auto relative">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute top-2 right-2 h-7 w-7"
                                            onClick={copyToClipboard}
                                        >
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                        <code>
                                            {generatedEnv}
                                        </code>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-sm text-muted-foreground italic p-4 border-dashed border rounded-md text-center">
                                    Fill out and submit the form to generate your environment variables.
                                </div>
                            )}
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Using Gmail?</CardTitle>
                        </CardHeader>
                         <CardContent>
                             <p className="text-sm text-muted-foreground">
                                If you are using a Gmail account, you will need to generate an "App Password" to use for the `SMTP_PASS` field. You can find instructions on how to do that in your Google Account security settings under "2-Step Verification".
                            </p>
                         </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
