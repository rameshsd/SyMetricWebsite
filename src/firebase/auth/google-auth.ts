'use client';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/firebase';

const provider = new GoogleAuthProvider();

export async function initiateGoogleSignIn() {
    return await signInWithPopup(auth, provider);
}
