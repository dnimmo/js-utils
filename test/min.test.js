import min from '../src/min';

describe('min', () => {
  it(
    'should return the smallest numeric value in an array',
    () => 
      expect(min([100, 1, 2]))
        .toBe(1)
  );

  it(
    'should return the smallest numeric value passed in',
    () => 
      expect(min(100, 1, 2))
        .toBe(1)
  );

  it(
    'should return the smallest numeric value in an array, even if it is a string',
    () => 
      expect(min([100, '1', 2]))
        .toBe(1)
  );

  it(
    'should return the smallest numeric value passed in, even if it is a string',
    () => 
      expect(min(100, '1', 2))
        .toBe(1)
  );
});