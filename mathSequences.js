/* check if the array has an mathematic pattern and
return arithmetic, geometric or -1 in case it has no pattern*/

function mathSequences(arr) {
    //one way to do it
    let arith = [];
    let geo = [];

    for (let i=1; i<arr.length; i++) {
        let numberOne = arr[i] - arr[i-1];
        arith.push(numberOne);
        let numberTwo = arr[i] / arr[i-1];
        geo.push(numberTwo);
    }
    for (let i=1; i<arith.length; i++)
    if (arith[i] === arith[i-1]) {
        return 'Arithmetic';
    }
    for (let i=1; i<geo.length; i++)
    if (geo[i] === geo[i-1]) {
        return 'Geometric';
    }
    return -1
}

    //another way to do it
    /*let arith = new Set();
    let geo = new Set();

    for (let i=1; i<arr.length; i++) {
        let numberOne = arr[i] - arr[i-1];
        arith.add(numberOne);
        let numberTwo = arr[i] / arr[i-1];
        geo.add(numberTwo);
    }
    if (arith.size === 1) {
        return 'Arithmetic';
    }
    if (geo.size === 1) {
        return 'Geometric';
    }
    return -1
}*/

console.log(mathSequences([10, 20, 30, 40])); //Arithmetic
console.log(mathSequences([2, 4, 8, 16])); //Geometric
console.log(mathSequences([2, 5, 14, 89])); //-1