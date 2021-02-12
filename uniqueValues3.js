/*check for unique values using array, object string method lastIndexOf()
return true if values are unique
if not return false */

function unique(str) {
    //solution with string method lastIndexOf()
    for (let i=0; i<str.length; i++) {
        if (str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
    return true
}

    //solution using object
    /*let values = {};
    for (let letter of str) {
        if (values[letter]) {
            return false
        }
        values[letter] = 'exists'
    }
    return true
}*/

    //solution using array
    /*let values = [];
    for (let letter of str) {
        if (values.indexOf(letter) !== -1) {
            return false;
        }
        //values.push(letter);
        values = [...values, letter];
    }
    return true
}*/

console.log(unique('abcde'));
console.log(unique('abacdefb'));