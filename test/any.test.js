import any from '../src/any';

describe('any', () => {
  it(
    'should be able to determine if any given value is true',
    () =>
      expect(any(true))
        .toBe(true),
  );

  it(
    'should be able to determine if any given value is not true',
    () =>
      expect(any(false))
        .toBe(false),
  );
});
