export function getIndexToInsert(arr, num) {
  const result = arr.sort((a, b) => a - b).findIndex((value) => value >= num);
  return (result === -1) ? arr.length : result;
}
