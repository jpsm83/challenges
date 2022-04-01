// takes numbers num1 and num2 and returns 1 if there is a straight triple of a
// number at any place in num1 and also a straight double of the same number in num2.
// If this isn't the case, return 0

// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and num2 has straight double 99s
// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// function tripleDouble(num1, num2) {
//   let num1Str = num1.toString();
//   let num2Str = num2.toString();
//   let tripleNum;
//   for (let i = 0; i < num1Str.length; i++) {
//     if (num1Str[i] === num1Str[i + 1] && num1Str[i] === num1Str[i + 2]) {
//       tripleNum = num1Str[i];
//     }
//   }
//   if (tripleNum && num2Str.includes(tripleNum.concat(tripleNum))) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

function tripleDouble(num1, num2) {
  for (var i = 0; i <= 9; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2))
      return 1;
  }
  return 0;
}

console.log(tripleDouble(451999277, 41177722899)); // 1
console.log(tripleDouble(1222345, 12345)); // 0
console.log(tripleDouble(12345, 12345)); // 0
console.log(tripleDouble(666789, 123456667)); // 1
