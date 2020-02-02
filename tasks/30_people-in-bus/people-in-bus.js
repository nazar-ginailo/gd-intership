export function peopleInBus(arr) {
  return arr.reduce((sum, curr) => {
    return sum + curr[0] - curr[1];
  }, 0);
}
