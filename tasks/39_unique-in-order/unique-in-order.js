export function uniqueInOrder(str) {
  return [...str].filter((val, i) => val !== str[i-1]);
}
