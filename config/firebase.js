// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDdwL668qChQBeq72LJNd2BP5eft4Ocrsc",
    authDomain: "facelookpro-58baf.firebaseapp.com",
    projectId: "facelookpro-58baf",
    storageBucket: "facelookpro-58baf.appspot.com",
    messagingSenderId: "619613280552",
    appId: "1:619613280552:web:75da619153ba703911d81d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)