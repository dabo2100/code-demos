import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBeWbDZpOSL1M7yNAwF9Fe_gD92zAW0ENo",
  authDomain: "g435-14d76.firebaseapp.com",
  projectId: "g435-14d76",
  storageBucket: "g435-14d76.firebasestorage.app",
  messagingSenderId: "787608378451",
  appId: "1:787608378451:web:fc55b5bf1ac662461e7aa6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
