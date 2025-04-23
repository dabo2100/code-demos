// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-9xBNErE7PbxrN_hRObLK_ey6GngC2hg",
    authDomain: "bootcamp-fde08.firebaseapp.com",
    projectId: "bootcamp-fde08",
    storageBucket: "bootcamp-fde08.firebasestorage.app",
    messagingSenderId: "854243685520",
    appId: "1:854243685520:web:abf756b2bd1b801b3ed415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);