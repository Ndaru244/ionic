// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXg8yqF8akQIMEWcov1o72Jfvl5Zga0E0",
  authDomain: "tugas11-2a8ae.firebaseapp.com",
  projectId: "tugas11-2a8ae",
  storageBucket: "tugas11-2a8ae.appspot.com",
  messagingSenderId: "650161001584",
  appId: "1:650161001584:web:da7753ba2ae268a0d710b5",
  measurementId: "G-JDP7WBB1NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;