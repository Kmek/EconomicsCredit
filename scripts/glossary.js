var terms = [{
    name: "Credit",
    def: "test testing asdfghj",
}, {
    name: "Interest",
    def: "",
}, {
    name: "Annual Fee",
    def: "",
}, {
    name: "Annual Percentage Rate (APR)",
    def: "",
}, {
    name: "Finance Change",
    def: "",
}, {
    name: "Introductory Rate (Teaser Rate)",
    def: "",
}, {
    name: "Minimum Payment",
    def: "",
}, {
    name: "Variable Interest",
    def: "",
}, {
    name: "Grace Period",
    def: "",
}, {
    name: "Schumer Box",
    def: "",
}, {
    name: "Secure Credit Cards",
    def: "",
}, {
    name: "FICO Score",
    def: "",
}, {
    name: "Deadbeat",
    def: "",
}, {
    name: "Revolver",
    def: "",
}]

// Make a wall of square divs, make them flip over like cards (with the definition on the back)

function addTerm(info) {
    let newTerm = document.getElementsByClassName("flip-card")[0].cloneNode(true)
    newTerm.children[0].children[0].children[0].innerHTML = info.name
    newTerm.children[0].children[1].children[0].innerHTML = info.def
    document.getElementById("galleryDiv").appendChild(newTerm)
}