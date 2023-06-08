"use strict";
const splice = function (arr, start = Infinity, deleteCount = Infinity, ...items) {
    // equivalent to return arr.splice(start, deleteCount, ...items);

    const split = function (array, index) {
        const cuttedPart = [];
        while (array.length > index) {
            cuttedPart.unshift(array.pop());
        }
        return cuttedPart;
    }
    const append = function (array, arrayToAppend) {
        while (arrayToAppend.length > 0) {
            array.push(arrayToAppend.shift());
        }
    }
    if (start < -arr.length) {
        start = 0;
    }
    if (start < 0) {
        start = start.arr.length;
    }
    const deleted = split(arr, start);
    const rest = split(deleted, deleteCount);
    append(arr, items);
    append(arr, rest);
    return deleted;
}

const assert = function (result, shouldBe) {
    console.assert(result?.toString() === shouldBe?.toString(),
        `${result} should be ${shouldBe}`)
}

// remove 1 element
let arr = [1, 2, 3]
splice(arr, 0, 1);
assert(arr, [2, 3]);

// add 1 element
arr = [1, 2, 3]
splice(arr, 0, 0, 0);
assert(arr, [0, 1, 2, 3]);

// add 2 elements
arr = [1, 2, 3]
splice(arr, 0, 0, -1, 0);
assert(arr, [-1, 0, 1, 2, 3]);

// replace 1 element
arr = [1, 2, 3]
splice(arr, 1, 1, 55);
assert(arr, [1, 55, 3]);

// delete all elements from index to end
arr = [1, 2, 3, 4, 5]
splice(arr, 1);
assert(arr, [1]);

// returns array of deleted elements
arr = [1, 2, 3]
let deleted = splice(arr, 1);
assert(deleted, [2, 3]);

// returns an array of the deleted element (1 element)
arr = [1, 2, 3]
deleted = splice(arr, 1, 1);
assert(deleted, [2]);

// returns an empty array when no elements are deleted
arr = [1, 2, 3]
deleted = splice(arr, 1, 0, 5);
assert(deleted, []);
