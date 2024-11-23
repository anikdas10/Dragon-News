
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAqTyd-_7zvr-xOYzOGJXMamO-9xWbEABM",
  authDomain: "dragon-news-f1e04.firebaseapp.com",
  projectId: "dragon-news-f1e04",
  storageBucket: "dragon-news-f1e04.firebasestorage.app",
  messagingSenderId: "91416654223",
  appId: "1:91416654223:web:a8a5ea2ad123a36cc09bfa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
