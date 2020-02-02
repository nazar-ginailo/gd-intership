export function findLongestWord(str) {
  const arr = str.split(' ').sort((a, b) => b.length - a.length);
  return arr[0].length;
}
