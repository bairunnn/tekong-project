import { loadCreativeMode } from './creative.js';
import { loadGalleryMode } from './gallery.js';
import { loadStoryMode } from './storymap.js';

// navigation.js

// Event listener for the "creative-mode-btn"
document.getElementById('creative-mode-btn').addEventListener('click', () => {
    // Clear the content of the description-panel
    let contentPanel = document.getElementById('description-panel');
    contentPanel.innerHTML = '';  // This clears the current content

    // Run the function from creative.js to populate the description-panel with Creative Mode content
    loadCreativeMode();
});

document.getElementById('explore-ideas-btn').addEventListener('click', () => {
    // Clear the content of the description-panel
    let contentPanel = document.getElementById('description-panel');
    contentPanel.innerHTML = '';  // This clears the current content

    // Run the function from creative.js to populate the description-panel with Creative Mode content
    loadGalleryMode();
});

document.getElementById('history-btn').addEventListener('click', () => {
    // Clear the content of the description-panel
    let contentPanel = document.getElementById('description-panel');
    contentPanel.innerHTML = '';  // This clears the current content

    // Run the function from creative.js to populate the description-panel with Creative Mode content
    loadStoryMode();
    setLayerOpacityToZero(map, 'A-grid-20241116-3');
    setLayerOpacityToZero(map, 'A-roads-all');
    setLineOpacityToZero(map, 'CRL_with_extension_20241104');
    setLineOpacityToZero(map, 'MRTLines_20241113_future');
    setTextOpacityToZero(map, 'tekong_districts');
    setRasterOpacityToOne(map, 'raster-layer');

    map.flyTo({
      center: [104.03152, 1.41113],
      zoom: 13,
      essential: true  // Ensures that the transition is smooth
    });
});

function assignHomeViewListeners() {
    // Event listener for the "creative-mode-btn"
    document.getElementById('creative-mode-btn').addEventListener('click', () => {
        let contentPanel = document.getElementById('description-panel');
        contentPanel.innerHTML = ''; // Clear the current content
        loadCreativeMode();          // Load the creative mode
    });

    document.getElementById('explore-ideas-btn').addEventListener('click', () => {
        let contentPanel = document.getElementById('description-panel');
        contentPanel.innerHTML = '';  // This clears the current content
        loadGalleryMode();
    });

    document.getElementById('history-btn').addEventListener('click', () => {
        // Clear the content of the description-panel
        let contentPanel = document.getElementById('description-panel');
        contentPanel.innerHTML = '';  // This clears the current content
    
        // Run the function from creative.js to populate the description-panel with Creative Mode content
        loadStoryMode();
        setLayerOpacityToZero(map, 'A-grid-20241116-3');
        setLayerOpacityToZero(map, 'A-roads-all');
        setLineOpacityToZero(map, 'CRL_with_extension_20241104');
        setLineOpacityToZero(map, 'MRTLines_20241113_future');
        setTextOpacityToZero(map, 'tekong_districts');
        setRasterOpacityToOne(map, 'raster-layer');

        map.flyTo({
          center: [104.03152, 1.41113],
          zoom: 13,
          essential: true  // Ensures that the transition is smooth
        });
    });

    document.getElementById('hdb-image').addEventListener('click', function() {
        alert("This interactive web app is not affiliated with the Urban Redevelopment Authority, the Housing & Development Board, nor with the Government of Singapore.\nFor legal purposes, none of the information here reflects the planning intention of the Government. Please refer to the adopted Master Plan.\nFor education only!!\nbairun@upenn.edu");
    });

    // Event listeners for other buttons (if required)
    // document.getElementById('explore-ideas-btn').addEventListener('click', () => { ... });
    // document.getElementById('history-btn').addEventListener('click', () => { ... });
}

function setLayerOpacityToZero(map, layerId) {
    if (map.getLayer(layerId)) {
      map.setPaintProperty(layerId, 'fill-opacity', 0);
      console.log(`Layer ${layerId} opacity set to 0.`);
    } else {
      console.error(`Layer ${layerId} not found.`);
    }
  }

function setLineOpacityToZero(map, layerId) {
    if (map.getLayer(layerId)) {
      map.setPaintProperty(layerId, 'line-opacity', 0);
      console.log(`Layer ${layerId} opacity set to 0.`);
    } else {
      console.error(`Layer ${layerId} not found.`);
    }
  }

function setTextOpacityToZero(map, layerId) {
    if (map.getLayer(layerId)) {
      map.setPaintProperty(layerId, 'text-opacity', 0);
      console.log(`Layer ${layerId} opacity set to 0.`);
    } else {
      console.error(`Layer ${layerId} not found.`);
    }
  }
  
function setRasterOpacityToOne(map, layerId) {
    if (map.getLayer(layerId)) {
      map.setPaintProperty(layerId, 'raster-opacity', 1);
      console.log(`Layer ${layerId} opacity set to 1.`);
    } else {
      console.error(`Layer ${layerId} not found.`);
    }
  }

export { assignHomeViewListeners, setLayerOpacityToZero, setLineOpacityToZero, setTextOpacityToZero, setRasterOpacityToOne };