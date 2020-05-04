// JS for Navigation (goes with navigation.css)
// Creates navigation buttons so they don't have to be copied
// Horizontal Navigation Version

/******************** Setup NavBtn ********************/
const navBtn = document.getElementById("navBtn")
let navDots = document.createElement("h2")
navDots.innerHTML = "..."
navBtn.appendChild(navDots)

/******************** Make Dropdown Div ********************/
var navigationDiv = document.createElement("div")
navigationDiv.setAttribute("id", "navigation")
navBtn.appendChild(navigationDiv)

/******************** Make Dropdown Contents ********************/
const navTitles = ["Debit Cards vs. Credit Cards", "Standard Credit Cards vs. Charged Cards", "Credit Card Pros & Cons", "What To Look For", "Credit Card Common Tips", "What To Do: Stole Card", "What is a FICO Score", "Glossary"]
const navLinks = ["", "", "", "", "", "", "", ""]

var navigationDiv = document.getElementById("navigation")

for (let i = 0; i < navTitles.length; i++) {
    let row = document.createElement("button")
    row.innerHTML = navTitles[i]

    row.setAttribute("onclick", ("loadFile('" + navLinks[i] + "')"))
    navigationDiv.appendChild(row)
}