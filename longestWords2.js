/*find and console the biggest word
if there is more tham one console all*/

const longestWord = (str) => {
    const sepWords = str.split(" ")
    let longWords = [""];
    for (let word of sepWords) {
        if (word.length>longWords[0].length){
            longWords = [];
            longWords.push(word)
        } else if (word.length === longWords[0].length){
            longWords.push(word)
        }
    }
    return longWords
}

// function longestWord(str) {
//     let words = str.split(' ');
//     let size = 0;
//     let max = [''];
//         for (let i=0; i<words.length; i++) {
//             if (words[i].length >= size) {
//                 size = words[i].length;
//             if (max[max.length-1].length < words[i].length){
//                 max = [];
//                 max.push(words[i]);
//             } else {
//                 max = [...max, words[i]];
//             }
//         }
//     }
//     return max;
// }

console.log(longestWord('i woke up early today'));
//[ 'early', 'today' ]