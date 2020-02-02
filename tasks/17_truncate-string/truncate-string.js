export function truncateString(str, n) {
  const end = '...';

  if (str.length <= n) {
    return str;
  }
  return (n < end.length) ? str.slice(0, n) + end :
    str.slice(0, n - 3) + end;
}
