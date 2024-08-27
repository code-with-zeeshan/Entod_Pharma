// Function to get a query parameter by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the relevant elements
const fullscreenImage = document.getElementById('fullscreenImage');
let isZoomed = false;
let initialPinchDistance = null;
let currentScale = 1;

// Retrieve the query parameters
const imageSrc = getQueryParam('image');

// Populate the details page with the data from the URL parameters
if (imageSrc) fullscreenImage.src = decodeURIComponent(imageSrc);

// Show the overlay
document.getElementById('overlay').style.display = 'block';

// Function to toggle zoom
function toggleZoom() {
    if (isZoomed) {
        currentScale = 1;
        fullscreenImage.style.transform = `scale(${currentScale})`;
        isZoomed = false;
    } else {
        currentScale = 2;
        fullscreenImage.style.transform = `scale(${currentScale})`;
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

// Pinch-to-zoom functionality for fullscreen mode on touch devices
fullscreenImage.addEventListener('touchmove', (event) => {
    if (event.touches.length === 2) {
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];

        // Calculate the distance between the two touch points
        const distance = Math.hypot(touch2.pageX - touch1.pageX, touch2.pageY - touch1.pageY);

        if (initialPinchDistance === null) {
            initialPinchDistance = distance;
        } else {
            const scaleChange = distance / initialPinchDistance;
            currentScale = Math.min(Math.max(1, scaleChange), 4); // Limit scale between 1 and 4
            fullscreenImage.style.transform = `scale(${currentScale})`;
        }
    }
});

fullscreenImage.addEventListener('touchend', () => {
    initialPinchDistance = null;
});
