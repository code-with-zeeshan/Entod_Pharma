// AndroidFullScreen.js
(function(window) {
    window.AndroidFullScreen = {
        immersiveMode: function(successCallback, errorCallback) {
            const elem = document.documentElement;

            function enterFullscreen() {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen().then(successCallback).catch(errorCallback);
                } else if (elem.mozRequestFullScreen) { // Firefox
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { // IE/Edge
                    elem.msRequestFullscreen();
                } else {
                    if (typeof errorCallback === 'function') {
                        errorCallback(new Error('Fullscreen API is not supported.'));
                    }
                }
            }

            enterFullscreen();
        }
    };
})(window);
