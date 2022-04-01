// Given a string, swap the case for each of the letters.
// ""           ->   ""
// "CodeWars"   ->   "cODEwARS"
// "abc"        ->   "ABC"
// "ABC"        ->   "abc"
// "123235"     ->   "123235"

function swap(str) {
  const newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr.push(str[i].toUpperCase());
    } else {
      newStr.push(str[i].toLowerCase());
    }
  }
  return newStr.join("");
}

console.log(swap("")); // ""
console.log(swap("CodeWars")); // "cODEwARS"
console.log(swap("abc")); // "ABC"
console.log(swap("ABC")); // "abc"
console.log(swap("123235")); // "123235"
