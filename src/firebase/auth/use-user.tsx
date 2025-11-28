'use client';
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useFirebase } from "@/firebase/provider";
import type { User as FirebaseUser } from 'firebase/auth';

// Define a more specific user type if you have custom fields in Firestore
export interface AppUser extends FirebaseUser {
  // Add any custom properties from your 'users' collection here
  // For example: role?: string;
}

export interface UserHookResult {
  user: AppUser | null;
  isUserLoading: boolean;
}

export function useUser(): UserHookResult {
  const { authUser, isAuthLoading, firestore } = useFirebase();
  const [appUser, setAppUser] = useState<AppUser | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    // If the initial auth state is still loading, we are also loading.
    if (isAuthLoading) {
      setIsUserLoading(true);
      return;
    }

    // If there is no authenticated user, we are done loading and there is no user.
    if (!authUser) {
      setAppUser(null);
      setIsUserLoading(false);
      return;
    }

    // If there is an authenticated user, fetch their Firestore document.
    const fetchUserDoc = async () => {
      if (!firestore) {
        // Firestore might not be available yet, handle this case
        setIsUserLoading(false);
        setAppUser(authUser as AppUser); // Fallback to authUser
        return;
      }
      
      setIsUserLoading(true);
      const userDocRef = doc(firestore, "users", authUser.uid);
      try {
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          // Combine Firebase Auth user data with Firestore data
          setAppUser({
            ...authUser,
            ...userDoc.data(),
          } as AppUser);
        } else {
          // No custom document, just use the auth user data
          setAppUser(authUser as AppUser);
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
        setAppUser(authUser as AppUser); // Fallback to auth user on error
      } finally {
        setIsUserLoading(false);
      }
    };

    fetchUserDoc();
  }, [authUser, isAuthLoading, firestore]);

  return { user: appUser, isUserLoading };
}
