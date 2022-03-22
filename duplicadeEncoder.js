// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if
// that character appears only once in the original string, or ")" if that character appears more than once in the original
// string. Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let encoded = "";
  for (let i in word.toLowerCase()) {
    let letter = word[i].toLowerCase();
    // indexOf() returns the position of the first occurrence of a specified value in a string
    // lastIndexOf() method returns the position of the last occurrence of a specified value in a string
    encoded += word.indexOf(letter) != word.lastIndexOf(letter) ? ")" : "(";
  }
  console.log(encoded);
}

duplicateEncode("din");
duplicateEncode("recede");
duplicateEncode("Success");
duplicateEncode("(( @");
