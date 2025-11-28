'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth, useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';

export function AnalyticsTracker() {
  const auth = useAuth();
  const firestore = useFirestore();
  const pathname = usePathname();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (firestore && userId && !pathname.startsWith('/admin')) {
      const visitsCollection = collection(firestore, 'websiteVisits');
      addDocumentNonBlocking(visitsCollection, {
        userId: userId,
        path: pathname,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
      });
    }
  }, [firestore, userId, pathname]);

  return null; // This component does not render anything
}
