// You are going to be given a word. Your job will be to make sure that each
// character in that word has the exact same number of occurrences.
// You will return true if it is valid, or false if it is not.
// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"
// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols.
// The length will be 0 < length < 100.

function validateWord(str) {
  // how to use a regex
  const newStr = str.match(/[a-zA-Z0-9]/g)
  let counts = {};
  for (let letter of str.toLowerCase()) {
    if (counts[letter] === undefined) {
      counts[letter] = 0;
    }
    counts[letter]++;
  }
  return (
    Math.max(...Object.values(counts)) === Math.min(...Object.values(counts))
  );
}

console.log(validateWord("abcabc")); // is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
console.log(validateWord("abcabcd")); // is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
console.log(validateWord("123abc!")); // is a valid word because all of the characters only appear once in the word.
