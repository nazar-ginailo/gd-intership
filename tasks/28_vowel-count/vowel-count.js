export function getVowelCount(str) {
  const bankOfLetters = 'aeiouAEIOU';
  return str.split('').filter((letter) =>
    bankOfLetters.includes(letter)).length;
}
