// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum of the integers
// to the left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.
// If you are given an array with multiple answers, return the lowest correct index.
// Empty index is equal to 0

// Example - You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array,the sum of left
// side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((acc, crr) => acc + crr, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}

// function findEvenIndex(arr)
// {
//   return arr.findIndex((e,i,a)=> a.slice(0,i).reduce((acc,crr)=>acc+crr,0)==a.slice(i+1).reduce((acc,crr)=>acc+crr,0));
// }

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
