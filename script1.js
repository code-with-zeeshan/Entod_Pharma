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

// Function to toggle zoom
function toggleZoom() {
    if (isZoomed) {
        fullscreenImage.style.transform = 'scale(1)';
        isZoomed = false;
    } else {
        fullscreenImage.style.transform = 'scale(2)';
        isZoomed = true;
    }
}

// Add event listener to the image to toggle zoom on double-click
fullscreenImage.addEventListener('dblclick', toggleZoom);

// Function to toggle full-screen mode
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        fullscreenImage.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen().catch((err) => {
            console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
        });
    }
}

// Add event listener to the image to toggle full-screen mode on single click
fullscreenImage.addEventListener('click', toggleFullScreen);

// Event listener for exiting fullscreen mode
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        isZoomed = false;
        fullscreenImage.style.transform = 'scale(1)';
    }
});
