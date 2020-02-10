export function convertToRoman(num) {
  const ROMANIAN_NUMBERS = {M: 1000, CM: 900, D: 500, CD: 400, C: 100,
    XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
  let result = '';
  for (let key in ROMANIAN_NUMBERS) {
    if (ROMANIAN_NUMBERS.hasOwnProperty(key)) {
      while (num >= ROMANIAN_NUMBERS[key]) {
        result += key;
        num -= ROMANIAN_NUMBERS[key];
      }
    }
  }
  return result;
}
