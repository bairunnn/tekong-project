// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFkkX5OcKFbxAsliQGmWBlLFe6fABBSvM",
  authDomain: "tekong-project.firebaseapp.com",
  projectId: "tekong-project",
  storageBucket: "tekong-project.firebasestorage.app",
  messagingSenderId: "732158714164",
  appId: "1:732158714164:web:3abc7d443ed6c20f5b8561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to upload the map
async function uploadMap() {
    // Prompt the user for a title and description
    const userMapTitle = prompt("Enter a title for your map:");
    const userDescription = prompt("Enter a description for your map:");

    // Check if the user provided the required inputs
    if (!userMapTitle || !userDescription) {
        alert("Both title and description are required to upload the map.");
        return;
    }

    // Prepare the data to upload
    const mapData = {
        title: userMapTitle,
        description: userDescription,
        colors: {} // Object to store polygon colors
    };

    // Fetch polygon colors from localStorage and add to mapData
    for (let i = 1; i <= 50; i++) {
        const polygonKey = `A${i}`;
        mapData.colors[polygonKey] = localStorage.getItem(`colour${polygonKey}`) || "#f4f2ec"; // Default to '#f4f2ec' if not set
    }

    try {
        // Write data to the Firestore "maps" collection
        const docRef = await addDoc(collection(db, "maps"), mapData);

        // Notify the user of successful upload
        alert(`Map uploaded successfully! Document ID: ${docRef.id}`);
    } catch (error) {
        // Handle errors
        console.error("Error uploading map: ", error);
        alert("Failed to upload the map. Please try again.");
    }
}

// Export the Firestore database and utility functions
export { db, uploadMap };