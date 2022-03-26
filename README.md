# array-cardio
A module to abstract away some of the most tedious and useful array operations:
- **unique function:** Eliminates al duplicated items in a given array.
- **isStrictEqual:** Does a deep check to two provided arrays to make sure they are equal (in JavaScript when using "===" it checks that the pointer of the arrays are pointing to the same address, if so it return true, else false, even if both arrays have the same contents) please note it does not check nested arrays.
- **shift:** Moves the elements of the array, either to the right or to the left, the amount of specified indices.

# Usage
|      Function Name 🤖      | Parameters ⚗           | Return type 🎁                                                         |
| :------------------------: | ---------------------- | ---------------------------------------------------------------------- |
|    unique   | An array               | An array of all the unique values of the provided array |
| isStrictEqual | array1, array1 | Boolean True if both arrays have the same contents (does not check nested arrays), or Boolean false otherwise.     |
| shift | array, shiftIndices, shiftDirection | A new array with the items shifted as indicated by the parameters.

# Code snippets

## unique: 
```js 
console.log(unique([13, 14, 15, 15, 15]));
// [ 13, 14, 15 ]
```

## isStrictEqual:
```js
let arr1 = ["foo", "bar", "baz"]
let arr2 = ["foo", "bar", "baz"]

console.log(isStrictEqual(arr1, arr2 ))
// true
```

```js
let arr1 = [[1, 2], "foo", "bar", "baz"]
let arr2 = ["foo", "bar", "baz"]

console.log(isStrictEqual(arr1, arr2 ))
// false
```

```js
let arr1 = [[1, 2], "foo", "bar", "baz"]
let arr2 = [[1, 2, 3], "foo", "bar", "baz"]

console.log(isStrictEqual(arr1, arr2 ))
// true
```

```js
let arr1 = [[1, 2], "foo", "bar", "baz"]
let arr2 = [[1, 2], "foo", "bar", "baz"]

console.log(isStrictEqual(arr1, arr2 ))
// true
```

## shift
```js
console.log(shift([1, 2, 3, 1, 2, 3], 2, "right"));
// console.log(shift([1, 2, 3, 1, 2, 3], 2, "right"));
```