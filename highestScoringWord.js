// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const separeteWords = x.split(" ");
    let biggestScore = 0;
    let biggestWord = "";
    for (let word in separeteWords){
        letterSum = 0
        for (let letter in word){
            lettersSum += alphabet.indexOf(letter) + 1
        }
        if (letterSum > biggestScore){
            biggestScore = letterSum;
            biggestWord = word
        }
    }
    return biggestWord
}

console.log(high('man i need a taxi up to ubud')) //taxi
console.log(high('what time are we climbing up the volcano')) //volcano 
console.log(high('take me to semynak')) //semynak   
console.log(high('aa b')) //aa
console.log(high('b aa')) //b
console.log(high('bb d')) //bb
console.log(high('d bb')) //d
console.log(high('aaa b')) //aaa