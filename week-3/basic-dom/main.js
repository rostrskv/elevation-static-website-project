"use strict"
const playingField = document.getElementById("playing-field")
const up = document.getElementById("up")
const left = document.getElementById("left")
const right = document.getElementById("right")
const down = document.getElementById("down")
const ball = document.getElementById("ball")

const move = function (direction, increment) {
    const position = (parseInt(ball.style[direction]) || 0) + increment
    ball.style[direction] = `${position}px`
}

const moveLeft = function () {
    move("left", -15)
}
const moveRight = function () {
    return move("left", 15)
}
const moveUp = function () {
    return move("top", -15)
}
const moveDown = function () {
    return move("top", 15)
}

const addHandlers = function () {
    up.onclick = moveUp
    left.onclick = moveLeft
    right.onclick = moveRight
    down.onclick = moveDown
    
}

const addHeaders = function () {
    const header = document.createElement("h1")
    header.innerHTML = "The Best Game Ever"
    header.style.color = "#c0392b"
    header.style.fontFamily = "Helvetica"
    document.body.appendChild(header)

    const subHeader = document.createElement("h2")
    subHeader.innerHTML = "Game by: ~The Creator~"
    subHeader.classList.add("sub-header")
    document.body.appendChild(subHeader)
}

addHeaders()
addHandlers()