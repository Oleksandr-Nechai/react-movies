export function getColorByValue(value) {
  if (value >= 80) {
    return 'green';
  } else if (value >= 60) {
    return 'yellow';
  } else if (value >= 40) {
    return 'red';
  } else {
    return 'white';
  }
}
