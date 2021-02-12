//reverse the word putting all in lower case without use any method

function reverseWord(str){
    //with method
    /*let reversed = str.split('').reverse().join('').toLowerCase();
    return reversed*/

    //without methods
    let newWord = '';
    for (let i=str.length-1; i>=0; i--){
        newWord += str[i];
    }
    return newWord.toLowerCase();
}

console.log(reverseWord('Javascript'));