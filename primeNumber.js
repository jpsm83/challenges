/*check if the number is prime number: a number
that can be diveded evenly only by it self or 1,
also you can use square root: is a number which
produces a specified quantity when multiplied by
itself, ex 7*7= 49, 7 is a square root of 49*/

function primeNum(n) {

    //one way to do it
    if (n<2 || !Number.isInteger(n)) {
        return false;
    }
    for (let i=2; i<=Math.sqrt(n); i++) {
        if (n%i===0) {
            return false
        }
    }
    return true
}

    //another way to do it
    /*if (n<2 || !Number.isInteger(n)) {
        return false;
    }
    for (let i=2; i<n-1; i++)
        if (n%i===0) {
            return false
        }
    return true
}*/

console.log(primeNum(8)); //false
console.log(primeNum(11)); //true
console.log(primeNum(121)); //false
console.log(primeNum(127)); //true