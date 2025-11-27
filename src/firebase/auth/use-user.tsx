'use client';
import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth } from '@/firebase';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsUserLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { user, isUserLoading, userError: null };
}
