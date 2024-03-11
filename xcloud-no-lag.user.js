// ==UserScript==
// @name         Xbox Cloud Gaming - No Lag
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Try to reduce lag while using Xbox Cloud Gaming
// @author       You
// @match        https://www.xbox.com/en-US/play*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function reduceLag() {
        // Try to reduce lag by limiting the frame rate
        const video = document.querySelector('video');
        if (video) {
            video.playbackRate = 0.5; // Adjust this value to your preference
            video.requestVideoFrameCallback(reduceLag);
        }
    }

    // Start reducing lag
    reduceLag();
})();
