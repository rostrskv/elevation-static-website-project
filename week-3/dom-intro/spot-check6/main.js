"use strict"
const addListItem = function()
{
    const li = document.createElement("li")
    li.innerHTML="A new item!"
    const list = document.getElementById("clickable-list")
    list.appendChild(li);
}