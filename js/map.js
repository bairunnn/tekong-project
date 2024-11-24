// May this code work

let colourA1 = '#f4f2ec';
let colourA2 = '#f4f2ec';
let colourA3 = '#f4f2ec';
let colourA4 = '#f4f2ec';
let colourA5 = '#f4f2ec';
let colourA6 = '#f4f2ec';
let colourA7 = '#f4f2ec';
let colourA8 = '#f4f2ec';
let colourA9 = '#f4f2ec';
let colourA10 = '#f4f2ec';
let colourA11 = '#f4f2ec';
let colourA12 = '#f4f2ec';
let colourA13 = '#f4f2ec';
let colourA14 = '#f4f2ec';
let colourA15 = '#f4f2ec';
let colourA16 = '#f4f2ec';
let colourA17 = '#f4f2ec';
let colourA18 = '#f4f2ec';
let colourA19 = '#f4f2ec';
let colourA20 = '#f4f2ec';
let colourA21 = '#f4f2ec';
let colourA22 = '#f4f2ec';
let colourA23 = '#f4f2ec';
let colourA24 = '#f4f2ec';
let colourA25 = '#f4f2ec';
let colourA26 = '#f4f2ec';
let colourA27 = '#f4f2ec';
let colourA28 = '#f4f2ec';
let colourA29 = '#f4f2ec';
let colourA30 = '#f4f2ec';
let colourA31 = '#f4f2ec';
let colourA32 = '#f4f2ec';
let colourA33 = '#f4f2ec';
let colourA34 = '#f4f2ec';
let colourA35 = '#f4f2ec';
let colourA36 = '#f4f2ec';
let colourA37 = '#f4f2ec';
let colourA38 = '#f4f2ec';
let colourA39 = '#f4f2ec';
let colourA40 = '#f4f2ec';
let colourA41 = '#f4f2ec';
let colourA42 = '#f4f2ec';
let colourA43 = '#f4f2ec';
let colourA44 = '#bedef3';
let colourA45 = '#516702';
let colourA46 = '#516702';
let colourA47 = '#516702';
let colourA48 = '#516702';
let colourA49 = '#516702';
let colourA50 = '#abb20c';

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

    // 1. A-roads-all.geojson (fill)
    map.addLayer({
        id: "A-roads-all",
        type: "fill",
        source: {
            type: "geojson",
            data: "assets/grids/Grid-A/A-roads-all.geojson"
        },
        paint: {
            "fill-color": "#ffffff",
            "fill-opacity": 1,
        }
    });

    // 2. A-grid-20241116-3 (fill)
    map.addLayer({
        id: "A-grid-20241116-3",
        type: "fill",
        source: {
            type: "geojson",
            data: "assets/grids/Grid-A/A-grid-20241120-2.geojson"
        },
        paint: {
            "fill-color": [
                "match",
                ["get", "Name"], // get the 'Name' property from GeoJSON
                "A1", colourA1,  // if 'Name' is 'A1', use colourA1
                "A2", colourA2,  // if 'Name' is 'A2', use colourA2
                "A3", colourA3,  // if 'Name' is 'A3', use colourA3
                "A4", colourA4,  // if 'Name' is 'A4', use colourA4
                "A5", colourA5,  // if 'Name' is 'A5', use colourA5
                "A6", colourA6,  // if 'Name' is 'A6', use colourA6
                "A7", colourA7,  // if 'Name' is 'A7', use colourA7
                "A8", colourA8,  // if 'Name' is 'A8', use colourA8
                "A9", colourA9,  // if 'Name' is 'A9', use colourA9
                "A10", colourA10, // if 'Name' is 'A10', use colourA10
                "A11", colourA11,
                "A12", colourA12,
                "A13", colourA13,
                "A14", colourA14,
                "A15", colourA15,
                "A16", colourA16,
                "A17", colourA17,
                "A18", colourA18,
                "A19", colourA19,
                "A20", colourA20,
                "A21", colourA21,
                "A22", colourA22,
                "A23", colourA23,
                "A24", colourA24,
                "A25", colourA25,
                "A26", colourA26,
                "A27", colourA27,
                "A28", colourA28,
                "A29", colourA29,
                "A30", colourA30,
                "A31", colourA31,
                "A32", colourA32,
                "A33", colourA33,
                "A34", colourA34,
                "A35", colourA35,
                "A36", colourA36,
                "A37", colourA37,
                "A38", colourA38,
                "A39", colourA39,
                "A40", colourA40,
                "A41", colourA41,
                "A42", colourA42,
                "A43", colourA43,
                "A44", colourA44,
                "A45", colourA45,
                "A46", colourA46,
                "A47", colourA47,
                "A48", colourA48,
                "A49", colourA49,
                "A50", colourA50,
                "#c300ba" // default color if no match (fallback)
            ],
            "fill-opacity": 1,
            "fill-outline-color": "#958858"
        }
    });

    // 3. MRTLines_20241113_future (line)
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
    
    // 4. CRL_with_extension_20241104 (line)
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

// Reset button functionality
document.getElementById('reset-button').addEventListener('click', function() {
    map.flyTo({
        center: [104.029311, 1.388],
        zoom: 12,
        bearing: 0,
        essential: true
    });
});


// // Access the Mapbox map container
// const mapContainer = document.getElementById('map');

// // Set the custom cursor style for the Mapbox container
// mapContainer.style.cursor = "url('../assets/images/cursor_brush.cur'), default";

// // Optional: Prevent Mapbox from changing the cursor on specific events
// map.on('mousemove', () => {
//     map.getCanvas().style.cursor = "url('../assets/images/cursor_brush.cur'), default";
// });