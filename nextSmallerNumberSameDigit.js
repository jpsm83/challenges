// Write a function that takes a positive integer and returns the
// nextsmaller positive integer containing the same digits.
// Return -1 if return is, Nothing, None, there is no smaller number
// that contains the same digits, the leading digit equal zero.

function nextSmaller(n) {
  let previewsNum = n;
  for (let i = previewsNum; i > 0; i--) {
    previewsNum--;
    const previewsNumArr = previewsNum.toString().split("");
    const targetNumArr = n.toString().split("");
    if(JSON.stringify(previewsNumArr.sort()) === JSON.stringify(targetNumArr.sort())){
        return previewsNum
    }
  }
  return -1
}

console.log(nextSmaller(21)); // 12
console.log(nextSmaller(531)); // 513
console.log(nextSmaller(2071)); // 2017
console.log(nextSmaller(9)); // -1
console.log(nextSmaller(111)); // -1
console.log(nextSmaller(135)); // -1
console.log(nextSmaller(1027)); // -1
console.log(nextSmaller(907)); // 790
console.log(nextSmaller(414)); // 144
console.log(nextSmaller(123456798)); // 123456789
console.log(nextSmaller(1234567908)); // 1234567890

// time efficience fail because this one takes to long
// it has to check the code 123456789 times
// code is not wrong, is working, but bad efficiene
console.log(nextSmaller(123456789)); // -1