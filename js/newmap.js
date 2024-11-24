let activeButton = null;  // Track the currently active button

function renderNewMap() {
    // Create the color-palette container
    const colorPalette = document.createElement("div");
    colorPalette.id = "color-palette"; // All styles are now handled in CSS

    const header = document.createElement("h3");
    header.textContent = "Select a category below to add to map";  // Set the header text
    header.style.textAlign = "center";  // Center the header text
    header.style.marginBottom = "10px"; // Space below the header
    header.style.fontSize = "1.1rem"; // Set a font size for the header
    header.style.fontWeight = "bold"; // Make the header text bold

    // Append the header to the color palette
    colorPalette.appendChild(header);

    // Define the zoning categories and their corresponding colors and cursor files
    const zoningMap = {
        "C": { name: "Commercial (offices & retail)", color: "#215297", cursor: "./assets/images/brush-palette/C.cur" },
        "E": { name: "Education", color: "#f4f2c1", cursor: "./assets/images/brush-palette/E.cur" },
        "H": { name: "Housing", color: "#f6bb81", cursor: "./assets/images/brush-palette/H.cur" },
        "L": { name: "Light industry", color: "#c8a5cf", cursor: "./assets/images/brush-palette/L.cur" },
        "M": { name: "Military (special uses)", color: "#516702", cursor: "./assets/images/brush-palette/M.cur" },
        "O": { name: "Open space (forest)", color: "#abb20c", cursor: "./assets/images/brush-palette/O.cur" },
        "P": { name: "Park", color: "#1ea33a", cursor: "./assets/images/brush-palette/P.cur" },
        "S": { name: "Sports", color: "#a3d49d", cursor: "./assets/images/brush-palette/S.cur" },
        "W": { name: "Waterbody", color: "#bedef3", cursor: "./assets/images/brush-palette/W.cur" }
    };

    // Add buttons for each zoning category
    Object.keys(zoningMap).forEach(zone => {
        const button = document.createElement("button");
        button.textContent = zoningMap[zone].name;  // Use full name
        button.classList.add("btn", "mb-2"); // Add classes for vertical layout
        button.style.marginBottom = "8px"; // Space between buttons
        button.style.backgroundColor = zoningMap[zone].color; // Set the background color
        button.style.fontWeight = "600"; // Make text semibold
        button.style.width = "100%"; // Make buttons take up the full width of the parent container
        button.style.border = "none"; // Remove button border

        // Set text color for specific zones
        if (zone === "E" || zone === "H" || zone === "S" || zone === "W") {
            button.style.color = "#000"; // Set text color to black for E, H, S, W
        } else {
            button.style.color = "#fff"; // Default text color is white
        }

        // Add an action for the button to change cursor and update active button color
        button.onclick = function() {
            // If there is an active button, restore its original color
            if (activeButton && activeButton !== button) {
                activeButton.style.backgroundColor = zoningMap[activeButton.dataset.zone].color; // Restore original color
            }

            // Darken the current button
            button.style.backgroundColor = darkenColor(zoningMap[zone].color, 30); // Darken by 20%

            // Set the current button as active
            activeButton = button;
            activeButton.dataset.zone = zone; // Store the zone in a custom data attribute

            // Change the cursor globally
            document.body.style.cursor = `url(${zoningMap[zone].cursor}), auto`; // Change the cursor

            // Override cursor style for Mapbox container
            const mapContainer = document.getElementById('map');
            mapContainer.style.cursor = `url(${zoningMap[zone].cursor}), auto`;

            // Update the cursor for the map on mousemove
            map.on('mousemove', () => {
                map.getCanvas().style.cursor = `url(${zoningMap[zone].cursor}), auto`;
            });

            console.log(`Button for ${zoningMap[zone].name} clicked`);
            console.log(`Active button color: ${zoningMap[zone].color}`);
        };

        // Append the button to the color-palette
        colorPalette.appendChild(button);
    });

    // Append the color-palette to the map container
    const mapContainer = document.getElementById("map");
    mapContainer.appendChild(colorPalette);

    // Console log the property name
    map.on('click', 'A-grid-20241116-3', function(e) {
        // Get the features at the click point
        const features = map.queryRenderedFeatures(e.point, {
            layers: ['A-grid-20241116-3']
        });
    
        if (features.length > 0) {
            // Get the Name of the clicked polygon
            const polygonName = features[0].properties.Name;
    
            // Get the active button's color
            const color = zoningMap[activeButton.dataset.zone].color; // Get the active button's color
    
            // Store the color in localStorage
            localStorage.setItem(`colour${polygonName}`, color);
    
            // Retrieve the newly stored value from localStorage and log it
            const updatedColor = localStorage.getItem(`colour${polygonName}`);
            console.log(`Stored colour${polygonName} as ${updatedColor} in localStorage`);
            
            // Log the Name of the clicked polygon (for verification)
            console.log(`Polygon ${polygonName} clicked`);
        }
    });
}

// Helper function to darken a color by a percentage (e.g., 20%)
function darkenColor(color, percent) {
    let colorHex = color.replace("#", "");
    let r = parseInt(colorHex.substring(0, 2), 16);
    let g = parseInt(colorHex.substring(2, 4), 16);
    let b = parseInt(colorHex.substring(4, 6), 16);

    r = Math.max(0, r - (r * (percent / 100)));
    g = Math.max(0, g - (g * (percent / 100)));
    b = Math.max(0, b - (b * (percent / 100)));

    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}

