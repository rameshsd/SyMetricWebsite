
'use client';

import { useEffect } from 'react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && user) {
      router.push('/community');
    }
  }, [user, isUserLoading, router]);

  // The actual login form is now in the Navbar component's dialog.
  // This page just handles redirection.
  if (isUserLoading || user) {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
  }

  // If not loading and no user, the Navbar will show the login button.
  // We can show a simple message here or redirect to home.
  // For now, redirecting to home makes sense as login is globally accessible.
  useEffect(() => {
    if (!isUserLoading && !user) {
        router.push('/');
    }
  }, [isUserLoading, user, router]);

  return (
    <div className="flex h-screen items-center justify-center">
        <p>Redirecting to login...</p>
        <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
