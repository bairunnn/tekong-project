import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "...",
    authDomain: "tekong-project.firebaseapp.com",
    projectId: "tekong-project",
    storageBucket: "tekong-project.firebasestorage.app",
    messagingSenderId: "732158714164",
    appId: "1:732158714164:web:3abc7d443ed6c20f5b8561"
  };

const app = initializeApp(firebaseConfig);
const db = firebase.firestore(app);

window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;

export { app, db };