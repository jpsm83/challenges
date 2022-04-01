// Write a function that takes a string and an integer n as
// parameters and returns a list of all words that are longer than n.

function filterLongWords(sentence, n) {
  let newArr = [];
  sentence.split(" ").map((word) => {
    if (word.length > n) {
      newArr.push(word);
    }
  });

  //   const splitWords = sentence.split(" ");
  //   let newArr = [];
  //   for (let i = 0; i < splitWords.length; i++) {
  //     if (splitWords[i].length > n) {
  //       newArr.push(splitWords[i]);
  //     }
  //   }
  return newArr;
}

function filterLongWords(sentence, n) {
  return sentence.split(" ").filter((x) => x.length > n);
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4)); // ['quick', 'brown', 'jumps']
