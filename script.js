// ==UserScript==
// @name     YouTube - Remove Trending button
// @version  1
// @grant    none
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @author	@sverigevader
// ==/UserScript==

window.setTimeout(
	function check() {
		if (document.querySelector('[title="Trending"]')) {
		  main();
		}
		window.setTimeout(check, 250);
	}, 250
);

function main() {
    var node = document.querySelector('[title="Trending"]');
    node.style.display = "none";
}
