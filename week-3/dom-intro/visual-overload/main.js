"use strict";
const container = document.getElementById("container")
const changeBoxColor = function () {
    this.style.backgroundColor = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},${Math.random()})`
}
const addBoxes = function () {
    const addBox = function () {
        const box = document.createElement("div")
        box.classList.add("box")
        const left = Math.random() * 100
        const width = Math.random() * (100 - left)
        const top = Math.random() * 100;
        const height = Math.random() * (100 - top)
        box.style.left = `${left}%`
        box.style.width = `${width}%`
        box.style.top = `${top}%`
        box.style.height = `${height}%`
        changeBoxColor.call(box)
        box.onmouseover = changeBoxColor
        container.appendChild(box)
    }
    for (let i = 0; i < 1000; i++) {
        addBox()
    }
}
addBoxes()