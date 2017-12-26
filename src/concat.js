const concat =
  (...args) => args.reduce((x, y) => x.concat(...y), []);

export default concat;