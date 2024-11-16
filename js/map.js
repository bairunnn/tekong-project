mapboxgl.accessToken = 'pk.eyJ1IjoiYnlyb25ubiIsImEiOiJjbTB2NG9qajYxOTE1Mmtwd3Q1aDd5cjM2In0.K6SRujI45VvXnG1vfcwbwA';

var map = new mapboxgl.Map({
    container: 'map', // ID of the div where the map will be placed
    style: 'mapbox://styles/byronnn/cm15ugzyg00dg01pc3ucid3od', // Mapbox style
    center: [104.029311, 1.388], // Initial position [lng, lat]
    zoom: 12
});

// Add navigation control (zoom buttons)
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// Initialize all layers with opacity set to 0
map.on('load', function() {

    // 1. MRTLines_20241113_future (line)
    map.addLayer({
        id: "MRTLines_20241113_future",
        type: "line",
        source: {
            type: "geojson",
            data: "assets/layers/MRTLines_20241113_future.geojson"
        },
        paint: {
            "line-color": ["get", "colour"],
            "line-width": 2,
            "line-opacity": 1
        }
    });

    // 2. CRL_with_extension_20241104 (line)
    map.addLayer({
        id: "CRL_with_extension_20241104",
        type: "line",
        source: {
            type: "geojson",
            data: "assets/layers/CRL_with_extension_20241104.geojson"
        },
        paint: {
            "line-color": "#94c83d",
            "line-width": 2,
            "line-opacity": 1
        }
    });

    // 3. A-grid-20241116-3 (fill)
    map.addLayer({
        id: "A-grid-20241116-3",
        type: "fill",
        source: {
            type: "geojson",
            data: "assets/grids/Grid-A/A-grid-20241116-3.geojson"
        },
        paint: {
            "fill-color": [
                "match",
                ["get", "Zoning"],
                "C", "#215297",    // Commercial
                "E", "#f4f2c1",    // Education
                "H", "#f6bb81",    // Housing
                "L", "#c8a5cf",    // Light industry
                "M", "#516702",    // Military
                "O", "#abb20c",    // Open space
                "P", "#1ea33a",    // Park
                "S", "#a3d49d",    // Sports
                "W", "#bedef3",    // Waterbody
                "#f4f2ec"          // Default (white for empty or unknown values)
            ],
            "fill-opacity": 1,
            "fill-outline-color": "#958858"
        }
    });

    // 4. A-roads-all.geojson (fill)


});

// // Access the Mapbox map container
// const mapContainer = document.getElementById('map');

// // Set the custom cursor style for the Mapbox container
// mapContainer.style.cursor = "url('../assets/images/cursor_brush.cur'), default";

// // Optional: Prevent Mapbox from changing the cursor on specific events
// map.on('mousemove', () => {
//     map.getCanvas().style.cursor = "url('../assets/images/cursor_brush.cur'), default";
// });