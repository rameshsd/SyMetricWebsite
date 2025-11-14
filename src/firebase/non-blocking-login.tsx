'use client';
import {
  Auth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  signInAnonymously(authInstance);
}

/** Initiate email/password sign-up (non-blocking). */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string): void {
  createUserWithEmailAndPassword(authInstance, email, password);
}

/** Initiate email/password sign-in (non-blocking), with automatic sign-up. */
export function initiateEmailSignIn(authInstance: Auth, email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(authInstance, email, password)
            .then(userCredential => {
                resolve();
            })
            .catch((error: FirebaseError) => {
                if (error.code === 'auth/user-not-found') {
                    createUserWithEmailAndPassword(authInstance, email, password)
                        .then(userCredential => {
                            resolve();
                        })
                        .catch(creationError => {
                            console.error("Account creation failed:", creationError);
                            reject(creationError);
                        });
                } else if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                    // Reject with the specific error for wrong password
                    reject(error);
                } else {
                    console.error("Sign-in failed:", error);
                    reject(error);
                }
            });
    });
}

/** Initiate Google Sign-In using a popup. */
export async function initiateGoogleSignIn(authInstance: Auth): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(authInstance, provider);
    } catch (error) {
        console.error("Google Sign-in failed:", error);
        throw error;
    }
}
