/*console the total of adding all the
numbers from 0 till the given number*/

const addingNum = (num) => {
    total = 0;
    for(let i=0; i<=num; i++){
        total += i;
    }
    return total;
}

//same function in a recursive way
// recursive is a function that calls itself
function addingNumRecursive(n, total = 0){
    if (n<=0){
        return total;
    }
    return addingNumRecursive(n-1, total+n);
}

console.log(addingNumRecursive(5));
console.log(addingNumRecursive(4));

console.log(addingNum(5)); //1+2+3+4+5 = 15
console.log(addingNum(4)); //1+2+3+4 = 10
