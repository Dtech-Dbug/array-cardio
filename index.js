let arr = [1, 2, 3, 1, 2, 3];
let arr1 = ["bony", "dtech-dbug", "dwaipayan"];
let arr2 = ["bony", "dtech-dbug", "dwaipayan"];

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

// *shift function
// ! params : array , shiftIndices , shiftDirection [by default, set to left shift]
// ? pass a string ->'right' in the function params for right shift

const shift = (array, shiftIndices, shiftdirection) => {
  // ? if shifTdirection is 'right' make a right shift of the indices specified
  if (shiftdirection === "right") {
    for (j = 0; j < shiftIndices; j++) {
      for (i = array.length - 1; i < array.length; i++) {
        var shiftedDigits = array.splice(i, 1);
        array.unshift(shiftedDigits[0]);
      }
    }
  }

  // ? ele left shift , default
  else {
    for (j = 0; j < shiftIndices; j++) {
      for (i = 0; i < 1; i++) {
        var shiftedDigits = array.splice(i, 1);
        array.push(shiftedDigits[0]);
      }
    }
  }

  return array;
};
console.log(shift(arr, 1));
