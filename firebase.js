// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_bWYaU5XHb1NCRFahmzadQFAdM6LwGxY",
  authDomain: "elakkia-bank.firebaseapp.com",
  projectId: "elakkia-bank",
  storageBucket: "elakkia-bank.appspot.com",
  messagingSenderId: "529530808732",
  appId: "1:529530808732:web:e287f547effc94e27ac059",
  measurementId: "G-JEBCE3QL4D"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, doc, setDoc,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,fetchSignInMethodsForEmail };