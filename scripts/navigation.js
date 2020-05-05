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
// items are: page title, doc name, and ""
const navItems = [
    ["Debit Cards vs. Credit Cards", "debitCredit.html", ""],
    ["Standard Credit Cards vs. Charged Cards", "standardCharge.html", ""],
    ["Credit Card Pros & Cons", "prosCons.html", ""],
    ["What To Look For", "lookFor.html", ""],
    ["Credit Card Common Tips", "tips.html", ""],
    ["What To Do: Stole Card", "stolen.html", ""],
    ["What is a FICO Score", "fico.html", ""],
    ["Glossary", "glossary.html", "#9e4476"]
]

var navigationDiv = document.getElementById("navigation")

for (let i = 0; i < navItems.length; i++) {
    let row = document.createElement("button")
    row.innerHTML = navItems[i][0]

    row.setAttribute("onclick", ("loadFile('" + navItems[i][1] + "')"))
    navigationDiv.appendChild(row)
}