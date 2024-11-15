/* 
Welcome to main.js!
An overview of its structure:

Interactions on the main landing page
- Clicking on the HDB image
- Moving the mouse to rotate the HDB image
- Show / hide the content panel

*/

/* 
  1. Interactions on the main landing page
*/

document.getElementById('hdb-image').addEventListener('click', function() {
    alert("This interactive web app is not affiliated with the Housing & Development Board, nor with the Government of Singapore.\nFor education only!!");
});

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


// Show / hide the content panel

