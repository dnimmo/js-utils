const getLowest =
  (x, y) => Math.min(parseInt(x), parseInt(y));

const min =
  (...arr) => 
    typeof arr[0] === 'object' 
    && arr[0].length 
      ? arr[0].reduce(getLowest)
      : arr.reduce(getLowest);

export default min;