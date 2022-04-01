// Modify the spacify function so that it returns the given string
// with spaces inserted between each character.

function spacify(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (i != str.length - 1) {
      newStr.push(str[i] + " ");
    } else {
      newStr.push(str[i]);
    }
  }
  return newStr.join("");
}

// function spacify(str) {
//   return str.split("").join(" ");
// }

console.log(spacify("hello world")); // returns "h e l l o   w o r l d"
