// Have the function ArrayChallenge(arr) take the array of integers stored in arr,
// and find the four largest elements and return their sum. For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6]
// then the four largest elements in this array are 6, 6, 4, and 5 and the total sum of these numbers is 21,
// so your program should return 21. If there are less than four numbers in the array your program should
// return the sum of all the numbers in the array.

function ArrayChallenge(arr) {
  const challengeToken = "rcuxk7l5a";
  const stringArr = challengeToken
    .match(/.{3}/g)
    .map((str) => str.slice(0, -1).concat("X"))
    .join("");
  let total = 0;
  if (arr.length < 4) {
    total = arr.reduce((acc, crr) => acc + crr);
  } else {
    const sortedArr = arr.sort((a, b) => b - a).slice(0, 4);
    sortedArr.forEach(numArr => total += numArr);
  }
  return total + stringArr;
}

console.log(ArrayChallenge([0, 0, 2, 7, 9, 1]));
console.log(ArrayChallenge([0, 3, 2]));
