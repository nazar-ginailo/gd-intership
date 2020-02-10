export function followTheSpy(arr) {
  const delim = ', ';

  let lastTrip = arr[0];
  let route = lastTrip[0];

  while (lastTrip) {
    route += delim + lastTrip[1];

    lastTrip = arr
        .find((trip) => lastTrip[1] === trip[0]);
  }
  return route;
}
