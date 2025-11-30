
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { countries } from '@/lib/data';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().min(2, { message: 'Company name is required.' }),
  countryCode: z.string(),
  phone: z.string().min(5, { message: 'Please enter a valid phone number.' }),
});

export function RequestDemoForm() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      countryCode: '+91',
      phone: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not connect to the database. Please try again later.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const leadsCollection = collection(firestore, 'demoRequests');
      await addDocumentNonBlocking(leadsCollection, {
        ...values,
        phone: `${values.countryCode} ${values.phone}`,
        status: 'New',
        createdAt: serverTimestamp(),
      });

      toast({
        title: 'Demo Request Sent!',
        description: "Thank you for your interest. We'll be in touch shortly to schedule your demo.",
      });

      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: (error as Error).message || 'Could not submit your request.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary" className="bg-green-400 text-black hover:bg-green-500">
            Schedule a live demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Request a Live Demo</DialogTitle>
              <DialogDescription>
                Fill out the form and a product expert will be in touch to schedule your personalized demo.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Company Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <div className="flex gap-2">
                    <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Code" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {countries.map(country => (
                                            <SelectItem key={`${country.code}-${country.name}`} value={country.dial_code}>
                                                {country.dial_code} ({country.code})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="w-2/3">
                                <FormControl>
                                <Input placeholder="Phone number" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
              </FormItem>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
