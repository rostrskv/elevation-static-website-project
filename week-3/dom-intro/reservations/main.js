"use strict";
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const checkReservation = function () {
    const getCheckResult = function (reservationName) {
        const reservationKey = reservationName.toLowerCase()

        if (reservationKey in reservations) {
            if (!reservations[reservationKey].claimed) {
                // If the reservation exists and is unclaimed, welcome the user (console log or use alert)
                reservations[reservationKey] = { claimed: true }
                return `Welcome, ${reservationName}`
            }
            else {
                // If the reservation exists and is already claimed, inform the user about the situation
                return `${reservationName}, your reservation exists and is already claimed`
            }
        }
        else {
            // If there is no reservation, tell the user there is nothing under their name
            // It so happens that our restaurant has a bunch of open tables.
            reservations[reservationKey] = { claimed: true }
            return `${reservationName}, there is nothing under your name. But we have a table for you`
        }
    }
    const guestName = document.getElementById("guest-name").value
    const result = getCheckResult(guestName)
    document.getElementById("result").innerHTML = result
}
document.getElementById("reservation-button").onclick = checkReservation;