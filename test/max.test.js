import max from '../src/max';

describe('max', () => {
  it(
    'should find the highest value in an array of numbers',
    () => 
      expect(max([100, 1, 2]))
        .toBe(100)
  );
});