export function truncateArray(arr, n) {
  let newArr = arr.slice(0, n);
  return arr.filter((x) => !newArr.includes(x));
}
