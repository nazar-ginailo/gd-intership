export function largestOfFour(arr) {
  return arr.map((subArr) => Math.max(...subArr));
}

// let result = [];
//
// arr.forEach((subArr) => {
//   if (subArr.length === 0) {
//     throw new Error('Sub array is empty.');
//   } else {
//     result.push(Math.max(...subArr));
//   }
// });
// return result;

