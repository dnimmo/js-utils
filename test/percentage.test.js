import percentage from '../src/percentage';

describe('percentage', () => {
  it(
    'should correctly calculate a percentage',
    () => 
      expect(percentage(10, 100))
        .toBe('10.00')
  );

  it(
    'should round to two decimal places',
    () => 
      expect(percentage(13, 3678))
        .toBe('0.35')
  );
});