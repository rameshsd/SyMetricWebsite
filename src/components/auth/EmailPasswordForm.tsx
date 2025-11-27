'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth, initiateEmailSignIn, initiateEmailSignUp } from '@/firebase';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FirebaseError } from 'firebase/app';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

interface EmailPasswordFormProps {
    onLoginSuccess: () => void;
}

export function EmailPasswordForm({ onLoginSuccess }: EmailPasswordFormProps) {
  const auth = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError(null);
    setIsSubmitting(true);
    try {
      await initiateEmailSignIn(auth, values.email, values.password);
      onLoginSuccess();
    } catch (error: any) {
        if (error instanceof FirebaseError && error.code === 'auth/user-not-found') {
            // If user not found, try to sign them up
            try {
                await initiateEmailSignUp(auth, values.email, values.password);
                onLoginSuccess();
            } catch (signUpError: any) {
                setError(signUpError.message || 'An unexpected error occurred during sign up.');
            }
        } else if (error instanceof FirebaseError && error.code === 'auth/wrong-password') {
            setError('Wrong password. Please try again.');
        }
        else {
            setError(error.message || 'An unexpected error occurred.');
        }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {error && (
            <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
           {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
           {isSubmitting ? 'Processing...' : 'Continue with Email'}
        </Button>
      </form>
    </Form>
  );
}
