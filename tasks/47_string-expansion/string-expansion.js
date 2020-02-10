export function stringExpansion(str) {
  let n = 1;
  let result = '';
  for (let char of str) {
    if (isNaN(char)) {
      result += char.repeat(n);
    } else {
      n = char;
    }
  }
  return result;
}
