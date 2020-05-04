// JavaScript for Economic Systems Website

// Constants
// var page = document.getElementById("page")
var page = document.getElementById("pageLayout")
var lastPage = document.getElementById("lastPage")

/******************** Change Accent Color ********************/
// Print Color
// console.log(getComputedStyle(document.body).getPropertyValue('--accent'))

function changeAccent(color) {
    document.documentElement.style.setProperty('--accent', color)
}

/******************** Change Title ********************/
function changeTitle(text) {
    document.getElementById("title").innerHTML = text
}

/******************** Page Loading Functions ********************/
function loadFile(items) {
    // items = items.split(",")
    window.location.href = ("#" + items)
}

function loadFileFromUrl() {
    let url = document.URL
    if (!url.includes("#")) {
        loadFile("welcome.html")
    } else {
        let file = url.slice(url.lastIndexOf("#") + 1)
        $('#page').load("docs/" + file + "#")
        window.scrollTo()
    }
}