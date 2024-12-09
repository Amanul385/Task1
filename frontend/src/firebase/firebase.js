import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsixWy_58sWjabXsoAJjFE7W26yoCOh1I",
    authDomain: "task1-d28e4.firebaseapp.com",
    projectId: "task1-d28e4",
    storageBucket: "task1-d28e4.firebasestorage.app",
    messagingSenderId: "1028509294095",
    appId: "1:1028509294095:web:fe872016d9a2a12f070d7a",
    measurementId: "G-HN82R3P5ZR"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };