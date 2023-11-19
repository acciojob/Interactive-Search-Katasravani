//your JS code here. If required.
// script.js

function activateSearch() {
    var searchComponent = document.getElementById("searchComponent");
    searchComponent.classList.add("active");

    var searchInput = document.getElementById("searchInput");
    searchInput.focus();
}
