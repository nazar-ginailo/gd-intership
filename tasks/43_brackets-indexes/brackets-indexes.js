export function findCloseIndex(str, item) {
  if (str[item] !== '(') return -1;
  let counter = 0;
  for (let i = item; i < str.length; i++) {
    if (str[i] === '(' ) counter ++;
    if (str[i] === ')' ) counter --;
    if ( counter === 0) return i;
  }
  return counter;
}
