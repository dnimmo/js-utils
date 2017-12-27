const getHighest =
  (x, y) => Math.max(parseInt(x), parseInt(y));

const max =
  (...arr) => 
    typeof arr[0] === 'object' 
    && arr[0].length 
      ? arr[0].reduce(getHighest)
      : arr.reduce(getHighest);

export default max;