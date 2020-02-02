export function getAverage(arr) {
  return Math.round(arr.reduce((accum, curr) => accum + curr) / arr.length);
}
