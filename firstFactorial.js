/*console the first factorial of a given number: first factorial
starts from one and goes multiplaing till the given number*/

function firstFactorial(num){
    let total = 1;
    for (let i=1; i<=num; i++){
        total *= i;
    }
    return total;
}

console.log(firstFactorial(4)); //1*2*3*4 = 24
console.log(firstFactorial(2)); //1*2 = 2
console.log(firstFactorial(7)); //1*2*3*4*5*6*7 = 5040
console.log(firstFactorial(9)); //1*2*3*4*5*6*7*8*9 = 362880