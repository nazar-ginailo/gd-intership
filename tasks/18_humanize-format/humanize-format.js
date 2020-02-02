export function humanizeFormat(num) {
  if (!num) {
    return '';
  }

  switch (num % 10) {
    case 1:
      return num + 'st';
    case 2:
      return num + 'nd';
    case 3:
      return num + 'rd';
    default:
      return num + 'th';
  }
}
