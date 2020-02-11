export function arrayPlusArray(arr1, arr2) {
  const mainArr = arr1.length > arr2.length ? arr1 : arr2;
  const secondArr = arr1.length <= arr2.length ? arr1 : arr2;
  return mainArr.map((val, i) =>
    secondArr[i] ? val + secondArr[i] : val
  );
}
