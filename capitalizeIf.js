// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (str){
  return str
    .split(/-|_/g) //regex separete ane remove the item splited while .split("-" | "_") just separate them
    .map(
      (word, index) => (index > 0 ? word[0].toUpperCase() : word[0]) + word.slice(1)
      // (word, index) => (index > 0 ? word.charAt(0).toUpperCase() : word.charAt(0)) + word.slice(1)
    )
    .join("").replace("_" | "-", "")} else {
      return ""
    }
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase());