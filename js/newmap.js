// newmap.js
function renderNewMap() {
    // Create the color-palette container
    const colorPalette = document.createElement("div");
    colorPalette.id = "color-palette"; // All styles are now handled in CSS

    // Define the zoning categories and their corresponding colors and cursor files
    const zoningMap = {
        "C": { name: "Commercial (offices & retail)", color: "#215297", cursor: "../assets/images/brush-palette/C.cur" },
        "E": { name: "Education", color: "#f4f2c1", cursor: "../assets/images/brush-palette/E.cur" },
        "H": { name: "Housing", color: "#f6bb81", cursor: "../assets/images/brush-palette/H.cur" },
        "L": { name: "Light industry", color: "#c8a5cf", cursor: "../assets/images/brush-palette/L.cur" },
        "M": { name: "Military (special uses)", color: "#516702", cursor: "../assets/images/brush-palette/M.cur" },
        "O": { name: "Open space (forest)", color: "#abb20c", cursor: "../assets/images/brush-palette/O.cur" },
        "P": { name: "Park", color: "#1ea33a", cursor: "../assets/images/brush-palette/P.cur" },
        "S": { name: "Sports", color: "#a3d49d", cursor: "../assets/images/brush-palette/S.cur" },
        "W": { name: "Waterbody", color: "#bedef3", cursor: "../assets/images/brush-palette/W.cur" }
    };

    // Add buttons for each zoning category
    Object.keys(zoningMap).forEach(zone => {
        const button = document.createElement("button");
        button.textContent = zoningMap[zone].name;  // Use full name
        button.classList.add("btn", "mb-2"); // Add classes for vertical layout
        button.style.marginBottom = "8px"; // Space between buttons
        button.style.backgroundColor = zoningMap[zone].color; // Set the background color
        button.style.fontWeight = "bold"; // Make text bold
        button.style.width = "100%"; // Make buttons take up the full width of the parent container
        button.style.border = "none"; // Remove button border

        // Set text color for specific zones
        if (zone === "E" || zone === "H" || zone === "S" || zone === "W") {
            button.style.color = "#000"; // Set text color to black for E, H, S, W
        } else {
            button.style.color = "#fff"; // Default text color is white
        }

        // Add an action for the button to change cursor
        button.onclick = function() {
            document.body.style.cursor = `url(${zoningMap[zone].cursor}), auto`; // Change the cursor
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