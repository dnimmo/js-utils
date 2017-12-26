const flatten =
  arrayOfArrays =>
    arrayOfArrays
      .reduce((accumulator, array) => [...accumulator, ...array], []);

export default flatten;
