"use strict"

const people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

const capitalize = function (s) {
    return s[0].toUpperCase() + s.slice(1)
}
const getAge = function (numericAge) {
    if (numericAge < 21) {
        return "Underage"
    }
    if (numericAge > 55) {
        return "55+"
    }
    return numericAge
}
const getLocation = function (country, city) {
    return `${capitalize(city)}, ${capitalize(country)}`
}
const getSummary = function (person) {

    let summary = capitalize(person.name)
    summary += ` is ${getAge(person.age)}`
    summary += ` ${capitalize(person.profession)}`
    summary += ` from ${getLocation(person.country, person.city)}.`
    summary += ` ${capitalize(person.name)} loves to say "${capitalize(person.catchphrase)}".`
    return summary
}

for (const person of people_info) {
    console.log(getSummary(person))
}

// Ex. 2

const story = "In the beginning there was light. Then there were wolves. \
      Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, \
      the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}
const escapeRegExp = function(char) {
    return char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
function getCharsRegExpPart(specialChars)
{
    let regExp = ""
    for(let char of specialChars)
    {
        regExp += escapeRegExp(char)
    }
    return regExp
}

const getWordCounts = function (story, specialChars) {
    let wordCounts = {}
    const specialCharsRegExpPart = getCharsRegExpPart(specialChars)
    const wordsRegexp = new RegExp(`[^\\s${specialCharsRegExpPart}]+`, "g");
    const charsRegexp = new RegExp(`[${specialCharsRegExpPart}]`, "g");
    const words = story.match(wordsRegexp)
    for (const word of words) {
        if (word === "") {
            break
        }
        wordCounts[word] ??= 0
        wordCounts[word]++
    }

    wordCounts[""] = story.match(charsRegexp).length
    return wordCounts
}
console.table(getWordCounts(story, specialChars))