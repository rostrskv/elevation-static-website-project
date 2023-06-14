"use strict"
const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")

console.log(down.innerHTML)
down.innerHTML = "Down"

const ball = document.getElementById("ball");
ball.style.backgroundColor = "yellow"

const moveRight = function () {
    const left = parseInt(ball.style.left) || 0
    ball.style.left = `${left + 15}px`
}
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creator~"
subHeader.classList.add("sub-header")
document.body.appendChild(subHeader)