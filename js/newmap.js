// newmap.js
function renderNewMap() {
    // Create the color-palette container
    const colorPalette = document.createElement("div");
    colorPalette.id = "color-palette";
    colorPalette.style.position = "absolute";
    colorPalette.style.top = "10px";
    colorPalette.style.left = "10px";  // Align to the left side of the map panel
    colorPalette.style.zIndex = "1000"; // Ensure it's above the map
    colorPalette.style.backgroundColor = "#fff";
    colorPalette.style.border = "1px solid #ccc";
    colorPalette.style.padding = "10px";
    colorPalette.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    colorPalette.style.borderRadius = "8px";
    colorPalette.style.width = "150px"; // Set the width of the color palette (narrower)
    colorPalette.style.display = "flex";
    colorPalette.style.flexDirection = "column"; // Stack buttons vertically
    colorPalette.style.alignItems = "stretch"; // Ensure buttons stretch to full width of colorPalette

    // Define the zoning categories and their corresponding colors
    const zoningMap = {
        "C": { name: "Commercial (offices & retail)", color: "#215297" },
        "E": { name: "Education", color: "#f4f2c1" },
        "H": { name: "Housing", color: "#f6bb81" },
        "L": { name: "Light industry", color: "#c8a5cf" },
        "M": { name: "Military (special uses)", color: "#516702" },
        "O": { name: "Open space (forest)", color: "#abb20c" },
        "P": { name: "Park", color: "#1ea33a" },
        "S": { name: "Sports", color: "#a3d49d" },
        "W": { name: "Waterbody", color: "#bedef3" }
    };

    // Add buttons for each zoning category
    Object.keys(zoningMap).forEach(zone => {
        const button = document.createElement("button");
        button.textContent = zoningMap[zone].name;  // Use full name
        button.classList.add("btn", "mb-2"); // Add classes for vertical layout
        button.style.marginBottom = "8px"; // Space between buttons
        button.style.backgroundColor = zoningMap[zone].color; // Set the background color
        button.style.color = "#fff"; // Ensure text is readable
        button.style.border = "none"; // Remove button border
        button.style.fontWeight = "bold"; // Make text bold
        button.style.width = "100%"; // Make buttons take up the full width of the parent container

        // Add an action for the button (for now, log the zoning category)
        button.onclick = function() {
            console.log(`Button for ${zoningMap[zone].name} clicked`);
        };

        // Append the button to the color-palette
        colorPalette.appendChild(button);
    });

    // Append the color-palette to the map container
    const mapContainer = document.getElementById("map");
    mapContainer.appendChild(colorPalette);
}

// Add event listener for the 'New map' button
document.getElementById("new-map-btn").addEventListener("click", renderNewMap);