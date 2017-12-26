const flatten =
  arrayOfArrays => 
    arrayOfArrays.reduce((x, y) => [...x, ...y], []);

export default flatten;
