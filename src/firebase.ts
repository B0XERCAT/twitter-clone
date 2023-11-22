import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzZrt9yTY2kGUeyO1a1GdJQB1ZLxcOh-c",
  authDomain: "twitter-clone-8e025.firebaseapp.com",
  projectId: "twitter-clone-8e025",
  storageBucket: "twitter-clone-8e025.appspot.com",
  messagingSenderId: "104706424757",
  appId: "1:104706424757:web:7da34f130faec10e7423fc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app)
export const db = getFirestore(app);