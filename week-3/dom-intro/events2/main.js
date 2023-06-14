"use strict"
const box = document.createElement("div")
box.innerHTML = "click me"
box.onclick = function () {
    box.innerHTML = "I'm alive!"
}
document.body.appendChild(box)