// ==UserScript==
// @name         Bots 5
// @namespace    https://your.namespace.here
// @version      5
// @description  preko wss konekcije
// @author       Your Name
// @match        https://beta.agar.rs/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to click the play game button
    function clickPlayButton() {
        var playButton = document.getElementById('play-btn');
        if (playButton) {
            sessionStorage.clickcount = 0;
            playButton.click();
            sendLocation();
        }
    }

    // Function to reload the page without confirmation
    function reloadPageWithoutConfirmation() {
        setTimeout(() => {
            window.location.reload();
        }, 5); // Wait 1 second before reloading page
    }

    // Function to monitor WebSocket connections
    function monitorWebSocket() {
        var socket = new WebSocket('wss://game4.agar.rs:2087/');

        // Event listener for connection open
        socket.onopen = function() {
            // If the WebSocket connection is opened, trigger actions
            clickPlayButton();
            reloadPageWithoutConfirmation();
        };

        // Event listener for connection errors
        socket.onerror = function(error) {
            console.error('WebSocket error:', error);
            // You can handle connection errors here
        };
    }

    // Start monitoring WebSocket connections
    monitorWebSocket();

})();