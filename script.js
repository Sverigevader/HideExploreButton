// ==UserScript==
// @name     YouTube - Remove Explore button
// @version  1
// @grant    none
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @author	@sverigevader
// ==/UserScript==

window.setTimeout(
	function check() {
		if (document.querySelector('[title="Explore"]')) {
		  main();
		}
		window.setTimeout(check, 250);
	}, 250
);

function main() {
    var node = document.querySelector('[title="Explore"]');
    node.style.display = "none";
}
