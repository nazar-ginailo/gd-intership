export function arrayChunks(arr, n) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    result.push(arr.slice(i, n + i));
    i+= n;
  }
  return result;
}
