import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  
  apiKey: "AIzaSyDU6_Qhc9Kmw1y1iMj5t33Fct2YOohZTQ8",
  authDomain: "vinylstore-coderhouse.firebaseapp.com",
  projectId: "vinylstore-coderhouse",
  storageBucket: "vinylstore-coderhouse.appspot.com",
  messagingSenderId: "578440717175",
  appId: "1:578440717175:web:85f78edeff372ff5a1f772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);