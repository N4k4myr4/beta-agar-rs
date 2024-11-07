// @name         Bots 3
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  preko connecting elementa
// @author       You
// @match        https://beta.agar.rs/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    // Function to click the play button
    function clickPlayButton() {
        var playBtn = document.getElementById('play-btn');
        if (playBtn) {
            sessionStorage.clickcount = 0;
            playBtn.click();
          //  splitPlayerCell();
          //  setTimeout(() => { splitPlayerCell(); }, 50);
            sendLocation();
            location.reload();
        }
    }

    // Wait for the element with ID "connecting" to change its opacity to 0
    function waitForConnectingElementToHide() {
        var connectingElement = document.getElementById('connecting');
        if (connectingElement) {
            // MutationObserver to watch for changes in the opacity of the connecting element
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.attributeName === 'style') {
                        var opacity = parseFloat(connectingElement.style.opacity);
                        if (opacity === 0) {
                            // If opacity is 0, perform all actions
                            clickPlayButton();
                            observer.disconnect(); // Disconnect the observer once the action is performed
                        }
                    }
                });
            });

            // Configuration of the observer
            var config = { attributes: true, attributeFilter: ['style'] };

            // Start observing the connecting element
            observer.observe(connectingElement, config);
        }
    }

    // Initial function call
    waitForConnectingElementToHide();
})();
