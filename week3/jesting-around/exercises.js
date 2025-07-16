
class Exercises {
    constructor() {

    }
    //should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    validate(arr) {
        const bools = arr.filter(val => typeof val === 'boolean');
        if (bools.length === 0) {
            return { error: "Need at least one boolean" };
        }

        const trues = bools.filter(val => val === true).length;
        const falses = bools.length - trues;

        return trues > falses;
    }

    add(x, y) {
        let stuff = [];
        stuff.push(x, y);
    }

}

module.exports = Exercises