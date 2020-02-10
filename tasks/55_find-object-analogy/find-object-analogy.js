export function whatIsInAName(arr1, arr2) {
  return arr1.filter((obj) => {
    return Object.keys(arr2).every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === arr2[key];
    });
  });
}
