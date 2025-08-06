// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArRT2hfLpefhG34sOo4zQ_szCP86hopkY",
  authDomain: "flimcutt-demo.firebaseapp.com",
  projectId: "flimcutt-demo",
  storageBucket: "flimcutt-demo.firebasestorage.app",
  messagingSenderId: "973696652922",
  appId: "1:973696652922:web:9fa7ad196b3d30b9a88dc3",
  measurementId: "G-NZ077JSG2S"
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };