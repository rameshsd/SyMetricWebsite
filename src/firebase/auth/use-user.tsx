'use client';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase";
import type { User } from 'firebase/auth';

export interface UserHookResult {
  user: User | null;
  isUserLoading: boolean;
}

export function useUser(): UserHookResult {
  const [user, setUser] = useState<User | any | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch Firestore USER DOCUMENT
        const userDoc = await getDoc(doc(firestore, "users", firebaseUser.uid));

        if (userDoc.exists()) {
          setUser({
            uid: firebaseUser.uid,
            displayName: firebaseUser.displayName || userDoc.data().name,
            email: firebaseUser.email,
            photoURL: firebaseUser.photoURL,
            ...userDoc.data(),
          });
        } else {
          setUser(firebaseUser);
        }
      } else {
        setUser(null);
      }
      setIsUserLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, isUserLoading };
}
