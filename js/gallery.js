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
        <p>Welcome to the map gallery. Explore map submissions from other people here!</b></p>
        
        <!-- Scrollable Titles Section -->
        <div class="scrollable-titles-container" style="max-height: 200px; overflow-y: auto; border: 1px solid #ddd; padding: 10px; margin-bottom: 15px;">
            <ul id="titles-list" style="list-style: none; padding: 0; margin: 0;">
                <li>Loading titles...</li>
            </ul>
        </div>

        <!-- Back Icon Section -->
        <div class="d-flex align-items-center mt-3" id="back-icon-section">
            <i class="bi bi-arrow-left-circle-fill" style="font-size: 1.5em; cursor: pointer; margin-right: 10px;"></i>
            <span style="font-size: 1.1em; cursor: pointer;" id="return-home">Return to home</span>
        </div>
    `;

    // Fetch titles from Firestore using the mapsData object
    const titlesList = document.getElementById('titles-list');

    // Assuming `mapsData` is the object with map information including colors for Ax
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

                        // Add a click handler to override localStorage colors
                        listItem.addEventListener('click', () => {
                            console.log(`Title clicked: ${title}`);
                        
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
                        
                            // Refresh map with new colors
                            const polygonNames = [
                                "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
                                "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20",
                                "A21", "A22", "A23", "A24", "A25", "A26", "A27", "A28", "A29", "A30",
                                "A31", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A39", "A40",
                                "A41", "A42", "A43", "A44", "A45", "A46", "A47", "A48", "A49", "A50"
                            ];
                        
                            // Create an array of the colors for all polygons (re-render map)
                            const colorArray = polygonNames.map(polygon => {
                                return localStorage.getItem(`colour${polygon}`) || "#c300ba"; // Fallback to default color if not found
                            });
                        
                            // Ensure the map is loaded and the layer exists before setting paint properties
                            if (map.isStyleLoaded()) {
                                // Update the layer with the new colors for all polygons
                                map.setPaintProperty('A-grid-20241116-3', 'fill-color', [
                                    "match",
                                    ["get", "Name"], // get the 'Name' property from GeoJSON
                                    ...polygonNames.flatMap((polygon, index) => [polygon, colorArray[index]]), // Map polygon names to their colors
                                    "#c300ba" // default color if no match (fallback)
                                ]);
                            } else {
                                console.error("Map style not loaded yet");
                            }
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

export { loadGalleryMode };