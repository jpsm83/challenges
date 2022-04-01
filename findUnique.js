// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  const sortedArr = arr.sort();
  for (let i=0; i<sortedArr.length-1; i++){
    if(sortedArr[i] !== sortedArr[i+1]){
      return sortedArr[i+1]
    }
  }
  return "they are all the same"
}


console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
console.log(findUniq([10, 10, 11, 10, 10, 10])); // 11
console.log(findUniq([10, 10, 10, 10, 10, 10])); // all the same
