export function firstNSmallest(arr, n) {
  const sortedArr = [...arr]
      .sort((a, b) => a - b)
      .slice(0, n);
  return arr
      .filter((num) => sortedArr
          .includes(num)).slice(0, n);
}
