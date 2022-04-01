// take the array of strings stored in strArr, which will contain pairs of integers in the following
// format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that
// it is the parent of i1. if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:
//            4
//           /
//          2
//         / \
//        1   7
// which you can see forms a proper binary tree. Your program should, in this case, return the string true
// because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs,
// then return the string false. All of the integers within the tree will be unique,
// which means there can only be one node in the tree with the given integer value.

// function TreeConstructorTwo(strArr) {
//   let parents = {}
//   let children = {}
//   for (let i=0; i < strArr.length; i++) {
//     let pair = strArr[i].replace(/[()]/g, "").split(",");
//     let child = pair[0];
//     let parent = pair[1];
//     // parent and child cannot be the same
//     if (child === parent) {
//       return false;
//     }
//     // if the parent already exists in the object parents
//     // then add the child to that parent
//     if (parents[parent]) {
//       parents[parent].push(child);
//     } else {
//       // if the parent does not exists in the object parents
//       // create a new key value pair with parent and its child
//       parents[parent] = [child];
//     }
//     // one parent can have max of 2 child
//     // that mean we can have max of 2 pairs with same parent
//     if (parents[parent].length > 2) {
//       return false;
//     }
//     // if the child already exists in the object children return false
//     // thas not the case on the first loop
//     if (children[child]) {
//       return "false";
//     } else {
//       // on the first loop, the parent will be add as value in the children obj
//       // meaning the parent could be a child of another parent
//       // child can have only one parent, if there are more, return false
//       children[child] = parent;
//     }
//   }
//   return parents;
// }

function TreeConstructorTwo(strArr) { 
  const parents ={}
  const children = {}
  for (let i=0; i< strArr.length; i++){
    const [child, parent] = strArr[i].replace(/[()]/g, '').split(',')
    if(parent === child){
      return false
    }
    const parentExist = parents[parent]
    if(parentExist){
      parents[parent] = [...parentExist, child]
      if(parents[parent].length >2 ){
        return false
    }
    } else {
      parents[parent] = [child]
    }
    const childExist = children[child]
    if(childExist) 
    {
      return false
    }
    children[child] = parent
  }
  return true
}

// i1 = child / i2 = parent
console.log(TreeConstructorTwo(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // true valid binary tree
console.log(TreeConstructorTwo(["(1,2)", "(1,3)"])); // false invalid binary tree
console.log(TreeConstructorTwo(["(1,2)", "(2,4)", "(7,2)"])); // true valid binary tree
