// src/index.ts
function formatNumber(num, precision = 2) {
  const map = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 }
  ];
  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  } else if (num >= 1e3) {
    const formatted = Intl.NumberFormat("en-US").format(num);
    return formatted;
  }
  return num;
}
export {
  formatNumber as default
};
