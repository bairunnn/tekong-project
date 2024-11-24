// import { renderNewMap } from './newmap.js';
import { homeView } from './default.js';
import { getAllMaps } from './firebase.js';

// gallery.js


function loadGalleryMode() {
    let contentPanel = document.getElementById('description-panel');
    contentPanel.innerHTML = `
        <div class="text-left mb-2" id="galleryIcon">
            <div id="gallery-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
                    <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </div>
        </div>
        <h3><span style="font-size: 1.3em;">Gallery view</span></h3>
        <p>Explore map submissions from other people here!</b></p>
        
        <!-- Search Bar Section -->
        <div class="input-group mb-3" id="search-bar-container">
            <input type="text" class="form-control" placeholder="Search titles..." id="search-bar" aria-label="Search titles" aria-describedby="search-button">
            <button class="btn btn-outline-secondary" type="button" id="search-button">Search</button>
        </div>

        <!-- Scrollable Titles Section -->
        <div class="scrollable-titles-container" style="overflow-y: auto; border: 1px solid #ddd; padding: 10px; margin-bottom: 15px;">
            <ul id="titles-list" style="list-style: none; padding: 0; margin: 0;">
                <li>Loading titles...</li>
            </ul>
        </div>

        <p>Description of selected map:</p>

        <!-- Description Section -->
        <div id="map-description" class="scrollable-description-container">
            <!-- Description will be injected here -->
        </div>

        <!-- Back Icon Section -->
        <div class="d-flex align-items-center mt-3" id="back-icon-section">
            <i class="bi bi-arrow-left-circle-fill" style="font-size: 1.5em; cursor: pointer; margin-right: 10px;"></i>
            <span style="font-size: 1.1em; cursor: pointer;" id="return-home">Return to home</span>
        </div>
    `;

    // Fetch titles from Firestore using the mapsData object
    const titlesList = document.getElementById('titles-list');
    const searchBar = document.getElementById('search-bar');
    const mapDescription = document.getElementById('map-description'); // Element to display the description

    // Assuming `mapsData` is the object with map information including colors and description
    async function fetchTitles() {
        const titlesList = document.getElementById('titles-list');
        titlesList.innerHTML = '<li>Loading titles...</li>'; // Show loading message while fetching

        try {
            // Get all maps from Firestore
            const mapsData = await getAllMaps(); // Fetch all map documents

            // Clear the loading message
            titlesList.innerHTML = '';

            const mapEntries = Object.entries(mapsData); // Convert mapsData object to an array of [key, value] pairs

            if (mapEntries.length === 0) {
                titlesList.innerHTML = '<li>No titles found.</li>';
            } else {
                // Iterate through all the maps (from mapEntries)
                mapEntries.forEach(([docId, map]) => {
                    const title = map.title; // Assuming each map has a 'title' field

                    if (title) {
                        // Create a list item for each title
                        const listItem = document.createElement('li');
                        listItem.textContent = title;
                        listItem.style.cursor = 'pointer';
                        listItem.style.marginBottom = '5px';

                        // Add a click handler to show map description and update localStorage colors
                        listItem.addEventListener('click', () => {
                            console.log(`Title clicked: ${title}`);
                        
                            // Display the description of the selected map
                            mapDescription.innerHTML = map.description || 'No description available for this map.';
                        
                            // Override localStorage with colors from the selected map
                            const mapColors = map.colors; // Assuming `colors` is an object like { A1: '#color', A2: '#color', ... }
                        
                            // Iterate over the keys (A1, A2, ...) and update localStorage
                            for (let i = 1; i <= 50; i++) {
                                const polygonKey = `A${i}`;
                                if (mapColors[polygonKey]) {
                                    // Set the localStorage color for the polygon (A1, A2, A50, etc.)
                                    localStorage.setItem(`colour${polygonKey}`, mapColors[polygonKey]);
                                }
                            }
                        
                            // Optionally log the updated localStorage to verify
                            console.log('Updated colors in localStorage:');
                            for (let i = 1; i <= 50; i++) {
                                const polygonKey = `A${i}`;
                                console.log(`${polygonKey}: ${localStorage.getItem(`colour${polygonKey}`)}`);
                            }

                            // Re-render map layer A-grid-20241116-3 with new colors
                            renderMapLayer();

                            // Highlight the selected row
                            highlightSelectedRow(listItem);
                        });

                        titlesList.appendChild(listItem);
                    }
                });

                
            }
        } catch (error) {
            console.error('Error fetching titles:', error);
            titlesList.innerHTML = '<li>Error loading titles.</li>';
        }
    }

    // Call the function to load titles when needed
    fetchTitles();

    // "Return to home" functionality
    document.getElementById('back-icon-section').addEventListener('click', () => {
        // Clear and load the default view
        homeView();
    });
}

function renderMapLayer() {
    // Assuming you have a reference to the Mapbox map instance as `map`
    const polygonsLayer = 'A-grid-20241116-3'; // The layer you want to update

    // Iterate over the polygons in the layer and update their colors based on localStorage
    map.setPaintProperty(polygonsLayer, 'fill-color', [
        'match',
        ['get', 'Name'],
        ...Array.from({ length: 50 }, (_, i) => {
            const polygonKey = `A${i + 1}`;
            const color = localStorage.getItem(`colour${polygonKey}`);
            return [polygonKey, color || '#FFFFFF']; // Default to white if no color is set
        }).flat(),
        '#FFFFFF', // Default color if no match
    ]);
}

function highlightSelectedRow(selectedRow) {
    const rows = document.querySelectorAll('#titles-list li');
    
    // Remove highlight from all rows
    rows.forEach(row => {
        row.style.backgroundColor = ''; // Reset background color
    });

    // Highlight the selected row
    selectedRow.style.backgroundColor = '#e6e4de'; // Highlight the selected row
}

export { loadGalleryMode };