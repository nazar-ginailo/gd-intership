export function sortByBits(arr) {
  return arr.sort((a, b) => {
    const compare = countOfBits(a) - countOfBits(b);
    return (compare) ? compare : a - b;
  });
}

function countOfBits(num) {
  let bits = num.toString(2).match(/1/g);
  return bits ? bits.length : 0;
}
