import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBlvJXfSc5uD_4rGjqxm03ShG4QhewOHJU",
    authDomain: "chat-22-a4813.firebaseapp.com",
    projectId: "chat-22-a4813",
    storageBucket: "chat-22-a4813.appspot.com",
    messagingSenderId: "484855114616",
    appId: "1:484855114616:web:53ef231c0350d6c986768d",
    measurementId: "G-M8VZE4Z9RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();