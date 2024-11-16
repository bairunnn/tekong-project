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

    // 1A. MRTLines_20241113_future (line)
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

    // 1B. CRL_with_extension_20241104 (line)
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

});

// Access the Mapbox map container
const mapContainer = document.getElementById('map');

// Set the custom cursor style for the Mapbox container
mapContainer.style.cursor = "url('../assets/images/cursor_brush.png'), default";

// Optional: Prevent Mapbox from changing the cursor on specific events
map.on('mousemove', () => {
    map.getCanvas().style.cursor = "url('../assets/images/cursor_brush.png'), default";
});