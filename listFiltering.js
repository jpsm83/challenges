// In this kata you will create a function that takes a list of non-negative
// integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    const newList = [];
    for(let i=0; i<l.length; i++){
        if(Number.isInteger(l[i])){
            newList.push(l[i])
        }
    }
    return newList
  }

// function filter_list(l) {
// //   return l.filter((isNumber) => typeof isNumber == "number");
//   return l.filter((isNumber) => Number.isInteger(isNumber));
// }

console.log(filter_list([1, 2, "a", "b"])); // [1,2]
console.log(filter_list([1, "a", "b", 0, 15])); // [1,0,15]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // [1,2,123]
