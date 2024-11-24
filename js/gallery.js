// import { renderNewMap } from './newmap.js';
import { homeView } from './default.js';

// gallery.js


function loadGalleryMode() {
    let contentPanel = document.getElementById('description-panel');
    contentPanel.innerHTML = `
        <div class="text-left mb-2" id="galleryIcon">
            <div id="gallery-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
                <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </div>
        </div>
        <h3><span style="font-size: 1.3em;">Gallery view</span></h3>
        <p>Welcome to the map gallery. Explore map submissions from other people here!</b></p>

        <!-- Back Icon Section -->
        <div class="d-flex align-items-center mt-3" id="back-icon-section">
            <i class="bi bi-arrow-left-circle-fill" style="font-size: 1.5em; cursor: pointer; margin-right: 10px;"></i>
            <span style="font-size: 1.1em; cursor: pointer;" id="return-home">Return to home</span>
        </div>
    `;

    const brushIcon = document.getElementById('gallery-svg');
    brushIcon.addEventListener('mouseover', () => {
        brushIcon.style.transform = 'scale(1.05)'; // Enlarge the icon
        brushIcon.style.transition = 'transform 0.3s ease'; // Smooth transition
    });
    brushIcon.addEventListener('mouseout', () => {
        brushIcon.style.transform = 'scale(1)'; // Return to normal size
    });

    // Mouse move event to rotate the brush icon based on mouse position
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

        // Use GSAP to animate the rotation of the brush icon
        gsap.to("#gallery-svg", {
            rotation: angle / 6,
            duration: 0.1,
            ease: "power1.out"
        });
    }

    // Attach mousemove event listener for brush icon rotation
    window.addEventListener("mousemove", handleMouseMove);

    // "Return to home" functionality
    document.getElementById('back-icon-section').addEventListener('click', () => {
        // Clear and load the default view
        homeView();
    });

    brushIcon.addEventListener('click', () => {
        alert("You cannot spell housing without you and I...");
    });
}

export { loadGalleryMode };