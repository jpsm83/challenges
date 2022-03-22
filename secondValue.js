/*organize the numbers in crescent order
eliminate the repeated numbers
if one or two numbers them console it
if 3 numbers console them, add ===, and console the second gretest one
if 4 numbers console them, add ===, and console the second smallest and second biggest ones*/

const secondValue = (arr) => {
    const sortArr = arr.sort((a, b) => a - b);
    const newArr = []
    for (let i=0; i<sortArr.length; i++){
        if(sortArr[i] !== sortArr[i+1]){
            newArr.push(sortArr[i])
        }
    }
    if (newArr.length === 3){
        return (`${newArr} === ${newArr[newArr.length -2]}`)
    }
    else if (newArr.length >= 4){
        return (`${newArr} === ${newArr[1]}, ${newArr[newArr.length -2]}`)
    } else
return newArr
}

// function secondValue(arr) {
//     let newArr = [...new Set(arr)].sort((a, b) => a-b);
//     if (newArr.length === 1) {
//         return `${newArr[0]}`;
//     } else if (newArr.length === 2) {
//         return `${newArr[0]},${newArr[1]}`;
//         } else if (newArr.length === 3) {
//             return `${newArr} === ${newArr[1]}`;
//         } else {
//             return `${newArr} === ${newArr[1]},${newArr[newArr.length-2]}`;
//         }
//     }

console.log(secondValue([1]));
console.log(secondValue([4, 2]));
console.log(secondValue([11, 44, 22]));
console.log(secondValue([3, 2, 88, 3, -11, 67, 7]));