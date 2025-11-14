'use client';
import {
  Auth, // Import Auth type for type hinting
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // Assume getAuth and app are initialized elsewhere
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  // CRITICAL: Call signInAnonymously directly. Do NOT use 'await signInAnonymously(...)'.
  signInAnonymously(authInstance);
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}

/** Initiate email/password sign-up (non-blocking). */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string): void {
  // CRITICAL: Call createUserWithEmailAndPassword directly. Do NOT use 'await createUserWithEmailAndPassword(...)'.
  createUserWithEmailAndPassword(authInstance, email, password);
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}

/** Initiate email/password sign-in (non-blocking), with automatic sign-up. */
export function initiateEmailSignIn(authInstance: Auth, email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(authInstance, email, password)
            .then(userCredential => {
                // Sign-in successful.
                resolve();
            })
            .catch((error: FirebaseError) => {
                if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
                    // If user does not exist, create a new account.
                    createUserWithEmailAndPassword(authInstance, email, password)
                        .then(userCredential => {
                            // Account created and signed in.
                            resolve();
                        })
                        .catch(creationError => {
                            // Handle errors during account creation (e.g., weak password).
                            console.error("Account creation failed:", creationError);
                            reject(creationError);
                        });
                } else {
                    // Handle other errors (e.g., wrong password, network issues).
                    console.error("Sign-in failed:", error);
                    reject(error);
                }
            });
    });
}
