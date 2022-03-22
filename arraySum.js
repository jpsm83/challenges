/*check if the biggest number is equal
to the sum of all the others numbers*/

// const arrSum = (arr) => {
//     const sortNum = arr.sort((a, b) => a - b);
//     const sunNum = arr.reduce((total, number) => total + number) - sortNum[sortNum.length - 1];
//     return sortNum[sortNum.length -1] === sunNum;
// }

function arrSum(arr) {
    let arrOrder = arr.sort((a,b)=> a - b);
    let bigNum = arrOrder.pop(); // pop() mutates the original arr
    let number = 0;
    arrOrder.forEach(numArr => (number += numArr));
    return bigNum === number;
}

console.log(arrSum([1,6,4,2,13])); //true
console.log(arrSum([1,2,4,34,22])); //false