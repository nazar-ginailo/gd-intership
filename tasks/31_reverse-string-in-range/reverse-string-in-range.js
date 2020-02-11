import {reverseString} from '../6_reverse-string/reverse-string';

export function reverseStringInRange(str, arrInterval) {
  const strReversed = reverseString(
      str.substring(arrInterval[0], arrInterval[1] + 1)
  );
  return (
    str.slice(0, arrInterval[0]) + strReversed + str.slice(arrInterval[1] + 1)
  );
}
