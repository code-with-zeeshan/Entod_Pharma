// Function to get a query parameter by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the relevant elements
const fullscreenImage = document.getElementById('fullscreenImage');
let isZoomed = false;

// Retrieve the query parameters
const imageSrc = getQueryParam('image');

// Populate the details page with the data from the URL parameters
if (imageSrc) fullscreenImage.src = decodeURIComponent(imageSrc);

// Show the overlay
document.getElementById('overlay').style.display = 'block';

// Function to toggle full-screen mode
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // Enter fullscreen mode
        fullscreenImage.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
    } else {
        // Exit fullscreen mode
        document.exitFullscreen().catch((err) => {
            console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
        });
    }
}

// Function to toggle zoom
function toggleZoom() {
    if (isZoomed) {
        fullscreenImage.classList.remove('zoomed');
        isZoomed = false;
    } else {
        fullscreenImage.classList.add('zoomed');
        isZoomed = true;
    }
}

// Add event listener to the image to toggle full-screen mode on the first click
// and to toggle zoom on subsequent clicks
fullscreenImage.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        toggleFullScreen();
    } else {
        toggleZoom();
    }
});

// Event listener for exiting fullscreen mode
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        isZoomed = false;  // Reset zoom state
        fullscreenImage.classList.remove('zoomed');
    }
});

// Check if Fullscreen API is supported
if (document.fullscreenEnabled) {
    console.log('Fullscreen API is supported.');
} else {
    console.log('Fullscreen API is not supported.');
}
