const { unique, isStrictEqual, shiftS, shift } = require("./index");

let arr = [1, 2, 3, 1, 2, 3];
let arr4 = [1, 2, 3, 1, 2, 3];
let arr1 = ["bony", "dtech-dbug", "dwaipayan", "dtech-dbug", "bony"];
let arr2 = ["bony", "dtech-dbug", "dwaipayan"];
let arr3 = [
  "bony",
  "dtech-dbug",
  "dwaipayan",
  "dtech-dbug",
  "bony",
  1,
  2,
  3,
  2,
  1,
];
let emptyArray = [];
let emptyArray2 = [];

// TODO : test unique function to return a set of distinct array items

test("Should array of numbers be unique", () => {
  expect(unique(arr)).toStrictEqual([1, 2, 3]);
});

test("should array of strings be unique", () => {
  expect(unique(arr1)).toStrictEqual(["bony", "dtech-dbug", "dwaipayan"]);
});

test("should array of any be unique", () => {
  expect(unique(arr3)).toStrictEqual([
    "bony",
    "dtech-dbug",
    "dwaipayan",
    1,
    2,
    3,
  ]);
});

// TODO :  test deep checking array function
test("should array be equal based on contents", () => {
  expect(isStrictEqual(arr, arr4)).toBe(true);
});

test("should empty array be unequal", () => {
  expect(isStrictEqual(emptyArray, emptyArray2)).toBe(false);
});

test("should empty and non-empty array be unequal", () => {
  expect(isStrictEqual(arr, emptyArray2)).toBe(false);
});

test("should array with unequal length be unequal", () => {
  expect(isStrictEqual(arr1, arr2)).toBe(false);
});

// TODO : test the shift function
test("should array be rotated towards left by 2", () => {
  expect(shift(arr, 2)).toStrictEqual([3, 1, 2, 3, 1, 2]);
});

test("should array be rotated to right by 2", () => {
  expect(shift([1, 2, 3], 2, "right")).toStrictEqual([2, 3, 1]);
});

test("should array be rotated to right by 1", () => {
  expect(shift(["dwaipayan", "dtech-dbug", "bony"], 1, "right")).toStrictEqual([
    "bony",
    "dwaipayan",
    "dtech-dbug",
  ]);
});

// TODO : integration
