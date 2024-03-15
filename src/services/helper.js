export function formatNumber(number) {
  const double = number.toFixed(2);
  return double.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}