export function arrayLeaders(arr) {
  const result = [];
  let sum = arr.reduce((accum, curr) => accum + curr);
  arr.forEach((i) => {
    sum -= i;
    if (i > sum) {
      result.push(i);
    }
  });
  return result;
}
