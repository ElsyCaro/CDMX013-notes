import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAh9Xc7lfZjKjjq6iBabsIjeJXyFeDUjRI",
  authDomain: "notes-ideas.firebaseapp.com",
  projectId: "notes-ideas",
  storageBucket: "notes-ideas.appspot.com",
  messagingSenderId: "597461293485",
  appId: "1:597461293485:web:b093ffeb64f29b78732924"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
 export default db;