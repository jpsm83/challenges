// your function receives an array of integers as input.
// Your task is to determine whether the numbers are in ascending order.
// An array is said to be in ascending order if there are no two adjacent
// integers where the left integer exceeds the right integer in value.
// For the purposes of this Kata, you may assume that all inputs are valid,
// non-empty arrays containing only integers.

function inAscOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(inAscOrder([1, 2, 4, 7, 19])); // returns true
console.log(inAscOrder([1, 2, 3, 4, 5])); // returns true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); // returns false
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); // returns false because the numbers are in DESCENDING order
