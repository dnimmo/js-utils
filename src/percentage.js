const roundToTwoDecimalPlaces =
  x =>
    [x * 1000]
      .map(y => y / 10)
      .map(z => z / 100)
      .map(rounded => rounded.toFixed(2))
      .find(Boolean);

const percentage =
  (x, y) =>
    [(x / y) * 100]
      .map(roundToTwoDecimalPlaces)
      .find(Boolean);

export default percentage;