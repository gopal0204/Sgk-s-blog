// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sgk-blog.firebaseapp.com",
  projectId: "sgk-blog",
  storageBucket: "sgk-blog.appspot.com",
  messagingSenderId: "566149781861",
  appId: "1:566149781861:web:d5672b7e7bf70151bae98c",
  measurementId: "G-ZMQ650Y2Z2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);