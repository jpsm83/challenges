/*find and console the biggest word
if there is more tham one console all*/

function longestWord(str) {
    let words = str.split(' ');
    let size = 0;
    let max = [''];
        for (let i=0; i<words.length; i++) {
            if (words[i].length >= size) {
                size = words[i].length;
            if (max[max.length-1].length < words[i].length){
                max = [];
                max.push(words[i]);
            } else {
                max = [...max, words[i]];
            }
        }
    }
    return max;
}

console.log(longestWord('i woke up early today'));
//[ 'early', 'today' ]