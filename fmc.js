function TreeConstructorTwo(strArr) {
  let parents = {};
  let children = {};
  for (let i = 0; i < strArr.length; i++) {
    let pair = strArr[i].replace(/[()]/g, "").split(",");
    let child = pair[0];
    let parent = pair[1];
    // parent and child cannot be the same
    if (child === parent) {
      return false;
    }
    // if the parent already exists in the object parents
    // then add the child to that parent
    if (parents[parent]) {
      parents[parent].push(child);
    } else {
      // if the parent does not exists in the object parents
      // create a new key value pair with parent and its child
      parents[parent] = [child];
    }
    // one parent can have max of 2 child
    // that mean we can have max of 2 pairs with same parent
    if (parents[parent].length > 2) {
      return false;
    }
    // if the child already exists in the object children return false
    // thas not the case on the first loop
    if (children[child]) {
      return false;
    } else {
      // on the first loop, the child will be add as value in the children obj
      // child can have only one parent, if there are more, return false
      children[child] = child;
    }
  }
  return true;
}

// i1 = child / i2 = parent
console.log(
  TreeConstructorTwo(["(1,2)", "(2,4)", "(3,8)", "(5,7)", "(7,2)", "(9,5)"])
); // true valid binary tree
console.log(TreeConstructorTwo(["(1,2)", "(1,3)"])); // false invalid binary tree
console.log(TreeConstructorTwo(["(1,2)", "(2,4)", "(7,2)"])); // true valid binary tree
