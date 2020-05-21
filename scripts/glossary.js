var terms = [{
    name: "Credit",
    def: "A contractual agreement in which a borrower receives something of value now and agrees to repay the lender at a later date - generally with interest.",
}, {
    name: "Interest",
    def: "Interest is the charge for the privilege of borrowing money, typically expressed as annual percentage rate (APR).",
}, {
    name: "Annual Fee",
    def: "Any fee that is charged on an annual (yearly) basis, usually charged by some companies to their card holders simply for having the card.",
}, {
    name: "Annual Percentage Rate (APR)",
    def: "The annual rate of interest charged to borrowers and paid to investors, including any fees or additional costs associated with the transaction.",
}, {
    name: "Finance Charge",
    def: "The cost of borrowing money, including interest and other fees.",
}, {
    name: "Introductory Rate (Teaser Rate)",
    def: "A low rate offered by a credit card company as an incentive to apply for the card. The APR will go up after the introductory period is over.",
}, {
    name: "Minimum Payment",
    def: "The lowest amount a customer can pay on their revolving credit account per month to remain in good standing with the credit card company.",
}, {
    name: "Variable Interest",
    def: "An interest rate on a loan or security that fluctuates over time because it is based on an underlying benchmark interest rate or index that changes periodically.",
}, {
    name: "Grace Period",
    def: "A set length of time after the due date during which payment may be made without penalty.",
}, {
    name: "Schumer Box",
    def: "A mandatory table that appears in credit card agreements showing basic information about the card's rates and fees.",
}, {
    name: "Secure Credit Cards",
    def: "A type of credit card that is backed by a cash deposit from the cardholder. This acts as collateral on the account, in case the cardholder can't make payments.",
}, {
    name: "FICO Score",
    def: "A type of credit score created by the Fair Isaac Corporation. Lenders use borrowers' FICO scores along with other details to assess credit risk.",
}, {
    name: "Deadbeat",
    def: "Someone who always pays their cards on time. Banks HATE them.",
}, {
    name: "Revolver",
    def: "Someone who continuously misses payments or pays late. Banks LOVE them.",
}]

// Make a wall of square divs, make them flip over like cards (with the definition on the back)

function addTerm(info) {
    let newTerm = document.getElementsByClassName("flip-card")[0].cloneNode(true)
    newTerm.children[0].children[0].children[0].innerHTML = info.name
    newTerm.children[0].children[1].children[0].innerHTML = info.def
    document.getElementById("galleryDiv").appendChild(newTerm)
}