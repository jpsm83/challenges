/*check if the word is a palindrome: a
word that writes the same backwards*/

function isPalindrome(str) {
    let first = str.match(/[a-z]+/ig).join('').toLowerCase()
    let second = first.split('').reverse().join('');
    return first === second;
}
console.log(isPalindrome('Was it a car or a cat I saw'));
console.log(isPalindrome('Red -rum-, sir,-is-murder'));
console.log(isPalindrome('I got up early this morning'));