// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL2RMjup6NGpoPCg_6xDpaG1XfJtyDQg4",
    authDomain: "uas-umn.firebaseapp.com",
    projectId: "uas-umn",
    storageBucket: "uas-umn.appspot.com",
    messagingSenderId: "263665686529",
    appId: "1:263665686529:web:b52f4500bb7597c30b8800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;