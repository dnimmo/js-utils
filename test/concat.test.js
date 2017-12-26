import concat from '../src/concat';

describe('concat', () => {
  it(
    'should be able to concatenate multiple arrays into one array',
    () =>
      expect(concat([1], [2]))
        .toEqual([1, 2]),
  );
});
