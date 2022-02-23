// ==UserScript==
// @name     YouTube - Remove Explore button
// @description Hides the Explore button from YouTube
// @version  3
// @grant    none
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @author	@sverigevader
// @namespace https://greasyfork.org/users/692021
// ==/UserScript==

window.setTimeout(
    function check() {
        if (document.querySelector('[title="Explore"]')) {
            explore();
        }
        if (document.querySelector('[title="Shorts"]')) {
            shorts();
        }
        window.setTimeout(check, 250);
    }, 250
);

function explore() {
    var node = document.querySelector('[title="Explore"]');
    node.style.display = "none";
}

function shorts() {
    var node = document.querySelector('[title="Shorts"]');
    node.style.display = "none";
}
