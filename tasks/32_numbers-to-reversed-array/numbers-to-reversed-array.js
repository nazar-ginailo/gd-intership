export function numberToReversedArray(num) {
  return String(num).split('').reverse().map((num) => parseInt(num));
}
