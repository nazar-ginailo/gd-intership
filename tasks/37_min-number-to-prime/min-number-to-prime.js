export function minNumberToPrime(arr) {
  let result = 0;
  const sum = arr.reduce((accum, curr) => accum + curr);
  while (!isPrime(sum + result)) {
    result++;
  }
  return result;
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
