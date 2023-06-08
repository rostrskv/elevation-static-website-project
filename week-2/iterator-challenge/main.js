const myObject = {

    numbers: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],
    index: 0,
    next() {
        return {
            done: this.index >= this.numbers.length,
            value: this.numbers[this.index++]
        };
    },
    [Symbol.iterator]() {
        return this;
    }
}

for (let x of myObject) {
    console.log(x)
}