

function changeStyleOnLoad() {

    var page = window.location.href;

    if (page.includes("home")) {
        var elem = document.getElementById("button_1");
        elem.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green');
    }

    if (page.includes("chatz")) {
        var elem = document.getElementById("button_2");
        elem.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green');
    }

    if (page.includes("profile")) {
        var elem = document.getElementById("button_3");
        elem.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green');
    }

}