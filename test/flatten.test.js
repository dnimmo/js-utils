import flatten from '../src/flatten';

describe('flatten', () => {
  it(
    'should be able to create a single array from an array of arrays',
    () =>
      expect(flatten([[1], [2]]))
        .toEqual([1, 2]),
  );
});
