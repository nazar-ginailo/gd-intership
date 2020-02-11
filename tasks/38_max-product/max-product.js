export function maxProduct(arr) {
  let result = arr[0] * arr[1];
  arr.forEach((i) => {
    let next = arr[arr.indexOf(i)+1];
    result = next ? Math.max(result, i * next) : result;
  });
  return result;
}
