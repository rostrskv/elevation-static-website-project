"use strict";
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const reservationName = prompt('Please enter the name for your reservation');
const reservationKey =  reservationName.toLowerCase();

if (reservations[reservationKey]) {
    if (!reservations[reservationKey].claimed) {
        // If the reservation exists and is unclaimed, welcome the user (console log or use alert)
        console.log("Welcome, " + reservationName)
    }
    else {
        // If the reservation exists and is already claimed, inform the user about the situation
        console.log(reservationName + ", your reservation exists and is already claimed")
    }
}
else {
    // If there is no reservation, tell the user there is nothing under their name
    console.log(reservationName + ", there is nothing under your name")
    // It so happens that our restaurant has a bunch of open tables.
    reservations[reservationKey] = {claimed: true}
    console.log("But we have a table for you")
}

