export function titleCase(str) {
  return str.split(' ')
      .map((i) => i[0].toUpperCase() + i.slice(1).toLowerCase()).join(' ');
}
