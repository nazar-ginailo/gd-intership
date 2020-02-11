export function findFriend(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'red') {
      if (isBlue(arr[i - 1]) && isBlue(arr[i + 1]) ||
          isBlue(arr[i + 1]) && isBlue(arr[i + 2]) ||
          isBlue(arr[i - 1]) && isBlue(arr[i - 2])
      ) counter++;
    }
  }
  return counter;
}

function isBlue(str) {
  return str === 'blue';
}
