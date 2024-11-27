import { homeView } from './default.js';

// Global variable to keep track of the current chapter
let currentChapter = 1;

// Array of chapter contents
const chapters = [
  {
    title: "History of Tekong",
    content: "<p>Welcome to the story map section!</p>"
  },
  {
    title: "Chapter 1:<br>Origins",
    content: "<p>Placeholder for Chapter 1</p>"
  },
  {
    title: "Chapter 2: Early Settlers",
    content: "<p>Placeholder for Chapter 2</p>"
  },
  {
    title: "Chapter 3: Colonial Era",
    content: "<p>Placeholder for Chapter 3</p>"
  },
  {
    title: "Chapter 4: Military Transformation",
    content: "<p>Placeholder for Chapter 4</p>"
  },
  {
    title: "Chapter 5: Environmental Impact",
    content: "<p>Placeholder for Chapter 5</p>"
  },
  {
    title: "Chapter 6: The Future of Tekong",
    content: "<p>Placeholder for Chapter 6</p>"
  }
];

// Function to populate the storymap content
function loadStoryMode() {
  let contentPanel = document.getElementById('description-panel');
  contentPanel.innerHTML = `
        <!-- Back Icon Section -->
        <div class="d-flex align-items-center mt-3" id="back-icon-section">
            <i class="bi bi-arrow-left-circle-fill" style="font-size: 1.5em; cursor: pointer; margin-right: 10px;"></i>
            <span style="font-size: 1.1em; cursor: pointer;" id="return-home">Return to home</span>
        </div>

        <h3><span id="chapter-title" style="font-size: 1.1em;">${chapters[0].title}</span></h3>

        <!-- Buttons Section -->
        <div class="button-container d-flex justify-content-between">
            <button id="left-arrow" class="btn btn-outline-primary" title="Previous chapter">
                <i class="bi bi-arrow-left" style="color: black;"></i> <!-- Bootstrap Left Arrow Icon -->
            </button>
            <button id="right-arrow" class="btn btn-outline-primary" title="Next chapter">
                <i class="bi bi-arrow-right" style="color: black;"></i> <!-- Bootstrap Right Arrow Icon -->
            </button>
        </div>

        <div id="chapter-content">${chapters[0].content}</div>

  `;

  // "Return to home" functionality
  document.getElementById('back-icon-section').addEventListener('click', () => {
      // Clear and load the default view
      homeView();
  });

  // Arrow button navigation
  document.getElementById('left-arrow').addEventListener('click', () => {
      navigateLeft();
  });

  document.getElementById('right-arrow').addEventListener('click', () => {
      navigateRight();
  });
}

function updateChapter() {
  let chapterTitle = document.getElementById('chapter-title');
  let chapterContent = document.getElementById('chapter-content');

  chapterTitle.innerHTML = chapters[currentChapter - 1].title;
  chapterContent.innerHTML = chapters[currentChapter - 1].content;
}

function navigateLeft() {
  if (currentChapter > 1) {
    currentChapter--;
    updateChapter();
  }
}

function navigateRight() {
    if (currentChapter < chapters.length) {
      currentChapter++;
    } else {
      currentChapter = 1; // Loop back to the first chapter
    }
    updateChapter();
  }

export { loadStoryMode };
