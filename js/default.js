import { assignHomeViewListeners } from './navigation.js';

// Function to load the default home view
function homeView() {
    const colorPalette = document.getElementById('color-palette');
    if (colorPalette) {
        colorPalette.remove();
    }

    let contentPanel = document.getElementById('description-panel');
    contentPanel.innerHTML = `
        <h3><span style="font-size: 0.8em;">Come plan the future of</span><br><span style="font-size: 1.5em;">Tekong New Town!</span></h3>
        <div class="image-container">
            <img src="./assets/images/ura-logo.png" alt="HDB Image" id="hdb-image" class="img-fluid">
        </div>
        <p>Today, the whole of <span class="semibold">Pulau Tekong</span> (Tekong Island) is used for our defence needs. 
            However, that is set to change with the ongoing land reclamation works undertaken by the 
            Housing and Development Board with the Ministry of Defence. Indeed, The latest <a href="https://www.ura.gov.sg/Corporate/Planning/Master-Plan" target="_blank" style="color: #838077;">Master Plan 2019</a> 
            reserves most of Tekong's land for future development, which can include non-military uses.
        </p>
        <p>
            What do you imagine a future Tekong New Town to be like? 
            Step into the shoes of a planner and colour the future of Tekong below!
        </p>

        <!-- Buttons Section -->
        <div class="button-container">
            <button class="btn btn-secondary d-block mb-2 w-100" id="creative-mode-btn">Enter creative mode</button>
            <button class="btn btn-secondary d-block mb-2 w-100" id="explore-ideas-btn">Explore submitted ideas</button>
            <button class="btn btn-secondary w-100" id="history-btn">See the history of Tekong</button>
        </div>
    `;
    assignHomeViewListeners();
}

export { homeView };