import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDvD2N4se69uhpib-JkpJXDiWgSses6r0I",

  authDomain: "asape-59d17.firebaseapp.com",

  projectId: "asape-59d17",

  storageBucket: "asape-59d17.firebasestorage.app",

  messagingSenderId: "904733086175",

  appId: "1:904733086175:web:103438701a26d2b921746a",

  measurementId: "G-8FDG2KL963"

};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()