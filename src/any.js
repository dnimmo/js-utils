const any =
  (...args) => args.reduce((x, y) => x || y);

export default any;