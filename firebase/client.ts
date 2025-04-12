// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOYOFKmMb-I7edt3SOBn0ZePyhIFH7WOM",
    authDomain: "prepwise-56867.firebaseapp.com",
    projectId: "prepwise-56867",
    storageBucket: "prepwise-56867.firebasestorage.app",
    messagingSenderId: "215066655218",
    appId: "1:215066655218:web:1a1d6b4be24f2e8ba3d36b",
    measurementId: "G-S5E6FVFPMM"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);