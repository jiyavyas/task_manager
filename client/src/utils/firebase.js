// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-afc24.firebaseapp.com",
  projectId: "taskmanager-afc24",
  storageBucket: "taskmanager-afc24.firebasestorage.app",
  messagingSenderId: "805970465608",
  appId: "1:805970465608:web:fe7fc32fd95772f017197d",
  measurementId: "G-1GPCG3T973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Fix: export the app so it can be imported elsewhere
export { app };