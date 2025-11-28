
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth, initiateGoogleSignIn, useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { EmailPasswordForm } from '@/components/auth/EmailPasswordForm';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LoginPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && user) {
      router.push('/community');
    }
  }, [user, isUserLoading, router]);

  const handleGoogleSignIn = async () => {
    try {
      await initiateGoogleSignIn();
      router.push('/community');
    } catch (error) {
      console.error("Google Sign-in failed:", error);
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
  
  const loginImage = PlaceHolderImages.find(p => p.id === 'why-us-sso');

  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2 xl:min-h-[calc(100vh-4rem)]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
           <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Welcome</CardTitle>
                <CardDescription>Sign in or create an account to join the community.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
                   <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.2 64.5C308.6 102.3 279.2 88 248 88c-73.2 0-132.3 59.2-132.3 132.3s59.1 132.3 132.3 132.3c76.9 0 111.2-51.8 115.7-77.9H248v-62h239.5c.3 12.7.6 24.9.6 37.8z"></path></svg>
                  Sign in with Google
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <EmailPasswordForm onLoginSuccess={handleLoginSuccess} />
              </CardContent>
           </Card>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {loginImage && (
            <Image
                src={loginImage.imageUrl}
                alt="Login image"
                width="1920"
                height="1080"
                className="h-full w-full object-cover dark:brightness-[0.4]"
                data-ai-hint={loginImage.imageHint}
            />
        )}
      </div>
    </div>
  );
}
