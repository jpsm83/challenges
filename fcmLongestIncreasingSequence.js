// take an array of positive integers and return the length of the longest increasing subsequence (LIS).
// A LIS is a subset of the original list where the numbers are in sorted order,
// from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique,
// and there can be several different subsequences.
// if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6].
// For this input, your program should return 3 because that is the length of the longest increasing subsequence.

function LongestIncreasingSequence(arr) {
  let seqArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newArr = [arr[i]]
    for (let y = i + 1; y < arr.length; y++) {
      if (arr[y] > newArr[newArr.length - 1]) {
        newArr.push(arr[y]);
      }
    }
    seqArr.push(newArr);
    newArr = [arr[i]]
  }
  return seqArr.sort((a, b) => a.length - b.length)[seqArr.length-1].length;
}

console.log(LongestIncreasingSequence([4, 3, 5, 1, 6])); // 3
console.log(LongestIncreasingSequence([9, 9, 4, 2])); // 1
console.log(
  LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])
); // 7
console.log(LongestIncreasingSequence([4, 3, 5, 1, 6])); // 3
console.log(LongestIncreasingSequence([2, 4, 3, 5, 1, 7, 6, 9, 8])); // 5
console.log(
  LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])
); // 7
console.log(LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60])); // 5
console.log(LongestIncreasingSequence([2, 5, 7, 8, 9, 4, 10])); // 6
console.log(LongestIncreasingSequence([9, 9, 2, 4])); // 2
console.log(LongestIncreasingSequence([9, 9, 4, 2])); // 1
console.log(LongestIncreasingSequence([80, 80])); // 1
console.log(LongestIncreasingSequence([10, 12, 4, 6, 100, 2, 56, 34, 79])); // 4
console.log(
  LongestIncreasingSequence([
    10, 12, 4, 6, 100, 2, 56, 34, 79, 45, 33, 12, 45, 67, 89,
  ])
); // 6
