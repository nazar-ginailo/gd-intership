export function runningAverage() {
  let result = [];
  return function(num) {
    result.push(num);
    return result.reduce((a, b) => a + b) / result.length;
  };
}
