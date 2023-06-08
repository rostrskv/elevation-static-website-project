"use strict";

// Exercise 1
const p1 = {
    name: "Jill",
    age: "25",
    city: "New York"
}
const p2 = {
    name: "Robert",
    age: "25",
    city: "Tokyo"
}

// If the people are the same age
if (p1.age === p2.age) {
    // If the people live in the same city
    // Print “Jill wanted to date Robert”
    if (p1.city === p2.city) {
        console.log(p1.name + " wanted to date " + p2.name)
    } else {
        // If they’re not in the same city
        // Print “Jill wanted to date Robert, but couldn’t”
        console.log(p1.name + " wanted to date " + p2.name + ", but couldn’t")
    }
}

// Exercise 2
let library = {
    books: [
        { title: "The Stranger", author: "Albert Camus " },
        { title: "In Search of Lost Time", author: "Marcel Proust" },
        { title: "The Trial", author: "Franz Kafka" }
    ]
}

