
/* 
Welcome to main.js!
An overview of its structure:

1. Interactions on the main landing page
- Clicking on the HDB image
- Moving the mouse to rotate the HDB image
- Show / hide the content panel

*/

/* 
  1. Interactions on the main landing page
*/

/* ###################################################### */

/* Clicking on the HDB image */

document.getElementById('hdb-image').addEventListener('click', function() {
    alert("This interactive web app is not affiliated with the Urban Redevelopment Authority, the Housing & Development Board, nor with the Government of Singapore.\nFor legal purposes, none of the information here reflects the planning intention of the Government. Please refer to the adopted Master Plan.\nFor education only!!\nbairun@upenn.edu");
});

/* ###################################################### */

/* Moving the mouse to rotate the HDB image */

function handleMouseMove(event) {
    // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate the center of the viewport
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;

    // Get the mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the angle based on the mouse position
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (45 / Math.PI) / 10; // Convert to degrees

    // Use GSAP to animate the rotation of the hdb-image
    gsap.to("#hdb-image", {
        rotation: angle,
        duration: 0.3,
        ease: "power1.out"
    });
}

// Attach mousemove event listener
window.addEventListener("mousemove", handleMouseMove);


/* ###################################################### */

/* Show / hide the content panel */

// Select elements
const contentPanel = document.getElementById('description-panel');
const mapPanel = document.getElementById('map');
const toggleBtn = document.getElementById('toggle-panel-btn');

// Initial state
let isPanelVisible = true;

// Enable Bootstrap tooltips for the toggle button
$(document).ready(function () {
    $('#toggle-panel-btn').tooltip({ placement: 'right' }); // Initialize tooltip
});

// Event listener for the toggle button
toggleBtn.addEventListener('click', () => {
    if (isPanelVisible) {
        // Hide content panel
        contentPanel.style.width = '0';
        contentPanel.style.padding = '0'; // Remove padding for smooth collapse
        mapPanel.style.width = '100%';

        // Change the innerHTML of the toggle button
        toggleBtn.innerHTML = `<i class="bi bi-chevron-right"></i><i class="bi bi-chevron-right"></i>`;

        // Remove and reinitialize the tooltip after the button moves
        $('#toggle-panel-btn').tooltip('dispose'); // Destroy the existing tooltip
        $('#toggle-panel-btn').tooltip({ placement: 'right' });; // Reinitialize the tooltip

    } else {
        // Show content panel
        contentPanel.style.width = '30%';
        contentPanel.style.padding = '2rem'; // Restore padding
        mapPanel.style.width = '70%';

        // Change the innerHTML of the toggle button
        toggleBtn.innerHTML = `<i class="bi bi-chevron-left"></i><i class="bi bi-chevron-left"></i>`;

        // Remove and reinitialize the tooltip after the button moves
        $('#toggle-panel-btn').tooltip('dispose'); // Destroy the existing tooltip
        $('#toggle-panel-btn').tooltip({ placement: 'right' });; // Reinitialize the tooltip
    }

    // Resize the map after layout changes
    setTimeout(() => {
        map.resize(); // Adjust the Mapbox map to fit the updated #map panel
    }, 300); // Delay to ensure the CSS transition completes

    // Toggle panel visibility state
    isPanelVisible = !isPanelVisible;
});


/* ###################################################### */

