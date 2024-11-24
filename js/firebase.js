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

// Handle form submission in the modal after user clicks "Confirm upload"
async function handleConfirmUpload() {
    // Get user input from the modal form
    const userMapTitle = document.getElementById("mapTitle").value;
    const userDescription = document.getElementById("mapDescription").value;
    const userAuthor = document.getElementById("mapAuthor").value;

    // Validate user input
    if (!userMapTitle || !userDescription || !userAuthor) {
        alert("Please fill in all fields: Title, Description, and Author.");
        return;
    }

    // Prepare the map data to upload to Firebase
    const mapData = {
        title: userMapTitle,
        description: userDescription,
        author: userAuthor,
        colors: {} // Object to store polygon colors
    };

    // Fetch polygon colors from localStorage and add to mapData
    for (let i = 1; i <= 50; i++) {
        const polygonKey = `A${i}`;
        mapData.colors[polygonKey] = localStorage.getItem(`colour${polygonKey}`) || "#f4f2ec"; // Default color
    }

    try {
        // Upload map data to Firestore
        const docRef = await addDoc(collection(db, "maps"), mapData);

        // Notify the user that the map was successfully uploaded
        alert(`Map uploaded successfully! Document ID: ${docRef.id}`);

        // Close the modal after upload
        uploadModal.hide();
    } catch (error) {
        // Handle errors
        console.error("Error uploading map: ", error);
        alert("Failed to upload the map. Please try again.");
    }
}

// Add event listener to the "Confirm upload" button inside the modal
document.getElementById("confirmUpload").addEventListener("click", handleConfirmUpload);

// Export Firestore database and utility functions
export { db };