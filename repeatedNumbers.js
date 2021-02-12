/*console the numbers repeated,
if there is none return -1*/

function testRepeat(arr) {
    let dup = new Set();
    let compare = new Set();
    let noDup = -1
    for (let num of arr) {
        if (!compare.has(num)){
            compare.add(num);
        } else {
            dup.add(num);
        }
    }
    if(dup.size > 0){
        return dup;
        } else {
    return noDup;
    }
};

console.log(testRepeat([5, 2, 2, 1, 5])); //{2, 5}
console.log(testRepeat([6, 5, 5, 10, 10, 10])); //{5, 10}
console.log(testRepeat([3, 4, 1, 6, 10])); //-1