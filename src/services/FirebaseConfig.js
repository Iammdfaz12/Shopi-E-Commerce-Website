import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  //   authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: import.meta.env.VITE_APP_FIREBASE_APp_ID,
  //   measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyCiR4smzzTk0yhlkdDsgrGGbltonVsPYYU",
  authDomain: "shopi-e-commerce.firebaseapp.com",
  projectId: "shopi-e-commerce",
  storageBucket: "shopi-e-commerce.firebasestorage.app",
  messagingSenderId: "1041697149305",
  appId: "1:1041697149305:web:0257f27eaa0a2414b61fa8",
  measurementId: "G-Q0JP4DHFR2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
