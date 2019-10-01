export function thousandSeparator(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
