// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const project = process.env.NEXT_PUBLIC_FIREBASE_PROJECT
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: project +".firebaseapp.com",
    projectId: project,
    storageBucket: project + ".appspot.com",
    messagingSenderId: "655684127107",
    appId: "1:655684127107:web:3c193ba39a8790c2cc0eb6",
    measurementId: "G-M414R7NW3K",
};

export function createFirebaseApp() {
    try {
        return getApp();
    } catch {
        return initializeApp(firebaseConfig);
    }
}

// Initialize Firebase
export const app = createFirebaseApp()
export const auth = getAuth(app);
export const db = getFirestore(app);

export function logOut() {
    signOut(auth)
}

