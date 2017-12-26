import all from '../src/all';

describe('all', () => {
  it(
    'should be able to determine if every given value is true',
    () =>
      expect(all(true))
        .toBe(true),
  );

  it(
    'should be able to determine if any given value is not true',
    () =>
      expect(all(false))
        .toBe(false),
  );
});
