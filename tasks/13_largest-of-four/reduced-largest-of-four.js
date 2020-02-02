export function reducedLargestOfFour(arr) {
  return arr.map((item) => item.reduce((max, curr) => Math.max(max, curr)));
}
