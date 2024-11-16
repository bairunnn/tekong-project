// creative.js

// Function to populate the creative mode content
function loadCreativeMode() {
    let contentPanel = document.getElementById('description-panel');
    contentPanel.innerHTML = `
        <div class="text-left mb-2" id="creativeIcon">
            <div id="creative-brush">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"/>
                </svg>
            </div>
        </div>
        <h3><span style="font-size: 1.3em;">Creative mode</span></h3>
        <p>Welcome to the creative mode!</p>
        <p>Here, Tekong is your canvas — each colour represents a type of land use, and you can colour it the way you like. Click on "New map" to get started!</p>

        <!-- Buttons Section -->
        <div class="button-container">
            <button class="btn btn-secondary d-block mb-2 w-100" id="new-map-btn">New map</button>
            <button class="btn btn-secondary d-block mb-2 w-100" id="retrieve-map-btn">Retrieve map</button>
            <button class="btn btn-secondary w-100" id="screenshot-btn">Save screenshot of map</button>
        </div>

        <!-- Back Icon Section -->
        <div class="d-flex align-items-center mt-3" id="back-icon-section">
            <i class="bi bi-arrow-left-circle-fill" style="font-size: 1.5em; cursor: pointer; margin-right: 10px;"></i>
            <span style="font-size: 1.1em; cursor: pointer;" id="return-home">Return to home</span>
        </div>
    `;

    // Add event listener for the 'New map' button
    document.getElementById("new-map-btn").addEventListener("click", renderNewMap);

    // // Add button functionalities
    // document.getElementById('new-map-btn').addEventListener('click', () => {
    //     alert('New map functionality goes here!');
    //     // Logic for starting a new map
    // });

    // document.getElementById('retrieve-map-btn').addEventListener('click', () => {
    //     alert('Retrieve map functionality goes here!');
    //     // Logic for retrieving a saved map
    // });

    // document.getElementById('screenshot-btn').addEventListener('click', () => {
    //     alert('Save screenshot functionality goes here!');
    //     // Logic for saving a screenshot
    // });

    // Add "creative-brush" hover effect using CSS
    const brushIcon = document.getElementById('creative-brush');
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
        gsap.to("#creative-brush", {
            rotation: angle / 4,
            duration: 0.2,
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
