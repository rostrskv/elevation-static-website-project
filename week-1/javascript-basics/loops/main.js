"use strict";

//Exercise 1

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i in names) {
    people.push({
        name: names[i],
        age: ages[i]
    })
}

// Exercise 2 

for (let person of people) {
    console.log(person.name + " is " + person.age + " years old")
}

// Exercise 3
{
    const posts = [
        { id: 1, text: "Love this product" },
        { id: 2, text: "This is the worst. DON'T BUY!" },
        { id: 3, text: "So glad I found this. Bought four already!" }
    ]

    for (let i = posts.length - 1; i >= 0; i--) {
        const post = posts[i]
        if (post.text === "This is the worst. DON'T BUY!") {
            posts.splice(i, 1)
        }
    }
    console.log(posts)
}

// Exercise 4
{
    const posts = [
        {
            id: 1,
            text: "Love this product",
            comments: []
        },
        {
            id: 2,
            text: "This is the worst. DON'T BUY!",
            comments: [
                { id: 1, text: "Idiot has no idea" },
                { id: 2, text: "Fool!" },
                { id: 3, text: "I agree!" }
            ]
        },
        {
            id: 3,
            text: "So glad I found this. Bought four already!",
            comments: []
        }
    ]

    const postIdToRemove = 2
    const commentIdToRemove = 3
    for (let postIndex in posts) {
        const post = posts[postIndex]
        if (post.id === postIdToRemove) {
            const comments = post.comments
            for (let commentIndex in post.comments) {
                const comment = comments[commentIndex]
                if (comment.id === commentIdToRemove) {
                    comments.splice(commentIndex, 1);
                    break
                }
            }
            break
        }
    }
    console.log(posts)
}

// Extension

const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (let letter of Object.keys(dictionary)) {
    console.log("Words that begin with  " + letter + ":")
    for(let word of dictionary[letter])
    {
        console.log("    " + word);
    }
}
