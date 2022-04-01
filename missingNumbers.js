// Have the function Consecutive(arr) take the array of integers stored in arr and return
// the minimum number of integers needed to make the contents of arr consecutive from the
// lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output
// should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive
// array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.

function Consecutive(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    const difBetweenNum = sortedArr[i + 1] - sortedArr[i];
    let newNumber = sortedArr[i];
    for (let j = 0; j < difBetweenNum - 1; j++) {
      newNumber++;
      newArr.push(newNumber);
    }
  }
  return newArr;
}

console.log(Consecutive([5, 10, 15])); // 8
console.log(Consecutive([4, 8, 6])); // 2
console.log(Consecutive([-2, 10, 4])); // 10
