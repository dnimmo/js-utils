import max from '../src/max';

describe('max', () => {
  it(
    'should find the highest value in an array of numbers',
    () => 
      expect(max([100, 1, 2]))
        .toBe(100)
  );

  it(
    'should find the highest value of all of the numbers passed in',
    () =>
      expect(max(100, 1, 2))
        .toBe(100)
  );

  it(
    'should find the highest numeric value even if it is a string',
    () =>
      expect(max('100', 1, 2))
        .toBe(100)
  )
});