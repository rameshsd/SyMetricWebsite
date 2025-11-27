
'use client';
import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export async function initiateGoogleSignIn(auth: Auth) {
    return await signInWithPopup(auth, provider);
}
