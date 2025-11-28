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
  const [user, setUser] = useState<User | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDocRef = doc(firestore, "users", firebaseUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUser({
            ...firebaseUser,
            ...userDoc.data(),
          } as User);
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
