const all =
  (...args) => 
    args.reduce((x, y) => x && y);

export default all;