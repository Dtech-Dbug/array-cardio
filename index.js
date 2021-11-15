let arr = ["bony", "dwaipayan", "bony", "dtech-dbug"];

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

console.log(unique(arr));
