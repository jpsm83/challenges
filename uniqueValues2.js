/*check for unique values using Set() data structure
return true if values are unique
if not return false */

function unique(str) {

    //one way to do it
    return new Set(str).size === str.length;
}

    //another way to do it
    /*let tempStr = new Set();
    for (let letter of str) {
        if (tempStr.has(letter)) {
            return false;
        }
        tempStr.add(letter);
    }
    return true;
}*/

console.log(unique('abcd')); //true
console.log(unique('abcdade')); //false