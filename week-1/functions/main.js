"use strict"

// Exercise 1
const isEven = function (number) {
    return number % 2 === 0
}

console.log(isEven(2415)) //false
console.log(isEven(-222)) //true

// Exercise 2
const printOddNumbers = function (numbers) {
    for (number of numbers) {
        if (!isEven(number)) {
            console.log(number)
        }
    }
}

printOddNumbers([1, 2, 4, 7, 23, -321, 0, 13]) // 2, 4, 0

// Exercise 3
const checkExists = function (numbers, number) {
    for (numberToCheck of numbers) {
        if (numberToCheck === number) {
            return true
        }
    }
    return false
}

console.log(checkExists([1, 2, 4, 7, 23, -321, 0, 13], 11)) //false
console.log(checkExists([1, 2, 4, 7, 23, -321, 0, 13], 7))  //true

// Exercise 4

const calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a, b) {
        return a - b
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

// Exercise 5 (Extra Practice)
const turnToKing = function (name, money) {
    const increaseByNameLength = function (money, name) {
        return name + " has " + money + " gold coins"
    }
    const makeRegal = function (name) {
        return "His Royal Highness, " + name
    }
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"