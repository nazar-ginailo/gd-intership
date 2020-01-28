export function rowWeights(arr) {
  let result = [0, 0];

  arr.forEach((val, index) => {
    if (index % 2 === 0) {
      result[0] += val;
    } else {
      result[1] += val;
    }
  });
  return result;
}
