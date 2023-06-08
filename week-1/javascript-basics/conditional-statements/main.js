"use strict";
// Conditional Statements

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

// If the customer has previously bought a Tesla, and the customer is a US citizen, the AI should check how long ago the customer bought their Tesla
if (boughtTesla) {
    if (isUSCitizen) {
        let yearsOfOwnership = currentYear - yearOfTeslaPurchase;
        // If the Tesla was bought four or more years ago, the AI should ask (console log) whether the customer would like an upgrade
        if (yearsOfOwnership >= 4) {
            console.log("Would you like an upgrade?");
            // Otherwise, it should ask whether the customer is satisfied with the car
        } else {
            console.log("Are you satisfied with the car?");
        }
    }
    // If the customer is not as US citizen but has bought a Tesla, the AI should ask whether the customer would like to move to the US
    else {
        console.log("Would you like to move to the US?");
    }
}
// If the customer has not bought a Tesla, the AI should ask whether they are interested in buying one
else {
    console.log("Are you interested in buying the car?");
}
