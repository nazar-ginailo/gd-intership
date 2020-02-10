export function findEqualIndex(array) {
  for (let i = 1; i < array.length; i++) {
    if (array.slice(0, i).reduce((a, b) => a + b, 0) ===
      array.slice(i + 1).reduce((a, b) => a + b, 0)) {
      return i;
    }
  }
  return -1;
}
