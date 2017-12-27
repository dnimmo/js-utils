import min from '../src/min';

describe('min', () => {
  it(
    'should return the smallest numeric value in an array',
    () => 
      expect(min([100, 1, 2]))
        .toBe(1)
  );
});