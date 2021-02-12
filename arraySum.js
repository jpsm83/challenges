/*check if the biggest number is equal
to the sum of all the others numbers*/

function arrSum(arr) {
    let arrOrder = arr.sort((a,b)=> a - b);
    let bigNum = arrOrder.pop();
    let number = 0;
    arrOrder.forEach(numArr => (number += numArr));
    return bigNum === number;
}


console.log(arrSum([1,6,4,2,13])); //true
console.log(arrSum([1,2,4,34,22])); //false