'use client';
import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export function initiateGoogleSignIn(auth: Auth) {
    return signInWithPopup(auth, provider);
}
