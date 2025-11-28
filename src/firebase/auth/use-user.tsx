
'use client';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase";
import type { User } from 'firebase/auth';
import { useFirebase } from "../provider";

export interface UserHookResult {
  user: User | null;
  isUserLoading: boolean;
}

export function useUser(): UserHookResult {
  const { user: authUser, isUserLoading: isAuthLoading } = useFirebase();
  const [user, setUser] = useState<User | null>(authUser);
  const [isUserLoading, setIsUserLoading] = useState(isAuthLoading);

  useEffect(() => {
    if (isAuthLoading) {
      setIsUserLoading(true);
      return;
    }

    if (!authUser) {
      setUser(null);
      setIsUserLoading(false);
      return;
    }

    const fetchUserDoc = async () => {
      setIsUserLoading(true);
      const userDocRef = doc(firestore, "users", authUser.uid);
      try {
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUser({
            ...authUser,
            ...userDoc.data(),
          } as User);
        } else {
          setUser(authUser);
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
        setUser(authUser); // Fallback to auth user
      } finally {
        setIsUserLoading(false);
      }
    };

    fetchUserDoc();
  }, [authUser, isAuthLoading]);

  return { user, isUserLoading };
}
