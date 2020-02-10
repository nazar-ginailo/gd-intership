export function translatePigLatin(str) {
  const VOWELS = 'iueoa';
  if (VOWELS.includes(str.charAt(0))) {
    return str + 'way';
  }
  let index = 1;
  while (!VOWELS.includes(str.charAt(index))) {
    index++;
  }
  return str.slice(index) + str.slice(0, index) + 'ay';
}
