let arr = [1, 2, 3, 1, 2, 3];

function unique(array) {
  let uniqueArray = [];
  for (i in array) {
    // ? if unique array is empty, push an item inside
    if (uniqueArray.length === 0) {
      uniqueArray.push(array[i]);
    }

    // * if  array[i] does not exist in the uniqueArray, push it inside
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}

// console.log(unique(arr));

let arr1 = ["bony", "dtech-dbug", "dwaipayan"];

let arr2 = ["bony", "dtech-dbug", "dwaipayan"];

// isStrictEqual(arr1, arr2);
console.log(isStrictEqual(arr1, arr2));

function isStrictEqual(array1, array2) {
  let result;

  // ? if arr.length not same they are unequal
  if (array1.length === array2.length) {
    // check items are same
    for (i in array1) {
      if (array1[i] === array2[i]) {
        result = true;
      } else {
        result = false;
      }
    }
  } else {
    result = false;
  }

  return result;
}
