

function changeStyleOnLoad() {

    var page = window.location.href;

    if (page.includes("index")) {
        var elem = document.getElementById("button_1");
        elem.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green');
    }

    if (page.includes("covid19")) {
        var elem = document.getElementById("button_2");
        elem.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green');
    }

    if (page.includes("news")) {
        var elem = document.getElementById("button_3");
        elem.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green');
    }

    if (page.includes("cv")) {
        var elem = document.getElementById("button_4");
        elem.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green');
    }


}