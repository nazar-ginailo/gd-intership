export function checkLetters([firstStr, secondStr]) {
  const first = firstStr.toLowerCase();
  const second = secondStr.toLowerCase();

  return second.split('').every((item) =>
    first.includes(item));
}
