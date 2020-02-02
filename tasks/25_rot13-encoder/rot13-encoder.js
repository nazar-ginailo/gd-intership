export function rot13Encoder(str) {
  let result = '';
  for (const item of str) {
    if (item.match(/[A-M]/)) {
      result += String.fromCharCode(item.charCodeAt() + 13);
    } else if (item.match(/[N-Z]/)) {
      result += String.fromCharCode(item.charCodeAt() - 13);
    } else {
      result += item;
    }
  }
  return result;
}
