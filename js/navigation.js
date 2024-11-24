import { loadCreativeMode } from './creative.js';

// navigation.js

// Event listener for the "creative-mode-btn"
document.getElementById('creative-mode-btn').addEventListener('click', () => {
    // Clear the content of the description-panel
    let contentPanel = document.getElementById('description-panel');
    contentPanel.innerHTML = '';  // This clears the current content

    // Run the function from creative.js to populate the description-panel with Creative Mode content
    loadCreativeMode();
});

function assignHomeViewListeners() {
    // Event listener for the "creative-mode-btn"
    document.getElementById('creative-mode-btn').addEventListener('click', () => {
        let contentPanel = document.getElementById('description-panel');
        contentPanel.innerHTML = ''; // Clear the current content
        loadCreativeMode();          // Load the creative mode
    });

    document.getElementById('hdb-image').addEventListener('click', function() {
        alert("This interactive web app is not affiliated with the Urban Redevelopment Authority, the Housing & Development Board, nor with the Government of Singapore.\nFor legal purposes, none of the information here reflects the planning intention of the Government. Please refer to the adopted Master Plan.\nFor education only!!\nbairun@upenn.edu");
    });

    // Event listeners for other buttons (if required)
    // document.getElementById('explore-ideas-btn').addEventListener('click', () => { ... });
    // document.getElementById('history-btn').addEventListener('click', () => { ... });
}

export { assignHomeViewListeners };