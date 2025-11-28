'use client';

import { useEffect } from 'react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { initiateGoogleSignIn, useAuth } from '@/firebase';
import { EmailPasswordForm } from '@/components/auth/EmailPasswordForm';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LoginPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const auth = useAuth();
  const heroImage = PlaceHolderImages.find((p) => p.id === 'about-hero');

  useEffect(() => {
    if (!isUserLoading && user) {
      router.push('/community');
    }
  }, [user, isUserLoading, router]);

  const handleGoogleSignIn = async () => {
    if (auth) {
      try {
        await initiateGoogleSignIn(auth);
        router.push('/community');
      } catch (error) {
        console.error("Google Sign-in failed:", error);
      }
    }
  };

  const handleLoginSuccess = () => {
    router.push('/community');
  };

  if (isUserLoading || user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2 xl:min-h-[calc(100vh-4rem)]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                 <EmailPasswordForm onLoginSuccess={handleLoginSuccess} />
                <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
                   <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.2 64.5C308.6 102.3 279.2 88 248 88c-73.2 0-132.3 59.2-132.3 132.3s59.1 132.3 132.3 132.3c76.9 0 111.2-51.8 115.7-77.9H248v-62h239.5c.3 12.7.6 24.9.6 37.8z"></path></svg>
                  Login with Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {heroImage &&
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        }
      </div>
    </div>
  );
}