//find and console the first biggest word

function longestWord(str) {
    let words = str.split(' ');
    let max = "";
    for (let word of words) {
        if (word.length>max.length) {
            max = word;
        }
    }
    return max;
}

console.log(longestWord('i woke up early today'));
//early