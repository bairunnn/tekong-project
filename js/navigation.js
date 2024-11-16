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

    // Event listeners for other buttons (if required)
    // document.getElementById('explore-ideas-btn').addEventListener('click', () => { ... });
    // document.getElementById('history-btn').addEventListener('click', () => { ... });
}