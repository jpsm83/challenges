// moving mediun is the mediun number between a window of numbers
// have the function ArrayChallenge(arr) read the array of numbers stored in arr which will contain a
// sliding window size, N, as the first element in the array and the rest will be a list of numbers.
// your program should return the moving median for each element based on the
// element and its N-1 predecessors, where N is the sliding window size.
// the final output should be a string with the moving median corresponding to each entry in the original array separated by commas.
// note that for the first few elements (until the window size is reached), the median is computed on a smaller number of entries.

// for example: if arr is [3, 1, 3, 5, 10, 6, 4, 3, 1] then your program should output "1,2,3,5,6,6,4,3"
// first element is the N sliding window size = 3
// the rest is the list of numbers = 1, 3, 5, 10, 6, 4, 3, 1

const MovingMedian = (arr) => {
  const windowSlidingSize = arr[0];
  const listOfNumbers = arr.slice(1);
  let newArr = [];
  let count = listOfNumbers[0] - 1;
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (i < windowSlidingSize - 1) {
      count += 1;
      newArr.push(count);
    } else {
      newArr.push(listOfNumbers.slice(i - 2, i + 1).sort((a, b) => a - b)[1]);
    }
  }
  return newArr.toString();
};

// function median(arr) {
//   if (arr.length == 1) {
//       return arr[0]
//   } else if (arr.length === 2) {
//       return (arr[0] + arr[1]) / 2
//   } else {
//       const sortedArr = arr.sort((a, b) => a - b)
//       return median(arr.slice(1, arr.length - 1))
//   }
// }

// function MovingMedian(arr) {
//   const window = arr[0]
//   const elements = arr.slice(1, arr.length)
//   const medians = []
//   for (let i = 0; i < elements.length; i++) {
//       if (i < window - 1) {
//           medians.push(median(elements.slice(0, i + 1)))
//       } else {
//           medians.push(median(elements.slice(i - window + 1, i + 1)))
//       }
//   }
//   return medians.join(`,`)
// }

console.log(MovingMedian([3, 1, 3, 5, 10, 6, 4, 3, 1])); // 1,2,3,5,6,6,4,3
console.log(MovingMedian([5, 2, 4, 6])); // 2,3,4
console.log(MovingMedian([3, 0, 0, -2, 0, 2, 0, -2])); // 0,0,0,0,0,0,0
