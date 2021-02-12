/*difficulty medium
find the first word with greatest number of repeated letters
if they all have no repeated letters print -1*/

function countLetters(str) {
//separete each individual word
    let tempArr = str.split(' ');
//create a new array that will run a function in every single word
    tempArr = tempArr.map(item => {
//separete every letter from each word and lower case them
        let tempItem = item.toLowerCase().split('');
        return tempItem.reduce((acc, curr) => {
//if the letter already exists in the word, acc[curr] is goin to
//add one, if not it will return 1
            acc[curr] = acc[curr] ? acc[curr] +1 : 1;
//update the value of max if it is bigger tham 1
            if (acc[curr]>acc.max) {
                acc.max = acc[curr];
            }
//reduce method has to ALWAYS return ACCumulator
            return acc;
//reduce will return an object with 2 propertys: max & word
        }, {max:1, word:item});
    });
//setup a for loop to check the word with more repeat letter
//update amount and word following the loop
    let amount = 1;
    let word = '';
    for (let item of tempArr) {
        if (item.max>amount) {
            amount = item.max;
            word = item.word;
            }
        }
//if amount is bigger tham 1 them print the word otherways print -1
        if (amount>1) {
            return word;
    }
    return -1;
}

console.log(countLetters('Javascript is the greatest programming language'));
//Javascript