// Function to enable editing of zoning properties
function enableZoningEdit(map, activeButton, zoningMap) {
    // Check if the activeButton is set
    if (!activeButton) {
        console.error("No active button selected for zoning edits.");
        return;
    }

    // Add a click event listener to the map
    map.on('click', 'A-grid-20241116-3', (e) => {
        // Get the clicked feature
        let clickedFeature = e.features[0];
        console.log(clickedFeature);

        // Ensure the feature has a "Name" property
        if (clickedFeature && clickedFeature.properties && clickedFeature.properties.Name) {
            const featureName = clickedFeature.properties.Name;

            // Get the selected zoning category from the active button
            const selectedZone = activeButton.dataset.zone;

            if (!selectedZone) {
                console.error("Active button does not have a zoning category.");
                return;
            }

            // Update the "Zoning" property of the clicked feature
            clickedFeature.properties.Zoning = selectedZone;

            console.log(`Updated Zoning of ${featureName} to ${selectedZone}`);

            // Update the map to reflect the change visually
            // (Optional: Requires repainting the layer or refreshing data source)
            map.setFeatureState(
                { source: 'A-grid-20241116-3', id: clickedFeature.id },
                { Zoning: selectedZone }
            );
        }
    });
}